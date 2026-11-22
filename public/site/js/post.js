// Renders a blog post page. The article itself lives in the page's HTML
// (#post-src inside #root) so search engines can read it without scripts;
// it's picked up here before React takes over #root.
const POST_SLUG = document.getElementById('root').dataset.post;
const POST = POSTS.find(p => p.slug === POST_SLUG);
const POST_HTML = document.getElementById('post-src').innerHTML;
function Post() {
  return React.createElement(Page, {
    current: "blog.html"
  }, React.createElement("header", {
    className: "post-head wrap"
  }, React.createElement("p", {
    className: "eyebrow",
    "data-reveal": true
  }, React.createElement("a", {
    href: "/blog/",
    "data-transition": true
  }, "Blog")), React.createElement("h1", {
    className: "post-title",
    "data-split": true
  }, POST.title), React.createElement("p", {
    className: "post-meta",
    "data-reveal": true,
    style: {
      transitionDelay: '.4s'
    }
  }, postDate(POST.date), " \xB7 ", POST.read)), React.createElement("article", {
    className: "prose post-body wrap",
    dangerouslySetInnerHTML: {
      __html: POST_HTML
    }
  }), React.createElement(Finale, null));
}
mount(React.createElement(Post, null));
