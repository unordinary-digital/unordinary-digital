const pkgs = [['One-pager', 'from', '£950', '', ['One page, everything on it', 'Copy written with you', 'Contact form and enquiry alerts', 'Live in about two weeks']], ['Standard site', 'from', '£2,400', '', ['Up to six pages', 'Blog or work section', 'Search groundwork and analytics', 'Live in about four weeks']], ['Care plan', '', '£225', 'a month', ['Hosting, domains and renewals', 'Google Business Profile posting', 'Small changes, up to five hours a month', 'Backups and updates checked', 'Cancel whenever you like'], true]];
const steps = [['Brief.', 'We talk. You tell us what the site needs to do.'], ['Quote.', 'You get a fixed price in writing and a clear scope.'], ['Design and build.', 'We make it. You review it.'], ['Revisions.', "We refine it until it's right."], ['Launch.', 'It goes live, on the date we agreed.']];
const faqs = [['How long does a site take?', 'A one-pager is live in about two weeks. A standard site takes about four to six.'], ['What will my site be built on?', 'Whatever suits the job. We choose the platform for each project and explain why before we start.'], ['Do you write the copy?', "On a one-pager, we write it with you. For anything bigger, tell us what you need and we'll quote it."], ['What does the care plan cover?', "Hosting, domains and renewals, Google Business Profile posting, small changes up to five hours a month, and backups and updates checked. It's £225 a month, and you can cancel whenever you like."], ['What if I need more than six pages?', "Tell us what you need and we'll quote it. The prices above are where we start, not where we stop."]];
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
function Website() {
  return React.createElement(Page, {
    current: "website.html"
  }, React.createElement(ScrollHero, {
    eyebrow: "Website",
    title: "Websites that earn their keep.",
    sub: "Designed, built and launched by one studio. Clear packages, a fixed price in writing, no surprise invoices.",
    media: slot('web-hero', 'Website project screenshot')
  }), React.createElement(Statement, null, "Most business websites are either expensive, slow to arrive or quietly out of date. Ours aren't. We build clean, fast, mobile-friendly sites, and we tell you exactly what it costs before we start."), React.createElement("section", {
    className: "sec panel",
    id: "packages"
  }, React.createElement(SecHead, {
    label: "Packages",
    title: "A starting point, not a menu."
  }), React.createElement("div", {
    className: "pk-grid"
  }, pkgs.map(([n, from, p, per, items, dark], i) => React.createElement("div", {
    key: n,
    "data-reveal": true,
    style: {
      transitionDelay: i * .1 + 's'
    }
  }, React.createElement(UD.Card, {
    padding: "clamp(28px,2.6vw,40px)",
    style: {
      width: '100%',
      ...(dark ? {
        background: 'var(--charcoal)',
        color: 'var(--white)'
      } : {})
    }
  }, React.createElement("div", {
    className: 'pk' + (dark ? ' pk-dark' : '')
  }, React.createElement("h3", {
    style: dark ? {
      color: 'var(--white)'
    } : null
  }, n), React.createElement("p", {
    className: "pk-price"
  }, from && React.createElement("small", null, from), p, per && React.createElement("small", null, per)), React.createElement("ul", null, items.map(t => React.createElement("li", {
    key: t
  }, t)))))))), React.createElement("p", {
    className: "pk-note",
    "data-reveal": true
  }, "A starting point, not a menu. Once we know the job, you get a fixed price in writing.")), React.createElement("section", {
    className: "sec"
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
    title: "Ready for a website that works?",
    body: "Tell us what you're after. You'll get a straight answer and a price."
  }));
}
mount(React.createElement(Website, null));