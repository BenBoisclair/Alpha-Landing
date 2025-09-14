import { v as decodeKey } from './chunks/astro/server_CAhXBRiF.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_BDDRoq12.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_Co7hryFT.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/benedictboisclair/Projects/Alpha/","cacheDir":"file:///Users/benedictboisclair/Projects/Alpha/node_modules/.astro/","outDir":"file:///Users/benedictboisclair/Projects/Alpha/dist/","srcDir":"file:///Users/benedictboisclair/Projects/Alpha/src/","publicDir":"file:///Users/benedictboisclair/Projects/Alpha/public/","buildClientDir":"file:///Users/benedictboisclair/Projects/Alpha/dist/client/","buildServerDir":"file:///Users/benedictboisclair/Projects/Alpha/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.13.7_@types+node@24.4.0_@vercel+functions@2.2.13_jiti@2.5.1_lightningcss@1.30.1_rollup@4.50.1_typescript@5.9.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/.pnpm/astro@5.13.7_@types+node@24.4.0_@vercel+functions@2.2.13_jiti@2.5.1_lightningcss@1.30.1_rollup@4.50.1_typescript@5.9.2/node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.BfdJoTy5.css"},{"type":"inline","content":"button[data-astro-cid-vnzlvqnm]:hover:before{content:\"\";position:absolute;inset:0;pointer-events:none}button[data-astro-cid-vnzlvqnm].button-primary:hover:before{background:radial-gradient(150px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),rgba(255,255,255,.2) 0%,transparent 50%)}button[data-astro-cid-vnzlvqnm].button-secondary:hover:before{background:radial-gradient(150px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),rgba(139,50,255,.15) 0%,transparent 50%)}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.BfdJoTy5.css"},{"type":"inline","content":"button[data-astro-cid-vnzlvqnm]:hover:before{content:\"\";position:absolute;inset:0;pointer-events:none}button[data-astro-cid-vnzlvqnm].button-primary:hover:before{background:radial-gradient(150px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),rgba(255,255,255,.2) 0%,transparent 50%)}button[data-astro-cid-vnzlvqnm].button-secondary:hover:before{background:radial-gradient(150px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),rgba(139,50,255,.15) 0%,transparent 50%)}\n"}],"routeData":{"route":"/en/contact","isIndex":false,"type":"page","pattern":"^\\/en\\/contact\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/contact.astro","pathname":"/en/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.BfdJoTy5.css"},{"type":"inline","content":"button[data-astro-cid-vnzlvqnm]:hover:before{content:\"\";position:absolute;inset:0;pointer-events:none}button[data-astro-cid-vnzlvqnm].button-primary:hover:before{background:radial-gradient(150px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),rgba(255,255,255,.2) 0%,transparent 50%)}button[data-astro-cid-vnzlvqnm].button-secondary:hover:before{background:radial-gradient(150px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),rgba(139,50,255,.15) 0%,transparent 50%)}\n.logo-glow[data-astro-cid-frbqrhml]{filter:drop-shadow(0 0 40px rgba(255,255,255,.4)) drop-shadow(0 0 80px rgba(196,181,253,.3)) drop-shadow(0 0 120px rgba(139,69,19,.2))}.light-overlay-1[data-astro-cid-frbqrhml]{background:radial-gradient(ellipse at center,rgba(255,255,255,.3) 0%,rgba(196,181,253,.2) 30%,rgba(139,92,246,.1) 60%,transparent 100%);mix-blend-mode:overlay;pointer-events:none}.light-overlay-2[data-astro-cid-frbqrhml]{background:radial-gradient(ellipse at center,rgba(191,219,254,.25) 0%,rgba(196,181,253,.15) 35%,rgba(147,51,234,.08) 70%,transparent 100%);mix-blend-mode:screen;pointer-events:none}\n"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.BfdJoTy5.css"},{"type":"inline","content":"button[data-astro-cid-vnzlvqnm]:hover:before{content:\"\";position:absolute;inset:0;pointer-events:none}button[data-astro-cid-vnzlvqnm].button-primary:hover:before{background:radial-gradient(150px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),rgba(255,255,255,.2) 0%,transparent 50%)}button[data-astro-cid-vnzlvqnm].button-secondary:hover:before{background:radial-gradient(150px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),rgba(139,50,255,.15) 0%,transparent 50%)}\n.logo-glow[data-astro-cid-frbqrhml]{filter:drop-shadow(0 0 40px rgba(255,255,255,.4)) drop-shadow(0 0 80px rgba(196,181,253,.3)) drop-shadow(0 0 120px rgba(139,69,19,.2))}.light-overlay-1[data-astro-cid-frbqrhml]{background:radial-gradient(ellipse at center,rgba(255,255,255,.3) 0%,rgba(196,181,253,.2) 30%,rgba(139,92,246,.1) 60%,transparent 100%);mix-blend-mode:overlay;pointer-events:none}.light-overlay-2[data-astro-cid-frbqrhml]{background:radial-gradient(ellipse at center,rgba(191,219,254,.25) 0%,rgba(196,181,253,.15) 35%,rgba(147,51,234,.08) 70%,transparent 100%);mix-blend-mode:screen;pointer-events:none}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/benedictboisclair/Projects/Alpha/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/benedictboisclair/Projects/Alpha/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/Users/benedictboisclair/Projects/Alpha/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/benedictboisclair/Projects/Alpha/src/pages/en/contact.astro",{"propagation":"none","containsHead":true}],["/Users/benedictboisclair/Projects/Alpha/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["/Users/benedictboisclair/Projects/Alpha/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.13.7_@types+node@24.4.0_@vercel+functions@2.2.13_jiti@2.5.1_lightningcss@1.30.1_rollup@4.50.1_typescript@5.9.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.13.7_@types+node@24.4.0_@vercel+functions@2.2.13_jiti@2.5.1_lightningcss@1.30.1_rollup@4.50.1_typescript@5.9.2/node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/en/contact@_@astro":"pages/en/contact.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_-4qpgrzP.mjs","/Users/benedictboisclair/Projects/Alpha/node_modules/.pnpm/astro@5.13.7_@types+node@24.4.0_@vercel+functions@2.2.13_jiti@2.5.1_lightningcss@1.30.1_rollup@4.50.1_typescript@5.9.2/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DWkSs9ka.mjs","/Users/benedictboisclair/Projects/Alpha/.astro/content-assets.mjs":"chunks/content-assets_CgSJKbwQ.mjs","/Users/benedictboisclair/Projects/Alpha/.astro/content-modules.mjs":"chunks/content-modules_VS8K-XmR.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Bziv8O0t.mjs","/Users/benedictboisclair/Projects/Alpha/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_B_rYoffa.mjs","/Users/benedictboisclair/Projects/Alpha/src/content/blog/using-mdx.mdx":"chunks/using-mdx_DP5jZO2R.mjs","/Users/benedictboisclair/Projects/Alpha/src/components/Button.astro?astro&type=script&index=0&lang.ts":"_astro/Button.astro_astro_type_script_index_0_lang.DTc6L1X8.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/benedictboisclair/Projects/Alpha/src/components/Button.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\"button\").forEach(e=>{e.addEventListener(\"mousemove\",t=>{const o=e.getBoundingClientRect(),n=t.clientX-o.left,s=t.clientY-o.top;e.style.setProperty(\"--mouse-x\",`${n}px`),e.style.setProperty(\"--mouse-y\",`${s}px`)})})});"]],"assets":["/_astro/blog-placeholder-5.CB3Xi-gp.jpg","/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","/_astro/blog-placeholder-3.ijrf8Ohr.jpg","/_astro/blog-placeholder-2.1WQRLJGH.jpg","/_astro/blog-placeholder-4.gLBdjEDe.jpg","/_astro/blog-placeholder-about.BtEdEmGp.jpg","/_astro/line-icon.CDzZn-Eh.svg","/_astro/mail-icon.DPDW6VS8.svg","/_astro/automation.dRN2-hRg.svg","/_astro/data.Dft3fUpn.svg","/_astro/secure.DpU5X9cm.svg","/_astro/analytics.D-HWRzV-.svg","/_astro/robot.S6BYno_N.svg","/_astro/chat.BVU40GNw.svg","/_astro/time.DZqFADPK.svg","/_astro/people.CNsXirfX.svg","/_astro/scale.CGU7Pb6I.svg","/_astro/cash.Ci5UuNmm.svg","/_astro/logo-square.CSW4VtsH.svg","/_astro/roboto-cyrillic-ext-400-normal.DzMWdK87.woff2","/_astro/roboto-greek-400-normal.jFM2czAU.woff2","/_astro/roboto-math-400-normal.B3wgz80t.woff2","/_astro/roboto-vietnamese-400-normal.CDDxGrUb.woff2","/_astro/roboto-symbols-400-normal.fF1SLJBj.woff2","/_astro/roboto-latin-ext-400-normal.ZYmyxeOy.woff2","/_astro/roboto-cyrillic-400-normal.DAIM1_dR.woff2","/_astro/noto-sans-thai-latin-ext-wght-normal.DH1q_yQ5.woff2","/_astro/logo-single.CKdmQbdc.svg","/_astro/roboto-latin-400-normal.CNwBRw8h.woff2","/_astro/noto-sans-thai-thai-wght-normal.CtQSZ1tK.woff2","/_astro/noto-sans-thai-latin-wght-normal.Bi3VDbYN.woff2","/_astro/roboto-vietnamese-400-normal.BYP5tVVv.woff","/_astro/roboto-math-400-normal.BRMeFL5Z.woff","/_astro/roboto-greek-400-normal.DwVopRQH.woff","/_astro/roboto-symbols-400-normal.B2LMqLB2.woff","/_astro/roboto-cyrillic-400-normal.C5q4FMUG.woff","/_astro/roboto-cyrillic-ext-400-normal.5IDvadIC.woff","/_astro/roboto-latin-ext-400-normal.BG57dRWO.woff","/_astro/roboto-latin-400-normal.BX2H0A0_.woff","/_astro/contact.BfdJoTy5.css","/favicon.svg","/logo.svg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en","th"],"defaultLocale":"th","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"fL9ld80mvtfMQ/Li3CJVaricE3OxlNB+ttm3dPSkSf0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
