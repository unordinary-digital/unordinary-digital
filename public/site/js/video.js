const feed = [['Instagram', 'Reels and Stories, cut vertical and captioned.'], ['YouTube', 'Shorts and long-form, with proper pacing and clean sound.'], ['TikTok', 'short, fast and native to the platform.']];
const levels = [['Simple edit', 'One clip, clean cuts, captions and music. Quick turnaround, usually 2-3 days.'], ['Standard edit', 'Multi-clip edits with colour correction, a proper sound mix and your branded intro and outro. Usually 3-5 days.'], ['Premium edit', 'Motion graphics, animated branding and multiple revision rounds. For work that needs to look the part.']];
const steps = [['Send the footage.', 'Tell us which platforms it\'s for and what it needs to do.'], ['Quote.', 'Fixed price, clear turnaround.'], ['Edit.', 'We cut it, grade it and mix it.'], ['Revisions.', 'You give feedback. We fix it.'], ['Delivery.', 'Files in the right format and ratio for each platform.']];
const fc = [['Pacing', 'we find the shape of the thing, cut what drags and keep what carries it.'], ['Sound', 'clean, even audio from the first minute to the last, because people forgive a soft picture before they forgive bad sound.'], ['Polish', 'colour, titles, graphics and captions that look like they belong together.']];
function FinalCut() {
  return React.createElement("section", {
    className: "fc"
  }, React.createElement("div", {
    className: "fc-bg"
  }, React.createElement("img", {
    src: "site/img/final-cut-bg.webp",
    alt: ""
  })), React.createElement("div", {
    className: "fc-in wrap"
  }, React.createElement("div", {
    className: "fc-head"
  }, React.createElement("p", {
    className: "label",
    "data-reveal": true
  }, "The Final Cut"), React.createElement("h2", {
    "data-split": true
  }, React.createElement(Dot, null, "When the video is longer than a minute.")), React.createElement("p", {
    className: "fc-intro",
    "data-reveal": true
  }, "Short clips get the attention. Long-form earns the trust. We cut both, and we're not precious about length. YouTube episodes, interviews, talks, tutorials, brand films and event recordings get the same care as a Reel.")), React.createElement("div", {
    className: "fc-list"
  }, fc.map(([t, d], i) => React.createElement("div", {
    key: t,
    "data-reveal": true,
    style: {
      transitionDelay: i * .1 + 's'
    }
  }, React.createElement("span", {
    className: "fc-n"
  }, String(i + 1).padStart(2, '0')), React.createElement("h3", null, t), React.createElement("p", null, d)))), React.createElement("p", {
    className: "fc-note",
    "data-reveal": true
  }, "Cut long, then cut short: every long-form edit can come with clips for Instagram, YouTube Shorts and TikTok.")));
}
function Video() {
  return React.createElement(Page, {
    current: "video.html"
  }, React.createElement(ScrollHero, {
    eyebrow: "Video & Motion",
    title: "Video that gets watched.",
    sub: "Social-first editing and motion graphics for Instagram, YouTube and TikTok. Sharp cuts, clean sound, no filler.",
    media: React.createElement(HeroVid, {
      src: "site/video/video-hero.mp4"
    })
  }), React.createElement(Statement, null, "Most of your customers will see your video on a phone, in a feed, with the sound off. We edit for that first: captions, hooks and framing built for Instagram, YouTube and TikTok. Send us what you've shot and we'll turn it into something people actually watch to the end."), React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, React.createElement(SecHead, {
    label: "Social first",
    title: "Made for the feed."
  }), React.createElement(Rows, {
    items: feed
  }), React.createElement(MediaGrid, {
    prefix: "video-feed",
    ratio: "9/16",
    items: ['Instagram', 'YouTube', 'TikTok']
  }), React.createElement("p", {
    className: "lv-note",
    "data-reveal": true
  }, "One shoot can become a week of content. Tell us where it's going and we'll cut it to fit, in the right ratio and length for each platform.")), React.createElement(FinalCut, null), React.createElement("section", {
    className: "sec panel"
  }, React.createElement(SecHead, {
    label: "What we do",
    title: "Three levels. One standard."
  }), React.createElement("div", {
    className: "lv-grid"
  }, levels.map(([t, d], i) => React.createElement("div", {
    key: t,
    "data-reveal": true,
    style: {
      transitionDelay: i * .12 + 's'
    }
  }, React.createElement("article", {
    className: 'lv lv-' + (i + 1)
  }, React.createElement("span", {
    className: "lv-dots"
  }, [0, 1, 2].map(k => React.createElement("i", {
    key: k,
    className: k <= i ? 'on' : ''
  }))), React.createElement("div", null, React.createElement("h3", {
    style: i === 2 ? {
      color: 'var(--white)'
    } : null
  }, t), React.createElement("p", null, d)))))), React.createElement("p", {
    className: "lv-note",
    "data-reveal": true
  }, "Every video is priced on what's in it. Tell us what you've got and we'll send a quote. Batches of four or more videos get 10% off.")), React.createElement("section", {
    className: "sec",
    style: {
      paddingBottom: 0
    }
  }, React.createElement("div", {
    className: "sec-head",
    style: {
      marginBottom: '5vh'
    }
  }, React.createElement("p", {
    className: "label",
    "data-reveal": true
  }, "Good for")), React.createElement(Band, {
    items: ['Instagram Reels and Stories', 'TikTok and YouTube Shorts', 'YouTube and long-form', 'Promo and brand films', 'Testimonials and case studies', 'Animated logos and titles']
  })), React.createElement("section", {
    className: "sec"
  }, React.createElement(SecHead, {
    label: "Process",
    title: "How it works."
  }), React.createElement(Rows, {
    items: steps
  })), React.createElement(Finale, {
    title: "Got footage sitting on a hard drive?",
    body: "Send it over. We'll tell you what we can do with it."
  }));
}
mount(React.createElement(Video, null));