const pageFaqs = [["How much does graphic design cost?", "It's priced per job, not a retainer. You get a price before we start, with no monthly fee and nothing to cancel."], ["What can you design?", "Logos and brand assets, social graphics, and branded material such as menus, brochures and presentations."], ["What files do I get?", "Files in the formats you need, ready to use."], ["Can you make graphics to match my website?", "Yes. We build websites and edit video too, so everything can share one look."], ["Do you design print work?", "Yes. Print design starts from £150 a job."]];
const makes = [['Logos and brand assets', 'a mark you can use everywhere, with the colours and type to go with it.'], ['Social graphics', 'posts and templates that look like they belong together.'], ['Branded material', 'menus, brochures, presentations and the like.']];
const steps = [['Brief.', "Tell us what it's for and where it will be used."], ['Quote.', 'A price before we start.'], ['Design.', 'We make it. You review it.'], ['Revisions.', "We refine it until it's right."], ['Delivery.', 'Files in the formats you need, ready to use.']];
function Graphic() {
  return React.createElement(Page, {
    current: "graphic.html"
  }, React.createElement(ScrollHero, {
    eyebrow: "Graphic design",
    title: "Design that looks like one business.",
    sub: "Logos, graphics and branded material from the studio that builds your website and edits your video. Priced per job.",
    media: React.createElement(HeroVid, {
      src: "site/video/graphic-hero.mp4"
    })
  }), React.createElement(Statement, null, "Your business can look different on your website, your Instagram and your van. We fix that. One look, used properly, everywhere it shows up."), React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, React.createElement(SecHead, {
    label: "What we make",
    title: "What we make."
  }), React.createElement(Rows, {
    items: makes
  }), React.createElement(MediaGrid, {
    prefix: "graphic-makes",
    items: ['Logos and brand assets', 'Social graphics', 'Branded material']
  })), React.createElement("section", {
    className: "sec panel"
  }, React.createElement("div", {
    className: "text-sec"
  }, React.createElement("div", {
    className: "sec-head",
    style: {
      padding: 0,
      margin: 0
    }
  }, React.createElement("p", {
    className: "label",
    "data-reveal": true
  }, "Pricing"), React.createElement("h2", {
    className: "h2",
    "data-split": true
  }, React.createElement(Dot, null, "Per job, not a retainer."))), React.createElement("div", {
    className: "copy"
  }, React.createElement("p", {
    "data-reveal": true
  }, "Tell us what you need and you get a price before we start. No monthly fee, nothing to cancel.")))), React.createElement("section", {
    className: "sec"
  }, React.createElement(SecHead, {
    label: "Process",
    title: "How it works."
  }), React.createElement(Rows, {
    items: steps
  })), React.createElement(TextSec, {
    label: "One look",
    title: "Consistent beats clever.",
    panel: true,
    paras: ["A logo is the start. What makes a business look professional is using it the same way everywhere: the website, the social posts, the van, the menu. We design the logo and the system around it, so the colours, type and layouts hold together.", React.createElement(React.Fragment, null, "We're based in Liverpool and work with businesses across the North West and further afield. Need it printed? See ", React.createElement(Ilink, {to: "/print"}, "Print design"), ".")]
  }), React.createElement(FaqSection, {
    items: pageFaqs
  }), React.createElement(Finale, {
    title: "Need something designed?",
    body: "Tell us what it's for and where it will be used. We'll come back with a price."
  }));
}
mount(React.createElement(Graphic, null));