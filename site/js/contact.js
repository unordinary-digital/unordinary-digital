function ContactForm() {
  const [f, setF] = React.useState({
    name: '',
    email: '',
    biz: '',
    need: 'Website',
    more: ''
  });
  const [err, setErr] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const set = k => v => setF(s => ({
    ...s,
    [k]: v
  }));
  const submit = () => {
    const e = {};
    if (!f.name.trim()) e.name = 'Tell us your name.';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'We need an email we can reply to.';
    setErr(e);
    if (!Object.keys(e).length) setSent(true);
  };
  if (sent) return React.createElement("div", {
    className: "sent"
  }, React.createElement("h2", null, React.createElement(Dot, null, "Got it.")), React.createElement("p", null, "We'll be in touch within one working day."));
  return React.createElement("div", {
    className: "form"
  }, React.createElement("div", {
    className: "form-2"
  }, React.createElement(UD.Input, {
    label: "Name",
    value: f.name,
    onChange: set('name'),
    error: err.name
  }), React.createElement(UD.Input, {
    label: "Email",
    type: "email",
    value: f.email,
    onChange: set('email'),
    error: err.email
  })), React.createElement(UD.Input, {
    label: "Business name",
    value: f.biz,
    onChange: set('biz')
  }), React.createElement("div", null, React.createElement("span", {
    className: "fl"
  }, "What do you need?"), React.createElement("div", {
    className: "radios"
  }, ['Website', 'Video', 'Something else'].map(o => React.createElement(UD.Radio, {
    key: o,
    label: o,
    checked: f.need === o,
    onChange: () => set('need')(o)
  })))), React.createElement("label", null, React.createElement("span", {
    className: "fl"
  }, "Tell us a bit more"), React.createElement("textarea", {
    className: "ta",
    value: f.more,
    onChange: e => set('more')(e.target.value)
  })), React.createElement("div", null, React.createElement(UD.Button, {
    variant: "accent",
    size: "lg",
    onClick: submit
  }, "Send it")));
}
function Contact() {
  return React.createElement(Page, {
    current: "contact.html"
  }, React.createElement(Hero, {
    eyebrow: "Contact",
    compact: true,
    cta: false,
    title: "Tell us what you need.",
    sub: "We'll reply within one working day with a straight answer and a price."
  }), React.createElement("section", {
    className: "ct-grid"
  }, React.createElement("div", {
    "data-reveal": true
  }, React.createElement(ContactForm, null)), React.createElement("div", {
    className: "direct",
    "data-reveal": true,
    style: {
      transitionDelay: '.12s'
    }
  }, React.createElement("div", null, React.createElement("span", null, "Email"), React.createElement("a", {
    href: "mailto:hello@unordinary.digital"
  }, "hello@unordinary.digital")), React.createElement("div", null, React.createElement("span", null, "Instagram"), React.createElement("a", {
    href: "https://instagram.com/unordinary.digital",
    target: "_blank",
    rel: "noopener"
  }, "instagram.com/unordinary.digital")), React.createElement("div", null, React.createElement("span", null, "Location"), React.createElement("p", null, "Liverpool")))), React.createElement(Finale, null));
}
mount(React.createElement(Contact, null));