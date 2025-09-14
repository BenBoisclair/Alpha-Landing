import { a as createAstro, c as createComponent, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_CAhXBRiF.mjs';
import { $ as $$Layout, a as $$Footer } from '../chunks/Button_DrTZGHPb.mjs';
import { $ as $$HeroSection, a as $$OfferingSection, b as $$WhyUsSection, c as $$CTASection } from '../chunks/CTASection_BTkCSLWh.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const acceptLanguage = Astro2.request.headers.get("accept-language") || "";
  const prefersEnglish = acceptLanguage.toLowerCase().includes("en");
  if (prefersEnglish) {
    return Astro2.redirect("/en/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "OfferingSection", $$OfferingSection, {})} ${renderComponent($$result2, "WhyUsSection", $$WhyUsSection, {})} ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/benedictboisclair/Projects/Alpha/src/pages/index.astro", void 0);

const $$file = "/Users/benedictboisclair/Projects/Alpha/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
