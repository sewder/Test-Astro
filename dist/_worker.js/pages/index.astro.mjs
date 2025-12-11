globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderScript } from '../chunks/astro/server_xluZHftt.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C5Pp4Ay3.mjs';
import { g as getCollection } from '../chunks/Nav_CS8egwXs.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const base = "/";
  const heroJpg = `${base.replace(/\/$/, "")}/images/Orion.jpg`;
  const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  function estimateMinutes(text = "") {
    const words = text.replace(/[`*_>#-]/g, " ").replace(/\[(.*?)\]\((.*?)\)/g, "$1").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().split(" ").filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }
  const fmt = new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "short" });
  const items = posts.map((p) => {
    let parentTitle = null;
    let parentSlug = null;
    if (p.slug.includes("/")) {
      parentSlug = p.slug.split("/").slice(0, -1).join("/");
      const parent = posts.find((parent2) => parent2.slug === parentSlug);
      if (parent) {
        parentTitle = parent.data.title;
      }
    }
    return {
      slug: p.slug,
      title: p.data.title,
      parentSlug,
      parentTitle,
      dateLabel: fmt.format(p.data.pubDate).toUpperCase(),
      minutes: typeof p.data.readingTime === "number" ? p.data.readingTime : estimateMinutes(p.data.description ?? "")
    };
  });
  const INITIAL_COUNT = 5;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Archive", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="orion" data-astro-cid-j7pv25f6>  <figure data-astro-cid-j7pv25f6> <img${addAttribute(heroJpg, "src")} alt="Orion hero" class="orion-img" loading="lazy" width="600" height="300" data-astro-cid-j7pv25f6> <figcaption class="orion-credit" data-astro-cid-j7pv25f6>Image credit: manpuku7 via Getty Images</figcaption> </figure> </section> <ul class="list" id="post-list" data-astro-cid-j7pv25f6> ${items.map((it, idx) => renderTemplate`<li${addAttribute(`row ${idx >= INITIAL_COUNT ? "hidden" : ""}`, "class")}${addAttribute(idx, "data-idx")} data-astro-cid-j7pv25f6> <span class="date" data-astro-cid-j7pv25f6>${it.dateLabel}</span> <div class="title-wrap" data-astro-cid-j7pv25f6> ${it.parentTitle ? renderTemplate`<span class="compound-title" data-astro-cid-j7pv25f6> <a class="parent-link"${addAttribute(`/blog/${it.parentSlug}/`, "href")} data-astro-cid-j7pv25f6>${it.parentTitle}</a> <span class="separator" data-astro-cid-j7pv25f6>: </span> <a class="child-link"${addAttribute(`/blog/${it.slug}/`, "href")} data-astro-cid-j7pv25f6>${it.title}</a> </span>` : renderTemplate`<a class="title"${addAttribute(`/blog/${it.slug}/`, "href")} data-astro-cid-j7pv25f6>${it.title}</a>`} </div> <span class="read" data-astro-cid-j7pv25f6>${it.minutes} min</span> </li>`)} </ul> ${items.length > INITIAL_COUNT && renderTemplate`<div class="more-wrap" data-astro-cid-j7pv25f6> <button id="load-more" class="more-btn" data-astro-cid-j7pv25f6>LOAD MORE</button> </div>`} ${renderScript($$result2, "C:/Users/omer_/OneDrive/Masaüstü/Test astro/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/omer_/OneDrive/Masaüstü/Test astro/src/pages/index.astro", void 0);
const $$file = "C:/Users/omer_/OneDrive/Masaüstü/Test astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
