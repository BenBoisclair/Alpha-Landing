import { c as createComponent, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_CAhXBRiF.mjs';
import { $ as $$Layout, a as $$Footer } from '../chunks/Button_DrTZGHPb.mjs';
import { $ as $$HeroSection, a as $$OfferingSection, b as $$WhyUsSection, c as $$CTASection } from '../chunks/CTASection_BTkCSLWh.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "OfferingSection", $$OfferingSection, {})} ${renderComponent($$result2, "WhyUsSection", $$WhyUsSection, {})} ${renderComponent($$result2, "CTASection", $$CTASection, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/benedictboisclair/Projects/Alpha/src/pages/en/index.astro", void 0);

const $$file = "/Users/benedictboisclair/Projects/Alpha/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
