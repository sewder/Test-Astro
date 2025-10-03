globalThis.process ??= {}; globalThis.process.env ??= {};
import { q as decodeKey } from './chunks/astro/server_CsXZW5kt.mjs';
import './chunks/astro-designed-error-pages_DFXjEFco.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_Dl90wff7.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/omer_/OneDrive/Masa%C3%BCst%C3%BC/my-blog/","cacheDir":"file:///C:/Users/omer_/OneDrive/Masa%C3%BCst%C3%BC/my-blog/node_modules/.astro/","outDir":"file:///C:/Users/omer_/OneDrive/Masa%C3%BCst%C3%BC/my-blog/dist/","srcDir":"file:///C:/Users/omer_/OneDrive/Masa%C3%BCst%C3%BC/my-blog/src/","publicDir":"file:///C:/Users/omer_/OneDrive/Masa%C3%BCst%C3%BC/my-blog/public/","buildClientDir":"file:///C:/Users/omer_/OneDrive/Masa%C3%BCst%C3%BC/my-blog/dist/","buildServerDir":"file:///C:/Users/omer_/OneDrive/Masa%C3%BCst%C3%BC/my-blog/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://sewder.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/omer_/OneDrive/Masaüstü/my-blog/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/omer_/OneDrive/Masaüstü/my-blog/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/omer_/OneDrive/Masaüstü/my-blog/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Cz9jzJPU.mjs","C:/Users/omer_/OneDrive/Masaüstü/my-blog/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","C:\\Users\\omer_\\OneDrive\\Masaüstü\\my-blog\\.astro\\content-assets.mjs":"chunks/content-assets_XqCgPAV2.mjs","C:\\Users\\omer_\\OneDrive\\Masaüstü\\my-blog\\.astro\\content-modules.mjs":"chunks/content-modules_Bvq7llv8.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DwY-q5kX.mjs","C:/Users/omer_/OneDrive/Masaüstü/my-blog/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DoPB4Cvh.mjs","C:/Users/omer_/OneDrive/Masaüstü/my-blog/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BNfyWz4n.js","C:/Users/omer_/OneDrive/Masaüstü/my-blog/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.Dfe4sT7O.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/omer_/OneDrive/Masaüstü/my-blog/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"search\"),r=Array.from(document.querySelectorAll(\".row\"));o?.addEventListener(\"input\",()=>{const t=o.value.trim().toLowerCase();r.forEach(e=>{const n=e.getAttribute(\"data-title\")||\"\";e.classList.toggle(\"hidden\",t&&!n.includes(t))})});"],["C:/Users/omer_/OneDrive/Masaüstü/my-blog/src/pages/index.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"load-more\");e instanceof HTMLButtonElement&&e.addEventListener(\"click\",()=>{Array.from(document.querySelectorAll(\".row.hidden\")).slice(0,5).forEach(t=>t.classList.remove(\"hidden\")),document.querySelector(\".row.hidden\")||(e.disabled=!0,e.textContent=\"Hepsi yüklendi\")});"]],"assets":["/_astro/orion.b_-D93m3.svg","/robots.txt","/images/my.jpeg","/images/my.jpg","/images/new.jpg","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/chunks/astro-designed-error-pages_DFXjEFco.mjs","/_worker.js/chunks/astro_BDCVrulw.mjs","/_worker.js/chunks/BaseLayout_DM9EddHq.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/content-assets_XqCgPAV2.mjs","/_worker.js/chunks/content-modules_Bvq7llv8.mjs","/_worker.js/chunks/index_DZ_UlXz2.mjs","/_worker.js/chunks/noop-middleware_Dl90wff7.mjs","/_worker.js/chunks/parse_yL_293SP.mjs","/_worker.js/chunks/path_C0V2xYQr.mjs","/_worker.js/chunks/sharp_DoPB4Cvh.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_BhAvJhjZ.mjs","/_worker.js/chunks/_astro_assets_C703CBsW.mjs","/_worker.js/chunks/_astro_content_CNpzOLpT.mjs","/_worker.js/chunks/_astro_data-layer-content_DwY-q5kX.mjs","/_worker.js/_astro/orion.b_-D93m3.svg","/_worker.js/pages/blog.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/chunks/astro/server_CsXZW5kt.mjs","/_worker.js/pages/blog/_slug_.astro.mjs","/blog/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"xU07kengwmR68zHGNO3msbQg6s9dFTo3bfpJ1xUkA1E=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
