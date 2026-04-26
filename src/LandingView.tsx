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
        <div className="landing-content">
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

          <h2 className="landing-title" style={{ marginTop: '48px' }}>50+ Tags</h2>
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
        <GlyphRain />
        <div className="landing-content">
          <h2 className="landing-title">Practice Playlists</h2>
          <p className="landing-subtitle">Isolate specific moves and keep them pinned on your second screen.</p>
          
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
            <div className="playlist-demo">
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: '#9090ae', textAlign: 'center', letterSpacing: '0.1em' }}>MOVES</h3>
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
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: '#9090ae', textAlign: 'center', letterSpacing: '0.1em' }}>COMBOS</h3>
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
          <p className="landing-subtitle">A distraction-free interface designed specifically for your second screen.</p>
          <div className="glyph-demo-card" style={{ padding: '24px', alignItems: 'flex-start', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.35)', marginTop: '24px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '12px', marginBottom: '16px' }}>
                <span style={{ fontWeight: 800, fontSize: '14px', letterSpacing: '0.1em' }}>STREET FIGHTER 6</span>
                <span style={{ fontWeight: 800, color: 'var(--accent-indigo)' }}>RYU</span>
             </div>
             <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.08)', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                   <span style={{ fontWeight: 800, fontSize: '18px' }}>Bread &amp; Butter</span>
                   <div style={{ display: 'flex', alignItems: 'center' }}>
                      <GlyphSequence inputs={["c.MK", ">", "down", "down-forward", "forward", "P"]} controller="playstation" notationSystem="traditional" />
                   </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.08)', borderRadius: '8px', borderLeft: '4px solid #ef4444' }}>
                   <span style={{ fontWeight: 800, fontSize: '18px' }}>Max Damage</span>
                   <div style={{ display: 'flex', alignItems: 'center' }}>
                      <GlyphSequence inputs={["DI", ">", "HP", ">", "forward", "down", "down-forward", "P"]} controller="playstation" notationSystem="traditional" />
                   </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.08)', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
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
        <AmbientMesh colors={['rgba(99, 102, 241, 0.15)', 'rgba(167, 139, 250, 0.15)', 'rgba(236, 72, 153, 0.15)']} />
        <div className="landing-content">
          <h2 className="landing-title">Ready to hit the lab?</h2>
          <p className="landing-subtitle">No accounts. No downloads. Installs as a PWA directly from your browser.</p>
          
          <button className="landing-cta" onClick={onLaunch} style={{ padding: '24px 64px', fontSize: 24 }}>
            Launch GameGlance
          </button>

          <div className="footer-nav">
             <a href="https://github.com/LevonFrench/gameglance" target="_blank" rel="noreferrer" className="footer-link" style={{ color: '#9090ae', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color = '#9090ae'}>GitHub</a>
             <a href="https://discord.gg/u9htMX39" target="_blank" rel="noreferrer" title="Discord" style={{ color: '#9090ae', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }} onMouseOver={e => { e.currentTarget.style.color = '#5865F2'; }} onMouseOut={e => { e.currentTarget.style.color = '#9090ae'; }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
               Discord
             </a>
             <a href="https://ko-fi.com/gameglanceapp" target="_blank" rel="noreferrer" title="Ko-fi" style={{ color: '#9090ae', transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }} onMouseOver={e => { e.currentTarget.style.color = '#ff5e5b'; }} onMouseOut={e => { e.currentTarget.style.color = '#9090ae'; }}>
               <span style={{ color: '#ff5e5b', fontSize: '18px' }}>❤️</span> Support GG
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};
