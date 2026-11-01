const bits = [['Setup and tidy-up', 'correct details, categories, opening hours and photos.'], ['Regular posts', "offers, news and updates, so the profile doesn't sit there gathering dust."], ['Kept up to date', "details and photos that match what's true this month, not last year."]];
const steps = [['Brief.', "Tell us about the business and where you're based."], ['Check.', 'We look at what Google shows for you today.'], ['Fix.', 'We correct and complete the profile.'], ['Post.', 'We keep it active from then on.']];
function GBP() {
  return React.createElement(Page, {
    current: "google-business-profile.html"
  }, React.createElement(ScrollHero, {
    eyebrow: "Google Business Profile",
    title: "Get found when people search nearby.",
    sub: "We set up and look after your Google Business Profile, so customers can find you, check you out and get in touch.",
    media: slot('gbp-hero', 'Google Business Profile example')
  }), React.createElement(Statement, null, "When someone searches for a business like yours, your Google Business Profile is often the first thing they see. Before your website. Before your Instagram. An empty or out-of-date one costs you customers. We keep yours accurate, active and worth clicking."), React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, React.createElement(SecHead, {
    label: "What we do",
    title: "The bits that matter."
  }), React.createElement(Rows, {
    items: bits
  })), React.createElement("section", {
    className: "sec panel"
  }, React.createElement("div", {
    className: "plan-grid"
  }, React.createElement("div", {
    "data-reveal": true,
    style: {
      display: 'flex'
    }
  }, React.createElement("article", {
    className: "plan dark",
    style: {
      width: '100%'
    }
  }, React.createElement("p", {
    className: "label"
  }, "With a website"), React.createElement("div", {
    className: "copy"
  }, React.createElement("h2", null, React.createElement(Dot, null, "Part of the care plan.")), React.createElement("p", null, "Google Business Profile posting is included in the website care plan: \xA3225 a month, alongside hosting, domains and renewals, small changes, and backups. See ", React.createElement("a", {
    className: "ilink",
    href: "website.html#packages",
    "data-transition": true
  }, "Website"), ".")))), React.createElement("div", {
    "data-reveal": true,
    style: {
      display: 'flex',
      transitionDelay: '.1s'
    }
  }, React.createElement("article", {
    className: "plan",
    style: {
      width: '100%'
    }
  }, React.createElement("p", {
    className: "label"
  }, "On its own"), React.createElement("div", {
    className: "copy"
  }, React.createElement("h2", null, React.createElement(Dot, null, "Already have a website?")), React.createElement("p", null, "We can look after the profile without one. Tell us what you need and we'll quote it.")))))), React.createElement("section", {
    className: "sec"
  }, React.createElement(SecHead, {
    label: "Process",
    title: "How it works."
  }), React.createElement(Rows, {
    items: steps
  })), React.createElement(Finale, {
    title: "Not sure what Google says about you?",
    body: "Tell us the business name and where you are. We'll come back with a price."
  }));
}
mount(React.createElement(GBP, null));