function PostCard({
  p,
  i
}) {
  return React.createElement("a", {
    className: "post-card",
    href: postUrl(p),
    "data-transition": true,
    "data-reveal": true,
    style: {
      transitionDelay: i * .08 + 's'
    }
  }, React.createElement("span", {
    className: "post-card-img"
  }, React.createElement("img", {
    src: p.cover,
    alt: p.coverAlt,
    loading: "lazy",
    decoding: "async"
  })), React.createElement("span", {
    className: "post-meta"
  }, postDate(p.date), " \xB7 ", p.read), React.createElement("span", {
    className: "post-card-t"
  }, p.title), React.createElement("span", {
    className: "post-card-x"
  }, p.excerpt), React.createElement("span", {
    className: "tlink"
  }, "Read the post"));
}
function Blog() {
  return React.createElement(Page, {
    current: "blog.html"
  }, React.createElement(Hero, {
    eyebrow: "Blog",
    short: true,
    cta: false,
    title: "Blog.",
    sub: "Practical tips on websites, video and design, from a Liverpool studio."
  }), React.createElement("section", {
    className: "post-grid"
  }, POSTS.map((p, i) => React.createElement(PostCard, {
    key: p.slug,
    p: p,
    i: i
  }))), React.createElement(Finale, null));
}
mount(React.createElement(Blog, null));
