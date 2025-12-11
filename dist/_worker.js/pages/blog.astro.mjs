globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderScript, d as addAttribute } from '../chunks/astro/server_xluZHftt.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C5Pp4Ay3.mjs';
import { g as getCollection } from '../chunks/Nav_CS8egwXs.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const fmtDayMonth = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long"
  });
  const groups = posts.reduce((acc, p) => {
    const y = new Date(p.data.pubDate).getFullYear();
    (acc[y] ||= []).push({
      slug: p.slug,
      title: p.data.title,
      dateLabel: fmtDayMonth.format(p.data.pubDate)
    });
    return acc;
  }, {});
  const years = Object.keys(groups).map((y) => Number(y)).sort((a, b) => b - a);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Archive", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="wrap" data-astro-cid-5tznm7mj> <h1 class="page-title" data-astro-cid-5tznm7mj>Archive</h1> <div class="search-wrap" data-astro-cid-5tznm7mj> <input id="search" class="search" placeholder="Search archive... (or search by #tag)" data-astro-cid-5tznm7mj> </div> ${years.map((y) => renderTemplate`<section data-astro-cid-5tznm7mj> <h2 class="year" data-astro-cid-5tznm7mj>${y}</h2> <ul class="archive" data-astro-cid-5tznm7mj> ${groups[y].map((it) => renderTemplate`<li class="row"${addAttribute(it.title.toLowerCase(), "data-title")} data-astro-cid-5tznm7mj> <span class="date" data-astro-cid-5tznm7mj>${it.dateLabel}</span> <a class="title"${addAttribute(`/blog/${it.slug}/`, "href")} data-astro-cid-5tznm7mj>${it.title}</a> </li>`)} </ul> </section>`)} </main> ${renderScript($$result2, "C:/Users/omer_/OneDrive/Masa\xFCst\xFC/Test astro/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "C:/Users/omer_/OneDrive/Masa\xFCst\xFC/Test astro/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/omer_/OneDrive/Masaüstü/Test astro/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
