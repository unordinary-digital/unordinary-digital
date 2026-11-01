const UD = window.UnordinaryDigitalDesignSystem_709a4c;
const HIDDEN = ['print.html', 'social.html', 'google-business-profile.html'];
const SERVICES = [['podcast.html', 'Podcast editing'], ['social.html', 'Social media'], ['graphic.html', 'Graphic design'], ['print.html', 'Print design'], ['google-business-profile.html', 'Google Business Profile']].filter(([h]) => !HIDDEN.includes(h));
const NAV = [['website.html', 'Website'], ['video.html', 'Video & Motion'], ...SERVICES, ['liverpool.html', 'Liverpool'], ['contact.html', 'Contact']];
const MENU = [['website.html', 'Website'], ['video.html', 'Video & Motion']];
const getTheme = () => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
function useTheme() {
  const [t, setT] = React.useState(getTheme());
  React.useEffect(() => {
    const on = () => setT(getTheme());
    addEventListener('ud-theme', on);
    return () => removeEventListener('ud-theme', on);
  }, []);
  return t;
}
function toggleTheme() {
  const n = getTheme() === 'dark' ? 'light' : 'dark',
    r = document.documentElement;
  r.classList.add('theme-anim');
  setTimeout(() => r.classList.remove('theme-anim'), 500);
  r.dataset.theme = n;
  try {
    localStorage.setItem('ud-theme', n);
  } catch (e) {}
  dispatchEvent(new Event('ud-theme'));
}
function ThemeToggle() {
  const t = useTheme();
  return React.createElement("button", {
    className: "theme-btn",
    onClick: toggleTheme,
    "aria-label": t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
    title: t === 'dark' ? 'Light mode' : 'Dark mode'
  }, t === 'dark' ? React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.5"
  }), React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  })) : React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
  })));
}
const go = h => UDMotion.transition(() => {
  location.href = h;
});
function Dot({
  children
}) {
  const arr = React.Children.toArray(children);
  if (arr.length === 1 && React.isValidElement(arr[0]) && arr[0].props.children != null) return React.cloneElement(arr[0], {}, React.createElement(Dot, null, arr[0].props.children));
  if (!arr.every(c => typeof c === 'string' || typeof c === 'number')) return children;
  const m = arr.join('').match(/^(.*?)([.?!])$/);
  if (!m) return children;
  const t = m[1],
    i = t.lastIndexOf(' ');
  return React.createElement(React.Fragment, null, i < 0 ? '' : t.slice(0, i + 1), React.createElement("span", null, t.slice(i + 1), React.createElement("span", {
    className: "o"
  }, m[2])));
}
const Arrow = ({
  cls = 'ud-arrow'
}) => React.createElement("span", {
  className: cls
}, React.createElement("i", {
  "data-feather": "arrow-right"
}));
function QuoteBtn({
  variant = 'accent',
  size = 'md',
  label = 'Get a quote'
}) {
  return React.createElement("span", {
    className: "mag",
    "data-magnetic": true
  }, React.createElement(UD.Button, {
    variant: variant,
    size: size,
    onClick: () => go('contact.html')
  }, label));
}
function Nav({
  current
}) {
  const [open, setOpen] = React.useState(false);
  const dark = useTheme() === 'dark';
  const navLogo = open !== dark ? 'site/logo-white.png' : 'site/logo-charcoal.png';
  return React.createElement(React.Fragment, null, React.createElement("header", {
    className: 'nav' + (open ? ' is-menu' : ''),
    id: "nav"
  }, React.createElement("a", {
    href: "index.html",
    "data-transition": true,
    className: "nav-logo"
  }, React.createElement("img", {
    src: navLogo,
    alt: "unordinary. digital"
  })), React.createElement("nav", {
    className: "nav-links"
  }, MENU.map(([h, l]) => React.createElement("a", {
    key: h,
    className: 'nl' + (current === h ? ' is-current' : ''),
    href: h,
    "data-transition": true
  }, l)), React.createElement("div", {
    className: "dd"
  }, React.createElement("button", {
    className: 'nl dd-btn' + (SERVICES.some(([h]) => h === current) ? ' is-current' : ''),
    "aria-haspopup": "true"
  }, "Services", React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))), React.createElement("div", {
    className: "dd-menu"
  }, SERVICES.map(([h, l]) => React.createElement("a", {
    key: h,
    href: h,
    className: current === h ? 'is-current' : '',
    "data-transition": true
  }, l)))), React.createElement("a", {
    className: 'nl' + (current === 'contact.html' ? ' is-current' : ''),
    href: "contact.html",
    "data-transition": true
  }, "Contact"), React.createElement(ThemeToggle, null), React.createElement("span", {
    style: {
      visibility: open ? 'hidden' : 'visible'
    }
  }, React.createElement(QuoteBtn, null)), React.createElement("button", {
    className: "menu-btn",
    onClick: () => setOpen(!open),
    "aria-expanded": open
  }, open ? 'Close' : 'Menu', React.createElement("i", null, React.createElement("b", null), React.createElement("b", null))))), React.createElement("div", {
    className: 'menu' + (open ? ' is-open' : ''),
    "aria-hidden": !open
  }, React.createElement("a", {
    href: "index.html",
    "data-transition": true
  }, "Home"), MENU.map(([h, l]) => React.createElement("a", {
    key: h,
    href: h,
    className: current === h ? 'is-current' : '',
    "data-transition": true
  }, l)), React.createElement("div", {
    className: "menu-sub"
  }, SERVICES.map(([h, l]) => React.createElement("a", {
    key: h,
    href: h,
    className: current === h ? 'is-current' : '',
    "data-transition": true
  }, l))), React.createElement("a", {
    href: "contact.html",
    className: current === 'contact.html' ? 'is-current' : '',
    "data-transition": true
  }, "Contact"), React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, React.createElement(UD.Button, {
    variant: "accent",
    size: "lg",
    onClick: () => go('contact.html')
  }, "Get a quote"))));
}
function Hero({
  eyebrow,
  title,
  sub,
  cta = true,
  compact,
  children
}) {
  return React.createElement("section", {
    className: 'hero wrap' + (compact ? ' hero-compact' : '')
  }, eyebrow && React.createElement("p", {
    className: "eyebrow",
    "data-reveal": true
  }, eyebrow), React.createElement("h1", {
    "data-split": true
  }, React.createElement(Dot, null, title)), React.createElement("div", {
    className: "hero-foot"
  }, React.createElement("p", {
    className: "lead",
    "data-reveal": true,
    style: {
      transitionDelay: '.5s'
    }
  }, sub), cta && React.createElement("div", {
    "data-reveal": true,
    style: {
      transitionDelay: '.65s'
    }
  }, React.createElement("div", {
    className: "hero-ctas"
  }, React.createElement(QuoteBtn, {
    variant: "primary",
    size: "lg"
  }), children))));
}
function SecHead({
  label,
  title,
  children
}) {
  return React.createElement("div", {
    className: "sec-head"
  }, label && React.createElement("p", {
    className: "label",
    "data-reveal": true
  }, label), React.createElement("h2", {
    "data-split": true
  }, React.createElement(Dot, null, title)), children && React.createElement("p", {
    className: "sec-intro",
    "data-reveal": true
  }, children));
}
function Rows({
  items,
  num = true
}) {
  return React.createElement("div", {
    className: "rows"
  }, items.map(([t, d], i) => React.createElement("div", {
    key: i,
    className: "ud-fill-row step",
    "data-hover": true
  }, React.createElement("span", {
    className: "ud-num"
  }, String(i + 1).padStart(2, '0')), React.createElement("span", {
    className: "ud-title"
  }, React.createElement(Dot, null, t)), React.createElement("span", {
    className: "step-d"
  }, d))));
}
function Statement({
  children
}) {
  return React.createElement("section", {
    className: "sec wrap"
  }, React.createElement("p", {
    className: "statement",
    "data-scroll-words": true
  }, children));
}
function Band({
  items,
  light,
  reverse
}) {
  return React.createElement("div", {
    className: 'band' + (light ? ' light' : ''),
    "data-marquee": reverse ? 'reverse' : ''
  }, items.map((t, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement("span", null, t), React.createElement("i", null, "."))));
}
function Finale({
  title,
  body,
  cta = true,
  ctaLabel
}) {
  const dark = useTheme() === 'dark';
  return React.createElement("footer", {
    className: 'foot' + (title ? '' : ' no-cta')
  }, title && React.createElement("div", {
    className: "foot-cta wrap"
  }, React.createElement("h2", {
    "data-split": true
  }, React.createElement(Dot, null, title)), body && React.createElement("p", {
    className: "foot-body",
    "data-reveal": true
  }, body), cta && React.createElement("div", {
    className: "foot-btn",
    "data-reveal": true
  }, React.createElement(QuoteBtn, {
    size: "lg",
    label: ctaLabel
  }))), React.createElement("div", {
    className: "foot-grid wrap"
  }, React.createElement("div", null, React.createElement("a", {
    href: "index.html",
    "data-transition": true
  }, React.createElement("img", {
    className: "foot-logo",
    src: dark ? 'site/logo-charcoal.png' : 'site/logo-white.png',
    alt: "unordinary. digital"
  })), React.createElement("p", {
    className: "foot-line"
  }, "A Liverpool digital studio. Websites, video and the stuff around them.")), React.createElement("div", {
    className: "foot-col"
  }, NAV.filter(([h]) => !SERVICES.some(([s]) => s === h)).map(([h, l]) => React.createElement("a", {
    key: h,
    href: h,
    "data-transition": true
  }, l))), React.createElement("div", {
    className: "foot-col"
  }, SERVICES.map(([h, l]) => React.createElement("a", {
    key: h,
    href: h,
    "data-transition": true
  }, l))), React.createElement("div", {
    className: "foot-col"
  }, React.createElement("a", {
    className: "mail",
    href: "mailto:hello@unordinary.digital"
  }, "hello@unordinary.digital"), React.createElement("a", {
    className: "ig",
    href: "https://instagram.com/unordinary.digital",
    target: "_blank",
    rel: "noopener"
  }, React.createElement("i", {
    "data-feather": "instagram"
  }), "@unordinary.digital"))), React.createElement("div", {
    className: "foot-small wrap"
  }, React.createElement("span", {
    className: "foot-legal"
  }, React.createElement("span", null, "\xA9 2026 unordinary. digital"), React.createElement("a", {
    href: "privacy.html",
    "data-transition": true
  }, "Privacy policy"), React.createElement("button", {
    type: "button",
    className: "foot-link",
    onClick: openConsent
  }, "Cookie settings"))));
}
function letterGlow() {
  if (!matchMedia('(pointer:fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  const els = [...document.querySelectorAll('.statement')];
  els.forEach(el => el.querySelectorAll('.ud-wi').forEach(w => {
    if (w.dataset.l) return;
    w.dataset.l = '1';
    const t = w.textContent;
    w.textContent = '';
    for (const c of t) {
      const s = document.createElement('span');
      s.className = 'ud-l';
      s.textContent = c;
      w.appendChild(s);
    }
  }));
  const R = 110;
  let mx = -1e4,
    my = -1e4,
    raf,
    lit = new Set();
  const paint = () => {
    raf = 0;
    const next = new Set();
    els.forEach(el => {
      const b = el.getBoundingClientRect();
      if (mx < b.left - R || mx > b.right + R || my < b.top - R || my > b.bottom + R) return;
      el.querySelectorAll('.ud-l').forEach(s => {
        const r = s.getBoundingClientRect(),
          d = Math.hypot(r.left + r.width / 2 - mx, r.top + r.height / 2 - my);
        if (d < R) {
          const h = 1 - d / R;
          s.style.setProperty('--h', (h * h * (3 - 2 * h)).toFixed(3));
          next.add(s);
        }
      });
    });
    lit.forEach(s => {
      if (!next.has(s)) s.style.removeProperty('--h');
    });
    lit = next;
  };
  const move = e => {
    mx = e.clientX;
    my = e.clientY;
    if (!raf) raf = requestAnimationFrame(paint);
  };
  const out = () => {
    mx = my = -1e4;
    if (!raf) raf = requestAnimationFrame(paint);
  };
  const sc = () => {
    if (!raf) raf = requestAnimationFrame(paint);
  };
  addEventListener('mousemove', move, {
    passive: true
  });
  addEventListener('scroll', sc, {
    passive: true
  });
  document.addEventListener('mouseleave', out);
  return () => {
    removeEventListener('mousemove', move);
    removeEventListener('scroll', sc);
    document.removeEventListener('mouseleave', out);
  };
}
const readConsent = () => {
  try {
    return localStorage.getItem('ud-consent');
  } catch (e) {
    return null;
  }
};
const openConsent = () => dispatchEvent(new Event('ud-consent-open'));
function setConsent(granted) {
  try {
    localStorage.setItem('ud-consent', granted ? 'granted' : 'denied');
  } catch (e) {}
  gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied'
  });
  if (granted) dataLayer.push({
    event: 'ud_consent_granted'
  });
  else document.cookie.split(';').map(c => c.split('=')[0].trim()).filter(n => n.startsWith('_ga')).forEach(n => {
    const host = location.hostname;
    document.cookie = `${n}=; Max-Age=0; path=/`;
    document.cookie = `${n}=; Max-Age=0; path=/; domain=.${host.replace(/^www\./, '')}`;
  });
}
function ConsentBanner() {
  const [open, setOpen] = React.useState(() => !readConsent());
  React.useEffect(() => {
    const on = () => setOpen(true);
    addEventListener('ud-consent-open', on);
    return () => removeEventListener('ud-consent-open', on);
  }, []);
  if (!open) return null;
  const choose = granted => () => {
    setConsent(granted);
    setOpen(false);
  };
  return React.createElement("div", {
    className: "consent",
    role: "dialog",
    "aria-label": "Cookie choices"
  }, React.createElement("p", null, "Can we use analytics cookies? They tell us which pages people find useful. Nothing is set unless you say yes. ", React.createElement("a", {
    href: "privacy.html"
  }, "Privacy policy")), React.createElement("div", {
    className: "consent-btns"
  }, React.createElement(UD.Button, {
    variant: "secondary",
    onClick: choose(false)
  }, "No thanks"), React.createElement(UD.Button, {
    variant: "secondary",
    onClick: choose(true)
  }, "Accept")));
}
function Page({
  current,
  children
}) {
  React.useEffect(() => {
    feather.replace({
      'stroke-width': 1.5
    });
    UDMotion.enter();
    UDMotion.init(document, {
      observeDelay: 450
    });
    const glowOff = letterGlow();
    const nav = document.getElementById('nav');
    let last = scrollY;
    const on = () => {
      const y = scrollY;
      nav.classList.toggle('is-solid', y > 40);
      nav.classList.toggle('is-hidden', y > last && y > 200);
      last = y;
    };
    addEventListener('scroll', on, {
      passive: true
    });
    return () => {
      removeEventListener('scroll', on);
      glowOff();
    };
  }, []);
  return React.createElement(React.Fragment, null, React.createElement(Nav, {
    current: current
  }), React.createElement("main", null, children), React.createElement(ConsentBanner, null));
}
function Media({
  id,
  label,
  ratio = '16/9'
}) {
  return React.createElement("div", {
    className: "media wrap",
    "data-reveal": true
  }, React.createElement("div", {
    className: "media-in",
    style: {
      aspectRatio: ratio
    }
  }, React.createElement("image-slot", {
    id: id,
    shape: "rounded",
    radius: "12",
    placeholder: label
  })));
}
function MediaGrid({
  items,
  ratio = '3/4',
  prefix
}) {
  return React.createElement("div", {
    className: "media-grid wrap"
  }, items.map((l, i) => React.createElement("figure", {
    key: l,
    "data-reveal": true,
    style: {
      transitionDelay: i * .1 + 's'
    }
  }, React.createElement("div", {
    className: "media-in",
    style: {
      aspectRatio: ratio
    }
  }, React.createElement("image-slot", {
    id: prefix + '-' + i,
    shape: "rounded",
    radius: "12",
    placeholder: l
  })), React.createElement("figcaption", null, l))));
}
function HeroVideo() {
  return React.createElement("div", {
    className: "media wrap",
    "data-reveal": true
  }, React.createElement("div", {
    className: "hv",
    "data-cursor-label": "Play"
  }, React.createElement("span", {
    className: "hv-play"
  }, React.createElement("i", {
    "data-feather": "play"
  })), React.createElement("span", {
    className: "hv-label"
  }, "Hero video placeholder")));
}
function ScrollHero({
  eyebrow,
  title,
  sub,
  cta = true,
  ctaLabel,
  media,
  big,
  after,
  children
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    let raf;
    const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, -r.top / (innerHeight * 1.12)));
        el.style.setProperty('--p', ease(p).toFixed(4));
      });
    };
    on();
    addEventListener('scroll', on, {
      passive: true
    });
    addEventListener('resize', on);
    return () => {
      removeEventListener('scroll', on);
      removeEventListener('resize', on);
    };
  }, []);
  return React.createElement("section", {
    className: 'hh' + (big ? ' hh-big' : ''),
    ref: ref
  }, React.createElement("div", {
    className: "hh-in"
  }, React.createElement("div", {
    className: "hh-stage"
  }, React.createElement("div", {
    className: "hh-text"
  }, eyebrow && React.createElement("p", {
    className: "eyebrow",
    "data-reveal": true
  }, eyebrow), React.createElement("h1", {
    "data-split": true
  }, React.createElement(Dot, null, title)), React.createElement("div", {
    className: "hh-foot"
  }, React.createElement("p", {
    className: "lead",
    "data-reveal": true,
    style: {
      transitionDelay: '.5s'
    }
  }, sub), cta && React.createElement("div", {
    "data-reveal": true,
    style: {
      transitionDelay: '.65s'
    }
  }, React.createElement("div", {
    className: "hero-ctas"
  }, React.createElement(QuoteBtn, {
    variant: "primary",
    size: "lg",
    label: ctaLabel
  }), children)))), React.createElement("div", {
    className: "hh-v"
  }, media)), after));
}
function HeroVid({
  src
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    let url;
    const blob = () => fetch(src).then(r => r.blob()).then(b => {
      url = URL.createObjectURL(b);
      v.src = url;
      v.play().catch(() => {});
    });
    v.addEventListener('error', blob, {
      once: true
    });
    v.src = src;
    v.play().catch(() => {});
    return () => {
      v.removeEventListener('error', blob);
      if (url) URL.revokeObjectURL(url);
    };
  }, [src]);
  return React.createElement("video", {
    ref: ref,
    className: "hh-video",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto"
  });
}
const slot = (id, label) => React.createElement("image-slot", {
  id: id,
  shape: "rect",
  placeholder: label
});
function mount(el) {
  ReactDOM.createRoot(document.getElementById('root')).render(el);
}
Object.assign(window, {
  HIDDEN,
  UD,
  NAV,
  SERVICES,
  go,
  Dot,
  Arrow,
  QuoteBtn,
  Nav,
  Hero,
  SecHead,
  Rows,
  Statement,
  Band,
  Finale,
  Page,
  openConsent,
  mount,
  Media,
  ScrollHero,
  slot,
  MediaGrid,
  HeroVideo,
  HeroVid
});