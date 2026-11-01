/* @ds-bundle: {"format":4,"namespace":"UnordinaryDigitalDesignSystem_709a4c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"543175d392d6","components/core/Button.jsx":"b3f208983d7e","components/core/Card.jsx":"2735337f61ac","components/core/IconButton.jsx":"4d1186c3e1cc","components/core/Tag.jsx":"dba53cb37bc4","components/feedback/Dialog.jsx":"973a15ecccfe","components/feedback/Toast.jsx":"9885ec0fa362","components/feedback/Tooltip.jsx":"6417c65669a7","components/forms/Checkbox.jsx":"1ede0d227de8","components/forms/Input.jsx":"4fb92387b716","components/forms/Radio.jsx":"887cf326a484","components/forms/Select.jsx":"45669ec15fbc","components/forms/Switch.jsx":"68ba36065a7e","components/navigation/Tabs.jsx":"da9cc778de92","motion/motion.js":"56feac87ebb9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UnordinaryDigitalDesignSystem_709a4c = window.UnordinaryDigitalDesignSystem_709a4c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      background: 'var(--light-grey)',
      color: 'var(--charcoal)'
    },
    accent: {
      background: 'var(--orange)',
      color: 'var(--charcoal)'
    },
    dark: {
      background: 'var(--charcoal)',
      color: 'var(--white)'
    }
  };
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: '12px',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  sm: {
    padding: '8px 14px',
    fontSize: 'var(--text-xs)'
  },
  md: {
    padding: '11px 20px',
    fontSize: 'var(--text-sm)'
  },
  lg: {
    padding: '14px 26px',
    fontSize: 'var(--text-base)'
  }
};
const variantStyles = {
  primary: {
    base: {
      background: 'var(--charcoal)',
      color: 'var(--white)'
    },
    hover: {
      background: 'var(--charcoal-hover)'
    }
  },
  accent: {
    base: {
      background: 'var(--orange)',
      color: 'var(--charcoal)'
    },
    hover: {
      background: 'var(--orange-hover)'
    }
  },
  secondary: {
    base: {
      background: 'var(--white)',
      color: 'var(--charcoal)',
      boxShadow: 'var(--shadow-sm)'
    },
    hover: {
      background: 'var(--light-grey)'
    }
  },
  ghost: {
    base: {
      background: 'transparent',
      color: 'var(--charcoal)'
    },
    hover: {
      background: 'var(--light-grey)'
    }
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  iconPosition = 'left',
  children,
  onClick,
  style
}) {
  const v = variantStyles[variant] || variantStyles.primary;
  const [hover, setHover] = React.useState(false);
  return React.createElement('button', {
    onClick: disabled ? undefined : onClick,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'background var(--duration-base) var(--ease-standard)',
      opacity: disabled ? 0.45 : 1,
      ...sizeStyles[size],
      ...v.base,
      ...(hover && !disabled ? v.hover : {}),
      ...style
    }
  }, icon && iconPosition === 'left' ? icon : null, children, icon && iconPosition === 'right' ? icon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = 'var(--space-6)',
  style
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  size = 'md',
  variant = 'ghost',
  disabled = false,
  onClick,
  'aria-label': ariaLabel
}) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size];
  const bg = variant === 'filled' ? hover ? 'var(--charcoal-hover)' : 'var(--charcoal)' : hover ? 'var(--light-grey)' : 'transparent';
  const color = variant === 'filled' ? 'var(--white)' : 'var(--charcoal)';
  return React.createElement('button', {
    'aria-label': ariaLabel,
    onClick: disabled ? undefined : onClick,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: bg,
      color,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-base) var(--ease-standard)'
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '13px',
      padding: '6px 8px 6px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      color: 'var(--charcoal)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, children, onRemove && React.createElement('button', {
    onClick: onRemove,
    'aria-label': 'Remove',
    style: {
      border: 'none',
      background: 'var(--light-grey)',
      borderRadius: '50%',
      width: 18,
      height: 18,
      cursor: 'pointer',
      color: 'var(--charcoal)',
      fontSize: 11,
      lineHeight: 1
    }
  }, '\u00d7'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  footer
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-8)',
      maxWidth: 440,
      width: '90%',
      fontFamily: 'var(--font-body)'
    }
  }, title && React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--charcoal)',
      marginBottom: 'var(--space-4)'
    }
  }, title), React.createElement('div', {
    style: {
      color: 'var(--charcoal)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-body)'
    }
  }, children), footer && React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      marginTop: 'var(--space-6)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = 'dark',
  onClose
}) {
  const tones = {
    dark: {
      background: 'var(--charcoal)',
      color: 'var(--white)'
    },
    accent: {
      background: 'var(--orange)',
      color: 'var(--charcoal)'
    }
  };
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      ...tones[tone]
    }
  }, React.createElement('span', null, message), onClose && React.createElement('button', {
    onClick: onClose,
    'aria-label': 'Dismiss',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      fontSize: 16,
      opacity: 0.7
    }
  }, '\u00d7'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--charcoal)',
      color: 'var(--white)',
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-sm)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--charcoal)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: '6px',
      border: '1px solid ' + (checked ? 'var(--charcoal)' : 'var(--border-strong)'),
      background: checked ? 'var(--charcoal)' : 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, checked && React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'var(--white)',
    strokeWidth: 3
  }, React.createElement('polyline', {
    points: '20 6 9 17 4 12'
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--charcoal)'
    }
  }, label), React.createElement('input', {
    type,
    value,
    placeholder,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (error ? 'var(--orange)' : focus ? 'var(--charcoal)' : 'var(--border-subtle)'),
      outline: 'none',
      background: disabled ? 'var(--light-grey)' : 'var(--white)',
      color: 'var(--charcoal)',
      boxShadow: focus ? 'var(--shadow-sm)' : 'none',
      transition: 'border-color var(--duration-base) var(--ease-standard)'
    }
  }), error && React.createElement('span', {
    style: {
      fontSize: '12px',
      color: 'var(--orange-press)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--charcoal)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(true),
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: '1px solid ' + (checked ? 'var(--charcoal)' : 'var(--border-strong)'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--charcoal)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--charcoal)'
    }
  }, label), React.createElement('select', {
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-subtle)',
      background: disabled ? 'var(--light-grey)' : 'var(--white)',
      color: 'var(--charcoal)',
      outline: 'none'
    }
  }, options.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--charcoal)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--orange)' : 'var(--border-strong)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 18 : 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t.value,
    onClick: () => onChange && onChange(t.value),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      background: 'none',
      border: 'none',
      padding: '0 0 12px',
      cursor: 'pointer',
      color: active === t.value ? 'var(--charcoal)' : 'var(--text-muted)',
      borderBottom: '2px solid ' + (active === t.value ? 'var(--orange)' : 'transparent'),
      transition: 'color var(--duration-base) var(--ease-standard)'
    }
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// motion/motion.js
try { (() => {
/* unordinary. digital motion library. Attribute-driven; respects prefers-reduced-motion.
data-split[="repeat"]   word-by-word headline reveal on enter
data-reveal[="repeat"]  fade + rise on enter
data-parallax="0.15"    scroll parallax (relative to parent)
data-magnetic="0.35"    pulls toward the pointer
data-cursor (on body)   custom orange cursor; data-cursor-label="View" grows it
data-hover              adds .is-hover (use with .ud-fill-row)
data-hover-preview      container; children with data-preview="Label" [data-preview-img="url"] show a floating card
data-marquee[="reverse"] infinite ticker
data-scroll-progress[="sticky"] sets --p 0..1
data-hscroll + child data-hscroll-track  sticky horizontal scroll
data-scroll-words       words light up with scroll
a[data-transition]      page wipe before navigating
API: UDMotion.init(root,{observeDelay}), .transition(fn), .enter(), .replay(el), .autopilot(t=>({x,y})) */
(() => {
  const R = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer:fine)').matches;
  const M = {
      x: innerWidth / 2,
      y: innerHeight / 2
    },
    S = {
      active: false,
      lastReal: 0,
      auto: null,
      hover: null,
      running: false
    };
  let L = {
      par: [],
      mag: [],
      prog: [],
      hs: [],
      words: []
    },
    cursor = null,
    cursorLabel = null,
    preview = null,
    previewIn = null,
    io = null;
  const lerp = (a, b, t) => a + (b - a) * t,
    clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  addEventListener('mousemove', e => {
    M.x = e.clientX;
    M.y = e.clientY;
    S.active = true;
    S.lastReal = performance.now();
  }, {
    passive: true
  });
  if (R) document.documentElement.classList.add('ud-reduce');
  function split(el, stagger = true) {
    if (el.dataset.udSplit) return [...el.querySelectorAll('.ud-wi')];
    el.dataset.udSplit = '1';
    const nodes = [...el.childNodes],
      out = [];
    el.textContent = '';
    const add = c => {
      const o = document.createElement('span');
      o.className = 'ud-w';
      const n = document.createElement('span');
      n.className = 'ud-wi';
      typeof c === 'string' ? n.textContent = c : n.appendChild(c);
      o.appendChild(n);
      el.appendChild(o);
      el.appendChild(document.createTextNode(' '));
      out.push(n);
    };
    nodes.forEach(nd => {
      if (nd.nodeType === 3) nd.textContent.split(/\s+/).filter(Boolean).forEach(add);else if (nd.nodeName === 'BR') el.appendChild(document.createElement('br'));else if (nd.nodeType === 1) add(nd);
    });
    out.forEach((n, i) => n.style.transitionDelay = stagger ? `calc(var(--stagger) * ${i})` : '0s');
    return out;
  }
  function init(root = document, opts = {}) {
    const q = s => [...root.querySelectorAll(s)];
    q('[data-split]').forEach(el => split(el));
    q('[data-marquee]').forEach(el => {
      if (el.dataset.udMq) return;
      el.dataset.udMq = '1';
      const h = el.innerHTML;
      el.classList.add('ud-marquee');
      el.innerHTML = `<div class="ud-marquee-track">${h}${h}</div>`;
    });
    L.words = q('[data-scroll-words]').map(el => {
      el.classList.add('is-in');
      return {
        el,
        w: split(el, false)
      };
    });
    L.par = R ? [] : q('[data-parallax]');
    L.mag = R || !fine ? [] : q('[data-magnetic]').map(el => ({
      el,
      x: 0,
      y: 0
    }));
    L.prog = q('[data-scroll-progress]');
    L.hs = q('[data-hscroll]').map(el => ({
      el,
      t: el.querySelector('[data-hscroll-track]')
    }));
    q('a[data-transition]').forEach(a => {
      if (a.dataset.udT) return;
      a.dataset.udT = '1';
      a.addEventListener('click', e => {
        e.preventDefault();
        const h = a.getAttribute('href');
        transition(() => {
          if (h && h[0] === '#') {
            const t = document.querySelector(h);
            t && scrollTo({
              top: t.getBoundingClientRect().top + scrollY,
              behavior: 'instant'
            });
          } else if (h) location.href = h;
        });
      });
    });
    if (document.body.hasAttribute('data-cursor') && fine && !R && !cursor) {
      cursor = document.createElement('div');
      cursor.className = 'ud-cursor';
      cursor.innerHTML = '<div class="ud-cursor-dot"><span></span></div>';
      cursorLabel = cursor.querySelector('span');
      document.body.appendChild(cursor);
      document.documentElement.classList.add('ud-has-cursor');
      cursor.p = {
        x: M.x,
        y: M.y
      };
    }
    if (root.querySelector('[data-hover-preview]') && !preview && !R) {
      preview = document.createElement('div');
      preview.className = 'ud-preview';
      preview.innerHTML = '<div class="ud-preview-in"></div>';
      previewIn = preview.firstChild;
      document.body.appendChild(preview);
      preview.p = {
        x: M.x,
        y: M.y
      };
    }
    const obs = () => {
      if (!io) io = new IntersectionObserver(es => es.forEach(e => {
        const rep = e.target.dataset.reveal === 'repeat' || e.target.dataset.split === 'repeat';
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          if (!rep) io.unobserve(e.target);
        } else if (rep) e.target.classList.remove('is-in');
      }), {
        threshold: .15
      });
      q('[data-split],[data-reveal]').forEach(el => io.observe(el));
    };
    opts.observeDelay ? setTimeout(obs, opts.observeDelay) : obs();
    if (!S.running) {
      S.running = true;
      requestAnimationFrame(frame);
    }
  }
  function frame(now) {
    const vh = innerHeight;
    if (S.auto && now - S.lastReal > 2000) {
      const p = S.auto(now / 1000);
      M.x = p.x;
      M.y = p.y;
      S.active = true;
    }
    L.par.forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      el.style.transform = `translate3d(0,${(r.top + r.height / 2 - vh / 2) * -(parseFloat(el.dataset.parallax) || .15)}px,0)`;
    });
    L.prog.forEach(el => {
      const r = el.getBoundingClientRect();
      const p = el.dataset.scrollProgress === 'sticky' ? clamp(-r.top / Math.max(1, r.height - vh)) : clamp((vh - r.top) / (r.height + vh));
      el.style.setProperty('--p', p.toFixed(4));
    });
    L.hs.forEach(({
      el,
      t
    }) => {
      if (!t) return;
      const r = el.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, r.height - vh));
      t.style.transform = `translate3d(${-p * Math.max(0, t.scrollWidth - t.parentElement.clientWidth)}px,0,0)`;
    });
    L.words.forEach(({
      el,
      w
    }) => {
      const r = el.getBoundingClientRect();
      const p = R ? 1 : clamp((vh * .85 - r.top) / (r.height + vh * .35));
      const n = w.length;
      w.forEach((s, i) => s.style.opacity = (.15 + .85 * clamp(p * n * 1.15 - i)).toFixed(3));
    });
    L.mag.forEach(o => {
      const r = o.el.getBoundingClientRect();
      const cx = r.left + r.width / 2 - o.x,
        cy = r.top + r.height / 2 - o.y,
        dx = M.x - cx,
        dy = M.y - cy;
      const near = S.active && Math.hypot(dx, dy) < Math.max(r.width, r.height) * .9;
      const s = parseFloat(o.el.dataset.magnetic) || .35;
      o.x = lerp(o.x, near ? dx * s : 0, .15);
      o.y = lerp(o.y, near ? dy * s : 0, .15);
      o.el.style.transform = `translate3d(${o.x.toFixed(2)}px,${o.y.toFixed(2)}px,0)`;
    });
    const under = S.active ? document.elementFromPoint(M.x, M.y) : null;
    const row = under && under.closest('[data-hover]');
    if (row !== S.hover) {
      S.hover && S.hover.classList.remove('is-hover');
      row && row.classList.add('is-hover');
      S.hover = row;
    }
    if (cursor) {
      cursor.p.x = lerp(cursor.p.x, M.x, .22);
      cursor.p.y = lerp(cursor.p.y, M.y, .22);
      cursor.style.transform = `translate3d(${cursor.p.x}px,${cursor.p.y}px,0)`;
      cursor.classList.toggle('is-on', S.active);
      const lab = under && under.closest('[data-cursor-label]');
      cursor.classList.toggle('is-big', !!lab);
      if (lab) cursorLabel.textContent = lab.dataset.cursorLabel;
    }
    if (preview) {
      const it = under && under.closest('[data-hover-preview] [data-preview]');
      preview.p.x = lerp(preview.p.x, M.x, .12);
      preview.p.y = lerp(preview.p.y, M.y, .12);
      preview.style.transform = `translate3d(${preview.p.x}px,${preview.p.y}px,0)`;
      preview.classList.toggle('is-on', !!it);
      if (it) {
        previewIn.textContent = it.dataset.previewImg ? '' : it.dataset.preview;
        previewIn.style.backgroundImage = it.dataset.previewImg ? `url(${it.dataset.previewImg})` : '';
      }
    }
    requestAnimationFrame(frame);
  }
  function layers() {
    return ['var(--orange)', 'var(--charcoal)'].map(c => {
      const d = document.createElement('div');
      d.className = 'ud-wipe';
      d.style.background = c;
      document.body.appendChild(d);
      return d;
    });
  }
  const wipe = (d, from, to, origin, delay) => d.animate([{
    transform: `scaleY(${from})`,
    transformOrigin: origin
  }, {
    transform: `scaleY(${to})`,
    transformOrigin: origin
  }], {
    duration: 700,
    delay,
    easing: 'cubic-bezier(.76,0,.24,1)',
    fill: 'forwards'
  }).finished;
  async function transition(fn) {
    if (R) {
      fn && fn();
      return;
    }
    const [o, c] = layers();
    await Promise.all([wipe(o, 0, 1, 'bottom', 0), wipe(c, 0, 1, 'bottom', 90)]);
    fn && fn();
    await new Promise(r => setTimeout(r, 150));
    await Promise.all([wipe(c, 1, 0, 'top', 0), wipe(o, 1, 0, 'top', 90)]);
    o.remove();
    c.remove();
  }
  async function enter() {
    if (R) return;
    const [o, c] = layers();
    o.style.transform = c.style.transform = 'scaleY(1)';
    await new Promise(r => setTimeout(r, 200));
    await Promise.all([wipe(c, 1, 0, 'top', 0), wipe(o, 1, 0, 'top', 90)]);
    o.remove();
    c.remove();
  }
  function replay(el, gap = 700) {
    el.classList.remove('is-in');
    setTimeout(() => el.classList.add('is-in'), gap);
  }
  window.UDMotion = {
    init,
    transition,
    enter,
    replay,
    split,
    reduce: R,
    autopilot: f => {
      S.auto = f;
    }
  };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', () => init()) : init();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "motion/motion.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
