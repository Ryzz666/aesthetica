'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, Menu, MoveUpRight, Play, X } from 'lucide-react'

const projects = [
  { title: 'The Canopy House', type: 'Private Villa', location: 'Ubud, Bali', image: '/green-residence-hero.png', className: 'project-large' },
  { title: 'Sage House', type: 'Japandi Luxury', location: 'Jakarta Selatan', image: '/green-residence-kitchen.png', className: '' },
  { title: 'The Lumen Suite', type: 'Modern Organic', location: 'Bintaro, Tangerang', image: '/green-residence-bedroom.png', className: '' },
]

const packages = [
  { number: '01', name: 'Essential', detail: 'A considered foundation for refined everyday living.', price: 'From IDR 850M', features: ['Spatial planning & concept', 'Curated material palette', 'Site supervision'] },
  { number: '02', name: 'Signature', detail: 'Our most complete expression of the Green Residence craft.', price: 'From IDR 1.8B', featured: true, features: ['Full interior architecture', 'Bespoke furniture & joinery', '3D photorealistic rendering', 'Dedicated project director'] },
  { number: '03', name: 'Bespoke', detail: 'An entirely personal vision, made without compromise.', price: 'By invitation', features: ['End-to-end private service', 'International material sourcing', 'White-glove handover'] },
]

export default function Page() {
  const [activeFilter, setActiveFilter] = useState('All spaces')
  const [area, setArea] = useState(180)
  const [tier, setTier] = useState('Signature')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const filtered = activeFilter === 'All spaces' ? projects : projects.filter((p) => p.type === activeFilter)
  const estimate = useMemo(() => area * ({ Essential: 9500000, Signature: 14500000, Bespoke: 22000000 } as Record<string, number>)[tier], [area, tier])

  return (
    <main className="site-shell">
      <div className="announcement">Private appointments for the 2026 collection are now open <ArrowUpRight size={13} /></div>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Green Residence home"><span className="brand-mark">GR</span><span>Green<br /><em>Residence</em></span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#studio">The studio</a><a href="#collection">Collection</a><a href="#approach">Approach</a><a href="#journal">Journal</a>
        </nav>
        <a className="nav-cta" href="#consultation">Private consultation <MoveUpRight size={14} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      <section className="hero" id="top">
        <img src="/green-residence-hero.png" alt="Serene luxury living room opening onto a tropical garden" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">Jakarta · Bali · Beyond</p>
          <h1>Spaces with<br /><i>soul.</i></h1>
          <p className="hero-copy">Interior architecture and bespoke living spaces, shaped by nature, made for the way you live.</p>
          <a className="button button-light" href="#collection">Explore our work <ArrowUpRight size={15} /></a>
        </div>
        <div className="hero-footer"><span>01 / 03</span><span className="hero-line" /><span>Scroll to discover</span></div>
      </section>

      <section className="intro section" id="studio">
        <div className="intro-side"><p className="eyebrow">Our philosophy</p><span className="vertical-rule" /></div>
        <div className="intro-main"><h2>We believe the most beautiful spaces are the ones that <i>feel like home.</i></h2><div className="intro-bottom"><p>Green Residence is an interior architecture studio for those who value quiet luxury, honest materials, and the poetry of a well-lived life.</p><a className="text-link" href="#approach">Meet the studio <ArrowUpRight size={15} /></a></div></div>
      </section>

      <section className="collection section" id="collection">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Recent <i>residences</i></h2></div><a className="text-link" href="#collection">View all projects <ArrowUpRight size={15} /></a></div>
        <div className="filters">{['All spaces', 'Private Villa', 'Japandi Luxury', 'Modern Organic'].map((f) => <button className={activeFilter === f ? 'active' : ''} key={f} onClick={() => setActiveFilter(f)}>{f}</button>)}</div>
        <div className="project-grid">{filtered.map((project) => <article className={`project-card ${project.className}`} key={project.title}><div className="project-image"><img src={project.image} alt={project.title} /><span className="project-arrow"><ArrowUpRight size={18} /></span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}</p></div><span>{project.location}</span></div></article>)}</div>
      </section>

      <section className="marquee"><div>CRAFTED FOR LIVING · CRAFTED FOR LIVING · CRAFTED FOR LIVING ·</div></section>

      <section className="approach section" id="approach"><div className="approach-copy"><p className="eyebrow">The Green Residence way</p><h2>Good design is felt<br />before it is <i>seen.</i></h2><p>From the first conversation to the final flower in the vase, our work is guided by a singular belief: the spaces around us should make life feel more considered.</p><a className="button button-dark" href="#consultation">Discover our approach <ArrowUpRight size={15} /></a></div><div className="approach-list">{['Listen deeply', 'Design with intention', 'Make it last'].map((item, i) => <div className="approach-item" key={item}><span>0{i + 1}</span><h3>{item}</h3><p>{['Every project begins with understanding how you live, gather, rest, and dream.', 'We balance proportion, light, texture, and the unexpected to create spaces with presence.', 'Timeless materials and exacting craftsmanship ensure your home grows more beautiful with time.'][i]}</p></div>)}</div></section>

      <section className="estimator section"><div className="estimator-intro"><p className="eyebrow">A considered beginning</p><h2>Imagine what<br /><i>is possible.</i></h2><p>Get an early indication of your investment. Every Green Residence is made to measure, so this is simply a starting point for our conversation.</p></div><div className="estimator-card"><div className="estimate-header"><span>Investment guide</span><span>01 — 03</span></div><label>Approximate area <strong>{area} m²</strong></label><input type="range" min="60" max="600" value={area} onChange={(e) => setArea(Number(e.target.value))} /><div className="range-labels"><span>60 m²</span><span>600 m²</span></div><label>Choose your expression</label><div className="tier-grid">{['Essential', 'Signature', 'Bespoke'].map((t) => <button onClick={() => setTier(t)} className={tier === t ? 'selected' : ''} key={t}>{t}<span>{t === 'Essential' ? 'Quietly refined' : t === 'Signature' ? 'Our signature' : 'Without compromise'}</span></button>)}</div><div className="estimate-total"><span>Indicative investment</span><strong>Rp {(estimate / 1000000000).toFixed(2)}B</strong></div><p className="estimate-note">Based on area and selected finish. Includes design and project management.</p></div></section>

      <section className="packages section"><div className="section-heading"><div><p className="eyebrow">Ways to work together</p><h2>Choose your <i>chapter.</i></h2></div></div><div className="package-grid">{packages.map((pack) => <article className={pack.featured ? 'package featured' : 'package'} key={pack.name}><div className="package-top"><span>{pack.number}</span>{pack.featured && <b>Most requested</b>}</div><h3>{pack.name}</h3><p>{pack.detail}</p><strong>{pack.price}</strong><ul>{pack.features.map((f) => <li key={f}><Check size={14} />{f}</li>)}</ul><a href="#consultation" className="package-link">Explore details <ArrowUpRight size={14} /></a></article>)}</div></section>

      <section className="quote-section" id="journal"><div className="quote-mark">“</div><blockquote>Green Residence understood that luxury is not about more. It is about <i>meaningful choices</i> made beautifully.</blockquote><p>— Nadia & Arif · Kemang Residence</p></section>

      <section className="faq section" id="consultation"><div><p className="eyebrow">The finer details</p><h2>Questions, <i>answered.</i></h2><p className="faq-copy">Still curious? Our studio concierge would love to hear from you.</p><a className="text-link" href="mailto:hello@greenresidence.id">hello@greenresidence.id <ArrowUpRight size={15} /></a></div><div className="faq-list">{['What does the process look like?', 'How long does a project take?', 'Do you work outside Jakarta and Bali?', 'Can I bring my own architect or contractor?'].map((q, i) => <div className="faq-row" key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{q}</span><ChevronDown size={18} className={openFaq === i ? 'rotated' : ''} /></button>{openFaq === i && <p>{['We begin with a private consultation, then move through concept, design development, documentation, and finally the build. Every stage is collaborative and transparent.', 'Most full-service residences take 8–14 months from first sketch to handover, depending on scope and complexity.', 'Yes. Our studio works across Indonesia and selectively with international clients through a trusted network of local partners.', 'Absolutely. We are happy to collaborate with your existing team where it serves the project best.'][i]}</p>}</div>)}</div></section>

      <footer className="footer"><div className="footer-brand"><span className="brand-mark">GR</span><span>Green<br /><em>Residence</em></span></div><div className="footer-col"><p className="eyebrow">Visit the studio</p><p>Jl. Kemang Raya No. 18<br />Jakarta Selatan 12730<br />Indonesia</p></div><div className="footer-col"><p className="eyebrow">Follow along</p><p><a href="#top">Instagram</a><br /><a href="#top">Pinterest</a><br /><a href="#top">LinkedIn</a></p></div><div className="footer-bottom"><span>© 2026 Green Residence</span><span>Built with intention.</span></div></footer>
    </main>
  )
}
