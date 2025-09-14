import { a as createAstro, c as createComponent, m as maybeRenderHead, k as addAttribute, b as renderComponent, r as renderTemplate, l as renderSlot, p as renderHead, q as spreadAttributes, u as unescapeHTML, t as renderScript } from './astro/server_CAhXBRiF.mjs';
import './index_MaT6fT73.mjs';
import { $ as $$Image } from './_astro_assets_DrlSI8AY.mjs';
/* empty css                           */
import 'clsx';
import { t as toRoutingStrategy, g as getLocaleRelativeUrl } from './utils_BkQj8XUO.mjs';
/* empty css                         */

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "th", locales: ["en", "th"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const nav$1 = {"blog":"Blog","contact":"Contact"};
const hero$1 = {"title":"Elevate Your Business with AI","typedStrings":["Reduce Work","Save Time","Increase Profit"],"subtitle":"Focus on What Matters,","subtitleHighlight":"Automate","subtitleEnd":"the Rest","cta":"Get in Touch"};
const offering$1 = {"title":"Build","titleHighlight":"AI Agents","subtitle":"Tailored for Your Business","services":{"chatbot":{"title":"AI Chatbots & Customer Support","description":"Respond to customers instantly, 24/7. Reduce costs, increase satisfaction"},"automation":{"title":"Workflow Automation","description":"Use automated systems that connect with your existing tools to make work smoother and more efficient"},"dataProcessing":{"title":"Data Processing","description":"Leverage automated systems connected to your tools for seamless and efficient data handling"},"communication":{"title":"Automated Communication","description":"Emails, follow-ups, and messages to teams and customers–sent automatically"},"analytics":{"title":"Analytics & Reporting","description":"View business results in real-time through dashboards and automated reports"},"security":{"title":"Security & Compliance","description":"Implement automated security and compliance monitoring systems to protect your business and data"}}};
const whyUs$1 = {"title":"Why Choose Us","subtitle":"We deliver measurable results to transform how your business operates","subtitleLine2":"and create sustainable competitive advantages","benefits":{"time":{"title":"Save Time","description":"Let your team focus on strategy and growth"},"cost":{"title":"Reduce Costs","description":"Cut operational expenses with automation"},"scale":{"title":"Scale Faster","description":"Handle increased workload without adding staff"},"experience":{"title":"Elevate Experience","description":"Respond to customers instantly and consistently"}}};
const cta$1 = {"title":"Ready to start with","titleHighlight":"AI?","description":"Let us help you automate your business and increase efficiency","button":"Contact Us Today","checkmarks":"✓ Free initial consultation  ✓ Automation systems designed specifically for your business"};
const footer$1 = {"companyName":"Alpha AI Consulting","description":"Transform your business with cutting-edge AI Automation solutions. We help businesses grow faster, more efficiently, and reduce operational costs simultaneously.","services":"Our Services","company":"Company","servicesItems":{"chatbots":"AI Chatbots","automation":"Process Automation","dataProcessing":"Data Processing","analytics":"Analytics"},"companyItems":{"contact":"Contact Us","blog":"Blog"},"copyright":"© 2024 Alpha Bear Consulting. All rights reserved."};
const contact$1 = {"title":"Contact Us","subtitle":"Get in touch with our team","form":{"name":"Name","email":"Email","message":"Message","send":"Send Message","sending":"Sending...","success":"Message sent successfully! We'll get back to you soon.","error":"Failed to send message. Please try again.","required":"This field is required","invalidEmail":"Please enter a valid email address"},"info":{"title":"Contact Information","line":"Line ID","email":"Email"}};
const enTranslations = {
  nav: nav$1,
  hero: hero$1,
  offering: offering$1,
  whyUs: whyUs$1,
  cta: cta$1,
  footer: footer$1,
  contact: contact$1,
};

const nav = {"blog":"บทความ","contact":"ติดต่อ"};
const hero = {"title":"ยกระดับธุรกิจด้วย AI","typedStrings":["ลดงาน","ลดเวลา","เพิ่มกำไร"],"subtitle":"ให้คุณ Focus แต่สิ่งที่สำคัญ ที่เหลือ","subtitleHighlight":"Automate","subtitleEnd":"","cta":"สอบถามเพิ่มเติม"};
const offering = {"title":"สร้าง","titleHighlight":"AI Agent","subtitle":"สำหรับธุรกิจของคุณโดยเฉพาะ","services":{"chatbot":{"title":"AI แชทบอทและระบบสนับสนุนลูกค้า","description":"ตอบลูกค้าได้ทันที ตลอด 24 ชั่วโมง ลดต้นทุน เพิ่มความพึงพอใจ"},"automation":{"title":"ระบบทำงานอัตโนมัติ","description":"ใช้ระบบอัตโนมัติที่เชื่อมต่อกับเครื่องมือที่คุณใช้อยู่ช่วยให้การทำงานราบรื่นและมีประสิทธิภาพมากขึ้น"},"dataProcessing":{"title":"การประมวลผลข้อมูล","description":"ใช้ระบบอัตโนมัติที่เชื่อมต่อกับเครื่องมือที่คุณใช้อยู่ช่วยให้การทำงานราบรื่นและมีประสิทธิภาพมากขึ้น"},"communication":{"title":"ระบบการสื่อสารอัตโนมัติ","description":"อีเมล ติดตามผล และข้อความถึงทีม–ลูกค้า ส่งได้เองอัตโนมัติ"},"analytics":{"title":"การวิเคราะห์ & รายงาน","description":"ดูผลธุรกิจแบบเรียลไทม์ ผ่านแดชบอร์ดและรายงานอัตโนมัติ"},"security":{"title":"ความปลอดภัยและการปฏิบัติตามมาตรฐาน","description":"นำระบบอัตโนมัติด้านความปลอดภัยและการตรวจสอบการปฏิบัติตามข้อกำหนดมาใช้เพื่อปกป้องธุรกิจและข้อมูลของคุณ"}}};
const whyUs = {"title":"ทำไมต้องใช้บริการเรา","subtitle":"เราส่งมอบผลลัพธ์ที่วัดได้จริง เพื่อเปลี่ยนวิธีการทำงานของธุรกิจคุณ","subtitleLine2":"และสร้างความได้เปรียบในการแข่งขันอย่างยั่งยืน","benefits":{"time":{"title":"ประหยัดเวลา","description":"ช่วยให้ทีมของคุณมีเวลามุ่งเน้นไปที่กลยุทธ์และการเติบโต"},"cost":{"title":"ลดค่าใช้จ่าย","description":"ลดค่าใช้จ่ายการดำเนินงานด้วยระบบอัตโนมัติ"},"scale":{"title":"Scale ได้เร็วขึ้น","description":"รองรับงานที่เพิ่มขึ้นโดยไม่ต้องเพิ่มบุคลากร"},"experience":{"title":"ยกระดับประสบการณ์","description":"ตอบสนองลูกค้าได้ทันที อย่างสม่ำเสมอ"}}};
const cta = {"title":"พร้อมให้ AI ทำงานแทนคุณแล้วหรือยัง?","titleHighlight":"","description":"ใช้โซลูชัน AI Automation ของเราในการเปลี่ยนกระบวนการทำงานและเพิ่มการเติบโตของธุรกิจคุณ","button":"นัดปรึกษาออนไลน์","checkmarks":"✓นัดปรึกษาฟรีเบื้องต้น  ✓ระบบอัตโนมัติที่ออกแบบเฉพาะสำหรับธุรกิจคุณ"};
const footer = {"companyName":"Alpha AI Consulting","description":"พลิกโฉมธุรกิจของคุณด้วยโซลูชัน AI Automation ล้ำสมัย เราช่วยให้ธุรกิจเติบโตได้อย่างรวดเร็ว มีประสิทธิภาพ และลดต้นทุนการดำเนินงานไปพร้อมกัน","services":"บริการของเรา","company":"Company","servicesItems":{"chatbots":"AI Chatbots","automation":"Process Automation","dataProcessing":"Data Processing","analytics":"Analytics"},"companyItems":{"contact":"ติดต่อเรา","blog":"บทความ"},"copyright":"© 2024 Alpha Bear Consulting. All rights reserved."};
const contact = {"title":"ติดต่อเรา","subtitle":"ติดต่อทีมงานของเรา","form":{"name":"ชื่อ","email":"อีเมล","message":"ข้อความ","send":"ส่งข้อความ","sending":"กำลังส่ง...","success":"ส่งข้อความสำเร็จ! เราจะติดต่อกลับไปเร็วๆ นี้","error":"ส่งข้อความไม่สำเร็จ กรุณาลองใหม่อีกครั้ง","required":"กรุณากรอกข้อมูลในช่องนี้","invalidEmail":"กรุณากรอกอีเมลให้ถูกต้อง"},"info":{"title":"ข้อมูลติดต่อ","line":"Line ID","email":"อีเมล"}};
const thTranslations = {
  nav,
  hero,
  offering,
  whyUs,
  cta,
  footer,
  contact,
};

const $$Astro$3 = createAstro("https://example.com");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const currentLocale = Astro2.currentLocale || "en";
  const translations = {
    en: enTranslations,
    th: thTranslations
  };
  const t = translations[currentLocale];
  const oppositeLocale = currentLocale === "en" ? "th" : "en";
  const currentPath = Astro2.url.pathname.replace(`/${currentLocale}`, "");
  const languageSwitchUrl = getRelativeLocaleUrl(oppositeLocale, currentPath);
  const languageButtonText = currentLocale === "en" ? "TH" : "EN";
  return renderTemplate`${maybeRenderHead()}<div> <nav class="flex px-[80px] py-[20px] items-center justify-between"> <a${addAttribute(getRelativeLocaleUrl(currentLocale, "/"), "href")}> ${renderComponent($$result, "Image", $$Image, { "src": "/logo.svg", "alt": "Logo", "class": "logo", "width": "100", "height": "50", "loading": "eager" })} </a> <div class="flex items-center gap-14"> <ul class="flex gap-10 items-center"> <li> <a${addAttribute(getRelativeLocaleUrl(currentLocale, "/blog"), "href")}> ${t.nav.blog} </a> </li> <li> <a${addAttribute(getRelativeLocaleUrl(currentLocale, "/contact"), "href")}> ${t.nav.contact} </a> </li> </ul> <a${addAttribute(languageSwitchUrl, "href")} class="p-3 rounded-2 hover:bg-black/10 rounded-lg"${addAttribute(`Switch to ${oppositeLocale === "en" ? "English" : "Thai"}`, "aria-label")}> ${languageButtonText} </a> </div> </nav> </div>`;
}, "/Users/benedictboisclair/Projects/Alpha/src/components/Navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://example.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const currentLocale = Astro2.currentLocale || "th";
  const fontClass = currentLocale === "th" ? "font-thai" : "font-english";
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Alpha Consulting</title><link rel="stylesheet" href="/src/styles/global.css"><script defer src="https://cloud.umami.is/script.js" data-website-id="49ddcd0b-960b-4f78-beae-0b4f546be491"><\/script>', "</head> <body", "> ", " ", " </body></html>"])), addAttribute(currentLocale, "lang"), renderHead(), addAttribute(fontClass, "class"), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]));
}, "/Users/benedictboisclair/Projects/Alpha/src/layouts/Layout.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const logoSquare = createSvgComponent({"meta":{"src":"/_astro/logo-square.CSW4VtsH.svg","width":45,"height":45,"format":"svg"},"attributes":{"width":"45","height":"45","viewBox":"0 0 45 45","fill":"none"},"children":"\n<rect x=\"0.791016\" y=\"0.19458\" width=\"44.1944\" height=\"44.1944\" rx=\"5.375\" fill=\"url(#paint0_linear_840_843)\" />\n<path d=\"M10 34L23.2 10L36.4 34H33.3467H27.1571L31.9809 31.3533L23.2 15.3412L14.4758 31.3533L19.1007 34H13.0533H10Z\" fill=\"white\" />\n<defs>\n<linearGradient id=\"paint0_linear_840_843\" x1=\"-13.6123\" y1=\"14.5279\" x2=\"11.9312\" y2=\"4.39527\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#CDA7FF\" />\n<stop offset=\"1\" stop-color=\"#8B32FF\" />\n</linearGradient>\n</defs>\n"});

const lineIcon = createSvgComponent({"meta":{"src":"/_astro/line-icon.CDzZn-Eh.svg","width":23,"height":24,"format":"svg"},"attributes":{"width":"23","height":"24","viewBox":"0 0 23 24","fill":"none"},"children":"\n<path d=\"M2.86016 0.743408C1.37542 0.743408 0.160156 1.95867 0.160156 3.44341V20.7234C0.160156 22.2081 1.37542 23.4234 2.86016 23.4234H20.1402C21.6249 23.4234 22.8402 22.2081 22.8402 20.7234V3.44341C22.8402 1.95867 21.6249 0.743408 20.1402 0.743408H2.86016ZM2.86016 1.82341H20.1402C21.0411 1.82341 21.7602 2.54243 21.7602 3.44341V20.7234C21.7602 21.6244 21.0411 22.3434 20.1402 22.3434H2.86016C1.95917 22.3434 1.24016 21.6244 1.24016 20.7234V3.44341C1.24016 2.54243 1.95917 1.82341 2.86016 1.82341ZM11.5002 3.98341C6.80056 3.98341 2.86016 7.04971 2.86016 10.9749C2.86016 14.4769 5.98355 17.3214 10.0616 17.8684H10.0626C10.17 17.8913 10.2935 17.9279 10.3664 17.9622C10.3813 17.9693 10.3797 17.9699 10.3875 17.9749C10.386 18.0193 10.3998 18.2234 10.379 18.3799C10.3739 18.4102 10.2855 18.9336 10.2672 19.037V19.038C10.242 19.1822 10.1469 19.4725 10.3927 19.8427C10.5157 20.0279 10.7703 20.1777 11.0087 20.1982C11.2471 20.2187 11.4659 20.1597 11.71 20.0568C12.269 19.8253 13.385 19.1657 14.6737 18.2839C15.9613 17.4029 17.3517 16.334 18.2618 15.3076C19.4995 13.9755 20.1402 12.5389 20.1402 10.9749C20.1402 7.05019 16.1998 3.98341 11.5002 3.98341ZM11.5002 5.06341C15.7332 5.06341 19.0602 7.78571 19.0602 10.9749C19.0602 12.2562 18.5774 13.3838 17.4686 14.5756L17.4634 14.5809L17.4591 14.5862C16.6697 15.4782 15.3147 16.5359 14.0641 17.3917C12.8459 18.2252 11.7086 18.8656 11.3652 19.0169C11.4004 18.8096 11.4464 18.5402 11.4464 18.5402L11.4485 18.5307L11.4495 18.5212C11.4796 18.2953 11.5604 17.9526 11.3884 17.5288V17.5277V17.5267C11.2602 17.2146 11.0215 17.0776 10.8262 16.9856C10.6309 16.8936 10.4432 16.8459 10.2873 16.8126L10.2662 16.8074L10.244 16.8052C6.55886 16.3267 3.94016 13.8389 3.94016 10.9749C3.94016 7.78512 7.26707 5.06341 11.5002 5.06341ZM10.9559 8.84235C10.6839 8.8474 10.4202 9.05502 10.4202 9.38341V12.6234C10.4202 12.9215 10.6621 13.1634 10.9602 13.1634C11.2582 13.1634 11.5002 12.9215 11.5002 12.6234V11.0688L12.6804 12.9367C12.986 13.3643 13.6602 13.1488 13.6602 12.6234V9.38341C13.6602 9.08533 13.4182 8.84341 13.1202 8.84341C12.8221 8.84341 12.5802 9.08533 12.5802 9.38341V11.0034L11.4 9.07017C11.2853 8.90979 11.1192 8.83933 10.9559 8.84235ZM6.10016 8.84341C5.80208 8.84341 5.56016 9.08533 5.56016 9.38341V12.6234C5.56016 12.9215 5.80208 13.1634 6.10016 13.1634H7.72016C8.01824 13.1634 8.26016 12.9215 8.26016 12.6234C8.26016 12.3253 8.01824 12.0834 7.72016 12.0834H6.64016V9.38341C6.64016 9.08533 6.39824 8.84341 6.10016 8.84341ZM9.34016 8.84341C9.04208 8.84341 8.80016 9.08533 8.80016 9.38341V12.6234C8.80016 12.9215 9.04208 13.1634 9.34016 13.1634C9.63824 13.1634 9.88016 12.9215 9.88016 12.6234V9.38341C9.88016 9.08533 9.63824 8.84341 9.34016 8.84341ZM14.7402 8.84341C14.4421 8.84341 14.2002 9.08533 14.2002 9.38341V12.6234C14.2002 12.9215 14.4421 13.1634 14.7402 13.1634H16.3602C16.6582 13.1634 16.9002 12.9215 16.9002 12.6234C16.9002 12.3253 16.6582 12.0834 16.3602 12.0834H15.2802V11.5434H16.3602C16.6588 11.5434 16.9002 11.3015 16.9002 11.0034C16.9002 10.7053 16.6588 10.4634 16.3602 10.4634H15.2802V9.92341H16.3602C16.6582 9.92341 16.9002 9.68149 16.9002 9.38341C16.9002 9.08533 16.6582 8.84341 16.3602 8.84341H14.7402Z\" fill=\"white\" />\n"});

const mailIcon = createSvgComponent({"meta":{"src":"/_astro/mail-icon.DPDW6VS8.svg","width":23,"height":19,"format":"svg"},"attributes":{"width":"23","height":"19","viewBox":"0 0 23 19","fill":"none"},"children":"\n<path d=\"M20.5 0.083252H2.5C1.2625 0.083252 0.26125 1.09575 0.26125 2.33325L0.25 15.8333C0.25 17.0708 1.2625 18.0833 2.5 18.0833H20.5C21.7375 18.0833 22.75 17.0708 22.75 15.8333V2.33325C22.75 1.09575 21.7375 0.083252 20.5 0.083252ZM20.5 15.8333H2.5V4.58325L11.5 10.2083L20.5 4.58325V15.8333ZM11.5 7.95825L2.5 2.33325H20.5L11.5 7.95825Z\" fill=\"white\" />\n"});

const $$Astro$1 = createAstro("https://example.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentLocale = Astro2.currentLocale || "th";
  const translations = {
    en: enTranslations,
    th: thTranslations
  };
  const t = translations[currentLocale];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#232323] text-white py-26 px-36"> <div class="flex justify-between"> <div class="flex flex-col gap-6 col-span-2 "> <div class="flex items-center gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": logoSquare, "alt": "Alpha AI Consulting Logo", "width": 45, "height": 45 })} <span class="font-semibold text-white">${t.footer.companyName}</span> </div> <p class="text-base font-extralight leading-relaxed w-[450px]"> ${t.footer.description} </p> <div class="flex flex-col gap-4 font-extralight"> <div class="flex items-center gap-3 text-base"> ${renderComponent($$result, "Image", $$Image, { "src": lineIcon, "alt": "Line Icon", "width": 20, "height": 20, "class": "flex-shrink-0 text-white" })} <span>@alphaconsulting</span> </div> <div class="flex items-center gap-3 text-gray-300 text-base"> ${renderComponent($$result, "Image", $$Image, { "src": mailIcon, "alt": "Mail Icon", "width": 20, "height": 20, "class": "flex-shrink-0 text-white" })} <span>hello@alphabearconsulting.com</span> </div> </div> </div> <div> <h3 class="font-medium text-white mb-6">${t.footer.services}</h3> <ul class="space-y-4"> <li class="font-extralight text-base hover:text-white cursor-pointer">${t.footer.servicesItems.chatbots}</li> <li class="font-extralight text-base hover:text-white cursor-pointer">${t.footer.servicesItems.automation}</li> <li class="font-extralight  text-base hover:text-white cursor-pointer">${t.footer.servicesItems.dataProcessing}</li> <li class="font-extralight  text-base hover:text-white cursor-pointer">${t.footer.servicesItems.analytics}</li> </ul> </div> <div> <h3 class="font-medium text-white mb-6">${t.footer.company}</h3> <ul class="space-y-4"> <li class="font-extralight  text-base hover:text-white cursor-pointer"> <a${addAttribute(getRelativeLocaleUrl(currentLocale, "/contact"), "href")}>${t.footer.companyItems.contact}</a> </li> <li class="font-extralight  text-base hover:text-white cursor-pointer"> <a${addAttribute(getRelativeLocaleUrl(currentLocale, "/blog"), "href")}>${t.footer.companyItems.blog}</a> </li> </ul> </div> </div> </footer>`;
}, "/Users/benedictboisclair/Projects/Alpha/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    type = "button",
    disabled = false,
    class: className = "",
    id,
    ...rest
  } = Astro2.props;
  const baseClasses = "font-bold rounded-lg px-8 py-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative overflow-hidden";
  const variantClasses = {
    primary: "bg-[#8b32ff] text-white hover:bg-purple-700 button-primary",
    secondary: "bg-white text-[#8D37FF] hover:bg-gray-50 button-secondary"
  };
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(disabled, "disabled")}${addAttribute(buttonClasses, "class")}${addAttribute(id, "id")}${spreadAttributes(rest)} data-astro-cid-vnzlvqnm> ${renderSlot($$result, $$slots["default"])} </button> ${renderScript($$result, "/Users/benedictboisclair/Projects/Alpha/src/components/Button.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/benedictboisclair/Projects/Alpha/src/components/Button.astro", void 0);

export { $$Layout as $, $$Footer as a, $$Button as b, createSvgComponent as c, enTranslations as e, getRelativeLocaleUrl as g, lineIcon as l, mailIcon as m, thTranslations as t };
