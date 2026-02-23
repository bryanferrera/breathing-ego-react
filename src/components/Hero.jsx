import { motion } from 'framer-motion'
import Prism from './Prism'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-x-hidden"
      style={{ backgroundColor: '#221608' }}
    >
      {/* ── Prism Background — untouched ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div style={{ position: 'absolute', inset: 0, filter: 'sepia(1.0) saturate(1.4) brightness(0.75)' }}>
          <Prism
            timeScale={0.1}
            scale={4.3}
            glow={1.6}
            bloom={1.3}
            colorFrequency={0.6}
            hueShift={0}
            animationType="rotate"
            transparent={true}
            hoverStrength={0.5}
            inertia={0.08}
            baseWidth={7.5}
            height={4}
            noise={0}
          />
        </div>
      </div>

      {/* ── Label — anchored to section, always below navbar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-[12px] z-20"
        style={{
          top: '80px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          letterSpacing: '1.8px',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ color: 'rgba(247,245,240,0.6)' }}>A book by Nic Sementa</span>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
        <span style={{ color: 'rgba(255,255,255,0.6)' }}>Available now</span>
      </motion.div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex flex-col min-h-screen items-center w-full px-4 md:px-8 xl:px-0 xl:justify-end xl:pb-[100px]">

        {/*
          Layout Frame
          ─────────────────────────────────────────────────────────
          Mobile / Tablet (<xl) : flex-col center stack
          Desktop (xl+)         : position:relative, 1200×725px
                                  all children are absolutely placed
                                  per Figma node 526:411 / 526:738
        */}
        <div className="
          flex-1 flex flex-col items-center text-center w-full gap-8 pt-44 pb-12
          xl:flex-none xl:relative xl:w-full xl:max-w-[1200px] xl:h-[725px]
          xl:gap-0 xl:pt-0 xl:pb-0
        ">

          {/* ── Title ──
              Mobile : centered, fluid clamp size
              Desktop: absolute left-0 right-0 top-[52px], 160px font
                       justify-between — "Breathing" left-locked, "Ego." right-locked
              Figma  : top=52.39px, fontSize=160px, letterSpacing=-2.16px (≡ -0.0135em)
          */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="w-full flex justify-center overflow-hidden text-[clamp(3rem,12vw,9rem)] leading-none
                       xl:absolute xl:left-0 xl:right-0 xl:top-[52px] xl:text-[160px] xl:overflow-visible"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 400,
              letterSpacing: '-0.0135em',
              lineHeight: 1,
              background: 'linear-gradient(to bottom, #d7d2ce 22%, rgba(241,240,236,0) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mixBlendMode: 'screen',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            <span>Breathing </span><em>Ego.</em>
          </motion.div>

          {/* ── Book ──
              Mobile : -mt-4 to close gap with title above
              Desktop: absolute, centered, top-[181px]
              Figma  : left=50% -translate-x-1/2, top=180.56px, w=338.5px
                       title bottom ≈ 52+160=212px → 31px overlap with title
          */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center z-10 -mt-4
                       xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:top-[181px] xl:mt-0"
          >
            <img
              src="/Front Book Cover New_result.webp"
              alt="Breathing Ego book cover"
              className="max-w-[250px] md:max-w-[300px] xl:max-w-none"
              style={{
                width: 'clamp(177px, 23.9vw, 300px)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>

          {/* ── Description ──
              Mobile : centered, max-w-md
              Desktop: absolute left-0 top-[632px], max-w-[300px], left-aligned
              Figma  : left=0, top=631.56px, right=900px → effective width 300px
          */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-6 items-center text-center w-full max-w-md mx-auto
                       xl:absolute xl:left-0 xl:bottom-0 xl:max-w-[300px] xl:items-start xl:text-left xl:mx-0"
          >
            <div style={{ width: 48, height: 2, background: '#FFFFFF' }} />
            <p
              className="text-base md:text-lg"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                lineHeight: 1.8,
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              There's a rhythm between leading from the front and not crushing the people around you. This book teaches you how to find it.
            </p>
          </motion.div>

          {/* ── Form Card ──
              Mobile : centered, max-w-md
              Desktop: absolute left-[836px] top-[436px], width 349px
              Figma  : left=836px, top=435.56px, inner-w=309px, p=20px → outer≈349px
          */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full max-w-md mx-auto
                       xl:absolute xl:left-[836px] xl:bottom-0 xl:w-[349px] xl:max-w-none xl:mx-0"
            style={{
              background: 'rgba(245,240,232,0.55)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: 20,
              padding: '20px',
              border: '1px solid rgba(196,168,122,0.2)',
            }}
          >
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: 10,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: '#8b7355',
              margin: '0 0 6px 0',
            }}>
              Launch Day Bonus
            </p>

            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: 16,
              color: '#3d3228',
              margin: '0 0 8px 0',
              lineHeight: 1.3,
            }}>
              Get the Launch Day Coupon
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16 }}>
              {['50% off Breathing Ego on launch day', 'Early access to the opening framework'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ color: '#8b7355', fontSize: 14, lineHeight: '20px' }}>•</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, color: '#3d3228', lineHeight: '20px' }}>{item}</span>
                </div>
              ))}
            </div>

            <style>{`
              .hero-input::placeholder { color: rgba(107,101,96,0.7); }
              .hero-input:focus { outline: none; }
            `}</style>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 12 }} onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                className="hero-input"
                placeholder="Your name"
                style={{
                  width: '100%', padding: '12px 16px',
                  background: 'rgba(245,240,232,0.4)',
                  border: '1px solid rgba(139,115,85,0.25)',
                  borderRadius: 12, color: '#3d3228',
                  fontSize: 14, fontFamily: 'Poppins, sans-serif',
                  outline: 'none', transition: 'border-color 0.15s',
                  boxSizing: 'border-box',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(196,168,122,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(139,115,85,0.25)'}
              />
              <input
                type="email"
                className="hero-input"
                placeholder="Your email address"
                style={{
                  width: '100%', padding: '12px 16px',
                  background: 'rgba(245,240,232,0.4)',
                  border: '1px solid rgba(139,115,85,0.25)',
                  borderRadius: 12, color: '#3d3228',
                  fontSize: 14, fontFamily: 'Poppins, sans-serif',
                  outline: 'none', transition: 'border-color 0.15s',
                  boxSizing: 'border-box',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(196,168,122,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(139,115,85,0.25)'}
              />
              <button
                type="submit"
                className="btn-with-arrow"
                style={{
                  width: '100%', padding: '14px 24px',
                  background: '#1a1612', color: '#f5f0e8',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400, fontSize: 13,
                  letterSpacing: '0.7px', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'background 0.15s',
                  justifyContent: 'center',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#2a2420'}
                onMouseLeave={e => e.currentTarget.style.background = '#1a1612'}
              >
                Send Me the 50% Coupon
                <span className="arrow-icon">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll Indicator — anchored to bottom of section ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <span style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 11,
          letterSpacing: '1.65px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.7)',
        }}>
          Scroll
        </span>
        <div style={{
          width: 1,
          height: 40,
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0))',
        }} />
      </motion.div>
    </section>
  )
}
