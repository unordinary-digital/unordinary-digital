const covered = [['Websites', "single pages, landing pages and changes. Large website builds aren't included."], ['Video and motion', 'edits, captions, animated branding.'], ['Podcast editing', 'audio only, or audio and video.'], ['Social media', 'content, copy and scheduling.'], ['Design', 'graphic and print.'], ['Google Business Profile', 'posts and upkeep.']];
const goodFor = ['Have a steady stream of digital work, not a single project.', "Don't have an in-house team, or have one that's stretched.", 'Want one studio and one point of contact for all of it.'];
const steps = [['Talk.', "Tell us what you'd want covered in a typical month."], ['Plan.', "We agree priorities and how you'll send work over."], ['Send.', 'Requests come in as they come up. We pick them up.'], ['Deliver.', "You review the work. We fix anything you'd change."], ['Repeat.', 'Same again next month, with a studio that already knows the business.']];
function Assistant() {
  return React.createElement(Page, {
    current: "assistant.html"
  }, React.createElement(ScrollHero, {
    eyebrow: "unordinary.assistant",
    ctaLabel: "Get in touch",
    title: "A studio on call.",
    sub: "One monthly retainer. Up to 120 hours a month (30 hours a week), across anything we do.",
    media: slot('assistant-hero', 'unordinary.assistant')
  }), React.createElement(Statement, null, "Most businesses don't need one big project. They need a steady run of small ones, and someone who already knows the business to pick them up. unordinary.assistant is that. Send the work as it comes up and we get on with it."), React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, React.createElement(SecHead, {
    label: "What's covered",
    title: "Anything we do."
  }), React.createElement(Rows, {
    items: covered
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
    className: "big-h2",
    "data-split": true
  }, React.createElement(Dot, null, "\xA32,225 a month."))), React.createElement("div", {
    className: "copy"
  }, React.createElement("p", {
    "data-reveal": true
  }, "Up to 120 hours of work each month (30 hours a week), in any mix of services. Billed monthly in advance. Unused hours are still billed at the full monthly cost. Cancel with 30 days' notice."), React.createElement("p", {
    "data-reveal": true
  }, "Extra hours are \xA350 an hour, and we'll tell you before you go over. Hours are tracked and reported using Clockify.")))), React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "split2"
  }, React.createElement("div", {
    className: "sec-head",
    style: {
      padding: 0,
      margin: 0
    }
  }, React.createElement("p", {
    className: "label",
    "data-reveal": true
  }, "Who it's for"), React.createElement("h2", {
    className: "h2",
    "data-split": true
  }, "Good for businesses that:")), React.createElement("div", {
    className: "practice"
  }, goodFor.map((t, i) => React.createElement("div", {
    key: i,
    "data-reveal": true,
    style: {
      transitionDelay: i * .08 + 's'
    }
  }, React.createElement("b", null, String(i + 1).padStart(2, '0')), React.createElement("span", null, t)))))), React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, React.createElement(SecHead, {
    label: "Process",
    title: "How it works."
  }), React.createElement(Rows, {
    items: steps
  })), React.createElement(Finale, {
    title: "Need a studio on call?",
    body: "Tell us what you'd want covered each month. We'll tell you whether 120 hours does it.",
    ctaLabel: "Get in touch"
  }));
}
mount(React.createElement(Assistant, null));
