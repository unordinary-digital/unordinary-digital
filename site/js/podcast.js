const ways = [['Audio only', 'cleaned up, levelled and cut down to the good bits, ready to publish.'], ['Audio and video', 'the same, plus a video edit with captions, cut for YouTube and social.']];
const steps = [['Talk.', 'Tell us about the show, how often it comes out and where it goes.'], ['Plan.', 'We agree the format and how you want it to sound.'], ['Edit.', 'You send the recording. We clean it up and cut it.'], ['Review.', "You hear it before it goes out. We fix anything you'd change."], ['Repeat.', 'Same process, every episode.']];
function Podcast() {
  return React.createElement(Page, {
    current: "podcast.html"
  }, React.createElement(ScrollHero, {
    eyebrow: "Podcast editing",
    ctaLabel: "Get in touch",
    title: "Podcast editing that makes you sound good.",
    sub: "Audio only, or audio and video. Clean sound, tidy cuts and the same people every episode.",
    media: React.createElement(HeroVid, {
      src: "site/video/podcast-hero.mp4"
    })
  }), React.createElement(Statement, null, "A good podcast shouldn't sound like it was recorded in a stairwell, or cost its host a weekend to edit. Send us the recording and we'll turn it into an episode you're happy to publish. Then we do it again next week."), React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, React.createElement(SecHead, {
    label: "Two ways we work",
    title: "Audio, or audio and video."
  }), React.createElement(Rows, {
    items: ways
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
  }, "Long term"), React.createElement("h2", {
    className: "h2",
    "data-split": true
  }, React.createElement(Dot, null, "Built for the long run."))), React.createElement("div", {
    className: "copy"
  }, React.createElement("p", {
    "data-reveal": true
  }, "A podcast works when it keeps coming out. So we work with shows over the long term, not one episode at a time. The same people edit every episode, so we learn your voice, your format and what you'd cut. We build the setup around how often you publish, and we keep it running.")))), React.createElement("section", {
    className: "sec"
  }, React.createElement(SecHead, {
    label: "Process",
    title: "How it works."
  }), React.createElement(Rows, {
    items: steps
  })), React.createElement(Finale, {
    title: "Got a show to look after?",
    body: "Tell us about the podcast and how often it comes out. We'll take it from there.",
    ctaLabel: "Get in touch"
  }));
}
mount(React.createElement(Podcast, null));