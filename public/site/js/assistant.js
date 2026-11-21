const covered = [['Websites', "single pages, landing pages and changes. Large website builds aren't included."], ['Video and motion', 'edits, captions, animated branding.'], ['Podcast editing', 'audio only, or audio and video.'], ['Social media', 'content, copy and scheduling.'], ['Design', 'graphic and print.'], ['Google Business Profile', 'posts and upkeep.']];
const goodFor = ['Have more client work than the team can comfortably deliver.', 'Need web, video and design support without hiring for it.', 'Want one reliable studio and one point of contact for all of it.'];
const faqs = [["Who is this for?", "Agencies with more client work than the team can comfortably deliver, and no wish to hire for the busy spells. You send the work. We deliver it."], ["What can you take on?", "Single pages, landing pages and website changes, video and motion, podcast editing, social media content, graphic and print design, and Google Business Profile upkeep. Large website builds aren't included."], ["How does work get to you?", "You send requests as they come up and we pick them up. At the start we agree priorities and how you'll send work over."], ["How are hours tracked?", "In Clockify, and we report them to you, so you can see where the time has gone."], ["What if we need more than 120 hours?", "Extra hours are available, and we'll tell you before you go over."], ["Can we cancel?", "Yes, with 30 days' notice. The retainer is billed monthly in advance."]];
function Faq() {
  const [open, setOpen] = React.useState(0);
  return React.createElement("div", {
    className: "faq-list"
  }, faqs.map(([q, a], i) => React.createElement("div", {
    key: i,
    "data-reveal": true,
    style: {
      transitionDelay: i * .06 + 's'
    }
  }, React.createElement("div", {
    className: open === i ? 'open' : ''
  }, React.createElement("button", {
    className: "faq-q",
    onClick: () => setOpen(open === i ? -1 : i),
    "aria-expanded": open === i
  }, q, React.createElement("span", {
    className: "pm"
  })), React.createElement("div", {
    className: "faq-a"
  }, React.createElement("div", null, React.createElement("p", null, a)))))));
}

const steps = [['Talk.', "Tell us what you'd want covered in a typical month."], ['Plan.', "We agree priorities and how you'll send work over."], ['Send.', 'Requests come in as they come up. We pick them up.'], ['Deliver.', "You review the work. We fix anything you'd change."], ['Repeat.', 'Same again next month, with a studio that already knows the business.']];
function Assistant() {
  return React.createElement(Page, {
    current: "assistant.html"
  }, React.createElement(ScrollHero, {
    eyebrow: "unordinary.assistant",
    ctaLabel: "Get in touch",
    title: "Extra hands for your agency.",
    sub: "A monthly retainer for agencies with more work than team. Up to 120 hours a month (30 hours a week) across websites, video, social and design.",
    media: slot('assistant-hero', 'unordinary.assistant')
  }), React.createElement(Statement, null, "Agency work arrives in waves. Hiring for the busy spells is slow, and turning work away isn't much better. unordinary.assistant is a steady block of studio hours your team can send work to as it comes up. We get on with it."), React.createElement("section", {
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
  }, "Good for agencies that:")), React.createElement("div", {
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
  })), React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, React.createElement("div", {
    className: "faq"
  }, React.createElement("div", {
    className: "sec-head",
    style: {
      padding: 0
    }
  }, React.createElement("h2", {
    "data-split": true
  }, "FAQ")), React.createElement(Faq, null))), React.createElement(Finale, {
    title: "Need extra capacity?",
    body: "Tell us what your agency would send over in a typical month. We'll tell you whether 120 hours does it.",
    ctaLabel: "Get in touch"
  }));
}
mount(React.createElement(Assistant, null));
