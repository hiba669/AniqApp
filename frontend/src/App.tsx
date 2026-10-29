import { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react'

type Tab = 'accueil' | 'dressing' | 'scan' | 'explorer' | 'profil'
type IconName =
  | 'home'
  | 'hanger'
  | 'camera'
  | 'compass'
  | 'user'
  | 'bell'
  | 'arrow'
  | 'sparkle'
  | 'heart'
  | 'pin'
  | 'plus'
  | 'close'
  | 'check'
  | 'grid'
  | 'settings'
  | 'leaf'

const editorialPhoto =
  'https://images.unsplash.com/photo-1585531708916-ef80350126d8?auto=format&fit=crop&w=1200&q=88'
const lookPhoto =
  'https://images.unsplash.com/photo-1720718517204-a66cc17a1052?auto=format&fit=crop&w=900&q=85'
const mensPhoto =
  'https://images.unsplash.com/photo-1728837829882-aff2f6766fd9?auto=format&fit=crop&w=900&q=85'

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></>,
    hanger: <><path d="M12 9a3 3 0 1 0-3-3" /><path d="m3 18 9-7 9 7a1.5 1.5 0 0 1-1 3H4a1.5 1.5 0 0 1-1-3Z" /></>,
    camera: <><path d="M14.5 5 13 3h-2L9.5 5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" /><circle cx="12" cy="12.5" r="4" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9Z" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" /><path d="M10 21h4" /></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
    sparkle: <><path d="m12 2 1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6Z" /><path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8Z" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    check: <path d="m5 12 4 4L19 6" />,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
    leaf: <><path d="M20 4C12 4 5 8 5 15c0 3 2 5 5 5 7 0 10-8 10-16Z" /><path d="M4 21c3-6 7-9 12-12" /></>,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function AppHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="topbar">
      <div>
        {subtitle && <p className="eyebrow">{subtitle}</p>}
        <h1>{title}</h1>
      </div>
      <button className="icon-button notification" aria-label="Notifications">
        <Icon name="bell" size={20} />
        <span />
      </button>
    </header>
  )
}

function SectionTitle({ children, action }: { children: ReactNode; action?: string }) {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
      {action && <button className="text-button">{action} <Icon name="arrow" size={15} /></button>}
    </div>
  )
}

function HomeScreen({ onScan, onNavigate }: { onScan: () => void; onNavigate: (tab: Tab) => void }) {
  const [occasion, setOccasion] = useState('Quotidien')
  return (
    <main className="screen">
      <AppHeader title="Bonjour, Salma" subtitle="Mardi 24 juin · Casablanca" />

      <section className="scan-hero">
        <div className="hero-pattern" />
        <div className="hero-copy">
          <span className="ai-label"><Icon name="sparkle" size={14} /> Styliste IA</span>
          <h2>Une pièce.<br />Mille façons de la porter.</h2>
          <p>Photographiez un vêtement et Aniq imagine le look complet.</p>
          <button className="primary-button" onClick={onScan}>
            <span className="button-icon"><Icon name="camera" size={20} /></span>
            Scanner une pièce
          </button>
        </div>
        <div className="hero-orbit">
          <img src="/aniq-logo.png" alt="" />
        </div>
      </section>

      <section>
        <SectionTitle>Pour quelle occasion ?</SectionTitle>
        <div className="chips" role="list">
          {['Quotidien', 'Travail', 'Université', 'Mariage'].map((item) => (
            <button key={item} className={`chip ${occasion === item ? 'active' : ''}`} onClick={() => setOccasion(item)}>
              {item}
            </button>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle action="Voir tout">Votre look du jour</SectionTitle>
        <article className="look-card">
          <img src={lookPhoto} alt="Inspiration mode marocaine" />
          <div className="look-overlay" />
          <div className="look-content">
            <span className="weather-pill">22° · Doux</span>
            <div>
              <p>Élégance contemporaine</p>
              <h3>Émeraude & lumière</h3>
              <button className="round-arrow" aria-label="Voir le look"><Icon name="arrow" size={19} /></button>
            </div>
          </div>
        </article>
      </section>

      <section>
        <SectionTitle action="Dressing">Vos pièces à redécouvrir</SectionTitle>
        <div className="garment-row">
          <button className="garment-card" onClick={() => onNavigate('dressing')}>
            <div className="garment-visual cream-kaftan"><span className="garment-shape" /></div>
            <span>Caftan ivoire</span><small>Porté il y a 32 jours</small>
          </button>
          <button className="garment-card" onClick={() => onNavigate('dressing')}>
            <div className="garment-visual green-jacket"><span className="garment-shape jacket" /></div>
            <span>Veste atlas</span><small>3 idées de looks</small>
          </button>
        </div>
      </section>

      <button className="eco-card">
        <span className="eco-icon"><Icon name="leaf" /></span>
        <span><strong>Votre dressing respire mieux</strong><small>7 pièces réutilisées ce mois-ci</small></span>
        <Icon name="arrow" size={18} />
      </button>
    </main>
  )
}

function DressingScreen({ onScan }: { onScan: () => void }) {
  const [filter, setFilter] = useState('Tout')
  const items = [
    { name: 'Caftan ivoire', meta: 'Cérémonie', kind: 'cream-kaftan' },
    { name: 'Veste atlas', meta: 'Quotidien', kind: 'green-jacket jacket' },
    { name: 'Chemise lin', meta: 'Travail', kind: 'linen-shirt' },
    { name: 'Babouches', meta: 'Traditionnel', kind: 'gold-slipper' },
  ]
  return (
    <main className="screen">
      <AppHeader title="Mon dressing" subtitle="28 pièces · 9 looks" />
      <div className="wardrobe-summary">
        <div><span>Cette semaine</span><strong>4</strong><small>tenues créées</small></div>
        <div><span>Indice d’usage</span><strong>76%</strong><small>Très bien</small></div>
        <div className="summary-mark"><Icon name="leaf" /></div>
      </div>
      <div className="section-heading wardrobe-tools">
        <h2>Mes pièces</h2>
        <button className="icon-button"><Icon name="grid" size={19} /></button>
      </div>
      <div className="chips compact">
        {['Tout', 'Hauts', 'Bas', 'Traditionnel'].map((item) => (
          <button key={item} className={`chip ${filter === item ? 'active' : ''}`} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>
      <div className="wardrobe-grid">
        {items.map((item) => (
          <article className="wardrobe-item" key={item.name}>
            <div className={`wardrobe-image ${item.kind}`}><span className="garment-shape" /></div>
            <button className="mini-heart" aria-label={`Ajouter ${item.name} aux favoris`}><Icon name="heart" size={16} /></button>
            <h3>{item.name}</h3>
            <p>{item.meta}</p>
          </article>
        ))}
        <button className="add-item" onClick={onScan}><span><Icon name="plus" /></span>Ajouter une pièce</button>
      </div>
    </main>
  )
}

function ScanScreen() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string>()
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')

  const selectImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setPreview(URL.createObjectURL(file))
    setStatus('loading')
  }

  useEffect(() => {
    if (status !== 'loading') return
    const timer = window.setTimeout(() => setStatus('done'), 1700)
    return () => window.clearTimeout(timer)
  }, [status])

  return (
    <main className="screen scan-screen">
      <div className="scan-header">
        <img src="/aniq-logo.png" alt="Aniq" />
        <div><p className="eyebrow">Vision Aniq</p><h1>Analyser une pièce</h1></div>
      </div>
      {!preview ? (
        <>
          <button className="camera-stage" onClick={() => inputRef.current?.click()}>
            <span className="corner top-left" /><span className="corner top-right" />
            <span className="corner bottom-left" /><span className="corner bottom-right" />
            <span className="camera-center"><Icon name="camera" size={30} /></span>
            <strong>Cadrez votre vêtement</strong>
            <small>Posez-le à plat, avec une lumière naturelle</small>
          </button>
          <button className="primary-button wide" onClick={() => inputRef.current?.click()}>
            <Icon name="camera" size={20} /> Prendre ou importer une photo
          </button>
        </>
      ) : (
        <div className="analysis-card">
          <div className="analysis-image">
            <img src={preview} alt="Vêtement à analyser" />
            {status === 'loading' && <div className="scan-line" />}
            <button className="close-preview" onClick={() => { setPreview(undefined); setStatus('idle') }} aria-label="Fermer"><Icon name="close" size={18} /></button>
          </div>
          {status === 'loading' ? (
            <div className="analysis-loading"><span className="loader" /><div><strong>Le style prend forme…</strong><small>Couleurs, coupe et matière</small></div></div>
          ) : (
            <div className="analysis-result">
              <span className="result-check"><Icon name="check" size={18} /></span>
              <div><strong>Pièce reconnue</strong><p>Caftan contemporain · Vert émeraude</p></div>
              <button><Icon name="arrow" size={18} /></button>
            </div>
          )}
        </div>
      )}
      <input ref={inputRef} type="file" accept="image/*" onChange={selectImage} hidden />
      <div className="scan-tips">
        <p><Icon name="sparkle" size={16} /> Pour un meilleur résultat</p>
        <div><span>1</span>Un seul vêtement</div><div><span>2</span>Un fond uni</div><div><span>3</span>Sans ombre forte</div>
      </div>
    </main>
  )
}

function ExploreScreen() {
  const [liked, setLiked] = useState(false)
  return (
    <main className="screen">
      <AppHeader title="Créateurs d’ici" subtitle="Sélection locale · Casablanca" />
      <div className="location-banner"><span><Icon name="pin" size={19} /></span><div><strong>Autour de vous</strong><small>12 créateurs à moins de 8 km</small></div><Icon name="arrow" size={18} /></div>
      <article className="artisan-feature">
        <img src={editorialPhoto} alt="Création artisanale marocaine" />
        <div className="artisan-gradient" />
        <div className="artisan-copy">
          <span className="verified"><Icon name="check" size={12} /> Atelier vérifié</span>
          <h2>Maison Zayna</h2>
          <p>Broderie de Fès · Pièces uniques</p>
        </div>
        <button className={`feature-heart ${liked ? 'liked' : ''}`} onClick={() => setLiked(!liked)} aria-label="Ajouter aux favoris"><Icon name="heart" size={19} /></button>
      </article>
      <SectionTitle action="Tout explorer">Près de chez vous</SectionTitle>
      <div className="product-list">
        <article><img src={mensPhoto} alt="Création marocaine verte" /><div><span>Atelier Nouri</span><h3>Jabador contemporain</h3><p>1 290 MAD · 2,4 km</p></div></article>
        <article><div className="product-art gold-slipper"><span className="garment-shape" /></div><div><span>Mâalma Aïcha</span><h3>Babouches brodées</h3><p>420 MAD · 3,1 km</p></div></article>
      </div>
    </main>
  )
}

function ProfileScreen() {
  return (
    <main className="screen">
      <AppHeader title="Mon espace" subtitle="Profil & préférences" />
      <div className="profile-card">
        <div className="avatar">S</div>
        <div><h2>Salma Benali</h2><p>Casablanca · Style contemporain</p></div>
        <button className="icon-button"><Icon name="settings" size={19} /></button>
      </div>
      <div className="style-profile">
        <span className="ai-label"><Icon name="sparkle" size={14} /> Votre signature</span>
        <h2>Élégante, solaire,<br />ancrée dans la tradition.</h2>
        <div className="palette"><i /><i /><i /><i /></div>
      </div>
      <SectionTitle>Votre impact</SectionTitle>
      <div className="impact-grid"><div><strong>28</strong><span>pièces</span></div><div><strong>42</strong><span>looks créés</span></div><div><strong>7</strong><span>pièces sauvées</span></div></div>
      <div className="profile-links">
        {['Mes favoris', 'Mes occasions', 'Langue & région', 'Confidentialité'].map((label) => (
          <button key={label}><span>{label}</span><Icon name="arrow" size={17} /></button>
        ))}
      </div>
    </main>
  )
}

const navItems: { id: Tab; label: string; icon: IconName }[] = [
  { id: 'accueil', label: 'Accueil', icon: 'home' },
  { id: 'dressing', label: 'Dressing', icon: 'hanger' },
  { id: 'scan', label: 'Scanner', icon: 'camera' },
  { id: 'explorer', label: 'Explorer', icon: 'compass' },
  { id: 'profil', label: 'Profil', icon: 'user' },
]

function BottomNav({ active, onChange }: { active: Tab; onChange: (tab: Tab) => void }) {
  return (
    <nav className="bottom-nav" aria-label="Navigation principale">
      {navItems.map((item) => (
        <button key={item.id} className={`${active === item.id ? 'active' : ''} ${item.id === 'scan' ? 'scan-nav' : ''}`} onClick={() => onChange(item.id)}>
          <span><Icon name={item.icon} size={item.id === 'scan' ? 24 : 21} /></span>
          <small>{item.label}</small>
        </button>
      ))}
    </nav>
  )
}

export default function App() {
  const [tab, setTab] = useState<Tab>('accueil')
  const screens: Record<Tab, ReactNode> = {
    accueil: <HomeScreen onScan={() => setTab('scan')} onNavigate={setTab} />,
    dressing: <DressingScreen onScan={() => setTab('scan')} />,
    scan: <ScanScreen />,
    explorer: <ExploreScreen />,
    profil: <ProfileScreen />,
  }

  return (
    <div className="app-canvas">
      <aside className="brand-panel">
        <img src="/aniq-logo.png" alt="Aniq" />
        <p className="brand-kicker">L’élégance, réinventée</p>
        <h2>Votre culture.<br />Votre dressing.<br /><em>Votre style.</em></h2>
        <p className="brand-description">Une expérience mode intelligente, inspirée du savoir-faire marocain.</p>
        <div className="brand-foot"><span>عيق</span><i /><small>Conçu au Maroc</small></div>
      </aside>
      <div className="phone-shell">
        <div className="phone-status"><span>9:41</span><span className="status-icons">● ◒</span></div>
        {screens[tab]}
        <BottomNav active={tab} onChange={setTab} />
      </div>
    </div>
  )
}
