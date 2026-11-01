const gets = [['Four pieces of content', ''], ['Written copy for every post', ''], ['Scheduling on up to two platforms', '']];
const steps = [['Brief.', 'Tell us about the business, who you want to reach and what you want to be known for.'], ['Plan.', 'We agree the platforms and the kind of content.'], ['Create.', "We write and make the month's content."], ['Approve.', 'You see it before it goes out.'], ['Post.', 'We schedule it and keep it going.']];
function Social() {
  return React.createElement(Page, {
    current: "social.html"
  }, React.createElement(ScrollHero, {
    eyebrow: "Social media",
    title: "Social media that actually gets posted.",
    sub: "Four pieces of content a month, written and scheduled for you. You run the business. We keep the feed alive.",
    media: slot('social-hero', 'Social content example')
  }), React.createElement(Statement, null, "Most business accounts start well and go quiet by March. We fix that. We write the posts, make the content and schedule it, so your accounts keep showing up without eating your week."), React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, React.createElement(SecHead, {
    label: "What you get",
    title: "What you get each month."
  }), React.createElement(Rows, {
    items: gets
  }), React.createElement("p", {
    className: "lv-note",
    "data-reveal": true
  }, "Instagram, YouTube and TikTok are the usual picks. Want video in the mix? We edit that too. See ", React.createElement("a", {
    className: "ilink",
    href: "video.html",
    "data-transition": true
  }, "Video & Motion"), ".")), React.createElement("section", {
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
    className: "big-h2",
    "data-split": true
  }, React.createElement(Dot, null, "\xA3350 a month."))), React.createElement("div", {
    className: "copy"
  }, React.createElement("p", {
    "data-reveal": true
  }, "Billed monthly in advance. Cancel with 30 days' notice.")))), React.createElement("section", {
    className: "sec"
  }, React.createElement(SecHead, {
    label: "Process",
    title: "How it works."
  }), React.createElement(Rows, {
    items: steps
  })), React.createElement(Finale, {
    title: "Want your socials sorted?",
    body: "Tell us what the business does and where your customers are. We'll come back with a price."
  }));
}
mount(React.createElement(Social, null));