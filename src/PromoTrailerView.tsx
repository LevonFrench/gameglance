import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GlyphSequence } from './GlyphSequence';

gsap.registerPlugin(useGSAP);

export const PromoTrailerView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scene 1 Refs
  const logoRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  // Scene 2 Refs
  const s2TitleRef = useRef<HTMLHeadingElement>(null);
  const glyphsContainerRef = useRef<HTMLDivElement>(null);
  const g1Ref = useRef<HTMLDivElement>(null);
  const g2Ref = useRef<HTMLDivElement>(null);
  const g3Ref = useRef<HTMLDivElement>(null);
  const g4Ref = useRef<HTMLDivElement>(null);

  // Scene 3 Refs
  const s3TitleRef = useRef<HTMLHeadingElement>(null);
  const coversRef = useRef<HTMLDivElement>(null);
  const c1Ref = useRef<HTMLDivElement>(null);
  const c2Ref = useRef<HTMLDivElement>(null);
  const c3Ref = useRef<HTMLDivElement>(null);
  const c4Ref = useRef<HTMLDivElement>(null);

  // Scene 4 Refs
  const s4TitleRef = useRef<HTMLHeadingElement>(null);
  const labMockupRef = useRef<HTMLDivElement>(null);
  const check1Ref = useRef<HTMLDivElement>(null);
  const check2Ref = useRef<HTMLDivElement>(null);
  const check3Ref = useRef<HTMLDivElement>(null);

  // Scene 5 Refs
  const s5LogoRef = useRef<HTMLHeadingElement>(null);
  const s5TextRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Reset all scenes to hidden initially
    gsap.set('.scene', { autoAlpha: 0, display: 'none' });

    // === SCENE 1: Hook (0s - 4s) ===
    tl.set('.scene-1', { autoAlpha: 1, display: 'flex' })
      .from(logoRef.current, { opacity: 0, scale: 0.5, duration: 1.5, ease: 'back.out(1.7)' })
      .from(subtitleRef.current, { opacity: 0, y: 30, duration: 1, ease: 'power2.out' }, '-=0.5')
      .to('.scene-1', { opacity: 0, y: -50, filter: 'blur(10px)', duration: 0.8, ease: 'power2.in' }, '+=1.5')
      .set('.scene-1', { display: 'none' });

    // === SCENE 2: Universal Translator (4s - 12s) ===
    tl.set('.scene-2', { autoAlpha: 1, display: 'flex' })
      .from(s2TitleRef.current, { opacity: 0, y: 30, duration: 1, ease: 'power2.out' })
      .from(glyphsContainerRef.current, { opacity: 0, scale: 0.9, duration: 1, ease: 'power2.out' }, '-=0.5');

    // Crossfade controllers to show the dynamic Glyph engine
    tl.to(g1Ref.current, { opacity: 0, duration: 0.3 }, '+=1')
      .to(g2Ref.current, { opacity: 1, duration: 0.3 }, '<')
      
      .to(g2Ref.current, { opacity: 0, duration: 0.3 }, '+=1')
      .to(g3Ref.current, { opacity: 1, duration: 0.3 }, '<')
      
      .to(g3Ref.current, { opacity: 0, duration: 0.3 }, '+=1')
      .to(g4Ref.current, { opacity: 1, duration: 0.3 }, '<')

      .to('.scene-2', { opacity: 0, scale: 1.1, filter: 'blur(10px)', duration: 0.8, ease: 'power2.in' }, '+=1.5')
      .set('.scene-2', { display: 'none' });

    // === SCENE 3: The Library (12s - 20s) ===
    tl.set('.scene-3', { autoAlpha: 1, display: 'flex' })
      .from([c1Ref.current, c2Ref.current, c3Ref.current, c4Ref.current], { 
        opacity: 0, 
        scale: 0.8, 
        rotation: 5,
        stagger: 0.2, 
        duration: 0.8, 
        ease: 'back.out(1.5)' 
      })
      .from(s3TitleRef.current, { opacity: 0, x: -50, duration: 1, ease: 'power3.out' }, '-=0.5')
      .to('.scene-3', { opacity: 0, scale: 1.5, duration: 1, ease: 'power2.in' }, '+=2')
      .set('.scene-3', { display: 'none' });

    // === SCENE 4: The Lab (20s - 26s) ===
    tl.set('.scene-4', { autoAlpha: 1, display: 'flex' })
      .from(labMockupRef.current, { y: '100vh', opacity: 0, duration: 1.2, ease: 'power3.out' })
      .from(s4TitleRef.current, { opacity: 0, y: -20, duration: 0.8, ease: 'power2.out' }, '-=0.5');

    // Simulate clicking checkboxes
    tl.to(check1Ref.current, { backgroundColor: '#4ade80', borderColor: '#4ade80', scale: 1.2, duration: 0.2 }, '+=0.5')
      .to(check1Ref.current, { scale: 1, duration: 0.2 })
      .to(check2Ref.current, { backgroundColor: '#4ade80', borderColor: '#4ade80', scale: 1.2, duration: 0.2 }, '+=0.3')
      .to(check2Ref.current, { scale: 1, duration: 0.2 })
      .to(check3Ref.current, { backgroundColor: '#4ade80', borderColor: '#4ade80', scale: 1.2, duration: 0.2 }, '+=0.3')
      .to(check3Ref.current, { scale: 1, duration: 0.2 })

      .to('.scene-4', { opacity: 0, y: 50, duration: 0.8, ease: 'power2.in' }, '+=1.5')
      .set('.scene-4', { display: 'none' });

    // === SCENE 5: Outro (26s - 30s) ===
    tl.set('.scene-5', { autoAlpha: 1, display: 'flex' })
      .from(s5LogoRef.current, { opacity: 0, scale: 0.9, duration: 1.5, ease: 'power2.out' })
      .from(s5TextRef.current, { opacity: 0, y: 20, duration: 1, ease: 'power2.out' }, '-=0.5');

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0a0a14',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        color: '#ffffff',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <style>
        {`
          .scene { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
          .logo { font-size: 6rem; font-weight: 900; margin: 0; letter-spacing: -0.02em; background: linear-gradient(135deg, #a5b4fc, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.3)); }
          .title { font-size: 3.5rem; font-weight: 800; text-align: center; margin-bottom: 2rem; color: #e0e0f0; }
          .subtitle { font-size: 1.8rem; font-weight: 500; color: #9090ae; margin-top: 1rem; letter-spacing: 0.1em; text-transform: uppercase; }
          
          .g-layer { position: absolute; top: 0; left: 0; width: 100%; display: flex; justify-content: center; }
          
          .cover-card { width: 220px; height: 320px; background: #161625; border: 2px solid #2a2a40; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.5rem; text-align: center; padding: 1rem; color: #9090ae; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          
          .playlist-mockup { background: rgba(26, 26, 38, 0.90); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 16px; padding: 2.5rem; width: 700px; display: flex; flex-direction: column; gap: 1.25rem; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
          .mock-item { display: flex; align-items: center; gap: 1.5rem; padding: 1.25rem; background: #1a1a2e; border-radius: 8px; border: 1px solid #2a2a40; }
          .mock-check { width: 28px; height: 28px; border-radius: 6px; border: 2px solid #4a4a60; transition: all 0.2s; flex-shrink: 0; }
          .mock-name { flex: 1; font-size: 1.3rem; font-weight: 600; color: #e0e0f0; }
        `}
      </style>

      {/* SCENE 1 */}
      <div className="scene scene-1">
        <h1 className="logo" ref={logoRef}>GameGlance</h1>
        <p className="subtitle" ref={subtitleRef}>The Ultimate FGC Companion</p>
      </div>

      {/* SCENE 2 */}
      <div className="scene scene-2">
        <h2 className="title" ref={s2TitleRef}>Every Notation.<br/>Every Controller.</h2>
        <div ref={glyphsContainerRef} style={{ position: 'relative', width: '100%', height: '100px', marginTop: '40px' }}>
          <div className="g-layer" ref={g1Ref} style={{ opacity: 1 }}>
            <GlyphSequence inputs={['236', 'P']} controller="playstation" notationSystem="numpad" large />
          </div>
          <div className="g-layer" ref={g2Ref} style={{ opacity: 0 }}>
            <GlyphSequence inputs={['236', 'P']} controller="arcade" notationSystem="numpad" large />
          </div>
          <div className="g-layer" ref={g3Ref} style={{ opacity: 0 }}>
            <GlyphSequence inputs={['236', 'P']} controller="xbox" notationSystem="traditional" large />
          </div>
          <div className="g-layer" ref={g4Ref} style={{ opacity: 0 }}>
            <GlyphSequence inputs={['236', 'HK']} controller="xbox" notationSystem="traditional" large />
          </div>
        </div>
      </div>

      {/* SCENE 3 */}
      <div className="scene scene-3">
        <div ref={coversRef} style={{ display: 'flex', gap: '30px', marginBottom: '4rem' }}>
          <div className="cover-card" ref={c1Ref} style={{ background: 'linear-gradient(to bottom right, #4338ca, #312e81)', color: '#fff' }}>Street Fighter 6</div>
          <div className="cover-card" ref={c2Ref} style={{ background: 'linear-gradient(to bottom right, #b91c1c, #7f1d1d)', color: '#fff' }}>Tekken 8</div>
          <div className="cover-card" ref={c3Ref} style={{ background: 'linear-gradient(to bottom right, #c2410c, #7c2d12)', color: '#fff' }}>Guilty Gear Strive</div>
          <div className="cover-card" ref={c4Ref} style={{ background: 'linear-gradient(to bottom right, #047857, #064e3b)', color: '#fff' }}>Mortal Kombat 1</div>
        </div>
        <h2 className="title" ref={s3TitleRef} style={{ fontSize: '4rem' }}>225+ Games.<br/>Infinite Tech.</h2>
      </div>

      {/* SCENE 4 */}
      <div className="scene scene-4">
        <h2 className="title" ref={s4TitleRef}>Pin Moves. Hit the Lab.</h2>
        <div className="playlist-mockup" ref={labMockupRef}>
          <div className="mock-item">
            <div className="mock-check" ref={check1Ref}></div>
            <div className="mock-name">Hadoken</div>
            <GlyphSequence inputs={['236', 'P']} controller="playstation" notationSystem="numpad" />
          </div>
          <div className="mock-item">
            <div className="mock-check" ref={check2Ref}></div>
            <div className="mock-name">Electric Wind God Fist</div>
            <GlyphSequence inputs={['f', 'n', 'd', 'd/f+2']} controller="playstation" notationSystem="tekken" />
          </div>
          <div className="mock-item">
            <div className="mock-check" ref={check3Ref}></div>
            <div className="mock-name">Tyrant Rave</div>
            <GlyphSequence inputs={['6', '3', '2', '1', '4', '6', 'H']} controller="playstation" notationSystem="numpad" />
          </div>
        </div>
      </div>

      {/* SCENE 5 */}
      <div className="scene scene-5">
        <h1 className="logo" ref={s5LogoRef}>GameGlance</h1>
        <p className="subtitle" ref={s5TextRef} style={{ color: '#6366f1', letterSpacing: '0.2em' }}>gameglance.vercel.app</p>
      </div>
    </div>
  );
};
