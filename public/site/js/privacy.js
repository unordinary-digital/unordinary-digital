const ICO = 'https://ico.org.uk/make-a-complaint/';
const MAIL = ['mailto:hello@unordinary.digital', 'hello@unordinary.digital'];
// ['!', text] marks details still to be filled in before publishing.
const POLICY = [['p', "This policy explains what personal information unordinary. digital collects through this website, why, who we share it with and what your rights are. We've kept it short and in plain English. If anything's unclear, email us at ", MAIL, "."], ['h', 'Who we are'], ['p', "unordinary. digital is a digital studio based in Liverpool. For the purposes of UK data protection law (the UK GDPR and the Data Protection Act 2018) we are the controller of the personal information described here."], ['ul', [['Business: ', 'unordinary.digital'], ['Address: ', 'Jordan Street, Baltic Creative, Liverpool L2 0TH'], ['Email: ', MAIL]]], ['h', 'What we collect and why'], ['p', "When you use our contact form or email us, we collect your name, email address, business name (if you give it), the service you're interested in and anything you write in your message. We use it to reply to your enquiry, give you a quote and, if we end up working together, to deliver and invoice the work."], ['p', "Our lawful basis is legitimate interests (answering people who contact us) and, where it leads to work, taking steps to enter into and perform a contract with you."], ['p', "When you visit the site, our hosting provider automatically processes technical information such as your IP address, browser type and the pages you request. This is needed to deliver the site to you and keep it secure, and our lawful basis is legitimate interests."], ['p', "If you agree to analytics cookies, we use Google Analytics to understand how people find and use the site, such as which pages are visited and roughly where visitors are. We can't identify you personally from this. Our lawful basis is your consent, which you can withdraw at any time."], ['p', "We don't sell your information, use it for automated decision-making, or add you to a mailing list without asking."], ['h', 'Cookies and similar technologies'], ['ul', [['Theme preference: ', "if you switch between light and dark mode, your choice is saved in your browser so it's remembered next time. It never leaves your device and doesn't need your consent."], ['Analytics (only with your consent): ', "Google Analytics sets cookies named _ga and _ga_* which last up to two years. We only set them if you accept analytics cookies."]]], ['p', "You can change your mind about analytics cookies at any time, and you can block or delete cookies in your browser settings."], ['h', 'Who we share it with'], ['p', "We only share your information with services that help us run the website and the business, all of which process it on our behalf:"], ['ul', [['Formspree', " receives contact form submissions and forwards them to us by email."], ['Cloudflare', " hosts the website and protects it from attacks."], ['Google', " provides Google Tag Manager, Google Analytics (with your consent) and the fonts used on the site, which means your browser connects to Google's servers."], ['Apple', " (iCloud Mail) hosts our email."]]], ['p', "Some of these providers are based in, or store data in, the United States. Where that happens, the transfer is protected by the UK Extension to the EU-US Data Privacy Framework or by the UK's International Data Transfer Agreement or Addendum."], ['p', "We may also share information if the law requires it, for example with HMRC."], ['h', 'How long we keep it'], ['ul', ["Enquiries that don't lead to work: up to 2 years, then deleted.", "Client records and invoices: 6 years after the end of the tax year they relate to, as required by HMRC.", "Analytics data: 14 months, then deleted automatically by Google Analytics."]], ['h', 'Your rights'], ['p', "Under UK data protection law you have the right to:"], ['ul', ["ask for a copy of the personal information we hold about you", "ask us to correct anything that's wrong or incomplete", "ask us to delete your information", "ask us to limit how we use it, or object to us using it", "ask us to send your information to you or another organisation", "withdraw your consent at any time, where we rely on consent"]], ['p', "To use any of these rights, email ", MAIL, ". It's free, and we'll respond within one month."], ['h', 'Complaints'], ['p', "If you're unhappy with how we've handled your information, please tell us first so we can put it right. You also have the right to complain to the Information Commissioner's Office (ICO), the UK's data protection regulator, at ", [ICO, 'ico.org.uk'], " or on 0303 123 1113."], ['h', 'Changes to this policy'], ['p', "If we change how we handle personal information, we'll update this page and the date at the top."]];
const inline = parts => parts.map((p, i) => !Array.isArray(p) ? p : p[0] === '!' ? React.createElement("mark", {
  key: i
}, "[", p[1], "]") : React.createElement("a", {
  key: i,
  href: p[0],
  target: p[0].startsWith('http') ? '_blank' : undefined,
  rel: p[0].startsWith('http') ? 'noopener' : undefined
}, p[1]));
function Privacy() {
  return React.createElement(Page, {
    current: "privacy.html"
  }, React.createElement(Hero, {
    eyebrow: "Legal",
    compact: true,
    cta: false,
    title: "Privacy policy.",
    sub: "Last updated 1 November 2026."
  }), React.createElement("section", {
    className: "prose wrap",
    "data-reveal": true
  }, POLICY.map(([t, ...rest], i) => t === 'h' ? React.createElement("h2", {
    key: i
  }, rest[0]) : t === 'ul' ? React.createElement("ul", {
    key: i
  }, rest[0].map((li, j) => React.createElement("li", {
    key: j
  }, Array.isArray(li) ? inline(li) : li))) : React.createElement("p", {
    key: i
  }, inline(rest)))), React.createElement(Finale, null));
}
mount(React.createElement(Privacy, null));
