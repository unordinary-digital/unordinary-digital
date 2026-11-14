const svc = [['01', 'Website design and development', 'Fixed-price sites, built to look sharp, load fast and be found. You know the cost before we start.', 'See the website packages', 'website.html'], ['02', 'Video editing and motion graphics', 'Edits, captions, colour, sound, animated branding. The part of the job we absolutely love.', 'See video and motion', 'video.html']];
const around = [['Podcast editing', 'audio only, or audio and video.', 'podcast.html'], ['Google Business Profile', 'set up, posted to and kept up to date. Included in the website care plan.', 'google-business-profile.html'], ['Social media content', 'four pieces a month, written and scheduled for you.', 'social.html'], ['Graphic design', 'logos, social graphics and branded material. Per job.', 'graphic.html']];
const why = [['Clear prices.', 'Website packages start at a number you can see. Once we know the job, you get a fixed price in writing.'], ['One studio.', 'Site, video and the supporting bits come from the same people. Nothing gets lost between suppliers.'], ['Local.', "We're in Liverpool. We'll meet you for a stroll around Sefton Park, and we know which of your competitors have a terrible website."], ['Plain English.', 'No jargon, no padding, no monthly report that says nothing.']];
function Home() {
  return React.createElement(Page, {
    current: "index.html"
  }, React.createElement(ScrollHero, {
    big: true,
    title: "We are unordinary.",
    sub: "We take the stress out of managing your digital and online presence.",
    after: React.createElement(Band, {
      items: ['Websites', 'Video', 'Motion Graphics', 'Graphic Design']
    }),
    media: React.createElement(HeroVid, {
      src: "site/video/home-hero.mp4"
    })
  }, React.createElement("a", {
    className: "tlink",
    href: "website.html#packages",
    "data-transition": true
  }, "See website pricing")), React.createElement("section", {
    className: "sec",
    style: {
      paddingBottom: 0
    }
  }, React.createElement(SecHead, {
    label: "What we do",
    title: "Two things, done properly."
  }), React.createElement("div", {
    className: "svc-grid",
    "data-hover-preview": true
  }, svc.map(([n, t, d, l, h]) => React.createElement("a", {
    key: n,
    className: "ud-fill-row svc",
    "data-hover": true,
    href: h,
    "data-transition": true,
    "data-preview": n === '01' ? 'Website project' : 'Video still',
    "data-preview-img": n === '01' ? 'site/img/website-project.webp' : 'site/img/video-still.webp'
  }, React.createElement("span", {
    className: "ud-num"
  }, n), React.createElement("span", {
    className: "ud-title"
  }, React.createElement("span", {
    className: "svc-t"
  }, t), React.createElement("span", {
    className: "svc-d"
  }, d), React.createElement("span", {
    className: "svc-l"
  }, l)), React.createElement(Arrow, null))))), React.createElement("section", {
    className: "sec panel"
  }, React.createElement("div", {
    className: "around"
  }, React.createElement("div", null, React.createElement(SecHead, {
    label: "The stuff around it",
    title: "And the bits that usually get forgotten."
  }, "Once the site and the video are sorted, we can look after the rest. Pick what you need. Nothing is bundled, nothing is compulsory."), React.createElement("div", {
    className: "media-in around-media",
    "data-reveal": true,
    style: {
      aspectRatio: '4/3'
    }
  }, React.createElement("image-slot", {
    id: "home-around",
    shape: "rounded",
    radius: "12",
    placeholder: "Studio or client work"
  }))), React.createElement("div", {
    className: "ar-list"
  }, around.map(([t, d, h0], i) => {
    const h = HIDDEN.includes(h0) ? null : h0;
    const inner = React.createElement(React.Fragment, null, React.createElement("h3", null, t), React.createElement("p", null, d), h && React.createElement("span", {
      className: "go"
    }, React.createElement("i", {
      "data-feather": "arrow-right"
    })));
    return React.createElement("div", {
      key: i,
      "data-reveal": true,
      style: {
        transitionDelay: i * .08 + 's'
      }
    }, h ? React.createElement("a", {
      className: "ar-item",
      href: h,
      "data-transition": true
    }, inner) : React.createElement("div", {
      className: "ar-item"
    }, inner));
  })))), React.createElement("section", {
    className: "sec"
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
  }, "Retainer"), React.createElement("h2", {
    className: "h2",
    "data-split": true
  }, React.createElement(Dot, null, "Or have us on call."))), React.createElement("div", {
    className: "copy"
  }, React.createElement("p", {
    "data-reveal": true
  }, "unordinary.assistant is a monthly retainer. Up to 120 hours a month (30 hours a week) across anything we do, for \xA32,225. One studio, ready when you need it."), React.createElement("a", {
    className: "tlink",
    href: "assistant.html",
    "data-reveal": true,
    "data-transition": true
  }, "See unordinary.assistant")))), React.createElement("section", {
    className: "hs",
    "data-hscroll": true
  }, React.createElement("div", {
    className: "hs-in"
  }, React.createElement("div", {
    className: "wrap hs-head"
  }, React.createElement("p", {
    className: "label"
  }, "Why us"), React.createElement("h2", {
    className: "h2"
  }, React.createElement(Dot, null, "Why unordinary."))), React.createElement("div", {
    className: "track",
    "data-hscroll-track": true
  }, why.map(([t, d], i) => React.createElement("article", {
    key: i,
    className: "tile"
  }, React.createElement("span", {
    className: "tile-n"
  }, String(i + 1).padStart(2, '0')), React.createElement("div", null, React.createElement("h3", null, React.createElement(Dot, null, t)), React.createElement("p", null, d))))))), React.createElement(Finale, {
    title: "Got something that needs sorting?",
    body: "Tell us what you need. We'll reply within one working day with a straight answer and a price."
  }));
}
mount(React.createElement(Home, null));