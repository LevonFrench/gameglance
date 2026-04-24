import React from 'react';
import './LandingView.css';
import { GlyphSequence } from './GlyphSequence';
import { GlyphRain } from './GlyphRain';
import { AmbientMesh } from './AmbientMesh';

const GAMES_LIST = ["STREET FIGHTER 6", "TEKKEN 8", "GUILTY GEAR STRIVE", "MORTAL KOMBAT 1", "CITY OF THE WOLVES", "UNDER NIGHT IN-BIRTH II", "BLAZBLUE: CENTRALFICTION", "GRANBLUE FANTASY VERSUS: RISING", "MARVEL VS CAPCOM 2", "STREET FIGHTER III: 3RD STRIKE", "CAPCOM VS SNK 2", "GAROU: MARK OF THE WOLVES", "THE KING OF FIGHTERS XV", "SAMURAI SHODOWN", "MELTY BLOOD: TYPE LUMINA", "DRAGON BALL FIGHTERZ", "ULTIMATE MARVEL VS CAPCOM 3", "SUPER SMASH BROS. MELEE", "VAMPIRE SAVIOR", "GUILTY GEAR XX ACCENT CORE PLUS R"];
const MOVES_LIST = ["HADOKEN", "SHORYUKEN", "TATSUMAKI SENPUKYAKU", "ELECTRIC WIND GOD FIST", "VOLCANIC VIPER", "GUN FLAME", "TOTSUGEKI", "SONIC BOOM", "FLASH KICK", "SPINNING PILEDRIVER", "BURNING BRAWLER", "GALACTICA PHANTOM", "BUSTER WOLF", "POWER GEYSER", "AEGIS REFLECTOR", "TYRANT RAVE", "HEAVENLY POTEMKIN BUSTER", "FATAL HOMERUN", "GENEI JIN", "HOUYOKU SEN", "HELL SWEEP", "MACH BREAKER"];

const shuffleAndJoin = (arr: string[]) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr.join(' • ');
};

const renderWatermarkTracks = (list: string[]) => {
  return (
    <div className="watermark-wrapper">
      {Array.from({ length: 30 }).map((_, i) => {
        // Randomize the string for every single line so it doesn't look like repeating columns
        const lineText = Array(2).fill(0).map(() => shuffleAndJoin(list)).join(' • ');
        return (
          <div key={i} className="watermark-track" style={{ marginLeft: i % 2 === 0 ? '0' : '-10%' }}>
            {lineText}
          </div>
        );
      })}
    </div>
  );
};

interface LandingViewProps {
  onLaunch: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onLaunch }) => {
  return (
    <div className="landing-container">
      {/* SECTION 1: HERO */}
      <section className="hero-section">
        <AmbientMesh colors={['rgba(99, 102, 241, 0.15)', 'rgba(167, 139, 250, 0.15)', 'rgba(236, 72, 153, 0.15)']} />
        <div className="landing-content hero-frame">
          <div className="landing-wordmark animate-in">G A M E G L A N C E</div>
          <h1 className="landing-title animate-in stagger-1">
            Your Second Screen<br />for Fighting Games
          </h1>
          <p className="landing-subtitle animate-in stagger-2">
            Browse move lists, build practice playlists, and drill combos without interrupting your match.
          </p>
          <button className="landing-cta animate-in stagger-3" onClick={onLaunch} style={{ textTransform: 'uppercase' }}>
            Launch App
          </button>
        </div>
        <div className="scroll-indicator animate-in stagger-5">
          <span>Scroll to Explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* SECTION 2: REGISTRY */}
      <section className="hero-section">
        <div className="watermark-bg">
          {renderWatermarkTracks(GAMES_LIST)}
        </div>
        <div className="landing-content">
          <h2 className="landing-title">225+ Games</h2>
          <p className="landing-subtitle">From arcade classics to the latest releases.</p>
          
          <div className="registry-grid">
            <div className="registry-item"><div className="registry-dot" style={{ background: '#3b82f6' }}></div>Street Fighter 6 <span className="pinput">2023</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#ef4444' }}></div>Guilty Gear Strive <span className="pinput">2021</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#eab308' }}></div>Tekken 8 <span className="pinput">2024</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#10b981' }}></div>City of the Wolves <span className="pinput">2025</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#a855f7' }}></div>Under Night In-Birth II <span className="pinput">2024</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#f97316' }}></div>Mortal Kombat 1 <span className="pinput">2023</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#06b6d4' }}></div>BlazBlue: CF <span className="pinput">2015</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#ec4899' }}></div>Hokuto no Ken <span className="pinput">2005</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#ffffff' }}></div>Marvel vs Capcom 2 <span className="pinput">2000</span></div>
            <div className="registry-item" style={{ opacity: 0.5 }}><div className="registry-dot" style={{ background: '#555' }}></div>+ 216 more...</div>
          </div>

          <h2 className="landing-title" style={{ marginTop: '80px' }}>50+ Tags</h2>
          <p className="landing-subtitle">Filter by genre, mechanics, platforms, and more.</p>
          
          <div className="registry-grid">
            <div className="registry-item"><div className="registry-dot" style={{ background: '#ec4899' }}></div>2D Fighter <span className="pinput">Tag</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#8b5cf6' }}></div>Anime <span className="pinput">Tag</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#10b981' }}></div>3D Fighter <span className="pinput">Tag</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#06b6d4' }}></div>PlayStation <span className="pinput">Platform</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#f59e0b' }}></div>PC / Steam <span className="pinput">Platform</span></div>
            <div className="registry-item"><div className="registry-dot" style={{ background: '#ef4444' }}></div>Arcade <span className="pinput">Platform</span></div>
            <div className="registry-item" style={{ opacity: 0.5 }}><div className="registry-dot" style={{ background: '#555' }}></div>+ 45 filters...</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GLYPH ENGINE */}
      <section className="hero-section">
        <div className="watermark-bg">
          {renderWatermarkTracks(MOVES_LIST)}
        </div>
        <div className="landing-content">
          <h2 className="landing-title">Adaptive Glyph Engine</h2>
          <p className="landing-subtitle">One move. Every notation system.</p>
          
          <div className="glyph-demo-card">
            {/* PlayStation */}
            <div className="glyph-row">
              <div className="glyph-label" style={{ color: '#3b82f6' }}>PlayStation</div>
              <div style={{ flex: 1 }}>
                 <div style={{ fontWeight: 800, fontSize: 18 }}>Hadoken</div>
                 <div style={{ fontSize: 10, fontWeight: 700, color: '#a78bfa', background: 'rgba(167,139,250,0.12)', padding: '2px 8px', borderRadius: 4, width: 'fit-content' }}>SPECIAL</div>
              </div>
              <div className="glyph-input-area">
                <GlyphSequence inputs={["down", "down-forward", "forward", "LP"]} controller="playstation" notationSystem="traditional" />
              </div>
            </div>

            {/* Xbox */}
            <div className="glyph-row">
              <div className="glyph-label" style={{ color: '#10b950' }}>Xbox</div>
              <div style={{ flex: 1 }}>
                 <div style={{ fontWeight: 800, fontSize: 18 }}>Hadoken</div>
                 <div style={{ fontSize: 10, fontWeight: 700, color: '#a78bfa', background: 'rgba(167,139,250,0.12)', padding: '2px 8px', borderRadius: 4, width: 'fit-content' }}>SPECIAL</div>
              </div>
              <div className="glyph-input-area">
                <GlyphSequence inputs={["down", "down-forward", "forward", "LP"]} controller="xbox" notationSystem="traditional" />
              </div>
            </div>

            {/* Arcade Numpad */}
            <div className="glyph-row">
              <div className="glyph-label" style={{ color: '#a855f7' }}>Numpad</div>
              <div style={{ flex: 1 }}>
                 <div style={{ fontWeight: 800, fontSize: 18 }}>Hadoken</div>
                 <div style={{ fontSize: 10, fontWeight: 700, color: '#a78bfa', background: 'rgba(167,139,250,0.12)', padding: '2px 8px', borderRadius: 4, width: 'fit-content' }}>SPECIAL</div>
              </div>
              <div className="glyph-input-area">
                <GlyphSequence inputs={["down", "down-forward", "forward", "LP"]} controller="arcade" notationSystem="numpad" />
              </div>
            </div>

            {/* Switch */}
            <div className="glyph-row">
              <div className="glyph-label" style={{ color: '#ef4444' }}>Switch</div>
              <div style={{ flex: 1 }}>
                 <div style={{ fontWeight: 800, fontSize: 18 }}>Hadoken</div>
                 <div style={{ fontSize: 10, fontWeight: 700, color: '#a78bfa', background: 'rgba(167,139,250,0.12)', padding: '2px 8px', borderRadius: 4, width: 'fit-content' }}>SPECIAL</div>
              </div>
              <div className="glyph-input-area">
                <GlyphSequence inputs={["down", "down-forward", "forward", "LP"]} controller="switch" notationSystem="traditional" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PLAYLISTS */}
      <section className="hero-section">
        <AmbientMesh colors={['rgba(99, 102, 241, 0.15)', 'rgba(167, 139, 250, 0.15)', 'rgba(236, 72, 153, 0.15)']} />
        <div className="landing-content">
          <h2 className="landing-title">Practice Playlists</h2>
          <p className="landing-subtitle">Isolate specific moves and keep them pinned on your second screen.</p>
          
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
            <div className="playlist-demo">
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: 'var(--text-secondary)', textAlign: 'center', letterSpacing: '0.1em' }}>MOVES</h3>
              <div className="playlist-item checked">
                 <div className="pcheck">✓</div>
                 <div className="pname">Hadoken</div>
                 <div className="pinput">↓↘→+P</div>
              </div>
              <div className="playlist-item checked">
                 <div className="pcheck">✓</div>
                 <div className="pname">Shoryuken</div>
                 <div className="pinput">→↓↘+P</div>
              </div>
              <div className="playlist-item checked">
                 <div className="pcheck">✓</div>
                 <div className="pname">Tatsumaki</div>
                 <div className="pinput">↓↙←+K</div>
              </div>
              <div className="playlist-item">
                 <div className="pcheck"></div>
                 <div className="pname">Hashogeki</div>
                 <div className="pinput">↓↘→↓↘→+P</div>
              </div>
              <div className="playlist-item">
                 <div className="pcheck"></div>
                 <div className="pname">Shin Shoryuken</div>
                 <div className="pinput">↓↘→↓↘→+K</div>
              </div>
              <button className="landing-cta" style={{ marginTop: 16, width: '100%', padding: '12px', fontSize: 16 }}>
                3 Selected — Launch
              </button>
            </div>

            <div className="playlist-demo">
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: 'var(--text-secondary)', textAlign: 'center', letterSpacing: '0.1em' }}>COMBOS</h3>
              <div className="playlist-item checked">
                 <div className="pcheck">✓</div>
                 <div className="pname">Bread & Butter</div>
                 <div className="pinput">c.MK &gt; ↓↘→+P</div>
              </div>
              <div className="playlist-item">
                 <div className="pcheck"></div>
                 <div className="pname">Corner Carry</div>
                 <div className="pinput">HP &gt; ↓↙←+K</div>
              </div>
              <div className="playlist-item checked">
                 <div className="pcheck">✓</div>
                 <div className="pname">Max Damage</div>
                 <div className="pinput">DI &gt; HP &gt; →↓↘+P</div>
              </div>
              <div className="playlist-item">
                 <div className="pcheck"></div>
                 <div className="pname">Safe Jump</div>
                 <div className="pinput">Throw &gt; j.HK</div>
              </div>
              <div className="playlist-item checked">
                 <div className="pcheck">✓</div>
                 <div className="pname">Anti-Air</div>
                 <div className="pinput">→↓↘+P &gt; SA3</div>
              </div>
              <button className="landing-cta" style={{ marginTop: 16, width: '100%', padding: '12px', fontSize: 16 }}>
                3 Selected — Launch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GAMEGLANCE VIEW */}
      <section className="hero-section">
        <GlyphRain />
        <div className="landing-content">
          <h2 className="landing-title">The GameGlance View</h2>
          <p className="landing-subtitle">A distraction-free, ad-free interface designed specifically for your second screen.</p>
          <div className="glyph-demo-card" style={{ padding: '24px', alignItems: 'flex-start', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)', border: '1px solid var(--border-medium)', marginTop: '24px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px', marginBottom: '16px' }}>
                <span style={{ fontWeight: 800, fontSize: '14px', letterSpacing: '0.1em' }}>STREET FIGHTER 6</span>
                <span style={{ fontWeight: 800, color: 'var(--accent-indigo)' }}>RYU</span>
             </div>
             <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'var(--bg-input)', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                   <span style={{ fontWeight: 800, fontSize: '18px' }}>Bread &amp; Butter</span>
                   <div style={{ display: 'flex', alignItems: 'center' }}>
                      <GlyphSequence inputs={["c.MK", ">", "down", "down-forward", "forward", "P"]} controller="playstation" notationSystem="traditional" />
                   </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'var(--bg-input)', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                   <span style={{ fontWeight: 800, fontSize: '18px' }}>Max Damage</span>
                   <div style={{ display: 'flex', alignItems: 'center' }}>
                      <GlyphSequence inputs={["DI", ">", "HP", ">", "forward", "down", "down-forward", "P"]} controller="playstation" notationSystem="traditional" />
                   </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'var(--bg-input)', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                   <span style={{ fontWeight: 800, fontSize: '18px' }}>Anti-Air</span>
                   <div style={{ display: 'flex', alignItems: 'center' }}>
                      <GlyphSequence inputs={["forward", "down", "down-forward", "P", ">", "SA3"]} controller="playstation" notationSystem="traditional" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="hero-section">
        <div className="landing-content">
          <h2 className="landing-title">Ready to hit the lab?</h2>
          <p className="landing-subtitle">No accounts. No downloads. Installs as a PWA directly from your browser.</p>
          
          <button className="landing-cta" onClick={onLaunch} style={{ padding: '24px 64px', fontSize: 24 }}>
            Launch GameGlance
          </button>

          <div className="footer-nav">
             <a href="https://github.com/LevonFrench/gameglance" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
             <a href="#" target="_blank" rel="noreferrer" title="Instagram" style={{ color: 'var(--text-secondary)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }} onMouseOver={e => { e.currentTarget.style.color = '#e1306c'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             </a>
             <a href="#" target="_blank" rel="noreferrer" title="Twitter" style={{ color: 'var(--text-secondary)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }} onMouseOver={e => { e.currentTarget.style.color = '#1DA1F2'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
             </a>
             <a href="#" target="_blank" rel="noreferrer" title="YouTube" style={{ color: 'var(--text-secondary)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }} onMouseOver={e => { e.currentTarget.style.color = '#FF0000'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
             </a>
             <a href="#" target="_blank" rel="noreferrer" title="TikTok" style={{ color: 'var(--text-secondary)', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex' }} onMouseOver={e => { e.currentTarget.style.color = '#FF0050'; }} onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a7 7 0 1 1-7-7z"></path></svg>
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};
