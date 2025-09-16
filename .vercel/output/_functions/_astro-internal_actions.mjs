import { o as objectType, s as stringType } from './chunks/astro/server_CYQHRzIz.mjs';
import { g as getActionQueryString, a as astroCalledServerError, A as ActionError, d as deserializeActionResult, b as ACTION_QUERY_PARAMS, c as appendForwardSlash } from './chunks/astro-designed-error-pages_Dt1QjSc8.mjs';
import 'clsx';
import { Resend } from 'resend';
import { d as defineAction } from './chunks/server_B05ua4yj.mjs';

const apiContextRoutesSymbol = Symbol.for("context.routes");
const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (target.hasOwnProperty(objKey) || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // redefine prototype methods as the object's own property, not the prototype's
        bind: action.bind,
        valueOf: () => action.valueOf,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
function getActionPath(action) {
  let path = `${"/".replace(/\/$/, "")}/_actions/${new URLSearchParams(action.toString()).get(ACTION_QUERY_PARAMS.actionName)}`;
  {
    path = appendForwardSlash(path);
  }
  return path;
}
async function handleAction(param, path, context) {
  if (context) {
    const pipeline = Reflect.get(context, apiContextRoutesSymbol);
    if (!pipeline) {
      throw astroCalledServerError();
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
  const headers = new Headers();
  headers.set("Accept", "application/json");
  let body = param;
  if (!(body instanceof FormData)) {
    try {
      body = JSON.stringify(param);
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: `Failed to serialize request body to JSON. Full error: ${e.message}`
      });
    }
    if (body) {
      headers.set("Content-Type", "application/json");
    } else {
      headers.set("Content-Length", "0");
    }
  }
  const rawResult = await fetch(
    getActionPath({
      toString() {
        return getActionQueryString(path);
      }
    }),
    {
      method: "POST",
      body,
      headers
    }
  );
  if (rawResult.status === 204) {
    return deserializeActionResult({ type: "empty", status: 204 });
  }
  return deserializeActionResult({
    type: rawResult.ok ? "data" : "error",
    body: await rawResult.text()
  });
}
toActionProxy();

const resend = new Resend("re_PatsKRA3_5b8Qg2tcA5gDNwPUt9AMCBpn");
const IS_TEST_MODE = !undefined                                      ;
const TEST_EMAIL = "ben.b.boisclair@gmail.com";
const PROD_EMAIL = "hello@alphabearconsulting.com";
const server = {
  sendContact: defineAction({
    accept: "form",
    input: objectType({
      name: stringType().min(1, "Name is required"),
      email: stringType().email("Invalid email"),
      message: stringType().min(1, "Message is required")
    }),
    handler: async (input) => {
      try {
        const recipient = IS_TEST_MODE ? TEST_EMAIL : PROD_EMAIL;
        const emailData = {
          from: "Alpha Bear Consulting <hello@alphabearconsulting.com>",
          to: [recipient],
          subject: `${IS_TEST_MODE ? "[TEST] " : ""}Contact from ${input.name}`,
          html: `
            <h2>New Contact Form Submission ${IS_TEST_MODE ? "(TEST MODE)" : ""}</h2>
            <p><strong>Name:</strong> ${input.name}</p>
            <p><strong>Email:</strong> ${input.email}</p>
            <p><strong>Message:</strong></p>
            <p>${input.message.replace(/\n/g, "<br>")}</p>
            ${IS_TEST_MODE ? "<hr><p><em>This is a test email. In production, this would go to " + PROD_EMAIL + "</em></p>" : ""}
          `,
          replyTo: input.email
        };
        const { data, error } = await resend.emails.send(emailData);
        if (error) {
          let errorMessage = "Failed to send email.";
          if (error.message?.includes("can only send testing emails")) {
            errorMessage = "Email service is in test mode. Message saved but not sent to production.";
          } else if (error.message?.includes("domain")) {
            errorMessage = "Email configuration issue. Please contact support.";
          } else if (error.message) {
            errorMessage = error.message;
          }
          throw new ActionError({
            code: "BAD_REQUEST",
            message: errorMessage
          });
        }
        return {
          success: true,
          id: data?.id,
          testMode: IS_TEST_MODE,
          sentTo: recipient
        };
      } catch (error) {
        if (error instanceof ActionError) {
          throw error;
        }
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to process your request."
        });
      }
    }
  })
};

export { server };
