import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const IS_TEST_MODE =
  !import.meta.env.PROD || !import.meta.env.RESEND_VERIFIED_DOMAIN;
const TEST_EMAIL = "ben.b.boisclair@gmail.com";
const PROD_EMAIL = "hello@alphabearconsulting.com";


export const server = {
  sendContact: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email"),
      message: z.string().min(1, "Message is required"),
    }),
    handler: async (input) => {

      try {
        // Determine recipient based on mode
        const recipient = IS_TEST_MODE ? TEST_EMAIL : PROD_EMAIL;

        const emailData = {
          from: "Alpha Bear Consulting <hello@alphabearconsulting.com>",
          to: [recipient],
          subject: `${IS_TEST_MODE ? "[TEST] " : ""}Contact from ${input.name}`,
          html: `
            <h2>New Contact Form Submission ${
              IS_TEST_MODE ? "(TEST MODE)" : ""
            }</h2>
            <p><strong>Name:</strong> ${input.name}</p>
            <p><strong>Email:</strong> ${input.email}</p>
            <p><strong>Message:</strong></p>
            <p>${input.message.replace(/\n/g, "<br>")}</p>
            ${
              IS_TEST_MODE
                ? "<hr><p><em>This is a test email. In production, this would go to " +
                  PROD_EMAIL +
                  "</em></p>"
                : ""
            }
          `,
          replyTo: input.email,
        };


        const { data, error } = await resend.emails.send(emailData);

        if (error) {

          // Better error messages
          let errorMessage = "Failed to send email.";

          if (error.message?.includes("can only send testing emails")) {
            errorMessage =
              "Email service is in test mode. Message saved but not sent to production.";
          } else if (error.message?.includes("domain")) {
            errorMessage = "Email configuration issue. Please contact support.";
          } else if (error.message) {
            errorMessage = error.message;
          }

          throw new ActionError({
            code: "BAD_REQUEST",
            message: errorMessage,
          });
        }


        return {
          success: true,
          id: data?.id,
          testMode: IS_TEST_MODE,
          sentTo: recipient,
        };
      } catch (error) {
        if (error instanceof ActionError) {
          throw error;
        }

        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to process your request.",
        });
      }
    },
  }),
};
