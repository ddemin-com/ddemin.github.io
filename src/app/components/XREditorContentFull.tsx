import { useState, useEffect } from 'react';
import { CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../../styles/xr-editor.css';
import { ImageWithFallback } from './figma/ImageWithFallback';
import wireframesLogin from '../../imports/wireframes_login.png';
import wireframesLib from '../../imports/wireframes_lib.png';
import wireframesLib2 from '../../imports/wireframes_lib_2.png';
import wireframesImport from '../../imports/wireframes_import_popup.png';
import wireframesExport from '../../imports/wireframes_export_popup.png';
import wireframesVideo from '../../imports/wireframes_open_video.png';
import wireframes3d from '../../imports/wireframes_open_3d.png';
import hifiLogin from '../../imports/login.png';
import hifiLib from '../../imports/lib.png';
import hifiLib02 from '../../imports/lib02.png';
import hifiLib03 from '../../imports/lib03.png';
import hifiLib04 from '../../imports/lib04.png';
import hifiLib05 from '../../imports/lib05.png';
import hifiLib06 from '../../imports/lib06.png';
import hifi3dEditor01 from '../../imports/3d_editor01.png';
import hifi3dEditor02 from '../../imports/3d_editor02.png';
import hifi3dEditor03 from '../../imports/3d_editor03.png';
import hifi3dEditor04 from '../../imports/3d_editor04.png';
import hifi3dEditor05 from '../../imports/3d_editor05.png';
import hifiPopups01 from '../../imports/popups01.png';
import hifiPopups02 from '../../imports/popups02.png';
import hifiPopups03 from '../../imports/popups03.png';
import hifiPopups04 from '../../imports/popups04.png';

const wireframeImages = [
  { src: wireframesLogin, alt: 'Authentication flow wireframe', title: 'Authentication Flow' },
  { src: wireframesLib, alt: 'Library patient gallery view wireframe', title: 'Library — Patient Gallery View' },
  { src: wireframesLib2, alt: 'Library folder navigation wireframe', title: 'Library — Folder Navigation' },
  { src: wireframesImport, alt: 'File import modal wireframe', title: 'File Import Modal' },
  { src: wireframesExport, alt: 'Export configuration wireframe', title: 'Export Configuration' },
  { src: wireframesVideo, alt: '3D editor video playback wireframe', title: '3D Editor — Video Playback' },
  { src: wireframes3d, alt: '3D editor full layout wireframe', title: '3D Editor — Full Layout' },
];

const hifiImages = [
  { src: hifiLogin, alt: 'Login screen hi-fi prototype', title: 'Login Screen' },
  { src: hifiLib, alt: 'Patient workspace library', title: 'Patient Workspace — Library' },
  { src: hifiLib02, alt: 'File management interface', title: 'Library — File Management' },
  { src: hifiLib03, alt: 'Asset preview with 3D models', title: 'Library — Asset Preview' },
  { src: hifiLib04, alt: 'Patient details and metadata', title: 'Library — Patient Details' },
  { src: hifiLib05, alt: 'Upload and import interface', title: 'Library — Upload Interface' },
  { src: hifiLib06, alt: 'Library advanced view', title: 'Library — Advanced View' },
  { src: hifi3dEditor01, alt: 'Scene hierarchy tree', title: '3D Editor — Hierarchy Tree' },
  { src: hifi3dEditor02, alt: '3D viewport with model', title: '3D Editor — Viewport' },
  { src: hifi3dEditor03, alt: 'Property inspector panel', title: '3D Editor — Property Inspector' },
  { src: hifi3dEditor04, alt: 'Spatial transform controls', title: '3D Editor — Transform Controls' },
  { src: hifi3dEditor05, alt: 'Full editor layout', title: '3D Editor — Full Layout' },
  { src: hifiPopups01, alt: 'Modal dialog interface', title: 'Modal Dialog 01' },
  { src: hifiPopups02, alt: 'Popup interface 02', title: 'Modal Dialog 02' },
  { src: hifiPopups03, alt: 'Popup interface 03', title: 'Modal Dialog 03' },
  { src: hifiPopups04, alt: 'Popup interface 04', title: 'Modal Dialog 04' },
];

const researchQuotes = [
  { tag: '🔀 Fragmentation', color: '#f472b6', bg: 'rgba(244,114,182,.06)', border: 'rgba(244,114,182,.15)', text: '"I use 5 different apps before I even get to surgery planning."', attr: 'Lead Surgeon, Pre-session interview' },
  { tag: '🧭 Orientation', color: '#22d3ee', bg: 'rgba(34,211,238,.06)', border: 'rgba(34,211,238,.15)', text: '"I lose orientation every time I switch tools. By the time I open Blender, I\'ve already forgotten the spatial relationship I was analyzing."', attr: 'Orthopedic Surgeon, Session 3' },
  { tag: '⚡ Expert Needs', color: '#4ade80', bg: 'rgba(74,222,128,.06)', border: 'rgba(74,222,128,.15)', text: '"Don\'t hide controls from me — I know what I\'m doing. If I need to find something, I\'ve already lost time."', attr: 'Spinal Surgeon, Session 5' },
  { tag: '📋 Trust', color: '#fbbf24', bg: 'rgba(251,191,36,.06)', border: 'rgba(251,191,36,.15)', text: '"Auto-save scares me with clinical data. I need to know exactly what version was committed and when."', attr: 'Lead Surgeon, Post-session debrief' },
];

const deadEnds = [
  {
    label: 'Dead End 01',
    title: 'Progressive Disclosure UI',
    tried: 'Minimal toolbar — controls hidden behind context menus and hover states. Standard consumer UX pattern.',
    happened: 'A surgeon couldn\'t find the kidney tumor in 30 seconds. Task completion time increased 40% vs. baseline.',
    learned: 'Expert users have zero tolerance for discovery overhead. Every hidden control is a cognitive penalty.',
  },
  {
    label: 'Dead End 02',
    title: 'Auto-Save Architecture',
    tried: 'Silent background save every 30 seconds. Eliminated the "save dialog" friction entirely.',
    happened: 'A participant accidentally moved a vessel and it committed to the patient record. Trust score: 2/10.',
    learned: 'In clinical tools, trust in data integrity is non-negotiable. "Convenient" is the wrong goal when accuracy is the product.',
  },
  {
    label: 'Dead End 03',
    title: 'Viewport-First 3D Interaction',
    tried: 'Click-in-3D as the primary selection model. Felt spatially intuitive in demos.',
    happened: 'Dense anatomical scenes made click targets ambiguous. Finding a specific structure took 34+ seconds on average.',
    learned: 'Surgeons think in named structures, not spatial coordinates. The hierarchy panel became the primary navigation surface.',
  },
  {
    label: 'Dead End 04',
    title: 'Anatomy-Labeled Gizmo Controls',
    tried: 'Replaced X/Y/Z axis labels with anatomical orientation terms (Anterior/Posterior, Medial/Lateral).',
    happened: 'Mixed results — surgeons with different training used different reference frameworks. Terminology conflict.',
    learned: 'Contextual numeric + gizmo hybrid worked better than full relabeling. Let surgeons choose their mental model.',
  },
];

const wdZones = {
  technical: {
    label: 'Technical',
    color: '#818cf8',
    bg: 'rgba(129,140,248,.08)',
    border: 'rgba(129,140,248,.3)',
    items: [
      'Real-time 3D rendering in a browser with medical-grade accuracy requirements',
      'DICOM format complexity — different vendors, different encoding, edge cases at every layer',
      'HoloLens transmission pipeline — format conversion, spatial anchor, and latency constraints',
      'Version control model for binary 3D assets with branching and merge conflicts',
    ],
  },
  domain: {
    label: 'Domain',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,.08)',
    border: 'rgba(34,211,238,.3)',
    items: [
      'No shared vocabulary — surgeons, radiologists, and 3D engineers used different terminology for the same object',
      'Regulatory constraints shaped every interaction decision (audit trail, version attribution, data integrity)',
      'Clinical mental models are body-centered, not software-centered — required deep domain immersion to understand',
      'Stakeholder alignment across hospital IT, clinical staff, and product team with conflicting priorities',
    ],
  },
  ux: {
    label: 'UX',
    color: '#f472b6',
    bg: 'rgba(244,114,182,.08)',
    border: 'rgba(244,114,182,.3)',
    items: [
      'Expert users reject progressive disclosure — every hidden control was friction, not simplicity',
      'Trust patterns in clinical tools are opposite to consumer apps — friction = safety, not failure',
      'Spatial UX without tactile feedback — designing for precision manipulation in a 2D interface',
      'Balancing the needs of 3 user roles (surgeon, assistant, radiologist) in one shared environment',
    ],
  },
};

export function XREditorContentFull() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState<'wireframes' | 'hifi'>('wireframes');
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [activeZone, setActiveZone] = useState<'technical' | 'domain' | 'ux' | null>('technical');
  const [expandedDeadEnd, setExpandedDeadEnd] = useState<number | null>(0);
  const [resultsBeforeAfter, setResultsBeforeAfter] = useState<'after' | 'before'>('after');

  const openLightbox = (index: number, gallery: 'wireframes' | 'hifi' = 'wireframes') => {
    setCurrentImageIndex(index);
    setCurrentGallery(gallery);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const currentImages = currentGallery === 'wireframes' ? wireframeImages : hifiImages;
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
    };
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <div style={{ background: '#08080f' }}>
      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 backdrop-blur-sm" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-[#818cf8] transition-all hover:scale-110 z-10 bg-[rgba(255,255,255,.1)] rounded-full p-2"><X size={28} /></button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-6 text-white hover:text-[#818cf8] transition-all hover:scale-110 z-10 bg-[rgba(255,255,255,.1)] rounded-full p-3"><ChevronLeft size={40} /></button>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-6 text-white hover:text-[#818cf8] transition-all hover:scale-110 z-10 bg-[rgba(255,255,255,.1)] rounded-full p-3"><ChevronRight size={40} /></button>
          <div className="flex flex-col items-center max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-h-[80vh]">
              <ImageWithFallback src={currentImages[currentImageIndex].src} alt={currentImages[currentImageIndex].alt} className="w-auto h-auto max-w-[85vw] max-h-[80vh] object-contain" />
            </div>
            <div className="mt-6 text-center">
              <p className="text-white text-lg font-medium">{currentImages[currentImageIndex].title}</p>
              <p className="text-[#818cf8] text-sm mt-2 bg-[rgba(129,140,248,.2)] px-3 py-1 rounded-full inline-block">{currentImageIndex + 1} / {currentImages.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── ROLE & SCOPE ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Role</span>
        </div>
        <h2 className="text-[42px] font-bold mb-10 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Role & Scope
        </h2>

        {/* Process timeline */}
        <div className="mb-10">
          <div className="text-[13px] font-bold tracking-[2px] uppercase text-[#818cf8] mb-6">My Contribution</div>
          <div className="grid grid-cols-6 gap-3">
            {[
              { num: '01', label: 'Discovery', desc: 'Domain immersion, stakeholder interviews, workflow mapping' },
              { num: '02', label: 'Research', desc: 'Surgeon sessions, usability studies, competitive analysis' },
              { num: '03', label: 'Architecture', desc: 'IA, user flows, interaction models for 3D editing' },
              { num: '04', label: 'Prototyping', desc: 'Low-fi to hi-fi, iterating across all 4 modules' },
              { num: '05', label: 'Testing', desc: 'Moderated usability sessions across 2 hospital pilots' },
              { num: '06', label: 'Handoff', desc: 'Interaction specs, dev support, edge case documentation' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[rgba(129,140,248,.04)] border border-[rgba(129,140,248,.15)] rounded-xl p-4 h-full">
                  <div className="text-[11px] font-bold text-[#818cf8] mb-1">{step.num}</div>
                  <div className="text-sm font-bold text-white mb-2">{step.label}</div>
                  <div className="text-[11px] text-[#64748b] leading-[1.5]">{step.desc}</div>
                </div>
                {i < 5 && (
                  <div className="absolute top-[28px] -right-2 z-10 text-[rgba(129,140,248,.4)] text-sm">›</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* How I Led */}
        <div className="bg-[rgba(34,211,238,.04)] border border-[rgba(34,211,238,.12)] rounded-2xl p-7 mb-8">
          <div className="text-[13px] font-bold tracking-[2px] uppercase text-[#22d3ee] mb-5">How I Led</div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🎯', text: 'Proposed the patient-workspace reframe to product and engineering leadership — a fundamental shift from tool-centric to case-centric thinking' },
              { icon: '🧠', text: 'Aligned engineers on spatial constraints early: designed the status model for XR sync only after understanding what could actually fail in the conversion pipeline' },
              { icon: '🔬', text: 'Facilitated surgeon sessions that directly changed product direction — the week-8 prototype failure led to rebuilding the interaction model from scratch' },
              { icon: '📋', text: 'Maintained design velocity through regulatory uncertainty, translating compliance requirements into interaction decisions the team could execute' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                <p className="text-[13px] text-[#94a3b8] leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── ABOUT THE PROJECT ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Overview</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          About the Project
        </h2>

        <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.07)] rounded-2xl p-8 mb-6">
          <p className="text-[17px] text-[#cbd5e1] leading-[1.8] mb-5">
            XR Editor is a browser-based platform for medical 3D visualization and anatomical editing, designed for pre-operative surgical planning and clinical collaboration.
          </p>
          <p className="text-[17px] text-[#cbd5e1] leading-[1.8] mb-5">
            A hospital network had identified a specific clinical pain point: pre-operative preparation for complex procedures — especially spinal and orthopedic surgeries — required too many disconnected tools, too many file handoffs, and too much cognitive overhead. The brief was to design a software platform that could unify this workflow.
          </p>
          <p className="text-[17px] text-[#cbd5e1] leading-[1.8] mb-5">
            The product had three non-negotiable constraints: browser-based (no per-workstation installation for hospital IT), collaborative (teams, not just individuals), and trusted (clinical data with full version accountability).
          </p>
          <div className="flex items-start gap-3 bg-[rgba(129,140,248,.06)] border-l-[3px] border-[#818cf8] rounded-r-lg py-3 px-4">
            <span className="text-base flex-shrink-0">⚠️</span>
            <p className="text-[13px] text-[#94a3b8] leading-relaxed">
              Due to NDA restrictions, some visuals, flows, client details, and metrics have been modified or simplified. All data shown is from internal usability testing, not production analytics.
            </p>
          </div>
        </div>

        <p className="text-lg text-[#cbd5e1] italic border-l-[3px] border-[rgba(129,140,248,.3)] pl-5 max-w-3xl">
          The real challenge wasn't building a better tool. It was building a different kind of tool — one that treated the patient case as the continuous context, not the individual tool sessions.
        </p>
      </section>

      {/* ── MARKET RESEARCH ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Analysis</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Market Research
        </h2>
        <p className="text-lg text-[#94a3b8] max-w-3xl leading-[1.8] mb-10">
          We analyzed existing medical and spatial systems to identify gaps and opportunities.
        </p>

        <div className="grid grid-cols-2 gap-5 mb-8">
          {[
            {
              name: 'Materialise 3-matic',
              icon: '🖥️',
              gap: 'Desktop-only, no collaboration',
              detail: 'Powerful segmentation and editing, but every user needs a local license. No shared review, no browser access.',
              color: '#f87171',
            },
            {
              name: 'Brainlab Elements',
              icon: '🔒',
              gap: 'Closed ecosystem, hospital-locked',
              detail: 'Tight hardware integration creates a walled garden. Exporting to external tools breaks the clinical chain of custody.',
              color: '#fbbf24',
            },
            {
              name: 'Stryker Surgicase',
              icon: '📦',
              gap: 'No web-based access',
              detail: 'Strong implant planning features, but workflow starts and ends on desktop. No AR review integration.',
              color: '#a78bfa',
            },
            {
              name: '3D Slicer',
              icon: '🔬',
              gap: 'Research tool, not clinical tool',
              detail: 'Open source and powerful, but interface complexity is prohibitive for surgical workflows. No collaboration layer.',
              color: '#22d3ee',
            },
          ].map((item, i) => (
            <div key={i} className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="text-base font-bold text-white mb-1">{item.name}</div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ color: item.color, background: `${item.color}15` }}>
                    {item.gap}
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-[#94a3b8] leading-[1.6]">{item.detail}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-[#cbd5e1] italic border-l-[3px] border-[rgba(129,140,248,.3)] pl-5 max-w-4xl">
          Every competitor solved one part of the workflow in isolation. None treated the surgical planning session as a continuous, patient-centered environment.
        </p>
      </section>

      {/* ── TRADE-OFFS ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Decisions</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Trade-offs
        </h2>
        <p className="text-lg text-[#94a3b8] max-w-3xl leading-[1.8] mb-12">
          Senior design is about choosing between competing goods, not finding perfect solutions.
        </p>

        <div className="grid gap-8">
          {[
            {
              rejected: { label: 'Minimal Simplicity', desc: 'Clean viewport, hidden menus, progressive disclosure. Lower visual noise — but tested worse with every expert user. Controls buried behind interactions increased task time.' },
              chosen: { label: 'Dense UI', desc: 'Persistent toolbars, visible hierarchy, always-on inspector. Higher visual complexity — but testing proved experts needed all controls visible at all times.' },
              insight: '↳ Hiding controls increased task time by 40%. Expert users think in persistent workspace, not progressive menus.',
            },
            {
              rejected: { label: 'Frictionless Auto-Save', desc: 'Background saving, zero interruptions. Modern UX standard — but destroyed trust when a surgeon accidentally moved a vessel and it was immediately committed to the patient record.' },
              chosen: { label: 'Safety-First Saving', desc: 'Explicit save confirmations, dirty state indicators, version commits. More friction per action — but clinical data demands trust over convenience.' },
              insight: '↳ In medical workflows, trust in data integrity outweighs convenience. Auto-save trust score: 2/10 → Explicit save: 9/10.',
            },
            {
              rejected: { label: 'Viewport-First Interaction', desc: 'Click-in-3D as primary selection. Feels intuitive — but dense anatomical scenes made selection ambiguous. 30+ seconds to find a structure.' },
              chosen: { label: 'Hierarchy-First Navigation', desc: 'Structural tree as primary interaction surface. More structured, more predictable. Medical professionals think in anatomical structures, not spatial coordinates.' },
              insight: '↳ Hierarchy navigation reduced target-finding time from 34s to 8s. The viewport became a manipulation surface, not a navigation one.',
            },
          ].map((tradeoff, i) => (
            <div key={i} className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-2xl p-8">
              <div className="grid grid-cols-[1fr_40px_1fr] gap-5 items-start">
                <div className="opacity-60">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-[10px] text-[#f87171] bg-[rgba(248,113,113,.1)] py-0.5 px-2.5 rounded-full font-semibold tracking-wider uppercase">✗ Rejected</span>
                  </div>
                  <div className="text-base font-bold text-[#94a3b8] mb-2">{tradeoff.rejected.label}</div>
                  <div className="text-[13px] text-[#64748b] leading-[1.7]">{tradeoff.rejected.desc}</div>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-xl text-[rgba(255,255,255,.15)]">→</div>
                </div>
                <div className="bg-[rgba(52,211,153,.04)] border-2 border-[rgba(52,211,153,.2)] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-[10px] text-[#34d399] bg-[rgba(52,211,153,.1)] py-0.5 px-2.5 rounded-full font-semibold tracking-wider uppercase">✓ Our Choice</span>
                  </div>
                  <div className="text-base font-bold text-white mb-2">{tradeoff.chosen.label}</div>
                  <div className="text-[13px] text-[#94a3b8] leading-[1.7]">{tradeoff.chosen.desc}</div>
                </div>
              </div>
              <div className="mt-4 py-3 px-4 bg-[rgba(129,140,248,.04)] rounded-lg text-xs text-[#818cf8] font-medium">{tradeoff.insight}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INFORMATION ARCHITECTURE ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Structure</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Information Architecture
        </h2>
        <p className="text-lg text-[#94a3b8] max-w-3xl leading-[1.8] mb-12">
          Four core modules covering the entire clinical workflow, centered around the patient workspace.
        </p>

        <div className="bg-[#0d0d1a] border border-[rgba(255,255,255,.08)] rounded-2xl p-8">
          <div className="text-[11px] text-[#818cf8] tracking-[2px] uppercase font-semibold mb-6 text-center">Information Architecture Map</div>
          <div className="text-center mb-5">
            <div className="inline-block bg-[rgba(244,114,182,.08)] border-2 border-[rgba(244,114,182,.3)] rounded-[10px] py-3 px-8">
              <span className="text-sm text-[#f472b6] font-bold">🔐 Authentication</span>
              <div className="text-[10px] text-[#94a3b8] mt-1">Login · Registration · Demo</div>
            </div>
          </div>
          <div className="text-center text-[rgba(255,255,255,.15)] text-xl mb-3">↓</div>
          <div className="grid grid-cols-4 gap-4 mb-3">
            {[
              { icon: '📚', label: 'Library', color: '#2dd4bf', bg: 'rgba(45,212,191,.06)', border: 'rgba(45,212,191,.25)', items: ['Patient List', 'Folders', 'Upload', 'Search & Filter', 'Preview Grid'] },
              { icon: '👁️', label: 'Viewer', color: '#a78bfa', bg: 'rgba(167,139,250,.06)', border: 'rgba(167,139,250,.25)', items: ['DICOM Slices', '3D Preview', 'Video Player', 'Image Viewer', 'Annotations'] },
              { icon: '⚙️', label: '3D Editor', color: '#4ade80', bg: 'rgba(74,222,128,.06)', border: 'rgba(74,222,128,.25)', items: ['Scene Hierarchy', '3D Viewport', 'Property Inspector', 'Material Editor', 'Version Control'] },
              { icon: '🥽', label: 'XR Review', color: '#fbbf24', bg: 'rgba(251,191,36,.06)', border: 'rgba(251,191,36,.25)', items: ['Spatial View', 'Hand Tracking', 'Collaboration', 'Sync with Editor'] },
            ].map((mod, i) => (
              <div key={i} className="rounded-xl p-4 text-center" style={{ background: mod.bg, border: `2px solid ${mod.border}` }}>
                <div className="text-sm font-bold mb-2" style={{ color: mod.color }}>{mod.icon} {mod.label}</div>
                <div className="flex flex-col gap-0.5 text-left text-[10px] text-[#94a3b8]">
                  {mod.items.map((item, j) => (
                    <div key={j} className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center py-3 bg-[rgba(129,140,248,.04)] rounded-lg text-[11px] text-[#818cf8] font-medium">
            ← Patient context preserved across all modules →
          </div>
        </div>

        <div className="text-center mt-8 py-5 bg-[rgba(129,140,248,.06)] rounded-xl">
          <div className="text-sm text-[#818cf8] font-semibold">Core Principle: Modules share patient context, not files.</div>
          <div className="text-[13px] text-[#94a3b8] mt-1">Every transition preserves spatial orientation, selection state, and revision history.</div>
        </div>
      </section>

      {/* ── EARLY WIREFRAMES ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Exploration</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Early Wireframes
        </h2>
        <p className="text-lg text-[#94a3b8] max-w-3xl leading-[1.8] mb-4">
          Initial low-fidelity explorations testing core navigation patterns, information architecture, and key interaction flows before committing to visual design.
        </p>
        <p className="text-sm text-[#64748b] italic mb-12">Click on any wireframe to view full-size. Use arrow keys or navigation buttons to browse.</p>

        <div className="grid grid-cols-2 gap-6">
          {[
            { idx: 0, src: wireframesLogin, alt: 'Authentication flow wireframe', title: 'Authentication Flow', desc: 'Simple login/registration toggle — keeping entry barriers low for clinical users' },
            { idx: 1, src: wireframesLib, alt: 'Library patient gallery view wireframe', title: 'Library — Patient Gallery View', desc: 'Grid-based patient browser for quick visual scanning' },
            { idx: 2, src: wireframesLib2, alt: 'Library folder navigation wireframe', title: 'Library — Folder Navigation', desc: 'Hierarchical folder structure with expandable tree sidebar' },
            { idx: 3, src: wireframesImport, alt: 'File import modal wireframe', title: 'File Import Modal', desc: 'Drag-and-drop upload for DICOM, 3D models, and media files' },
            { idx: 4, src: wireframesExport, alt: 'Export configuration wireframe', title: 'Export Configuration', desc: 'Format selection and export settings — later simplified to direct sharing links' },
            { idx: 5, src: wireframesVideo, alt: '3D editor video playback wireframe', title: '3D Editor — Video Playback', desc: 'Large viewport for 3D manipulation with persistent toolbars' },
          ].map((item) => (
            <div key={item.idx} className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-2xl p-6 overflow-hidden">
              <div className="w-full overflow-hidden rounded-lg border border-[rgba(255,255,255,.08)] cursor-pointer hover:border-[#818cf8] transition-colors" onClick={() => openLightbox(item.idx)}>
                <ImageWithFallback src={item.src} alt={item.alt} className="w-full h-auto" />
              </div>
              <p className="text-sm text-[#818cf8] mt-4 text-center font-medium">{item.title}</p>
              <p className="text-xs text-[#64748b] mt-1 text-center">{item.desc}</p>
            </div>
          ))}
          <div className="col-span-2 bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-2xl p-6 overflow-hidden">
            <div className="w-full overflow-hidden rounded-lg border border-[rgba(255,255,255,.08)] cursor-pointer hover:border-[#818cf8] transition-colors" onClick={() => openLightbox(6)}>
              <ImageWithFallback src={wireframes3d} alt="3D editor full layout wireframe" className="w-full h-auto" />
            </div>
            <p className="text-sm text-[#818cf8] mt-4 text-center font-medium">3D Editor — Full Layout</p>
            <p className="text-xs text-[#64748b] mt-1 text-center">Three-panel layout: hierarchy tree, 3D viewport, inspector panel — testing information density for expert users</p>
          </div>
        </div>

        <div className="mt-10 py-6 px-8 bg-[rgba(129,140,248,.06)] border border-[rgba(129,140,248,.15)] rounded-xl">
          <div className="text-sm text-[#cbd5e1] leading-relaxed">
            <strong className="text-white">Early learnings:</strong> Initial wireframes tested minimalist UI patterns — hidden toolbars, progressive disclosure, simplified navigation. User testing revealed experts needed everything visible at all times. These insights directly shaped the dense-UI direction taken in final design.
          </div>
        </div>
      </section>

      {/* ── THE REAL PROBLEM ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Context</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          The Real Problem
        </h2>
        <p className="text-[15px] text-[#94a3b8] leading-relaxed">
          The issue was not simply "too many tools." <strong className="text-white">The real problem was cognitive fragmentation.</strong> Every export, application switch, or format conversion forced users to rebuild context while working with highly complex anatomical structures under time pressure.
        </p>

        <div className="w-full rounded-2xl bg-[#0d0d1a] border border-[rgba(255,255,255,.08)] py-5 px-3 my-8 overflow-x-auto">
          <div className="flex items-center gap-0 min-w-[900px] justify-center">
            {[
              { icon: '📧', label: 'PACS', sub: 'Receive DICOM', color: '#f87171', bg: 'rgba(248,113,113,.08)', border: 'rgba(248,113,113,.2)', arrow: 'EXPORT', arrowColor: '#f87171', arrowBg: 'rgba(248,113,113,.1)' },
              { icon: '🔬', label: 'OsiriX', sub: 'View Slices', color: '#fbbf24', bg: 'rgba(251,191,36,.08)', border: 'rgba(251,191,36,.2)', arrow: 'STL/OBJ', arrowColor: '#fbbf24', arrowBg: 'rgba(251,191,36,.1)' },
              { icon: '🎨', label: 'Blender', sub: 'Edit 3D', color: '#a78bfa', bg: 'rgba(167,139,250,.08)', border: 'rgba(167,139,250,.2)', arrow: 'CONVERT', arrowColor: '#a78bfa', arrowBg: 'rgba(167,139,250,.1)' },
              { icon: '📤', label: 'Converter', sub: 'Export Assets', color: '#22d3ee', bg: 'rgba(34,211,238,.08)', border: 'rgba(34,211,238,.2)', arrow: 'USB/EMAIL', arrowColor: '#22d3ee', arrowBg: 'rgba(34,211,238,.1)' },
              { icon: '🥽', label: 'HoloLens', sub: 'XR Review', color: '#4ade80', bg: 'rgba(74,222,128,.08)', border: 'rgba(74,222,128,.2)', arrow: null, arrowColor: '', arrowBg: '' },
            ].map((tool, i) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <div className="text-center flex-shrink-0">
                  <div className="w-[100px] h-20 rounded-[10px] flex flex-col items-center justify-center gap-1" style={{ background: tool.bg, border: `1px solid ${tool.border}` }}>
                    <span className="text-xl">{tool.icon}</span>
                    <span className="text-[11px] font-semibold" style={{ color: tool.color }}>{tool.label}</span>
                  </div>
                  <div className="text-[10px] text-[#64748b] mt-1.5">{tool.sub}</div>
                </div>
                {tool.arrow && (
                  <div className="flex-shrink-0 px-2 flex flex-col items-center gap-0.5">
                    <div className="text-base" style={{ color: `${tool.arrowColor}66` }}>→</div>
                    <div className="text-[8px] py-0.5 px-1.5 rounded font-semibold" style={{ color: tool.arrowColor, background: tool.arrowBg }}>{tool.arrow}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-6 pt-5 border-t border-dashed border-[rgba(248,113,113,.2)]">
            <span className="text-[13px] text-[#f87171] font-semibold">⚠️ 4 exports · 5 tools · 3 format conversions · 0 version control</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: '⏱️', title: 'Time Cost', desc: 'Up to 47 minutes per planning session — half of that spent on file management, not clinical reasoning.' },
            { icon: '⚠️', title: 'Error Risk', desc: 'Each format conversion introduced version drift. No audit trail across the chain.' },
            { icon: '🧠', title: 'Cognitive Load', desc: 'Surgeons rebuilt spatial context at every tool switch — draining focus before surgery began.' },
          ].map((card, i) => (
            <div key={i} className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-5">
              <div className="text-2xl mb-2">{card.icon}</div>
              <h3 className="text-[16px] font-bold text-[#f87171] mb-2">{card.title}</h3>
              <p className="text-[13px] text-[#94a3b8]">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 py-8 px-6 bg-[rgba(129,140,248,.06)] border border-[rgba(129,140,248,.2)] rounded-xl text-center">
          <div className="text-[18px] font-medium text-[#cbd5e1] italic leading-relaxed">
            How might we design a seamless 3D planning workflow for surgeons that reduces fragmentation and unnecessary cognitive load?
          </div>
          <div className="text-[12px] text-[#818cf8] mt-3 font-medium">Core UX Challenge</div>
        </div>
      </section>

      {/* ── RESEARCH & DISCOVERY ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Discovery</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Research & Discovery
        </h2>
        <p className="text-[15px] text-[#94a3b8] leading-relaxed mb-4">
          We interviewed surgeons, medical assistants, and technical specialists involved in surgical preparation workflows.
        </p>
        <p className="text-[15px] text-[#94a3b8] leading-relaxed">
          Early research revealed something important. Through interview synthesis, I identified that <strong className="text-white">the biggest frustration was not interface complexity itself — it was the constant loss of orientation between systems.</strong> Surgeons described the workflow as mentally exhausting because every tool introduced a different navigation model, hierarchy structure, and spatial context.
        </p>

        <div className="mt-10 py-8 px-6 bg-[rgba(129,140,248,.06)] border border-[rgba(129,140,248,.2)] rounded-xl text-center">
          <div className="text-[18px] font-medium text-[#cbd5e1] italic leading-relaxed">
            This was not a visualization problem.<br />It was an orientation problem.
          </div>
          <div className="text-[12px] text-[#818cf8] mt-3 font-medium">Key Insight That Changed the Product Direction</div>
        </div>

        <h3 className="text-[22px] font-bold text-white mt-12 mb-6">Key Research Insights</h3>
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { icon: '🔗', title: 'Fragmented Workflows', desc: 'Users switched between 4–6 tools per case, often rebuilding the same context repeatedly.' },
            { icon: '⚠️', title: 'Export = Operational Risk', desc: 'Each export/import step introduced version drift, incompatible formats, duplicated files, and uncertainty around "latest" revisions.' },
            { icon: '📊', title: 'Experts Prefer Density', desc: 'Attempts to hide controls or reduce visible tooling increased friction during testing. Experienced users wanted persistent controls and minimal mode switching.' },
          ].map((item, i) => (
            <div key={i} className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-5">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="text-[16px] font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[13px] text-[#94a3b8]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quotes carousel */}
        <div className="relative">
          <div className="text-[13px] font-bold tracking-[2px] uppercase mb-4" style={{ color: researchQuotes[quoteIndex].color }}>
            {researchQuotes[quoteIndex].tag}
          </div>
          <div className="rounded-xl p-6 mb-4" style={{ background: researchQuotes[quoteIndex].bg, border: `1px solid ${researchQuotes[quoteIndex].border}` }}>
            <p className="text-[15px] text-[#cbd5e1] italic leading-[1.7] mb-3">
              {researchQuotes[quoteIndex].text}
            </p>
            <p className="text-[12px] text-[#64748b]">— {researchQuotes[quoteIndex].attr}</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuoteIndex((prev) => (prev - 1 + researchQuotes.length) % researchQuotes.length)}
              className="bg-[rgba(255,255,255,.06)] hover:bg-[rgba(129,140,248,.15)] border border-[rgba(255,255,255,.1)] rounded-full p-2 transition-colors"
            >
              <ChevronLeft size={18} className="text-[#818cf8]" />
            </button>
            <div className="flex gap-2">
              {researchQuotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setQuoteIndex(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i === quoteIndex ? '#818cf8' : 'rgba(129,140,248,.25)' }}
                />
              ))}
            </div>
            <button
              onClick={() => setQuoteIndex((prev) => (prev + 1) % researchQuotes.length)}
              className="bg-[rgba(255,255,255,.06)] hover:bg-[rgba(129,140,248,.15)] border border-[rgba(255,255,255,.1)] rounded-full p-2 transition-colors"
            >
              <ChevronRight size={18} className="text-[#818cf8]" />
            </button>
            <span className="text-[12px] text-[#64748b] ml-2">{quoteIndex + 1} / {researchQuotes.length}</span>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-[#64748b] italic">
          Based on 8 in-depth interviews · 3 surgeons · 3 medical assistants · 2 radiologists · 6 weeks of discovery · 14 planning sessions observed
        </div>
      </section>

      {/* ── USERS AND CONTEXT ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Personas</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Users and Context
        </h2>
        <div className="text-[15px] text-[#94a3b8] mb-8">Understanding the primary and secondary users shaped every interaction decision in the platform.</div>

        <div className="grid grid-cols-2 gap-6">
          {/* Lead Surgeon */}
          <div className="bg-[rgba(255,255,255,.03)] border border-[rgba(255,255,255,.08)] rounded-2xl p-8" style={{ borderTop: '3px solid #818cf8' }}>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-2xl flex-shrink-0" style={{ background: 'rgba(129,140,248,.15)', border: '2px solid rgba(129,140,248,.3)' }}>👨‍⚕️</div>
              <div>
                <div className="text-[17px] font-bold text-white">Lead Surgeon</div>
                <div className="text-[13px] mt-0.5" style={{ color: '#818cf8' }}>Primary User</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { label: 'Specialty', value: 'Orthopedic / Spinal' },
                { label: 'Cases/week', value: '8–15 complex cases' },
                { label: 'Tech comfort', value: 'Moderate — functional' },
                { label: 'Planning time', value: '30–60 min per case' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-[14px] text-[#94a3b8]">{stat.value}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-[rgba(255,255,255,.06)] pt-4 mb-4">
              <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-2">Goals</div>
              {['Reduce planning time without reducing accuracy', 'Spatially verify implant placement before OR', 'Share plan context with the team clearly'].map((g, i) => (
                <div key={i} className="text-[13px] text-[#94a3b8] mb-1">• {g}</div>
              ))}
            </div>
            <div className="border-t border-[rgba(255,255,255,.06)] pt-4">
              <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-2">Frustrations</div>
              {['Tool complexity unrelated to clinical task', 'Lost context at each file handoff', 'No spatial verification before the OR'].map((f, i) => (
                <div key={i} className="text-[13px] text-[#94a3b8] mb-1">• {f}</div>
              ))}
            </div>
          </div>

          {/* Medical Assistant */}
          <div className="bg-[rgba(255,255,255,.03)] border border-[rgba(255,255,255,.08)] rounded-2xl p-8" style={{ borderTop: '3px solid #22d3ee' }}>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-2xl flex-shrink-0" style={{ background: 'rgba(34,211,238,.1)', border: '2px solid rgba(34,211,238,.25)' }}>👩‍⚕️</div>
              <div>
                <div className="text-[17px] font-bold text-white">Medical Assistant</div>
                <div className="text-[13px] mt-0.5" style={{ color: '#22d3ee' }}>Secondary User</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { label: 'Role', value: 'Resident / Scrub tech' },
                { label: 'Access', value: 'Review & annotation' },
                { label: 'Tech comfort', value: 'High — digital native' },
                { label: 'Use frequency', value: 'Review-only, pre-OR' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-[14px] text-[#94a3b8]">{stat.value}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-[rgba(255,255,255,.06)] pt-4 mb-4">
              <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-2">Goals</div>
              {['Understand the surgical plan clearly', 'Prepare instrument trays correctly', 'Flag concerns before the operation'].map((g, i) => (
                <div key={i} className="text-[13px] text-[#94a3b8] mb-1">• {g}</div>
              ))}
            </div>
            <div className="border-t border-[rgba(255,255,255,.06)] pt-4">
              <div className="text-[11px] text-[#64748b] uppercase tracking-wider mb-2">Frustrations</div>
              {['Receiving plans as raw files with no context', 'Unable to view 3D model without software license', 'No channel to ask clarifying questions on the plan'].map((f, i) => (
                <div key={i} className="text-[13px] text-[#94a3b8] mb-1">• {f}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS & OPPORTUNITIES ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Analysis</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Pain Points & Opportunities
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-6" style={{ borderTop: '2px solid #f87171' }}>
            <h3 className="text-base font-bold mb-5" style={{ color: '#f87171' }}>Key Pain Points</h3>
            <div className="flex flex-col gap-4">
              {[
                'Forced context-switching between 4–6 tools destroys focused clinical reasoning time',
                'Manual file conversion introduces errors and has no validation or audit mechanism',
                'No collaborative planning — teams work in isolation, increasing miscommunication risk',
                'Plan context (reasoning, annotations, orientation) is lost at each export/handoff step',
                'AR verification (HoloLens) is unreliable due to format compatibility and file size issues',
              ].map((point, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="rounded px-1.5 py-0.5 text-[11px] font-bold flex-shrink-0 mt-0.5" style={{ background: 'rgba(248,113,113,.15)', color: '#f87171' }}>P{i + 1}</div>
                  <p className="text-[13px] text-[#94a3b8] leading-[1.6]">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-6" style={{ borderTop: '2px solid #34d399' }}>
            <h3 className="text-base font-bold mb-5" style={{ color: '#34d399' }}>Design Opportunities</h3>
            <div className="flex flex-col gap-4">
              {[
                'Unify DICOM viewing, 3D editing, and AR review in a single web environment — eliminate all tool-switching',
                'Automate all format conversion with server-side processing — zero manual export steps',
                'Build shared plan space where surgeon + assistant can review and annotate the same model simultaneously',
                'Persist all annotations, reasoning, and orientation data through the entire workflow from import to AR',
                'Implement one-click AR sync with automatic format optimization — make HoloLens loading reliable',
              ].map((opp, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="rounded px-1.5 py-0.5 text-[11px] font-bold flex-shrink-0 mt-0.5" style={{ background: 'rgba(52,211,153,.15)', color: '#34d399' }}>O{i + 1}</div>
                  <p className="text-[13px] text-[#94a3b8] leading-[1.6]">{opp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(129,140,248,.08), rgba(34,211,238,.08))', border: '1px solid rgba(129,140,248,.15)' }}>
          <div className="text-[3rem] font-bold mb-2" style={{ background: 'linear-gradient(to right, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>80%</div>
          <p className="text-[#94a3b8] text-[15px] leading-[1.6]">of surgeon frustration mapped to transitions between tools — not to any single tool's capabilities. The problem was the seams, not the features.</p>
        </div>
      </section>

      {/* ── DESIGN STRATEGY ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Strategy</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Design Strategy
        </h2>

        <div className="bg-[rgba(248,113,113,.05)] border border-[rgba(248,113,113,.15)] rounded-2xl p-9 mb-8">
          <div className="text-xs font-semibold tracking-[2px] uppercase text-[#f87171] mb-3">⚠️ The Turning Point</div>
          <p className="text-[15px] text-[#94a3b8] leading-relaxed mb-4">
            <strong className="text-white">Our first prototype failed.</strong> We used progressive disclosure — hidden controls, nested menus, gradual complexity. Standard best practice.
          </p>
          <p className="text-[15px] text-[#94a3b8] leading-relaxed">
            Result: a surgeon couldn't find the kidney tumor in 30 seconds. Auto-save committed an accidental vessel move to the patient record. One participant said the workflow felt <em>"like training mode, not preparation for tomorrow's operation."</em> We had to rebuild from the domain up.
          </p>
        </div>

        <p className="text-base text-[#94a3b8] max-w-3xl leading-relaxed mb-4">
          <strong className="text-white">The solution was not to simplify the workflow. The solution was to make complexity navigable.</strong>
        </p>
        <p className="text-base text-[#94a3b8] max-w-3xl leading-relaxed mb-8">
          Based on the research findings, I proposed reframing the product from a collection of tools into a <strong className="text-white">continuous patient-centered workspace</strong>. Every scan, model, annotation, and session lives under one patient record. All editing tools are always visible — no hidden features, no deep menus.
        </p>

        <div className="ba-grid" style={{ margin: '2rem 0 3rem' }}>
          <div className="ba-col before" style={{ textAlign: 'center', padding: '2rem' }}>
            <h3>⛔ Before: Tool-centric model</h3>
            <div className="ba-item"><div className="ba-num">1.</div><div className="ba-text">Open tool panel → select a tool mode → then interact with anatomy</div></div>
            <div className="ba-item"><div className="ba-num">2.</div><div className="ba-text">All tools always visible regardless of context or selected object</div></div>
            <div className="ba-item"><div className="ba-num">3.</div><div className="ba-text">User must know tool names and modes before they can accomplish anything</div></div>
            <div className="ba-item"><div className="ba-num">4.</div><div className="ba-text">Scene hierarchy uses 3D software conventions — objects, meshes, modifiers</div></div>
          </div>
          <div className="ba-col after" style={{ textAlign: 'center', padding: '2rem' }}>
            <h3>✅ After: Anatomy-centric model</h3>
            <div className="ba-item"><div className="ba-num">1.</div><div className="ba-text">Select anatomical structure → relevant tools surface contextually</div></div>
            <div className="ba-item"><div className="ba-num">2.</div><div className="ba-text">Tool panel adapts to selection — irrelevant controls hidden</div></div>
            <div className="ba-item"><div className="ba-num">3.</div><div className="ba-text">Primary verbs are anatomical: position, orient, measure, annotate</div></div>
            <div className="ba-item"><div className="ba-num">4.</div><div className="ba-text">Scene hierarchy uses clinical labels — Femoral Head, L4 Vertebra, Implant</div></div>
          </div>
        </div>

        <h3 className="text-[22px] font-bold text-white mb-8">Key UX Decisions</h3>

        <div className="decision-card">
          <div className="decision-num">Decision 01</div>
          <h3>Patient-Centered Workspace Architecture</h3>
          <p>Traditional systems were tool-oriented. I proposed restructuring the entire workflow around the patient case itself. Every asset, annotation, model, and review state existed inside a persistent workspace tied to a single clinical context.</p>
          <div style={{ margin: '1.25rem 0 0', borderRadius: '0.625rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,.08)' }} className="cursor-pointer hover:border-[#818cf8] transition-colors" onClick={() => openLightbox(1, 'hifi')}>
            <ImageWithFallback src={hifiLib} alt="Patient workspace library" className="w-full h-auto" />
          </div>
        </div>

        <div className="decision-card">
          <div className="decision-num">Decision 02</div>
          <h3>Eliminating Export as a Workflow Step</h3>
          <p>Originally, most workflows depended heavily on exporting files between systems. I redesigned the flow so anatomical models could be edited directly inside the browser. Exports became final publishing states instead of intermediate steps.</p>
          <div style={{ margin: '1.25rem 0 0', borderRadius: '0.625rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,.08)' }} className="cursor-pointer hover:border-[#818cf8] transition-colors" onClick={() => openLightbox(11, 'hifi')}>
            <ImageWithFallback src={hifi3dEditor05} alt="Full editor layout" className="w-full h-auto" />
          </div>
        </div>

        <div className="decision-card">
          <div className="decision-num">Decision 03</div>
          <h3>Hierarchy-First 3D Interaction Model</h3>
          <p>Early concepts relied on viewport-driven interaction. Testing revealed dense anatomical scenes caused orientation loss and selection ambiguity. Based on test analysis, I proposed shifting toward hierarchy-first navigation — the viewport became a manipulation surface, while the hierarchy became the primary organizational system.</p>
          <div style={{ margin: '1.25rem 0 0', borderRadius: '0.625rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,.08)' }} className="cursor-pointer hover:border-[#818cf8] transition-colors" onClick={() => openLightbox(7, 'hifi')}>
            <ImageWithFallback src={hifi3dEditor01} alt="Scene hierarchy tree" className="w-full h-auto" />
          </div>
        </div>

        <div className="decision-card">
          <div className="decision-num">Decision 04</div>
          <h3>Reducing Cognitive Load in Spatial Operations</h3>
          <p>Working with anatomical geometry required stable and predictable interactions. I defined the interaction model: persistent transform controls, explicit selection feedback, stable object states, minimized hidden modes, and continuous spatial reference points.</p>
          <div style={{ margin: '1.25rem 0 0', borderRadius: '0.625rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,.08)' }} className="cursor-pointer hover:border-[#818cf8] transition-colors" onClick={() => openLightbox(10, 'hifi')}>
            <ImageWithFallback src={hifi3dEditor04} alt="Spatial transform controls" className="w-full h-auto" />
          </div>
        </div>

        <div className="decision-card">
          <div className="decision-num">Decision 05</div>
          <h3>Workflow Continuity Across Modules</h3>
          <p>I structured the platform around four connected modules: Library, Viewer, Editor, and XR Review. Each designed to preserve orientation and patient context across transitions.</p>
          <div style={{ margin: '1.25rem 0 0', borderRadius: '0.625rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,.08)' }} className="cursor-pointer hover:border-[#818cf8] transition-colors" onClick={() => openLightbox(2, 'hifi')}>
            <ImageWithFallback src={hifiLib02} alt="File management interface" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ── HIGH-FIDELITY PROTOTYPES ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Visual Design</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          High-Fidelity Prototypes
        </h2>
        <p className="text-lg text-[#94a3b8] max-w-3xl leading-[1.8] mb-4">
          Final visual design covering authentication, library management, 3D editing interface, and modal interactions.
        </p>
        <p className="text-sm text-[#64748b] italic mb-12">Click on any prototype to view full-size. Use arrow keys or navigation buttons to browse.</p>

        <div className="grid grid-cols-3 gap-6">
          {hifiImages.map((image, index) => (
            <div key={index} className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-2xl p-4 overflow-hidden">
              <div className="w-full overflow-hidden rounded-lg border border-[rgba(255,255,255,.08)] cursor-pointer hover:border-[#818cf8] transition-colors" onClick={() => openLightbox(index, 'hifi')}>
                <ImageWithFallback src={image.src} alt={image.alt} className="w-full h-auto" />
              </div>
              <p className="text-xs text-[#818cf8] mt-3 text-center font-medium">{image.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESIGN ITERATIONS ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Evolution</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Design Iterations
        </h2>
        <div className="text-[15px] text-[#94a3b8] mb-10">Three critical design decisions that shaped the final product, each tested and refined through multiple iterations.</div>

        <div className="flex flex-col gap-8">
          {[
            {
              title: 'Scene Hierarchy',
              v1: { label: 'Nested folders, hidden by default', metric: 'Discovery: 34s', metricColor: '#f87171' },
              test: '"Where did the tumor go?"',
              final: { label: 'Flat, always-visible structure with labels', metric: 'Discovery: 8s', metricColor: '#34d399' },
            },
            {
              title: 'Save Behavior',
              v1: { label: 'Silent auto-save every 30 seconds', metric: 'Trust: 2/10', metricColor: '#f87171' },
              test: '"I accidentally moved the aorta and it auto-saved. How do I undo?"',
              final: { label: 'Dirty state indicator + explicit save + version commits', metric: 'Trust: 9/10', metricColor: '#34d399' },
            },
            {
              title: 'Spatial Controls',
              v1: { label: 'Controls hidden behind context menus', metric: 'Task time: +40%', metricColor: '#f87171' },
              test: '"I need these tools visible, not buried in menus"',
              final: { label: 'All spatial controls permanently visible with persistent toolbar', metric: 'Task time: −35%', metricColor: '#34d399' },
            },
          ].map((iter, i) => (
            <div key={i} className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-2xl p-7">
              <div className="text-sm font-bold text-white mb-4">{iter.title}</div>
              <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
                <div className="text-center">
                  <div className="text-[10px] text-[#f87171] font-semibold tracking-wider uppercase mb-2">V1</div>
                  <div className="text-[13px] text-[#94a3b8]">{iter.v1.label}</div>
                  <div className="mt-2 text-[11px] font-bold" style={{ color: iter.v1.metricColor }}>{iter.v1.metric}</div>
                </div>
                <div className="text-base text-[rgba(129,140,248,.3)]">→</div>
                <div className="text-center bg-[rgba(251,191,36,.04)] rounded-lg p-3">
                  <div className="text-[10px] text-[#fbbf24] font-semibold tracking-wider uppercase mb-2">Test</div>
                  <div className="text-xs text-[#fbbf24] italic">"{iter.test}"</div>
                </div>
                <div className="text-base text-[rgba(129,140,248,.3)]">→</div>
                <div className="text-center">
                  <div className="text-[10px] text-[#34d399] font-semibold tracking-wider uppercase mb-2">Final</div>
                  <div className="text-[13px] text-[#94a3b8]">{iter.final.label}</div>
                  <div className="mt-2 text-[11px] font-bold" style={{ color: iter.final.metricColor }}>{iter.final.metric}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORKFLOW TRANSFORMATION ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Impact</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Workflow Transformation
        </h2>

        <div className="ba-grid">
          <div className="ba-col before">
            <h3>Before XR Editor</h3>
            <div className="ba-item"><div className="ba-num">1.</div><div className="ba-text">Log into PACS, locate patient folder, download DICOM series to local machine</div></div>
            <div className="ba-item"><div className="ba-num">2.</div><div className="ba-text">Open OsiriX, import DICOM files, configure windowing settings per study</div></div>
            <div className="ba-item"><div className="ba-num">3.</div><div className="ba-text">Export segmented surface as STL, open in Blender, perform manual cleanup</div></div>
            <div className="ba-item"><div className="ba-num">4.</div><div className="ba-text">Position implant models from separate library, export scene as GLTF</div></div>
            <div className="ba-item"><div className="ba-num">5.</div><div className="ba-text">Run format converter, optimize polygon count, transfer file to HoloLens via USB or FTP</div></div>
            <div className="ba-item"><div className="ba-num">6.</div><div className="ba-text">Load on HoloLens, verify spatial placement — if wrong, repeat from step 3</div></div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(248,113,113,.2)' }}>
              <div className="ba-num" style={{ fontSize: '2rem' }}>47 min</div>
              <div className="ba-text">Average per planning session</div>
            </div>
          </div>
          <div className="ba-col after">
            <h3>After XR Editor</h3>
            <div className="ba-item"><div className="ba-num">1.</div><div className="ba-text">Open XR Editor, search patient case — DICOM auto-loaded from PACS integration</div></div>
            <div className="ba-item"><div className="ba-num">2.</div><div className="ba-text">Review 2D imaging in Viewer, switch to 3D Editor — model already reconstructed server-side</div></div>
            <div className="ba-item"><div className="ba-num">3.</div><div className="ba-text">Select anatomy, position implant using contextual controls, add annotations</div></div>
            <div className="ba-item"><div className="ba-num">4.</div><div className="ba-text">Save named checkpoint — plan locked and attributed</div></div>
            <div className="ba-item"><div className="ba-num">5.</div><div className="ba-text">Press "Send to XR" — one action, server handles optimization and transmission</div></div>
            <div className="ba-item"><div className="ba-num">6.</div><div className="ba-text">HoloLens confirms ready — review in AR, annotations visible in headset</div></div>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(52,211,153,.2)' }}>
              <div className="ba-num" style={{ fontSize: '2rem' }}>12 min</div>
              <div className="ba-text">Average per planning session</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS WAS DIFFICULT ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Complexity</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Why This Was Difficult
        </h2>
        <p className="text-[15px] text-[#94a3b8] mb-10">
          Three categories of complexity intersected on this project simultaneously. Click a zone to explore what made it hard.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {(Object.entries(wdZones) as [keyof typeof wdZones, typeof wdZones[keyof typeof wdZones]][]).map(([key, zone]) => {
            const isActive = activeZone === key;
            return (
              <button
                key={key}
                onClick={() => setActiveZone(isActive ? null : key)}
                className="text-left rounded-2xl p-6 transition-all duration-200"
                style={{
                  background: isActive ? zone.bg : 'rgba(255,255,255,.02)',
                  border: `2px solid ${isActive ? zone.border : 'rgba(255,255,255,.06)'}`,
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <div className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: isActive ? zone.color : '#64748b' }}>
                  {zone.label} Complexity
                </div>
                <div className="text-[13px] leading-[1.5]" style={{ color: isActive ? '#cbd5e1' : '#475569' }}>
                  {key === 'technical' && 'Real-time 3D, DICOM parsing, XR pipeline — all in a browser'}
                  {key === 'domain' && 'Regulatory constraints, clinical vocabulary, multi-stakeholder alignment'}
                  {key === 'ux' && 'Expert users, safety-critical data, 3D spatial interaction on 2D screens'}
                </div>
                <div className="mt-3 text-[11px] font-semibold" style={{ color: zone.color }}>
                  {isActive ? '▾ Hide details' : '▸ Explore'}
                </div>
              </button>
            );
          })}
        </div>

        {activeZone && (
          <div
            className="rounded-xl p-6 transition-all duration-200"
            style={{ background: wdZones[activeZone].bg, border: `1px solid ${wdZones[activeZone].border}` }}
          >
            <div className="text-[13px] font-bold uppercase tracking-wider mb-4" style={{ color: wdZones[activeZone].color }}>
              {wdZones[activeZone].label} Complexity — Specifics
            </div>
            <div className="grid grid-cols-2 gap-3">
              {wdZones[activeZone].items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-[rgba(255,255,255,.04)] rounded-lg p-3">
                  <span className="text-xs font-bold flex-shrink-0 mt-0.5" style={{ color: wdZones[activeZone].color }}>{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-[13px] text-[#94a3b8] leading-[1.5]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ── WHAT FAILED ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Failure Log</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          What Failed
        </h2>
        <p className="text-[15px] text-[#94a3b8] mb-10">
          Four dead ends we hit during design. Click each to see what happened and what we learned.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-8 bottom-8 w-[2px] bg-[rgba(129,140,248,.15)]" />

          <div className="flex flex-col gap-4">
            {deadEnds.map((de, i) => {
              const isExpanded = expandedDeadEnd === i;
              return (
                <div key={i} className="relative pl-12">
                  {/* Dot */}
                  <div
                    className="absolute left-0 top-5 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                    style={{
                      background: isExpanded ? 'rgba(248,113,113,.2)' : 'rgba(255,255,255,.04)',
                      border: `2px solid ${isExpanded ? '#f87171' : 'rgba(255,255,255,.1)'}`,
                      color: isExpanded ? '#f87171' : '#475569',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <button
                    onClick={() => setExpandedDeadEnd(isExpanded ? null : i)}
                    className="w-full text-left rounded-xl p-5 transition-all duration-200"
                    style={{
                      background: isExpanded ? 'rgba(248,113,113,.04)' : 'rgba(255,255,255,.02)',
                      border: `1px solid ${isExpanded ? 'rgba(248,113,113,.2)' : 'rgba(255,255,255,.06)'}`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-[#64748b] font-semibold uppercase tracking-wider mb-1">{de.label}</div>
                        <div className="text-base font-bold text-white">{de.title}</div>
                      </div>
                      <div className="text-[#818cf8] text-lg ml-4 flex-shrink-0">{isExpanded ? '−' : '+'}</div>
                    </div>

                    {isExpanded && (
                      <div className="mt-5 grid grid-cols-3 gap-4" onClick={(e) => e.stopPropagation()}>
                        {[
                          { label: 'What we tried', color: '#818cf8', text: de.tried },
                          { label: 'What happened', color: '#f87171', text: de.happened },
                          { label: 'What we learned', color: '#34d399', text: de.learned },
                        ].map((col, j) => (
                          <div key={j} className="bg-[rgba(255,255,255,.04)] rounded-lg p-4">
                            <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: col.color }}>{col.label}</div>
                            <p className="text-[13px] text-[#94a3b8] leading-[1.6]">{col.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RESULTS AND IMPACT ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Outcomes</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Results and Impact
        </h2>

        {/* Before/After toggle */}
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => setResultsBeforeAfter('after')}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
            style={resultsBeforeAfter === 'after' ? { background: 'linear-gradient(to right, rgba(129,140,248,.2), rgba(34,211,238,.2))', color: '#fff', border: '1px solid rgba(129,140,248,.4)' } : { background: 'transparent', color: '#64748b', border: '1px solid rgba(255,255,255,.08)' }}
          >
            After XR Editor
          </button>
          <button
            onClick={() => setResultsBeforeAfter('before')}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
            style={resultsBeforeAfter === 'before' ? { background: 'rgba(248,113,113,.1)', color: '#f87171', border: '1px solid rgba(248,113,113,.3)' } : { background: 'transparent', color: '#64748b', border: '1px solid rgba(255,255,255,.08)' }}
          >
            Before (Baseline)
          </button>
        </div>

        {resultsBeforeAfter === 'after' ? (
          <div className="grid grid-cols-2 gap-5 mb-6">
            {[
              { value: '74%', label: 'Reduction in planning time', sub: '47 min → 12 min average per case', color1: '#818cf8', color2: '#22d3ee', bg: 'linear-gradient(135deg, rgba(129,140,248,.08), rgba(34,211,238,.05))' },
              { value: '4→1', label: 'Tools consolidated', sub: 'Full workflow in a single environment', color1: '#34d399', color2: '#34d399', bg: 'linear-gradient(135deg, rgba(52,211,153,.06), rgba(34,211,238,.04))' },
              { value: '76%', label: 'Faster case discovery', sub: '34s → 8s to locate and open a case', color1: '#fbbf24', color2: '#fbbf24', bg: 'linear-gradient(135deg, rgba(251,191,36,.06), rgba(34,211,238,.04))' },
              { value: '0', label: 'Manual file exports required', sub: 'Full pipeline automated end-to-end', color1: '#f87171', color2: '#f87171', bg: 'linear-gradient(135deg, rgba(248,113,113,.06), rgba(129,140,248,.04))' },
            ].map((stat, i) => (
              <div key={i} className="rounded-xl p-8 text-center" style={{ background: stat.bg, border: '1px solid rgba(255,255,255,.07)' }}>
                <div className="text-[3rem] font-bold leading-none mb-2" style={{ background: `linear-gradient(to right, ${stat.color1}, ${stat.color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{stat.value}</div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-[#64748b] text-[13px]">{stat.sub}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 mb-6">
            {[
              { value: '47 min', label: 'Average planning session', sub: 'Observed during baseline research shadowing', color: '#f87171' },
              { value: '4+', label: 'Tools per workflow', sub: 'PACS, OsiriX, Blender, Format Converter, HoloLens', color: '#f87171' },
              { value: '34s', label: 'Case discovery time', sub: 'Locating a specific case in PACS', color: '#fbbf24' },
              { value: '4+', label: 'File exports per session', sub: 'STL, OBJ, GLTF, optimized mesh — all manual', color: '#fbbf24' },
            ].map((stat, i) => (
              <div key={i} className="rounded-xl p-8 text-center bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)]">
                <div className="text-[3rem] font-bold leading-none mb-2" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-[#94a3b8] font-semibold mb-1">{stat.label}</div>
                <div className="text-[#64748b] text-[13px]">{stat.sub}</div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-lg p-5 mb-4">
          <p className="text-[13px] text-[#64748b] leading-[1.6]"><strong className="text-[#94a3b8]">Disclaimer:</strong> Metrics are drawn from internal usability testing with 8 participants across 2 hospital pilots. Results reflect observed task completion times in controlled sessions and self-reported qualitative feedback. This is not a published clinical study. Data has been generalized per NDA requirements.</p>
        </div>

        <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-6 mb-4">
          <div className="text-[11px] text-[#818cf8] font-semibold uppercase tracking-wider mb-3">Measurement Methodology</div>
          <p className="text-[#94a3b8] text-[14px] leading-[1.7]">Timing data was captured by a facilitator with a stopwatch during moderated usability sessions. Participants were given identical planning tasks and completed them first in their existing workflow, then in XR Editor. Participants were blinded to which metrics we were capturing. Qualitative data was coded from session recordings and debrief interviews.</p>
        </div>

        <div className="rounded-xl p-8" style={{ background: 'linear-gradient(135deg, rgba(129,140,248,.06), rgba(34,211,238,.06))', border: '1px solid rgba(129,140,248,.15)' }}>
          <div className="text-[11px] text-[#818cf8] font-semibold uppercase tracking-wider mb-3">Business Context</div>
          <p className="text-[#94a3b8] text-[15px] leading-[1.7]">Following the pilot, the client secured a second round of institutional funding and expanded the pilot to three additional hospital networks. The product is currently in active regulatory submission for CE marking in the EU. The UX architecture was cited in internal documentation as a key differentiator in hospital procurement conversations.</p>
        </div>
      </section>

      {/* ── KEY TAKEAWAYS ── */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Reflection</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Key Takeaways
        </h2>

        <div className="rounded-2xl py-12 px-12 mb-12 text-center" style={{ background: 'linear-gradient(135deg, rgba(129,140,248,.08), rgba(34,211,238,.06))', border: '1px solid rgba(129,140,248,.2)' }}>
          <div className="text-[1.375rem] font-medium text-white leading-[1.7] italic max-w-[700px] mx-auto">
            "For the first time, I feel like I'm actually planning the surgery — not managing software."
          </div>
          <div className="mt-4 text-sm text-[#64748b]">— Lead Surgeon, Pilot Hospital Network B · Post-session debrief</div>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-10">
          {[
            {
              num: '01',
              title: 'Domain immersion is not optional in MedTech',
              body: "I didn't understand DICOM until week 3 or the difference between a segmentation and a mesh until week 5. Without that knowledge, I couldn't evaluate whether an interaction model made clinical sense. Regulated domains require genuine technical fluency.",
            },
            {
              num: '02',
              title: 'The right abstraction is a design decision',
              body: "The anatomy-first hierarchy wasn't a labeling change — it was a fundamental reframing of what the product is. The wrong abstraction (technical objects) made the product hostile. The right abstraction (anatomical structures) made it feel like an extension of clinical thinking.",
            },
            {
              num: '03',
              title: 'Friction can be a feature',
              body: 'The named checkpoint system added deliberate pause to the save flow. In a consumer product, I would have fought to remove it. In a clinical planning tool, it became a trust-building mechanism. Brief, intentional friction communicated seriousness and control.',
            },
            {
              num: '04',
              title: 'UX and engineering constraints are the same constraint',
              body: 'The one-click XR sync required significant server-side infrastructure. Designing the loading states and error conditions required knowing what could actually fail. UX decisions were engineering decisions and vice versa.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-6">
              <div className="text-[#818cf8] font-bold text-[1.5rem] mb-3">{item.num}</div>
              <h4 className="text-white font-bold mb-3 text-base">{item.title}</h4>
              <p className="text-[#94a3b8] text-[14px] leading-[1.7]">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-[rgba(255,255,255,.02)] border-l-[3px] border-[#22d3ee] rounded-r-xl pl-6 pr-6 py-7">
          <div className="text-[11px] text-[#22d3ee] font-bold uppercase tracking-[2px] mb-4">Personal Note</div>
          <p className="text-[15px] text-[#94a3b8] leading-[1.8] mb-4">
            This was the most technically and ethically demanding project I've worked on. Designing for a context where your decisions contribute to patient outcomes changes how you approach every choice. I came out of it with a much more serious relationship to the craft — and a deeper respect for the surgeons who trusted us with their workflow.
          </p>
          <p className="text-[15px] text-[#94a3b8] leading-[1.8] mb-4">
            The moment that stuck with me most wasn't a metric. It was watching a surgeon navigate the final prototype for the first time and hearing her say, almost to herself: <em>"Oh. It just... stays."</em> She meant the orientation. The context. The spatial understanding that every other tool had destroyed at every transition.
          </p>
          <p className="text-[15px] text-white font-medium leading-[1.8]">
            That's what months of work sounds like when it works.
          </p>
        </div>
      </section>
    </div>
  );
}
