// All below-the-fold sections
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Aurora from './Aurora'

const Divider = () => (
  <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #8B7355, transparent)', maxWidth: 896, margin: '0 auto' }} />
)

export function Learn() {
  const items = [
    'Practice when to step in with conviction and when to step back and make space, so you stop swinging between overcontrolling and disappearing.',
    'Spot your real pattern under pressure and shift it in live situations, instead of swinging between overcontrolling and disappearing.',
    'Build a weekly "breathing plan" so you know when to take the room and when to make room, without losing authority.',
    'Turn listening, pausing, and giving others space into deliberate power moves instead of signs of weakness.',
    'Lead the same scope of work with less tightness in your body and more trust and oxygen in the room around you.',
  ]
  return (
    <>
      <section id="learn" style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: 768, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8B7355', marginBottom: '2.5rem', textAlign: 'center', fontWeight: 400 }}>
            With this book, you will learn to
          </h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
            {items.map((text, i) => (
              <li key={i} style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: '#8B7355', marginTop: 2, flexShrink: 0 }}>&mdash;</span>
                <p style={{ color: 'rgba(61,50,40,0.8)', lineHeight: 1.7, margin: 0 }}>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Divider />
    </>
  )
}

export function SocialProof() {
  return (
    <>
      <section id="proof" style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: 768, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', fontWeight: 400, color: '#3D3228', lineHeight: 1.6, marginBottom: '2rem' }}>
            "A fresh breath in leadership. It's an easy read on a powerful concept."
          </blockquote>
          <p style={{ color: '#8B7355', fontWeight: 500 }}>Dr. Alistair Cockburn</p>
          <p style={{ color: '#6B6560', fontSize: '0.875rem', marginTop: '0.25rem' }}>Co-Author of The Agile Manifesto</p>
        </div>
      </section>
      <Divider />
    </>
  )
}

export function Problem() {
  const cards = [
    {
      num: '01',
      title: "You can't hold your vision without steamrolling your team",
      body: "You have a clear picture of where things should go. But every time you push for it, people pull away, shut down, or leave.",
    },
    {
      num: '02',
      title: "You can't attract self-starters without hand-holding them",
      body: "You want people who take initiative. But you keep ending up either micromanaging or getting disappointed when nobody steps up.",
    },
    {
      num: '03',
      title: "You can't be direct without coming off as a bully",
      body: "You want to be a voice of clarity. But your directness keeps getting received as aggression or dominance.",
    },
    {
      num: '04',
      title: `You've become the "I'll do it myself" person`,
      body: "You've lost trust that anyone else will perform. Deep down, you know you're losing rock stars—and you don't understand why.",
    },
  ]

  return (
    <section id="problem" style={{ background: '#1a1612', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Aurora background */}
      <Aurora
        colorStops={['#58493B', '#806C59', '#58493B']}
        amplitude={0.4}
        blend={1.0}
      />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '1.8px',
            textTransform: 'uppercase',
            color: '#c4a87a',
            textAlign: 'center',
            margin: '0 0 1.25rem',
          }}
        >
          The Problem
        </motion.p>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.25rem, 4vw, 3.2rem)',
            fontWeight: 400,
            color: '#f7f5f0',
            textAlign: 'center',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            margin: '0 0 1.25rem',
          }}
        >
          Does This Sound Like You?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            lineHeight: 1.8,
            color: '#b0a79d',
            textAlign: 'center',
            maxWidth: 600,
            margin: '0 auto 4rem',
          }}
        >
          You want a team of rock stars. But these people are delicate—high ego, high functioning. And you don't know how to lead them without breaking them or losing them.
        </motion.p>

        {/* 2×2 Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            rowGap: '2rem',
            columnGap: '2rem',
            marginBottom: '4rem',
          }}
        >
          <style>{`
            .problem-card {
              padding: 2.25rem 2rem;
              background: rgba(58,52,45,0.18);
              backdrop-filter: blur(16px);
              -webkit-backdrop-filter: blur(16px);
              border: 1px solid rgba(128,108,89,0.2);
              border-radius: 10px;
              transition: border-color 0.25s ease;
            }
            .problem-card:hover {
              border-color: rgba(128,108,89,0.7);
            }
          `}</style>
          {cards.map((card) => (
            <div
              key={card.num}
              className="problem-card"
            >
              <span style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1rem',
                fontWeight: 400,
                color: '#f7f5f0',
                display: 'block',
                marginBottom: '0.75rem',
              }}>
                {card.num}
              </span>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.2rem',
                fontWeight: 400,
                color: '#f7f5f0',
                lineHeight: 1.35,
                letterSpacing: '-0.02em',
                margin: '0 0 0.75rem',
              }}>
                {card.title}
              </h3>
              <p style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 300,
                fontSize: '0.9375rem',
                lineHeight: 1.75,
                color: '#b0a79d',
                margin: 0,
              }}>
                {card.body}
              </p>
            </div>
          ))}
        </motion.div>

        {/* The deeper problem row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'baseline',
            maxWidth: 960,
            margin: '0 auto',
          }}
        >
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 400,
            fontSize: '1.5rem',
            letterSpacing: '-0.016em',
            color: '#c4a87a',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            The deeper problem:
          </span>
          <p style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.94,
            color: '#b0a79d',
            margin: 0,
          }}>
            What it takes to be a high performer and what it takes to lead high performers are not the same thing.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

// Per-item row — hooks called at component level, not inside .map()
function SymptomRow({ num, body, index, total, scrollYProgress }) {
  const seg = 1 / total
  const start = index * seg
  const end = start + seg
  const t = seg * 0.32 // wider overlap for smoother cross-fades

  const activity = useTransform(
    scrollYProgress,
    [Math.max(0, start - t), start, end, Math.min(1, end + t)],
    [0, 1, 1, 0]
  )

  const opacity     = useTransform(activity, [0, 1], [0.18, 1])
  const scale       = useTransform(activity, [0, 1], [0.8, 1])
  const numOpacity  = useTransform(activity, [0, 1], [0.25, 1])
  const borderColor = useTransform(activity, [0, 1], ['rgba(196,168,122,0.1)', '#c4a87a'])
  const textColor   = useTransform(activity, [0, 1], ['#7a716a', '#f7f5f0'])

  return (
    <motion.div
      style={{
        opacity,
        scale,
        transformOrigin: 'left center',
        display: 'flex',
        alignItems: 'baseline',
        gap: '1.25rem',
        borderLeft: '2px solid',
        borderColor,
        paddingLeft: '1.75rem',
        paddingTop: '0.6rem',
        paddingBottom: '0.6rem',
      }}
    >
      <motion.span
        style={{
          opacity: numOpacity,
          fontFamily: 'Arial Narrow, Arial, sans-serif',
          fontSize: '0.75rem',
          letterSpacing: '1px',
          color: '#c4a87a',
          flexShrink: 0,
          minWidth: '1.75rem',
        }}
      >
        {num}
      </motion.span>
      <motion.p
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 400,
          fontSize: '1.6rem',
          lineHeight: 1.35,
          letterSpacing: '-0.01em',
          color: textColor,
          margin: 0,
        }}
      >
        {body}
      </motion.p>
    </motion.div>
  )
}

export function Symptoms() {
  const containerRef = useRef(null)

  const { scrollYProgress: rawProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const scrollYProgress = useSpring(rawProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.0005,
  })

  const items = [
    { num: '01', body: 'Self-doubt that contradicts your track record of success' },
    { num: '02', body: "Inconsistency in your performance—and your team's" },
    { num: '03', body: 'Feeling heavy-handed, or worse, overly light and passive' },
    { num: '04', body: 'Difficulty hitting goals and targets despite working harder than anyone' },
    { num: '05', body: 'A constant drive to do, do, do—that never resolves because the underlying problem keeps sabotaging the results' },
    { num: '06', body: 'An impossible standard you hold yourself to that escalates daily and becomes crippling' },
  ]

  return (
    <section
      ref={containerRef}
      id="symptoms"
      style={{ height: '360vh', position: 'relative', background: '#1a1612' }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '6rem',
      }}>

        {/* Header */}
        <div style={{ marginBottom: '3rem', maxWidth: 740, width: '100%', padding: '0 2rem' }}>
          <p style={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '1.8px',
            textTransform: 'uppercase',
            color: '#c4a87a',
            margin: '0 0 0.75rem',
          }}>
            The Symptoms
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: '#f7f5f0',
            margin: 0,
          }}>
            What It Feels Like From the Inside
          </h2>
        </div>

        {/* Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', maxWidth: 740, width: '100%', padding: '0 2rem' }}>
          {items.map((item, i) => (
            <SymptomRow
              key={item.num}
              {...item}
              index={i}
              total={items.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>


      </div>
    </section>
  )
}

export function RealCost() {
  const cards = [
    {
      title: 'It pushes away good partners',
      body: 'In personal life and professional life. The people you want most are the people you keep losing.',
    },
    {
      title: 'It holds your career back',
      body: "You can't find your way into working with the best teams you've been around. Projects that should have been super successful blow apart.",
    },
    {
      title: 'It costs you your best people',
      body: "You're unable to keep the true rock stars. You don't know how to adjust your behavior to keep them growing with you.",
    },
    {
      title: 'It bleeds into everything',
      body: 'It translates to the way you live your life, the way you carry yourself at home, with your kids, your parents, your family.',
    },
  ]

  return (
    <section id="real-cost" style={{ background: '#fdfcfa', padding: '8rem 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4.5rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', width: '100%' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'Arial, sans-serif',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
              color: '#8a7e72',
              textAlign: 'center',
              margin: 0,
            }}
          >
            The Real Cost
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(2.25rem, 4vw, 3.2rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#2c2420',
              textAlign: 'center',
              margin: 0,
            }}
          >
            This Isn't Just a<br />Work Problem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'Arial Narrow, Arial, sans-serif',
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: '#8a7e72',
              textAlign: 'center',
              maxWidth: 600,
              margin: 0,
            }}
          >
            This leadership breakdown follows you everywhere. It's not contained to the office. It's in every relationship you have.
          </motion.p>
        </div>

        {/* 2×2 Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '1.5rem', width: '100%' }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                background: '#f7f5f0',
                border: '1px solid #d8d0c4',
                borderRadius: 4,
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 400,
                fontSize: '1.35rem',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#2c2420',
                margin: 0,
              }}>
                {card.title}
              </h3>
              <p style={{
                fontFamily: 'Arial Narrow, Arial, sans-serif',
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: '#8a7e72',
                margin: 0,
              }}>
                {card.body}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Blockquote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            borderTop: '1px solid #d8d0c4',
            borderBottom: '1px solid #d8d0c4',
            padding: '2rem 2rem',
            maxWidth: 700,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '1.2rem',
            lineHeight: 1.7,
            color: '#2c2420',
            textAlign: 'center',
            margin: 0,
          }}>
            "These problems are affecting them everywhere. They are not hitting their goals, and they are holding themselves to an impossible standard that becomes higher on a daily basis, becoming almost crippling."
          </p>
          <p style={{
            fontFamily: 'Arial, sans-serif',
            fontWeight: 700,
            fontSize: '0.8125rem',
            letterSpacing: '0.26px',
            color: '#8a7e72',
            textAlign: 'center',
            margin: 0,
          }}>
            — Nic Sementa
          </p>
        </motion.blockquote>

      </div>
    </section>
  )
}

export function Framework() {
  const points = [
    'Spot when you are stuck expanding, contracting, or frozen.',
    'Know exactly when to take the room and when to make space.',
    'Release what is not yours to carry, without losing authority.',
    'Shift culture through rhythm, not rallies or rules.',
  ]
  return (
    <section id="framework" style={{ padding: '5rem 0', background: '#3D3228', color: '#F5F0E8' }}>
      <div style={{ maxWidth: 768, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', marginBottom: '1rem', fontWeight: 400 }}>What Is the Breathing Ego Framework?</h2>
        <p style={{ color: 'rgba(245,240,232,0.8)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Treat your ego like a lung.</p>
        <p style={{ color: 'rgba(245,240,232,0.6)', fontSize: '1.125rem', marginBottom: '3rem' }}>Inhale to lead. Exhale to listen. Never hold your breath.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {points.map((text, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ color: '#8B7355', flexShrink: 0, marginTop: 2 }}>&mdash;</span>
              <p style={{ color: 'rgba(245,240,232,0.8)', margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
        <a href="#"
          className="btn-with-arrow"
          style={{ border: '1px solid rgba(245,240,232,0.4)', color: '#F5F0E8', padding: '1rem 2rem', borderRadius: 12, fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none', transition: 'background 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,240,232,0.1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          Read a Preview
          <span className="arrow-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  )
}

export function Rhythm() {
  const blocks = [
    { know: 'You know when to step back...', but: 'but fill every silence instead.' },
    { know: 'You know when to take the room...', but: 'but second-guess or apologize instead.' },
    { know: 'You know when to decide...', but: 'but overthink until momentum dies.' },
  ]
  return (
    <>
      <section id="rhythm" style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: 768, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', color: '#3D3228', marginBottom: '0.5rem', fontWeight: 400 }}>Ego Isn't the Problem. Rhythm Is.</h2>
          <p style={{ fontSize: '1.25rem', color: '#6B6560', marginBottom: '2.5rem' }}>You Already Know What to Do. Your Ego Won't Let You.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {blocks.map((b, i) => (
              <div key={i} style={{ background: 'rgba(61,50,40,0.05)', borderLeft: '2px solid rgba(139,115,85,0.4)', padding: '1.5rem' }}>
                <p style={{ color: 'rgba(61,50,40,0.8)', margin: 0 }}>
                  {b.know} <span style={{ color: '#6B6560' }}>{b.but}</span>
                </p>
              </div>
            ))}
          </div>
          <p style={{ color: 'rgba(61,50,40,0.8)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Healthy egos expand to lead, contract to listen. Yours gets stuck in one posture: you push too hard. When it only contracts, you hesitate. When you hold too long, clarity disappears.
          </p>
          <p style={{ color: '#3D3228', fontWeight: 500, fontSize: '1.125rem', marginBottom: '2rem' }}>
            Breathing Ego trains your leadership timing, so you can act deliberately instead of reactively.
          </p>
          <a href="#"
            className="btn-with-arrow"
            style={{ background: '#3D3228', color: '#F5F0E8', padding: '1rem 2rem', borderRadius: 12, fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none', transition: 'background 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#1A1A1A'} onMouseLeave={e => e.currentTarget.style.background = '#3D3228'}
          >
            Get the Book
            <span className="arrow-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </section>
      <Divider />
    </>
  )
}

export function Outcomes() {
  const cards = [
    'Meetings feel lighter.',
    'Teams engage with less prompting.',
    'Decisions come with more clarity and less noise.',
  ]
  return (
    <>
      <section id="outcomes" style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: 768, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', color: '#3D3228', marginBottom: '1rem', fontWeight: 400 }}>The Quiet Outcomes</h2>
          <p style={{ color: '#6B6560', marginBottom: '2.5rem' }}>Leaders who practice this don't usually announce dramatic transformation. They notice quiet but real shifts:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2.5rem' }}>
            {cards.map((text, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem' }}>
                <p style={{ color: '#3D3228', fontSize: '1.125rem', fontWeight: 500, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
          <p style={{ color: 'rgba(61,50,40,0.8)', lineHeight: 1.7, marginBottom: '1rem' }}>
            These aren't personality changes. They're rhythm changes. Leadership stops requiring you to carry every decision. It builds confidence across the team to lead independently.
          </p>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#"
              className="btn-with-arrow"
              style={{ background: '#3D3228', color: '#F5F0E8', padding: '1rem 2rem', borderRadius: 12, fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none', transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#1A1A1A'} onMouseLeave={e => e.currentTarget.style.background = '#3D3228'}
            >
              Get Breathing Ego on Amazon
              <span className="arrow-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
      <Divider />
    </>
  )
}

export function Author() {
  return (
    <section id="author" style={{ padding: '5rem 0' }}>
      <div style={{ maxWidth: 768, margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.875rem', color: '#3D3228', marginBottom: '2.5rem', textAlign: 'center', fontWeight: 400 }}>About the Author</h2>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ width: 160, height: 160, borderRadius: '50%', background: 'rgba(61,50,40,0.1)', border: '1px solid rgba(139,115,85,0.2)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6B6560', fontSize: '0.75rem' }}>
            [Headshot]
          </div>
          <p style={{ color: 'rgba(61,50,40,0.8)', lineHeight: 1.7, flex: 1 }}>
            Nic Sementa is a leadership advisor, author, and founder who helps modern teams build cultures rooted in trust, rhythm, and awareness. Drawing on psychology, communication, and agile systems thinking, his work bridges performance and presence, guiding leaders to expand with conviction and contract with care.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid rgba(139,115,85,0.1)' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <p style={{ color: '#6B6560', fontSize: '0.875rem' }}>&copy; 2026 Breathing Ego. All rights reserved.</p>
      </div>
    </footer>
  )
}
