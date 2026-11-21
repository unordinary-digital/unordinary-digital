const pageFaqs = [["How much does print design cost?", "From £150 a job. You get a price before we start, with no monthly fee."], ["What can you design?", "Flyers, posters and signage."], ["What do I get at the end?", "Print-ready files."], ["Will it match my website and social media?", "Yes. We build websites and edit video too, so print matches the rest of the business."], ["Do I get to review the design?", "Yes. You review it and we refine it until it's right."]];
const things = [['Flyers', 'for launches, offers and events. Clear message, one call to action.'], ['Posters', 'made to be read from across the street.'], ['Signage', 'clear, legible and built around where it will go.']];
const steps = [['Brief.', "Tell us what it's for and where it's going."], ['Quote.', 'A price before we start.'], ['Design.', 'We make it. You review it.'], ['Revisions.', "We refine it until it's right."], ['Delivery.', 'Print-ready files.']];
function Print() {
  return React.createElement(Page, {
    current: "print.html"
  }, React.createElement(ScrollHero, {
    eyebrow: "Print design",
    title: "Print that does its job.",
    sub: "Flyers, posters and signage, designed by the studio that builds your website and edits your video. Priced per job.",
    media: slot('print-hero', 'Print work photo')
  }), React.createElement(Statement, null, "Print still works. A good flyer gets read, a clear poster gets noticed and signage tells people where to go. Ours match your website and your video, so your business looks like one business."), React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, React.createElement(SecHead, {
    label: "What we design",
    title: "Three things, done properly."
  }), React.createElement(Rows, {
    items: things
  }), React.createElement(MediaGrid, {
    prefix: "print-things",
    items: ['Flyers', 'Posters', 'Signage']
  })), React.createElement("section", {
    className: "sec panel"
  }, React.createElement("div", {
    className: "price-sec"
  }, React.createElement("p", {
    className: "big-price",
    "data-reveal": true
  }, React.createElement("small", null, "Print design starts from"), "\xA3150"), React.createElement("div", {
    className: "price-copy"
  }, React.createElement("p", {
    className: "label",
    "data-reveal": true
  }, "Pricing"), React.createElement("h2", {
    className: "h2",
    "data-split": true
  }, React.createElement(Dot, null, "Per job, not a retainer.")), React.createElement("p", {
    "data-reveal": true
  }, "Print design starts from \xA3150 a job. Tell us what you need and you get a price before we start. No monthly fee, nothing to cancel.")))), React.createElement("section", {
    className: "sec"
  }, React.createElement(SecHead, {
    label: "Process",
    title: "How it works."
  }), React.createElement(Rows, {
    items: steps
  })), React.createElement(TextSec, {
    label: "Print that works",
    title: "Designed for where it ends up.",
    panel: true,
    paras: ["A flyer gets a few seconds in someone's hand. A poster has to work from across the street. Signage has to be read at a glance. We design for the place it will be seen, with one clear message and one call to action.", React.createElement(React.Fragment, null, "We're a Liverpool studio working across the North West. For logos and brand assets, see ", React.createElement(Ilink, {to: "/graphic"}, "Graphic design"), ".")]
  }), React.createElement(FaqSection, {
    items: pageFaqs
  }), React.createElement(Finale, {
    title: "Need something printed?",
    body: "Tell us what it's for and where it's going. We'll send you a price."
  }));
}
mount(React.createElement(Print, null));