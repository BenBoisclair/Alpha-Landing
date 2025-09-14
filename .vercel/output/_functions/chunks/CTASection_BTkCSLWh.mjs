import { a as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, k as addAttribute, m as maybeRenderHead, d as defineScriptVars, l as renderSlot } from './astro/server_CAhXBRiF.mjs';
import { t as thTranslations, e as enTranslations, b as $$Button, g as getRelativeLocaleUrl, c as createSvgComponent } from './Button_DrTZGHPb.mjs';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_DrlSI8AY.mjs';
import clsx from 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://example.com");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const currentLocale = Astro2.currentLocale || "th";
  const translations = {
    en: enTranslations,
    th: thTranslations
  };
  const t = translations[currentLocale];
  const typedStrings = t.hero.typedStrings.map((str, index) => {
    const classes = ["gradient-text", "gradient-text-2", "gradient-text-3"];
    return `<span class="${classes[index % classes.length]}">${str}</span>`;
  });
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\nimport Typed from 'typed.js';\n\nnew Typed('#typed-text', {\n  strings: typedStrings,\n  typeSpeed: 50,\n  backSpeed: 30,\n  loop: true,\n  showCursor: false,\n  contentType: 'html'\n});\n})();<\/script> ", '<div class="flex justify-center items-center flex-col gap-6 min-h-[90vh] pb-40"> <div class="flex flex-col gap-2 text-center font-bold text-[58px]"> <h1>', '</h1> <div style="height: 1.2em; display: flex; align-items: center; justify-content: center;"> <h2 id="typed-text"></h2> </div> </div> <span class="font-medium">', ' <span class="text-[#3F33CB] ">', "</span> ", " </span> <a", "> ", " </a> </div>"])), defineScriptVars({ typedStrings }), maybeRenderHead(), t.hero.title, t.hero.subtitle, t.hero.subtitleHighlight, t.hero.subtitleEnd && ` ${t.hero.subtitleEnd}`, addAttribute(getRelativeLocaleUrl(currentLocale, "/contact"), "href"), renderComponent($$result, "Button", $$Button, { "variant": "primary" }, { "default": ($$result2) => renderTemplate`${t.hero.cta}` }));
}, "/Users/benedictboisclair/Projects/Alpha/src/components/HeroSection.astro", void 0);

function cn(...inputs) {
  return clsx(inputs);
}

const $$Astro$3 = createAstro("https://example.com");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("px-[120px] pt-[60px] pb-[100px]", className), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/benedictboisclair/Projects/Alpha/src/layouts/Section.astro", void 0);

const robotIcon = createSvgComponent({"meta":{"src":"/_astro/robot.S6BYno_N.svg","width":51,"height":51,"format":"svg"},"attributes":{"width":"51","height":"51","viewBox":"0 0 51 51","fill":"none"},"children":"\n<rect width=\"51\" height=\"51\" rx=\"8.69318\" fill=\"url(#paint0_linear_869_40)\" />\n<path d=\"M31 33.5V34.5H20V33.5H31ZM21.5 17.5H25.5C25.7761 17.5 26 17.7239 26 18V21.5H31.4873L31.6367 21.5029C32.9536 21.5737 34 22.6652 34 24V32L33.9961 32.1377C33.934 33.2849 33.097 34.2233 32 34.4463V33.4121C32.5822 33.206 33 32.6528 33 32V24C33 23.1716 32.3284 22.5 31.5 22.5H19.5C18.6716 22.5 18 23.1716 18 24V32C18 32.6528 18.4178 33.206 19 33.4121V34.4492C17.9022 34.2263 17.0646 33.2847 17.0029 32.1367L17 31.9873V28.5H17.5V26.5H17V24L17.0127 23.7441C17.1408 22.4836 18.2057 21.5 19.5 21.5H25V18.5H21.5C21.2239 18.5 21 18.2761 21 18C21 17.7239 21.2239 17.5 21.5 17.5ZM22.5 26.5C22.7761 26.5 23 26.7239 23 27V29C23 29.2761 22.7761 29.5 22.5 29.5C22.2239 29.5 22 29.2761 22 29V27C22 26.7239 22.2239 26.5 22.5 26.5ZM28.5 26.5C28.7761 26.5 29 26.7239 29 27V29C29 29.2761 28.7761 29.5 28.5 29.5C28.2239 29.5 28 29.2761 28 29V27C28 26.7239 28.2239 26.5 28.5 26.5Z\" fill=\"white\" stroke=\"white\" />\n<defs>\n<linearGradient id=\"paint0_linear_869_40\" x1=\"-25.5\" y1=\"-25.5\" x2=\"57.6648\" y2=\"57.6648\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5E55E1\" />\n<stop offset=\"1\" stop-color=\"#9558ED\" />\n</linearGradient>\n</defs>\n"});

const automationIcon = createSvgComponent({"meta":{"src":"/_astro/automation.dRN2-hRg.svg","width":52,"height":51,"format":"svg"},"attributes":{"width":"52","height":"51","viewBox":"0 0 52 51","fill":"none"},"children":"\n<rect x=\"0.5\" width=\"51\" height=\"51\" rx=\"8.69318\" fill=\"url(#paint0_linear_869_3)\" />\n<path d=\"M20 29V25.5H22V29C22 29.5523 22.4477 30 23 30H27V32H23C21.3431 32 20 30.6569 20 29Z\" fill=\"white\" />\n<path d=\"M21 24V26H19.5V24H21ZM23.5 24V26H21V24H23.5ZM24.5 23V19C24.5 18.4477 24.0523 18 23.5 18H19.5C18.9477 18 18.5 18.4477 18.5 19V23C18.5 23.5523 18.9477 24 19.5 24V26L19.3457 25.9961C17.8117 25.9184 16.5816 24.6883 16.5039 23.1543L16.5 23V19C16.5 17.3431 17.8431 16 19.5 16H23.5L23.6543 16.0039C25.2394 16.0842 26.5 17.3949 26.5 19V23L26.4961 23.1543C26.4184 24.6883 25.1883 25.9184 23.6543 25.9961L23.5 26V24C24.0523 24 24.5 23.5523 24.5 23Z\" fill=\"white\" />\n<path d=\"M32.5 34V36H28.5V34H32.5ZM33.5 33V29C33.5 28.4477 33.0523 28 32.5 28H28.5C27.9477 28 27.5 28.4477 27.5 29V33C27.5 33.5523 27.9477 34 28.5 34V36C26.8949 36 25.5842 34.7394 25.5039 33.1543L25.5 33V29C25.5 27.3431 26.8431 26 28.5 26H32.5L32.6543 26.0039C34.2394 26.0842 35.5 27.3949 35.5 29V33L35.4961 33.1543C35.4184 34.6883 34.1883 35.9184 32.6543 35.9961L32.5 36V34C33.0523 34 33.5 33.5523 33.5 33Z\" fill=\"white\" />\n<defs>\n<linearGradient id=\"paint0_linear_869_3\" x1=\"-25\" y1=\"-25.5\" x2=\"58.1648\" y2=\"57.6648\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5E55E1\" />\n<stop offset=\"1\" stop-color=\"#9558ED\" />\n</linearGradient>\n</defs>\n"});

const chatIcon = createSvgComponent({"meta":{"src":"/_astro/chat.BVU40GNw.svg","width":51,"height":51,"format":"svg"},"attributes":{"width":"51","height":"51","viewBox":"0 0 51 51","fill":"none"},"children":"\n<rect width=\"51\" height=\"51\" rx=\"8.69318\" fill=\"url(#paint0_linear_869_172)\" />\n<path d=\"M19 16H33C34.1046 16 35 16.8954 35 18V28C35 29.1046 34.1046 30 33 30H21.1133L20.8271 30.2598L17 33.7393V18C17 16.8954 17.8954 16 19 16Z\" stroke=\"white\" stroke-width=\"2\" />\n<defs>\n<linearGradient id=\"paint0_linear_869_172\" x1=\"-25.5\" y1=\"-25.5\" x2=\"57.6648\" y2=\"57.6648\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5E55E1\" />\n<stop offset=\"1\" stop-color=\"#9558ED\" />\n</linearGradient>\n</defs>\n"});

const dataIcon = createSvgComponent({"meta":{"src":"/_astro/data.Dft3fUpn.svg","width":51,"height":51,"format":"svg"},"attributes":{"width":"51","height":"51","viewBox":"0 0 51 51","fill":"none"},"children":"\n<rect width=\"51\" height=\"51\" rx=\"8.69318\" fill=\"url(#paint0_linear_869_158)\" />\n<path d=\"M17 19.5V18.0857C17 17.7267 17.2028 17.3986 17.5239 17.2381V17.2381C22.8597 14.5701 29.1403 14.5701 34.4761 17.2381V17.2381C34.7972 17.3986 35 17.7267 35 18.0857V19.5M17 19.5L20.3795 20.4387C24.0569 21.4602 27.9431 21.4602 31.6205 20.4387L35 19.5M17 19.5V26.25M35 19.5V26.25M17 26.25V32.5826C17 32.8434 17.1303 33.0869 17.3473 33.2315V33.2315C22.587 36.7246 29.413 36.7246 34.6527 33.2315V33.2315C34.8697 33.0869 35 32.8434 35 32.5826V26.25M17 26.25L19.5712 27.0356C23.7614 28.316 28.2386 28.316 32.4288 27.0356L35 26.25\" stroke=\"white\" stroke-width=\"2\" />\n<defs>\n<linearGradient id=\"paint0_linear_869_158\" x1=\"-25.5\" y1=\"-25.5\" x2=\"57.6648\" y2=\"57.6648\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5E55E1\" />\n<stop offset=\"1\" stop-color=\"#9558ED\" />\n</linearGradient>\n</defs>\n"});

const secureIcon = createSvgComponent({"meta":{"src":"/_astro/secure.DpU5X9cm.svg","width":51,"height":51,"format":"svg"},"attributes":{"width":"51","height":"51","viewBox":"0 0 51 51","fill":"none"},"children":"\n<rect width=\"51\" height=\"51\" rx=\"8.69318\" fill=\"url(#paint0_linear_869_50)\" />\n<path d=\"M18 25.8236V19.895C18 19.3855 18.3831 18.9574 18.8896 18.9012L22.1514 18.5387C22.377 18.5137 22.5875 18.4125 22.748 18.252L25.2929 15.7071C25.6834 15.3166 26.3166 15.3166 26.7071 15.7071L29.2476 18.2476C29.4108 18.4108 29.6255 18.5125 29.8552 18.5355L33.5995 18.91C34.1107 18.9611 34.5 19.3912 34.5 19.905V25.6965C34.5 27.7882 33.5646 29.7703 31.9499 31.1L27.966 34.381C26.8321 35.3148 25.1888 35.2902 24.0833 34.3229L20.3905 31.0917C18.8714 29.7624 18 27.8422 18 25.8236Z\" stroke=\"white\" stroke-width=\"2\" />\n<defs>\n<linearGradient id=\"paint0_linear_869_50\" x1=\"-25.5\" y1=\"-25.5\" x2=\"57.6648\" y2=\"57.6648\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5E55E1\" />\n<stop offset=\"1\" stop-color=\"#9558ED\" />\n</linearGradient>\n</defs>\n"});

const analyticsIcon = createSvgComponent({"meta":{"src":"/_astro/analytics.D-HWRzV-.svg","width":52,"height":51,"format":"svg"},"attributes":{"width":"52","height":"51","viewBox":"0 0 52 51","fill":"none"},"children":"\n<rect x=\"0.5\" width=\"51\" height=\"51\" rx=\"8.69318\" fill=\"url(#paint0_linear_869_45)\" />\n<path d=\"M21.5 28V31M26 19L26 31M31 23V31M16.5 16V34C16.5 34.5523 16.9477 35 17.5 35H35.5\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" />\n<defs>\n<linearGradient id=\"paint0_linear_869_45\" x1=\"-25\" y1=\"-25.5\" x2=\"58.1648\" y2=\"57.6648\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5E55E1\" />\n<stop offset=\"1\" stop-color=\"#9558ED\" />\n</linearGradient>\n</defs>\n"});

const $$Astro$2 = createAstro("https://example.com");
const $$OfferingSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$OfferingSection;
  const currentLocale = Astro2.currentLocale || "th";
  const translations = {
    en: enTranslations,
    th: thTranslations
  };
  const t = translations[currentLocale];
  const services = [
    { icon: robotIcon, key: "chatbot" },
    { icon: automationIcon, key: "automation" },
    { icon: dataIcon, key: "dataProcessing" },
    { icon: chatIcon, key: "communication" },
    { icon: analyticsIcon, key: "analytics" },
    { icon: secureIcon, key: "security" }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center items-center w-full flex-col text-[42px] font-bold"> <h2>${t.offering.title} <span class="gradient-text">${t.offering.titleHighlight}</span></h2> <h2>${t.offering.subtitle}</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 mt-10 justify-items-center place-items-center max-w-6xl mx-auto"> ${services.map((service) => renderTemplate`<div class="rounded-2xl border-1 border-[#747474] flex-col p-10 gap-3 flex items-start w-[371px] h-[297px]"> ${renderComponent($$result2, "Image", $$Image, { "src": service.icon, "alt": `${service.key} Icon`, "class": "w-[50px] h-[50px]", "width": "50", "height": "50" })} <h3 class="font-bold text-[20px]">${t.offering.services[service.key].title}</h3> <p>${t.offering.services[service.key].description}</p> </div>`)} </div> ` })}`;
}, "/Users/benedictboisclair/Projects/Alpha/src/components/OfferingSection.astro", void 0);

const timeIcon = createSvgComponent({"meta":{"src":"/_astro/time.DZqFADPK.svg","width":37,"height":37,"format":"svg"},"attributes":{"width":"37","height":"37","viewBox":"0 0 37 37","fill":"none"},"children":"\n<rect x=\"0.40625\" y=\"0.814453\" width=\"35.8883\" height=\"35.8883\" rx=\"6.11732\" fill=\"url(#paint0_linear_869_34)\" />\n<circle cx=\"19\" cy=\"19\" r=\"6.25\" stroke=\"white\" stroke-width=\"1.5\" />\n<path d=\"M19 15.5V19L21.5 21.5\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\n<defs>\n<linearGradient id=\"paint0_linear_869_34\" x1=\"-17.5379\" y1=\"-17.1297\" x2=\"40.9845\" y2=\"41.3927\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5E55E1\" />\n<stop offset=\"1\" stop-color=\"#9558ED\" />\n</linearGradient>\n</defs>\n"});

const cashIcon = createSvgComponent({"meta":{"src":"/_astro/cash.Ci5UuNmm.svg","width":37,"height":36,"format":"svg"},"attributes":{"width":"37","height":"36","viewBox":"0 0 37 36","fill":"none"},"children":"\n<rect x=\"0.148438\" width=\"35.8883\" height=\"35.8883\" rx=\"6.11732\" fill=\"url(#paint0_linear_869_70)\" />\n<path d=\"M18.2852 25.6855L18.2754 25.7861C18.2289 26.0141 18.0269 26.1855 17.7852 26.1855C17.5434 26.1855 17.3414 26.0141 17.2949 25.7861L17.2852 25.6855L17.2852 10.6855C17.2852 10.4094 17.509 10.1855 17.7852 10.1855C18.0613 10.1855 18.2852 10.4094 18.2852 10.6855L18.2852 25.6855Z\" fill=\"white\" />\n<path d=\"M18.2686 18.7002H15.3857L15.4033 17.3379H17.9521C18.4385 17.3379 18.8633 17.2559 19.2266 17.0918C19.5898 16.9277 19.8711 16.6934 20.0703 16.3887C20.2754 16.0781 20.3779 15.709 20.3779 15.2812C20.3779 14.8125 20.2871 14.4316 20.1055 14.1387C19.9297 13.8398 19.6572 13.623 19.2881 13.4883C18.9248 13.3477 18.4619 13.2773 17.8994 13.2773H15.4033V24.6855H14.707C14.1547 24.6855 13.707 24.2378 13.707 23.6855V12.8887C13.707 12.3364 14.1547 11.8887 14.707 11.8887H17.8994C18.5557 11.8887 19.1416 11.9561 19.6572 12.0908C20.1729 12.2197 20.6094 12.4248 20.9668 12.7061C21.3301 12.9814 21.6055 13.333 21.793 13.7607C21.9805 14.1885 22.0742 14.7012 22.0742 15.2988C22.0742 15.8262 21.9395 16.3037 21.6699 16.7314C21.4004 17.1533 21.0254 17.499 20.5449 17.7686C20.0703 18.0381 19.5137 18.2109 18.875 18.2871L18.2686 18.7002ZM18.1895 24.6855H15.4033V23.3057H18.1895C18.7285 23.3057 19.1855 23.2119 19.5605 23.0244C19.9414 22.8369 20.2314 22.5732 20.4307 22.2334C20.6299 21.8877 20.7295 21.4805 20.7295 21.0117C20.7295 20.5371 20.6445 20.127 20.4746 19.7812C20.3047 19.4355 20.0381 19.1689 19.6748 18.9814C19.3115 18.7939 18.8428 18.7002 18.2686 18.7002H15.3857L15.4033 17.3379H19.1738L19.5342 17.8301C20.1494 17.8828 20.6709 18.0586 21.0986 18.3574C21.5264 18.6504 21.8516 19.0254 22.0742 19.4824C22.3027 19.9395 22.417 20.4434 22.417 20.9941C22.417 21.791 22.2412 22.4648 21.8896 23.0156C21.5439 23.5605 21.0547 23.9766 20.4219 24.2637C19.7891 24.5449 19.0449 24.6855 18.1895 24.6855Z\" fill=\"white\" />\n<defs>\n<linearGradient id=\"paint0_linear_869_70\" x1=\"-17.7957\" y1=\"-17.9441\" x2=\"40.7267\" y2=\"40.5782\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5E55E1\" />\n<stop offset=\"1\" stop-color=\"#9558ED\" />\n</linearGradient>\n</defs>\n"});

const peopleIcon = createSvgComponent({"meta":{"src":"/_astro/people.CNsXirfX.svg","width":37,"height":36,"format":"svg"},"attributes":{"width":"37","height":"36","viewBox":"0 0 37 36","fill":"none"},"children":"\n<rect x=\"0.148438\" width=\"35.8883\" height=\"35.8883\" rx=\"6.11732\" fill=\"url(#paint0_linear_869_58)\" />\n<circle cx=\"15.4648\" cy=\"13.5\" r=\"3.75\" stroke=\"white\" stroke-width=\"1.5\" />\n<path d=\"M22.9648 17C24.8978 17 26.4648 15.433 26.4648 13.5C26.4648 11.567 24.8978 10 22.9648 10\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\n<path d=\"M8.96484 25V23C8.96484 21.3432 10.308 20 11.9648 20L18.9648 20C20.6217 20 21.9648 21.3431 21.9648 23V25\" stroke=\"white\" stroke-width=\"1.67273\" stroke-linecap=\"round\" />\n<path d=\"M28.1242 25V23C28.1242 21.3431 26.781 20 25.1242 20L24.9648 20\" stroke=\"white\" stroke-width=\"1.67273\" stroke-linecap=\"round\" />\n<defs>\n<linearGradient id=\"paint0_linear_869_58\" x1=\"-17.7957\" y1=\"-17.9441\" x2=\"40.7267\" y2=\"40.5782\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5E55E1\" />\n<stop offset=\"1\" stop-color=\"#9558ED\" />\n</linearGradient>\n</defs>\n"});

const scaleIcon = createSvgComponent({"meta":{"src":"/_astro/scale.CGU7Pb6I.svg","width":37,"height":36,"format":"svg"},"attributes":{"width":"37","height":"36","viewBox":"0 0 37 36","fill":"none"},"children":"\n<rect x=\"0.148438\" width=\"35.8883\" height=\"35.8883\" rx=\"6.11732\" fill=\"url(#paint0_linear_869_187)\" />\n<path d=\"M8.14844 22.8182L14.5433 16.4234C14.8273 16.1393 15.2878 16.1393 15.5718 16.4234L19.6342 20.4857C19.9182 20.7698 20.3787 20.7698 20.6627 20.4857L28.1484 13M28.1484 13H21.2393M28.1484 13V19.5455\" stroke=\"white\" stroke-width=\"1.67273\" stroke-linecap=\"round\" />\n<defs>\n<linearGradient id=\"paint0_linear_869_187\" x1=\"-17.7957\" y1=\"-17.9441\" x2=\"40.7267\" y2=\"40.5782\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#5E55E1\" />\n<stop offset=\"1\" stop-color=\"#9558ED\" />\n</linearGradient>\n</defs>\n"});

const $$Astro$1 = createAstro("https://example.com");
const $$WhyUsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhyUsSection;
  const currentLocale = Astro2.currentLocale || "th";
  const translations = {
    en: enTranslations,
    th: thTranslations
  };
  const t = translations[currentLocale];
  const benefits = [
    { icon: timeIcon, key: "time" },
    { icon: cashIcon, key: "cost" },
    { icon: scaleIcon, key: "scale" },
    { icon: peopleIcon, key: "experience" }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center items-center w-full flex-col gap-4"> <h2 class="text-[42px] font-bold">${t.whyUs.title}</h2> <div class="flex flex-col font-medium text-center"> <p>${t.whyUs.subtitle}</p> <p>${t.whyUs.subtitleLine2}</p> </div> </div> <div class="flex gap-6 mt-10"> ${benefits.map((benefit) => renderTemplate`<div class="gradient-border rounded-2xl flex flex-col justify-center items-center p-5 text-center flex-1 h-48"> ${renderComponent($$result2, "Image", $$Image, { "src": benefit.icon, "alt": `${benefit.key} Icon`, "class": "w-[36px] h-[36px]", "width": "36", "height": "36" })} <h3 class="font-bold text-[20px] mt-4">${t.whyUs.benefits[benefit.key].title}</h3> <p class="mt-2">${t.whyUs.benefits[benefit.key].description}</p> </div>`)} </div> ` })}`;
}, "/Users/benedictboisclair/Projects/Alpha/src/components/WhyUsSection.astro", void 0);

const LogoSingle = createSvgComponent({"meta":{"src":"/_astro/logo-single.CKdmQbdc.svg","width":208,"height":187,"format":"svg"},"attributes":{"width":"208","height":"187","viewBox":"0 0 208 187","fill":"none"},"children":"\n<path d=\"M0 186.193L103.951 0L207.902 186.193H183.857H135.113L173.101 165.66L103.951 41.4375L35.2469 165.66L71.6686 186.193H24.0452H0Z\" fill=\"white\" />\n"});

const $$Astro = createAstro("https://example.com");
const $$CTASection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTASection;
  const currentLocale = Astro2.currentLocale || "th";
  const translations = {
    en: enTranslations,
    th: thTranslations
  };
  const t = translations[currentLocale];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "gradient-bg-alt relative overflow-hidden", "data-astro-cid-frbqrhml": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center w-full flex-col gap-4 items-center relative z-10" data-astro-cid-frbqrhml> <h2 class="text-[42px] font-bold text-white" data-astro-cid-frbqrhml> ${t.cta.title} ${t.cta.titleHighlight && renderTemplate`<span data-astro-cid-frbqrhml>${t.cta.titleHighlight}</span>`} </h2> <p class="text-white" data-astro-cid-frbqrhml>${t.cta.description}</p> <a${addAttribute(getRelativeLocaleUrl(currentLocale, "/contact"), "href")} class="mt-6 inline-block" data-astro-cid-frbqrhml> ${renderComponent($$result2, "Button", $$Button, { "variant": "secondary", "data-astro-cid-frbqrhml": true }, { "default": ($$result3) => renderTemplate`${t.cta.button}` })} </a> ${t.cta.checkmarks && renderTemplate`<p class="text-white mt-6" data-astro-cid-frbqrhml>${t.cta.checkmarks}</p>`} </div>  <div class="absolute -bottom-20 -left-30 w-96 h-96" data-astro-cid-frbqrhml> ${renderComponent($$result2, "Image", $$Image, { "src": LogoSingle, "alt": "", "class": "w-full h-full opacity-60 logo-glow", "width": "384", "height": "384", "data-astro-cid-frbqrhml": true })} <div class="absolute inset-0 light-overlay-1" data-astro-cid-frbqrhml></div> </div> <div class="absolute -top-20 -right-30 w-96 h-96 rotate-180" data-astro-cid-frbqrhml> ${renderComponent($$result2, "Image", $$Image, { "src": LogoSingle, "alt": "", "class": "w-full h-full opacity-60 logo-glow", "width": "384", "height": "384", "data-astro-cid-frbqrhml": true })} <div class="absolute inset-0 light-overlay-2" data-astro-cid-frbqrhml></div> </div> ` })} `;
}, "/Users/benedictboisclair/Projects/Alpha/src/components/CTASection.astro", void 0);

export { $$HeroSection as $, $$OfferingSection as a, $$WhyUsSection as b, $$CTASection as c };
