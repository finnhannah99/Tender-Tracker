/* @ds-bundle: {"format":3,"namespace":"PushGroupDesignSystem_eae1c6","components":[],"sourceHashes":{"ui_kits/website/ContactFooter.jsx":"6e4f31a3dea3","ui_kits/website/Hero.jsx":"4e5188b3048c","ui_kits/website/Nav.jsx":"bcc652d8b911","ui_kits/website/Quote.jsx":"68784d8ca382","ui_kits/website/Services.jsx":"8906882357e2","ui_kits/website/Wave.jsx":"b499bc05e0bc","ui_kits/website/Work.jsx":"2e312dbfc4f0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PushGroupDesignSystem_eae1c6 = window.PushGroupDesignSystem_eae1c6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/ContactFooter.jsx
try { (() => {
// ContactForm.jsx + Footer.jsx
function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const inputStyle = {
    width: '100%',
    background: '#2A2A2A',
    border: 'none',
    boxShadow: 'inset 0 0 0 1px rgba(245,245,245,0.1)',
    borderRadius: 4,
    padding: '14px 16px',
    color: '#F5F5F5',
    fontFamily: 'inherit',
    fontSize: 15,
    outline: 'none'
  };
  const labelStyle = {
    fontFamily: 'Roboto Mono, monospace',
    fontSize: 11,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#9A9A9A',
    marginBottom: 8,
    display: 'block'
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      position: 'relative',
      padding: '120px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, #1F1F1F 0%, #141414 100%)'
    }
  }), /*#__PURE__*/React.createElement(Wave, {
    variant: "top-fade",
    opacity: 0.6
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      background: '#2A2A2A',
      borderRadius: 28,
      padding: 56,
      boxShadow: 'inset 0 0 0 1px rgba(245,245,245,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "// START A PROJECT"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      fontSize: 56,
      marginTop: 16,
      textWrap: 'balance'
    }
  }, "Tell us the goal.", /*#__PURE__*/React.createElement("br", null), "We'll tell you the plan."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#C9C9C9',
      fontSize: 17,
      lineHeight: 1.6,
      marginTop: 24,
      maxWidth: 440
    }
  }, "We reply within one working day. Most partnerships start with a 30-minute diagnostic on your current stack.")), /*#__PURE__*/React.createElement("div", null, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      borderRadius: 16,
      background: 'rgba(31,255,153,0.1)',
      boxShadow: 'inset 0 0 0 1px rgba(31,255,153,0.35)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: '#1FFF99'
    }
  }, "// RECEIVED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 500,
      marginTop: 12
    }
  }, "Thanks, ", email, ". We'll be in touch.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Work email"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "email",
    required: true,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Company"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "text",
    placeholder: "Acme Co."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "What do you need help with?"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inputStyle,
      minHeight: 100,
      resize: 'vertical'
    },
    placeholder: "Briefly describe the goal, the stack, and the timeline."
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, "Send brief \u2192"))))));
}
function Footer() {
  const offices = [{
    city: 'London',
    label: 'HQ'
  }, {
    city: 'New York',
    label: ''
  }, {
    city: 'Dubai',
    label: ''
  }, {
    city: 'Athens',
    label: ''
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#141414',
      padding: '64px 0 32px',
      borderTop: '1px solid rgba(245,245,245,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 40,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/push-logo-white.png",
    alt: "push",
    style: {
      height: 28,
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#9A9A9A',
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 320
    }
  }, "Performance marketing, engineered. Founded 2007.")), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Services",
    items: ['Performance media', 'Creative', 'Data', 'Technology', 'Training']
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Company",
    items: ['About', 'Work', 'Careers', 'Insights']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "// OFFICES"), offices.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.city,
    style: {
      color: '#C9C9C9',
      fontSize: 14,
      marginBottom: 6
    }
  }, o.city, " ", o.label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.1em',
      color: '#1FFF99',
      marginLeft: 8
    }
  }, o.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 24,
      borderTop: '1px solid rgba(245,245,245,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#6B6B6B'
    }
  }, "\xA9 2026 PUSH GROUP \xB7 ALL RIGHTS RESERVED"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, ['Privacy', 'Terms', 'Cookies'].map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#",
    style: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#9A9A9A'
    }
  }, x))))));
}
function FooterCol({
  title,
  items
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, "// ", title.toUpperCase()), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      display: 'block',
      color: '#C9C9C9',
      fontSize: 14,
      marginBottom: 8
    }
  }, i)));
}
window.ContactForm = ContactForm;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero.jsx
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 720,
      paddingTop: 140,
      paddingBottom: 80,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Wave, {
    variant: "hero",
    opacity: 0.9
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(31,31,31,0) 55%, #1F1F1F 100%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 32
    }
  }, "// PERFORMANCE \xB7 CREATIVE \xB7 DATA \u2014 EST. 2007"), /*#__PURE__*/React.createElement("h1", {
    className: "h1",
    style: {
      maxWidth: 1000,
      textWrap: 'pretty'
    }
  }, "Performance marketing,", ' ', /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "engineered.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 540,
      marginTop: 28,
      fontSize: 18,
      lineHeight: 1.5,
      color: '#C9C9C9'
    }
  }, "One AI-first operating system for media, creative, and data \u2014 built by senior specialists across London, New York, Dubai, and Athens."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onCta
  }, "Start a project \u2192"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary"
  }, "See our work")), /*#__PURE__*/React.createElement(PartnersStrip, null)));
}
function PartnersStrip() {
  const items = [{
    name: 'Google',
    tier: 'PREMIER · TOP 3% EMEA',
    color: '#1FFF99'
  }, {
    name: 'Meta',
    tier: 'PREMIUM PARTNER',
    color: '#7061F0'
  }, {
    name: 'Microsoft',
    tier: 'ELITE PARTNER',
    color: '#FFBF59'
  }, {
    name: 'TikTok',
    tier: 'GOLD PARTNER',
    color: '#FF2EAB'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12,
      paddingTop: 28,
      borderTop: '1px solid rgba(245,245,245,0.08)'
    }
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: 500,
      fontSize: 22,
      letterSpacing: '-0.02em'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: p.color
    }
  }, p.tier))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Nav.jsx — sticky glass nav, pill CTA
function Nav({
  onCta
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navStyle = {
    position: 'fixed',
    top: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    padding: '14px 20px',
    borderRadius: 999,
    background: scrolled ? 'rgba(31,31,31,0.72)' : 'rgba(31,31,31,0.4)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    boxShadow: 'inset 0 0 0 1px rgba(245,245,245,0.08)',
    zIndex: 100,
    transition: 'background 240ms cubic-bezier(0.2,0.8,0.2,1)',
    width: 'min(1100px, calc(100% - 48px))'
  };
  const linkStyle = {
    color: '#C9C9C9',
    fontWeight: 500,
    fontSize: 14,
    padding: '6px 0'
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: navStyle
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/push-logo-white.png",
    alt: "push",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginLeft: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#services",
    style: {
      ...linkStyle,
      color: '#F5F5F5'
    }
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    href: "#work",
    style: linkStyle
  }, "Work"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    style: linkStyle
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#insights",
    style: linkStyle
  }, "Insights")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onCta,
    style: {
      padding: '10px 18px',
      fontSize: 13
    }
  }, "Start a project \u2192"));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Quote.jsx
try { (() => {
// Quote.jsx — big editorial quote + metric strip
function Quote() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 0',
      borderTop: '1px solid rgba(245,245,245,0.06)',
      borderBottom: '1px solid rgba(245,245,245,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '3fr 2fr',
      gap: 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "// MANIFESTO"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 20,
      textWrap: 'balance'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#6B6B6B'
    }
  }, "Growth isn't a guess."), " It's a system \u2014", ' ', /*#__PURE__*/React.createElement("span", {
    className: "grad-text"
  }, "measured, compounded, repeatable."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    n: "+412%",
    label: "Peak client ROAS"
  }), /*#__PURE__*/React.createElement(Metric, {
    n: "200+",
    label: "Active campaigns"
  }), /*#__PURE__*/React.createElement(Metric, {
    n: "19yr",
    label: "Since 2007"
  }), /*#__PURE__*/React.createElement(Metric, {
    n: "4",
    label: "Global offices"
  }))));
}
function Metric({
  n,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderRadius: 16,
      background: '#2A2A2A',
      boxShadow: 'inset 0 0 0 1px rgba(245,245,245,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 44,
      letterSpacing: '-0.03em',
      lineHeight: 1,
      background: 'linear-gradient(90deg, #1FFF99, #7061F0)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'Roboto Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#9A9A9A'
    }
  }, label));
}
window.Quote = Quote;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Quote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
// Services.jsx — service grid with accent colours
function Services() {
  const services = [{
    n: '01',
    name: 'Performance media',
    copy: 'Paid search, social, and programmatic, run by specialists and automated where it compounds.',
    color: '#1FFF99',
    tag: 'MEDIA'
  }, {
    n: '02',
    name: 'Creative at velocity',
    copy: 'AI-assisted creative production tuned to ad-platform feedback loops. Test faster, win more.',
    color: '#7061F0',
    tag: 'CREATIVE'
  }, {
    n: '03',
    name: 'Data & measurement',
    copy: 'Server-side tagging, incrementality testing, and MMM. Know what actually worked.',
    color: '#0091FF',
    tag: 'DELIVERY'
  }, {
    n: '04',
    name: 'Technology',
    copy: 'MarTech stack design and implementation — GA4, CDP, feeds, and attribution.',
    color: '#FFBF59',
    tag: 'TECHNOLOGY'
  }, {
    n: '05',
    name: 'Training',
    copy: 'In-housing, team upskilling, and AI workflow enablement for modern marketing orgs.',
    color: '#FF2EAB',
    tag: 'TRAINING'
  }, {
    n: '06',
    name: 'Strategy',
    copy: 'Growth planning, channel mix, and brand+performance alignment for scale.',
    color: '#F5F5F5',
    tag: 'STRATEGY'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      padding: '120px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "// SERVICES \xB7 SIX DISCIPLINES \xB7 ONE OPERATING SYSTEM"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 16,
      maxWidth: 860,
      textWrap: 'pretty'
    }
  }, "Media, creative, data \u2014", /*#__PURE__*/React.createElement("br", null), "one team, one outcome."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12,
      marginTop: 56
    }
  }, services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      background: '#2A2A2A',
      borderRadius: 20,
      padding: 28,
      boxShadow: 'inset 0 0 0 1px rgba(245,245,245,0.08)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 240,
      transition: 'all 240ms cubic-bezier(0.2,0.8,0.2,1)',
      cursor: 'pointer'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = '#353535';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = '#2A2A2A';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: s.color
    }
  }, "// ", s.n, " \xB7 ", s.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.color,
      fontSize: 20
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      marginTop: 'auto'
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: '#9A9A9A'
    }
  }, s.copy))))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Wave.jsx
try { (() => {
// Wave.jsx — PUSH signature wave ribbon (official PNG asset)
// variants: "hero" | "corner" | "top-fade"
function Wave({
  variant = 'hero',
  opacity = 1,
  style = {}
}) {
  const src = {
    hero: '../../assets/wave-hero.png',
    corner: '../../assets/wave-corner-blue.png',
    'top-fade': '../../assets/wave-top-fade.png'
  }[variant];
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      opacity,
      pointerEvents: 'none',
      ...style
    }
  });
}
window.Wave = Wave;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Wave.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
// Work.jsx — case study grid
function Work() {
  const cases = [{
    eb: '// CASE 01 · DTC',
    sector: 'Skincare',
    headline: '+412% blended ROAS in 90 days.',
    blurb: 'Server-side tagging, pMax rebuild, creative velocity tripled.',
    bg: 'linear-gradient(135deg, rgba(31,255,153,0.18), rgba(31,31,31,0.9))',
    accent: '#1FFF99'
  }, {
    eb: '// CASE 02 · FINTECH',
    sector: 'B2B SaaS',
    headline: '−38% CPA at 3× scale.',
    blurb: 'Incrementality-led budget reallocation across Google, Meta, LinkedIn.',
    bg: 'linear-gradient(135deg, rgba(112,97,240,0.25), rgba(31,31,31,0.9))',
    accent: '#7061F0'
  }, {
    eb: '// CASE 03 · RETAIL',
    sector: 'Multi-brand',
    headline: 'One dashboard, 11 regions.',
    blurb: 'Unified GA4 + CDP rollout across EMEA and MENA.',
    bg: 'linear-gradient(135deg, rgba(255,191,89,0.2), rgba(31,31,31,0.9))',
    accent: '#FFBF59'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      padding: '80px 0 120px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "// SELECTED WORK"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      marginTop: 16,
      maxWidth: 700
    }
  }, "Outcomes over opinions.")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary"
  }, "All case studies \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12
    }
  }, cases.map(c => /*#__PURE__*/React.createElement("article", {
    key: c.eb,
    style: {
      borderRadius: 20,
      padding: 28,
      minHeight: 320,
      background: c.bg,
      boxShadow: 'inset 0 0 0 1px rgba(245,245,245,0.08)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      cursor: 'pointer',
      transition: 'transform 240ms cubic-bezier(0.2,0.8,0.2,1)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: c.accent
    }
  }, c.eb), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Roboto Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#9A9A9A',
      marginTop: 6
    }
  }, c.sector)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontWeight: 700,
      fontSize: 30,
      letterSpacing: '-0.025em',
      lineHeight: 1.05,
      color: '#F5F5F5',
      marginBottom: 10,
      textWrap: 'balance'
    }
  }, c.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: '#C9C9C9',
      lineHeight: 1.5
    }
  }, c.blurb)))))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

})();
