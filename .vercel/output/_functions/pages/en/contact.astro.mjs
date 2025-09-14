import { a as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CAhXBRiF.mjs';
import { $ as $$Layout, e as enTranslations, l as lineIcon, m as mailIcon, a as $$Footer } from '../../chunks/Button_DrTZGHPb.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_Ca3blG1K.mjs';
import '../../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_DrlSI8AY.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const currentLocale = Astro2.currentLocale || "en";
  const translations = {
    en: enTranslations,
    th: enTranslations
    // Fallback, but this page is English-only
  };
  const t = translations[currentLocale];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen"> <!-- Hero Section --> <div class="flex justify-center items-center flex-col gap-4 pt-16 pb-16"> <h1 class="text-black text-center font-bold text-[58px]">${t.contact.title}</h1> <span class="font-medium text-lg">${t.contact.subtitle}</span> </div> <!-- Contact Content --> <div class="max-w-6xl mx-auto px-8 pb-20"> <div class="grid md:grid-cols-2 "> <!-- Contact Form --> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "formText": t.contact.form })} <!-- Contact Information --> <div class="p-5 gradient-bg-alt rounded-2xl h-fit"> <div> <h2 class="text-2xl font-bold mb-6 text-white">${t.contact.info.title}</h2> <div class="space-y-6"> <div class="flex items-center gap-4"> ${renderComponent($$result2, "Image", $$Image, { "src": lineIcon, "alt": "Line Icon", "width": 30, "height": 30, "class": "flex-shrink-0" })} <div> <p class="font-medium text-white">${t.contact.info.line}</p> <p class="text-lg font-extralight text-white">@alphaconsulting</p> </div> </div> <div class="flex items-center gap-4"> ${renderComponent($$result2, "Image", $$Image, { "src": mailIcon, "alt": "Mail Icon", "width": 30, "height": 30, "class": "flex-shrink-0" })} <div> <p class="font-medium text-white">${t.contact.info.email}</p> <p class=" text-lg font-extralight text-white">hello@alphabearconsulting.com</p> </div> </div> </div> </div> </div> </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/benedictboisclair/Projects/Alpha/src/pages/en/contact.astro", void 0);

const $$file = "/Users/benedictboisclair/Projects/Alpha/src/pages/en/contact.astro";
const $$url = "/en/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
