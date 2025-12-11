globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_xluZHftt.mjs';
import { g as getCollection } from '../../chunks/Nav_CS8egwXs.mjs';
import { $ as $$PostLayout } from '../../chunks/PostLayout_B473zPE6.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => {
    const children = posts.filter((p) => {
      const pSlug = p.slug.replace(/ /g, "-").toLowerCase();
      const parentSlug = post.slug.replace(/ /g, "-").toLowerCase();
      if (!pSlug.startsWith(parentSlug + "/")) return false;
      if (pSlug === parentSlug) return false;
      const relative = pSlug.substring(parentSlug.length + 1);
      return !relative.includes("/");
    });
    children.sort((a, b) => a.data.pubDate > b.data.pubDate ? -1 : 1);
    return {
      params: { slug: post.slug },
      props: { post, children }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post, children } = Astro2.props;
  const { Content } = await post.render();
  const dateLabel = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(post.data.pubDate).toUpperCase();
  const d = post.data;
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { "title": post.data.title, "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="article" data-astro-cid-4sn4zg3r> <h1 class="title" data-astro-cid-4sn4zg3r>${post.data.title}</h1> <div class="meta-below" data-astro-cid-4sn4zg3r>${dateLabel}</div> </section> ${d.hero && renderTemplate`<figure class="hero" data-astro-cid-4sn4zg3r> <img${addAttribute(d.hero, "src")}${addAttribute(d.heroAlt || post.data.title, "alt")} data-astro-cid-4sn4zg3r> ${(d.heroCredit || d.heroCreditUrl) && renderTemplate`<figcaption class="caption" data-astro-cid-4sn4zg3r>
görsel kaynağı${" "} ${d.heroCreditUrl ? renderTemplate`<a${addAttribute(d.heroCreditUrl, "href")} target="_blank" rel="noreferrer" data-astro-cid-4sn4zg3r> ${d.heroCredit || d.heroCreditUrl} </a>` : d.heroCredit} </figcaption>`} </figure>`}${children.length > 0 && renderTemplate`<nav class="toc-children" data-astro-cid-4sn4zg3r> <h2 data-astro-cid-4sn4zg3r>Topics</h2> <ul class="collection-list" data-astro-cid-4sn4zg3r> ${children.map((child) => renderTemplate`<li data-astro-cid-4sn4zg3r> <a${addAttribute(`/blog/${child.slug}`, "href")} data-astro-cid-4sn4zg3r> <h3 data-astro-cid-4sn4zg3r>${child.data.title}</h3> ${child.data.description && renderTemplate`<p data-astro-cid-4sn4zg3r>${child.data.description}</p>`} </a> </li>`)} </ul> </nav>`}<article class="prose" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-4sn4zg3r": true })} </article> ` })} `;
}, "C:/Users/omer_/OneDrive/Masa\xFCst\xFC/Test astro/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/omer_/OneDrive/Masaüstü/Test astro/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
