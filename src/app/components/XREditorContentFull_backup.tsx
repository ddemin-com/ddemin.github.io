import { CheckCircle2 } from 'lucide-react';

export function XREditorContentFull() {
  return (
    <div>
      {/* Role & Impact */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Role</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Role & Impact
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-6 items-start">
          {/* My Contribution */}
          <div>
            <div className="bg-[rgba(129,140,248,.04)] border border-[rgba(129,140,248,.15)] rounded-2xl p-8 min-h-[340px] flex flex-col">
              <div className="text-[13px] font-bold tracking-[2px] uppercase text-[#818cf8] mb-4">
                My Contribution
              </div>
              <div className="flex flex-col gap-2">
                {[
                  'Product discovery & domain research',
                  'Information architecture',
                  'User flows & interaction modeling',
                  'UX architecture for 3D editing environment',
                  'Prototyping (low-fi through high-fidelity)',
                  'Usability testing design & facilitation',
                  'Developer handoff & interaction specs'
                ].map((item, index) => (
                  <div key={index} className="flex items-baseline gap-2 text-[14px] text-[#cbd5e1]">
                    <span className="text-[#818cf8]">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="rounded-xl p-4 text-center bg-[rgba(244,114,182,.04)] border border-[rgba(244,114,182,.15)]">
                <div className="text-[#f472b6] text-2xl font-bold leading-tight">47→12m</div>
                <div className="text-[#94a3b8] text-xs mt-1">planning time</div>
              </div>
              <div className="rounded-xl p-4 text-center bg-[rgba(34,211,238,.04)] border border-[rgba(34,211,238,.15)]">
                <div className="text-[#22d3ee] text-2xl font-bold leading-tight">4→1</div>
                <div className="text-[#94a3b8] text-xs mt-1">tools unified</div>
              </div>
              <div className="rounded-xl p-4 text-center bg-[rgba(74,222,128,.04)] border border-[rgba(74,222,128,.15)]">
                <div className="text-[#4ade80] text-2xl font-bold leading-tight">34→8s</div>
                <div className="text-[#94a3b8] text-xs mt-1">discovery time</div>
              </div>
            </div>
          </div>

          {/* Not Responsible For */}
          <div>
            <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-2xl p-8 min-h-[340px] flex flex-col">
              <div className="text-[13px] font-bold tracking-[2px] uppercase text-[#64748b] mb-4">
                Not Responsible For
              </div>
              <div className="flex flex-col gap-2">
                {[
                  'Visual branding & identity',
                  'Final visual polish & UI skin',
                  'Marketing materials'
                ].map((item, index) => (
                  <div key={index} className="flex items-baseline gap-2 text-[14px] text-[#64748b]">
                    <span>—</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="rounded-xl p-4 text-center bg-[rgba(251,191,36,.04)] border border-[rgba(251,191,36,.15)]">
                <div className="text-[#fbbf24] text-2xl font-bold leading-tight">20+</div>
                <div className="text-[#94a3b8] text-xs mt-1">workflows</div>
              </div>
              <div className="rounded-xl p-4 text-center bg-[rgba(167,139,250,.04)] border border-[rgba(167,139,250,.15)]">
                <div className="text-[#a78bfa] text-2xl font-bold leading-tight">50+</div>
                <div className="text-[#94a3b8] text-xs mt-1">screens</div>
              </div>
              <div className="rounded-xl p-4 text-center bg-[rgba(248,113,113,.04)] border border-[rgba(248,113,113,.15)]">
                <div className="text-[#f87171] text-2xl font-bold leading-tight">0</div>
                <div className="text-[#94a3b8] text-xs mt-1">exports</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Project */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Overview</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          About the Project
        </h2>

        <p className="text-base text-[#94a3b8] leading-[1.8] mb-6 max-w-3xl">
          XR Editor is a browser-based platform for medical 3D visualization and anatomical editing designed for pre-operative planning and clinical collaboration.
        </p>

        <p className="text-base text-[#94a3b8] leading-[1.8] mb-6 max-w-3xl">
          The platform unified fragmented medical workflows into a single continuous environment combining: DICOM data ingestion, anatomical reconstruction, 3D editing workflows, patient asset management, and XR-based spatial review.
        </p>

        <div className="text-sm text-[#64748b] py-4 px-5 bg-[rgba(255,255,255,.03)] border-l-[3px] border-[#818cf8] rounded-lg max-w-3xl mb-2">
          ⚠️ Due to NDA restrictions, some visuals, flows, and data have been modified or simplified.
        </div>

        <p className="text-lg text-[#cbd5e1] italic border-l-[3px] border-[rgba(129,140,248,.3)] pl-5 my-8 max-w-3xl">
          The vision was clear — but once we began, the path to get there turned out far more complex than expected.
        </p>
      </section>

      {/* Market Research */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Analysis</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Market Research
        </h2>
        <p className="text-lg text-[#94a3b8] max-w-3xl leading-[1.8] mb-12">
          We analyzed existing medical and spatial systems to identify gaps and opportunities.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-[rgba(255,255,255,.03)] border border-[rgba(255,255,255,.06)] rounded-xl p-5 text-center">
            <div className="text-[28px] mb-2">🔌</div>
            <div className="text-sm font-semibold text-white mb-1.5">Fragmented Tooling</div>
            <div className="text-xs text-[#94a3b8]">
              3D Slicer, OsiriX, Blender, Mimics — no single platform combined editing, viewing, and collaboration
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,.03)] border border-[rgba(255,255,255,.06)] rounded-xl p-5 text-center">
            <div className="text-[28px] mb-2">🖥️</div>
            <div className="text-sm font-semibold text-white mb-1.5">Desktop Lock-in</div>
            <div className="text-xs text-[#94a3b8]">
              Every competitor required per-workstation installation — a dealbreaker for hospital IT procurement
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,.03)] border border-[rgba(255,255,255,.06)] rounded-xl p-5 text-center">
            <div className="text-[28px] mb-2">👤</div>
            <div className="text-sm font-semibold text-white mb-1.5">Zero Collaboration</div>
            <div className="text-xs text-[#94a3b8]">
              No centralized asset management, no shared environments, no real-time review capabilities
            </div>
          </div>
        </div>

        <p className="mt-10 text-lg text-[#cbd5e1] italic border-l-[3px] border-[rgba(129,140,248,.3)] pl-5 max-w-3xl">
          The gap was clear. The question was whether we could fill it without repeating the same complexity mistakes everyone else had made. Our first attempt proved we couldn&rsquo;t — not with conventional thinking.
        </p>
      </section>

      {/* Trade-offs */}
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
          {/* Trade-off 1 */}
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-2xl p-8">
            <div className="grid grid-cols-[1fr_40px_1fr] gap-5 items-start">
              <div className="opacity-60">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] text-[#f87171] bg-[rgba(248,113,113,.1)] py-0.5 px-2.5 rounded-full font-semibold tracking-wider uppercase">
                    ✗ Rejected
                  </span>
                </div>
                <div className="text-base font-bold text-[#94a3b8] mb-2">Minimal Simplicity</div>
                <div className="text-[13px] text-[#64748b] leading-[1.7]">
                  Clean viewport, hidden menus, progressive disclosure. Lower visual noise — but tested worse with every expert user. Controls buried behind interactions increased task time.
                </div>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="text-xl text-[rgba(255,255,255,.15)]">→</div>
              </div>
              <div className="bg-[rgba(52,211,153,.04)] border-2 border-[rgba(52,211,153,.2)] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] text-[#34d399] bg-[rgba(52,211,153,.1)] py-0.5 px-2.5 rounded-full font-semibold tracking-wider uppercase">
                    ✓ Our Choice
                  </span>
                </div>
                <div className="text-base font-bold text-white mb-2">Dense UI</div>
                <div className="text-[13px] text-[#94a3b8] leading-[1.7]">
                  Persistent toolbars, visible hierarchy, always-on inspector. Higher visual complexity — but testing proved experts needed all controls visible at all times.
                </div>
              </div>
            </div>
            <div className="mt-4 py-3 px-4 bg-[rgba(129,140,248,.04)] rounded-lg text-xs text-[#818cf8] font-medium">
              ↳ Hiding controls increased task time by 40%. Expert users think in persistent workspace, not progressive menus.
            </div>
          </div>

          {/* Trade-off 2 */}
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-2xl p-8">
            <div className="grid grid-cols-[1fr_40px_1fr] gap-5 items-start">
              <div className="opacity-60">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] text-[#f87171] bg-[rgba(248,113,113,.1)] py-0.5 px-2.5 rounded-full font-semibold tracking-wider uppercase">
                    ✗ Rejected
                  </span>
                </div>
                <div className="text-base font-bold text-[#94a3b8] mb-2">Frictionless Auto-Save</div>
                <div className="text-[13px] text-[#64748b] leading-[1.7]">
                  Background saving, zero interruptions. Modern UX standard — but destroyed trust when a surgeon accidentally moved a vessel and it was immediately committed to the patient record.
                </div>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="text-xl text-[rgba(255,255,255,.15)]">→</div>
              </div>
              <div className="bg-[rgba(52,211,153,.04)] border-2 border-[rgba(52,211,153,.2)] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] text-[#34d399] bg-[rgba(52,211,153,.1)] py-0.5 px-2.5 rounded-full font-semibold tracking-wider uppercase">
                    ✓ Our Choice
                  </span>
                </div>
                <div className="text-base font-bold text-white mb-2">Safety-First Saving</div>
                <div className="text-[13px] text-[#94a3b8] leading-[1.7]">
                  Explicit save confirmations, dirty state indicators, version commits. More friction per action — but clinical data demands trust over convenience.
                </div>
              </div>
            </div>
            <div className="mt-4 py-3 px-4 bg-[rgba(129,140,248,.04)] rounded-lg text-xs text-[#818cf8] font-medium">
              ↳ In medical workflows, trust in data integrity outweighs convenience. Auto-save trust score: 2/10 → Explicit save: 9/10.
            </div>
          </div>

          {/* Trade-off 3 */}
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-2xl p-8">
            <div className="grid grid-cols-[1fr_40px_1fr] gap-5 items-start">
              <div className="opacity-60">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] text-[#f87171] bg-[rgba(248,113,113,.1)] py-0.5 px-2.5 rounded-full font-semibold tracking-wider uppercase">
                    ✗ Rejected
                  </span>
                </div>
                <div className="text-base font-bold text-[#94a3b8] mb-2">Viewport-First Interaction</div>
                <div className="text-[13px] text-[#64748b] leading-[1.7]">
                  Click-in-3D as primary selection. Feels intuitive — but dense anatomical scenes made selection ambiguous and orientation fragile. 30+ seconds to find a tumor.
                </div>
              </div>
              <div className="flex items-center justify-center h-full">
                <div className="text-xl text-[rgba(255,255,255,.15)]">→</div>
              </div>
              <div className="bg-[rgba(52,211,153,.04)] border-2 border-[rgba(52,211,153,.2)] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[10px] text-[#34d399] bg-[rgba(52,211,153,.1)] py-0.5 px-2.5 rounded-full font-semibold tracking-wider uppercase">
                    ✓ Our Choice
                  </span>
                </div>
                <div className="text-base font-bold text-white mb-2">Hierarchy-First Navigation</div>
                <div className="text-[13px] text-[#94a3b8] leading-[1.7]">
                  Structural tree as primary interaction surface. More structured, more predictable. Medical professionals think in anatomical structures, not spatial coordinates.
                </div>
              </div>
            </div>
            <div className="mt-4 py-3 px-4 bg-[rgba(129,140,248,.04)] rounded-lg text-xs text-[#818cf8] font-medium">
              ↳ Hierarchy navigation reduced target-finding time from 34s to 8s. The viewport became a manipulation surface, not a navigation one.
            </div>
          </div>
        </div>
      </section>

      {/* Information Architecture */}
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
          <div className="text-[11px] text-[#818cf8] tracking-[2px] uppercase font-semibold mb-6 text-center">
            Information Architecture Map
          </div>

          {/* Auth */}
          <div className="text-center mb-5">
            <div className="inline-block bg-[rgba(244,114,182,.08)] border-2 border-[rgba(244,114,182,.3)] rounded-[10px] py-3 px-8">
              <span className="text-sm text-[#f472b6] font-bold">🔐 Authentication</span>
              <div className="text-[10px] text-[#94a3b8] mt-1">Login · Registration · Demo</div>
            </div>
          </div>
          <div className="text-center text-[rgba(255,255,255,.15)] text-xl mb-3">↓</div>

          {/* Main modules */}
          <div className="grid grid-cols-4 gap-4 mb-3">
            <div className="bg-[rgba(45,212,191,.06)] border-2 border-[rgba(45,212,191,.25)] rounded-xl p-4 text-center">
              <div className="text-sm font-bold text-[#2dd4bf] mb-2">📚 Library</div>
              <div className="flex flex-col gap-0.5 text-left text-[10px] text-[#94a3b8]">
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Patient List</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Folders</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Upload</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Search & Filter</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Preview Grid</div>
              </div>
            </div>

            <div className="bg-[rgba(167,139,250,.06)] border-2 border-[rgba(167,139,250,.25)] rounded-xl p-4 text-center">
              <div className="text-sm font-bold text-[#a78bfa] mb-2">👁️ Viewer</div>
              <div className="flex flex-col gap-0.5 text-left text-[10px] text-[#94a3b8]">
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">DICOM Slices</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">3D Preview</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Video Player</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Image Viewer</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Annotations</div>
              </div>
            </div>

            <div className="bg-[rgba(74,222,128,.06)] border-2 border-[rgba(74,222,128,.25)] rounded-xl p-4 text-center">
              <div className="text-sm font-bold text-[#4ade80] mb-2">⚙️ 3D Editor</div>
              <div className="flex flex-col gap-0.5 text-left text-[10px] text-[#94a3b8]">
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Scene Hierarchy</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">3D Viewport</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Property Inspector</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Material Editor</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Version Control</div>
              </div>
            </div>

            <div className="bg-[rgba(251,191,36,.06)] border-2 border-[rgba(251,191,36,.25)] rounded-xl p-4 text-center">
              <div className="text-sm font-bold text-[#fbbf24] mb-2">🥽 XR Review</div>
              <div className="flex flex-col gap-0.5 text-left text-[10px] text-[#94a3b8]">
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Spatial View</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Hand Tracking</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Collaboration</div>
                <div className="py-0.5 px-1.5 bg-[rgba(255,255,255,.03)] rounded">Sync with Editor</div>
              </div>
            </div>
          </div>

          <div className="text-center py-3 bg-[rgba(129,140,248,.04)] rounded-lg text-[11px] text-[#818cf8] font-medium">
            ← Patient context preserved across all modules →
          </div>
        </div>

        <div className="text-center mt-8 py-5 bg-[rgba(129,140,248,.06)] rounded-xl">
          <div className="text-sm text-[#818cf8] font-semibold">
            Core Principle: Modules share patient context, not files.
          </div>
          <div className="text-[13px] text-[#94a3b8] mt-1">
            Every transition preserves spatial orientation, selection state, and revision history.
          </div>
        </div>
      </section>

      {/* Key User Flows */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Flows</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Key User Flows
        </h2>
        <p className="text-lg text-[#94a3b8] max-w-3xl leading-[1.8] mb-12">
          Critical user flows mapped and validated before high-fidelity design.
        </p>

        <div className="mt-8">
          <div className="text-sm font-bold text-white mb-6">Surgical Planning — End-to-End Flow</div>
          <div className="grid grid-cols-5 gap-3 text-center">
            <div>
              <div className="bg-[rgba(244,114,182,.08)] border-2 border-[rgba(244,114,182,.25)] rounded-xl p-4 min-h-[80px] flex flex-col items-center justify-center">
                <span className="text-2xl mb-1.5">🌐</span>
                <span className="text-xs text-[#f472b6] font-semibold">Open Editor</span>
              </div>
              <div className="text-[10px] text-[#94a3b8] mt-1.5">Launch web 3D editor in browser</div>
            </div>
            <div>
              <div className="bg-[rgba(45,212,191,.08)] border-2 border-[rgba(45,212,191,.25)] rounded-xl p-4 min-h-[80px] flex flex-col items-center justify-center">
                <span className="text-2xl mb-1.5">👤</span>
                <span className="text-xs text-[#2dd4bf] font-semibold">Select Patient</span>
              </div>
              <div className="text-[10px] text-[#94a3b8] mt-1.5">Create new or open existing patient case</div>
            </div>
            <div>
              <div className="bg-[rgba(167,139,250,.08)] border-2 border-[rgba(167,139,250,.25)] rounded-xl p-4 min-h-[80px] flex flex-col items-center justify-center">
                <span className="text-2xl mb-1.5">📤</span>
                <span className="text-xs text-[#a78bfa] font-semibold">Upload Data</span>
              </div>
              <div className="text-[10px] text-[#94a3b8] mt-1.5">3D models, images, videos for the case</div>
            </div>
            <div>
              <div className="bg-[rgba(74,222,128,.08)] border-2 border-[rgba(74,222,128,.25)] rounded-xl p-4 min-h-[80px] flex flex-col items-center justify-center">
                <span className="text-2xl mb-1.5">⚙️</span>
                <span className="text-xs text-[#4ade80] font-semibold">Edit 3D Model</span>
              </div>
              <div className="text-[10px] text-[#94a3b8] mt-1.5">Create empty or load existing model, edit in 3D</div>
            </div>
            <div>
              <div className="bg-[rgba(251,191,36,.08)] border-2 border-[rgba(251,191,36,.25)] rounded-xl p-4 min-h-[80px] flex flex-col items-center justify-center">
                <span className="text-2xl mb-1.5">🥽</span>
                <span className="text-xs text-[#fbbf24] font-semibold">XR Review</span>
              </div>
              <div className="text-[10px] text-[#94a3b8] mt-1.5">Put on headset, select patient, position & review in space</div>
            </div>
          </div>
          <div className="flex justify-center gap-0 -mt-1 mb-2">
            <div className="flex-1 text-center text-base text-[rgba(129,140,248,.3)]">→</div>
            <div className="flex-1 text-center text-base text-[rgba(129,140,248,.3)]">→</div>
            <div className="flex-1 text-center text-base text-[rgba(129,140,248,.3)]">→</div>
            <div className="flex-1 text-center text-base text-[rgba(129,140,248,.3)]">→</div>
          </div>
          <div className="text-center py-3 bg-[rgba(129,140,248,.04)] rounded-lg text-[11px] text-[#818cf8] font-medium">
            Patient context preserved at every step · No exports · No tool switching
          </div>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Context</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          The Real Problem
        </h2>
        <p className="text-[15px] text-[#94a3b8] leading-relaxed">
          The issue was not simply &ldquo;too many tools.&rdquo; <strong>The real problem was cognitive fragmentation.</strong> Every export, application switch, or format conversion forced users to rebuild context while working with highly complex anatomical structures under time pressure.
        </p>

        {/* Fragmented Workflow Diagram */}
        <div className="w-full rounded-2xl bg-[#0d0d1a] border border-[rgba(255,255,255,.08)] py-10 px-6 my-8 overflow-x-auto">
          <div className="flex items-center gap-0 min-w-[900px] justify-center">
            {/* Tool 1 */}
            <div className="text-center flex-shrink-0">
              <div className="w-[100px] h-20 bg-[rgba(248,113,113,.08)] border border-[rgba(248,113,113,.2)] rounded-[10px] flex flex-col items-center justify-center gap-1">
                <span className="text-xl">📧</span>
                <span className="text-[11px] text-[#f87171] font-semibold">PACS</span>
              </div>
              <div className="text-[10px] text-[#64748b] mt-1.5">Receive DICOM</div>
            </div>
            <div className="flex-shrink-0 px-2 flex flex-col items-center gap-0.5">
              <div className="text-base text-[rgba(248,113,113,.4)]">→</div>
              <div className="text-[8px] text-[#f87171] bg-[rgba(248,113,113,.1)] py-0.5 px-1.5 rounded">EXPORT</div>
            </div>
            {/* Tool 2 */}
            <div className="text-center flex-shrink-0">
              <div className="w-[100px] h-20 bg-[rgba(251,191,36,.08)] border border-[rgba(251,191,36,.2)] rounded-[10px] flex flex-col items-center justify-center gap-1">
                <span className="text-xl">🔬</span>
                <span className="text-[11px] text-[#fbbf24] font-semibold">OsiriX</span>
              </div>
              <div className="text-[10px] text-[#64748b] mt-1.5">View Slices</div>
            </div>
            <div className="flex-shrink-0 px-2 flex flex-col items-center gap-0.5">
              <div className="text-base text-[rgba(251,191,36,.4)]">→</div>
              <div className="text-[8px] text-[#fbbf24] bg-[rgba(251,191,36,.1)] py-0.5 px-1.5 rounded">STL/OBJ</div>
            </div>
            {/* Tool 3 */}
            <div className="text-center flex-shrink-0">
              <div className="w-[100px] h-20 bg-[rgba(167,139,250,.08)] border border-[rgba(167,139,250,.2)] rounded-[10px] flex flex-col items-center justify-center gap-1">
                <span className="text-xl">🎨</span>
                <span className="text-[11px] text-[#a78bfa] font-semibold">Blender</span>
              </div>
              <div className="text-[10px] text-[#64748b] mt-1.5">Edit 3D</div>
            </div>
            <div className="flex-shrink-0 px-2 flex flex-col items-center gap-0.5">
              <div className="text-base text-[rgba(167,139,250,.4)]">→</div>
              <div className="text-[8px] text-[#a78bfa] bg-[rgba(167,139,250,.1)] py-0.5 px-1.5 rounded">CONVERT</div>
            </div>
            {/* Tool 4 */}
            <div className="text-center flex-shrink-0">
              <div className="w-[100px] h-20 bg-[rgba(34,211,238,.08)] border border-[rgba(34,211,238,.2)] rounded-[10px] flex flex-col items-center justify-center gap-1">
                <span className="text-xl">📤</span>
                <span className="text-[11px] text-[#22d3ee] font-semibold">Converter</span>
              </div>
              <div className="text-[10px] text-[#64748b] mt-1.5">Export Assets</div>
            </div>
            <div className="flex-shrink-0 px-2 flex flex-col items-center gap-0.5">
              <div className="text-base text-[rgba(34,211,238,.4)]">→</div>
              <div className="text-[8px] text-[#22d3ee] bg-[rgba(34,211,238,.1)] py-0.5 px-1.5 rounded">USB/EMAIL</div>
            </div>
            {/* Tool 5 */}
            <div className="text-center flex-shrink-0">
              <div className="w-[100px] h-20 bg-[rgba(74,222,128,.08)] border border-[rgba(74,222,128,.2)] rounded-[10px] flex flex-col items-center justify-center gap-1">
                <span className="text-xl">🥽</span>
                <span className="text-[11px] text-[#4ade80] font-semibold">HoloLens</span>
              </div>
              <div className="text-[10px] text-[#64748b] mt-1.5">XR Review</div>
            </div>
          </div>
          <div className="text-center mt-6 pt-5 border-t border-dashed border-[rgba(248,113,113,.2)]">
            <span className="text-[13px] text-[#f87171] font-semibold">⚠️ 4 exports · 5 tools · 3 format conversions · 0 version control</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-5">
            <div className="text-2xl mb-2">🐌</div>
            <h3 className="text-[16px] font-bold text-white mb-2">Collaboration Breakdown</h3>
            <p className="text-[13px] text-[#94a3b8]">File-based sharing via email and USB drives. No real-time review, no single source of truth.</p>
          </div>
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-5">
            <div className="text-2xl mb-2">🧭</div>
            <h3 className="text-[16px] font-bold text-white mb-2">Lost Orientation</h3>
            <p className="text-[13px] text-[#94a3b8]">Anatomical orientation was frequently lost between tools. Surgeons rebuilt spatial context at every step.</p>
          </div>
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-5">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="text-[16px] font-bold text-white mb-2">Version Chaos</h3>
            <p className="text-[13px] text-[#94a3b8]">Maintaining version consistency was nearly impossible across disconnected systems and manual exports.</p>
          </div>
        </div>

        <div className="mt-12 py-8 px-6 bg-[rgba(129,140,248,.06)] border border-[rgba(129,140,248,.2)] rounded-xl">
          <div className="text-[18px] font-medium text-[#cbd5e1] italic leading-relaxed">
            How might we design a seamless 3D planning workflow for surgeons that reduces fragmentation and unnecessary cognitive load?
          </div>
          <div className="text-[12px] text-[#818cf8] mt-3 font-medium">Core UX Challenge</div>
        </div>
      </section>

      {/* Research & Discovery */}
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
          Early research revealed something important. Through interview synthesis, I identified that <strong className="text-white">the biggest frustration was not interface complexity itself &mdash; it was the constant loss of orientation between systems.</strong> Surgeons described the workflow as mentally exhausting because every tool introduced a different navigation model, hierarchy structure, and spatial context.
        </p>

        <div className="mt-10 py-8 px-6 bg-[rgba(129,140,248,.06)] border border-[rgba(129,140,248,.2)] rounded-xl">
          <div className="text-[18px] font-medium text-[#cbd5e1] italic leading-relaxed">
            This was not a visualization problem.<br />It was an orientation problem.
          </div>
          <div className="text-[12px] text-[#818cf8] mt-3 font-medium">Key Insight That Changed the Product Direction</div>
        </div>

        <h3 className="text-[22px] font-bold text-white mt-12 mb-6">Key Research Insights</h3>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-5">
            <div className="text-2xl mb-2">🔗</div>
            <h3 className="text-[16px] font-bold text-white mb-2">Fragmented Workflows</h3>
            <p className="text-[13px] text-[#94a3b8]">Users switched between 4&ndash;6 tools per case, often rebuilding the same context repeatedly.</p>
          </div>
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-5">
            <div className="text-2xl mb-2">⚠️</div>
            <h3 className="text-[16px] font-bold text-white mb-2">Export = Operational Risk</h3>
            <p className="text-[13px] text-[#94a3b8]">Each export/import step introduced version drift, incompatible formats, duplicated files, and uncertainty around &ldquo;latest&rdquo; revisions.</p>
          </div>
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="text-[16px] font-bold text-white mb-2">Experts Prefer Density</h3>
            <p className="text-[13px] text-[#94a3b8]">Attempts to hide controls or reduce visible tooling increased friction during testing. Experienced users wanted persistent controls and minimal mode switching.</p>
          </div>
        </div>

        {/* Key Research Quotes */}
        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="bg-[rgba(244,114,182,.06)] border border-[rgba(244,114,182,.12)] rounded-[10px] p-4">
            <div className="text-[10px] text-[#f472b6] font-semibold tracking-wider uppercase mb-2">🔀 Fragmentation</div>
            <div className="text-[13px] text-[#cbd5e1] italic">&ldquo;I use 5 different apps before I even get to surgery planning&rdquo;</div>
          </div>
          <div className="bg-[rgba(34,211,238,.06)] border border-[rgba(34,211,238,.12)] rounded-[10px] p-4">
            <div className="text-[10px] text-[#22d3ee] font-semibold tracking-wider uppercase mb-2">🧭 Orientation</div>
            <div className="text-[13px] text-[#cbd5e1] italic">&ldquo;I lose orientation every time I switch tools&rdquo;</div>
          </div>
          <div className="bg-[rgba(74,222,128,.06)] border border-[rgba(74,222,128,.12)] rounded-[10px] p-4">
            <div className="text-[10px] text-[#4ade80] font-semibold tracking-wider uppercase mb-2">⚡ Expert Needs</div>
            <div className="text-[13px] text-[#cbd5e1] italic">&ldquo;Don&rsquo;t hide controls from me &mdash; I know what I&rsquo;m doing&rdquo;</div>
          </div>
          <div className="bg-[rgba(251,191,36,.06)] border border-[rgba(251,191,36,.12)] rounded-[10px] p-4">
            <div className="text-[10px] text-[#fbbf24] font-semibold tracking-wider uppercase mb-2">📋 Trust</div>
            <div className="text-[13px] text-[#cbd5e1] italic">&ldquo;Auto-save scares me with clinical data&rdquo;</div>
          </div>
        </div>
        <div className="text-center text-xs text-[#64748b] italic">Based on 8 in-depth interviews · 3 surgeons · 3 medical assistants · 2 radiologists</div>
      </section>

      {/* Users and Context */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">People</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Users and Context
        </h2>
        <div className="text-[15px] text-[#94a3b8] mb-6">Understanding the primary and secondary users helped shape every interaction decision in the platform.</div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[rgba(255,255,255,.03)] border border-[rgba(255,255,255,.08)] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl text-white">Lead Surgeon</h3>
              <span className="text-[10px] text-[#818cf8] bg-[rgba(129,140,248,.15)] py-1 px-3 rounded-full font-semibold tracking-wider uppercase">Primary</span>
            </div>
            <div className="flex gap-4 mb-3 text-xs text-[#64748b]">
              <span>📅 Daily use</span>
              <span>🧠 Domain expert, low digital fluency</span>
            </div>
            <div className="text-sm text-[#94a3b8] mb-2">
              <strong className="text-white">Goal:</strong> Single workspace for anatomy review, surgical planning, and team collaboration
            </div>
            <div className="text-sm text-[#94a3b8] mb-4">
              <strong className="text-[#f87171]">Pain:</strong> Rebuilding spatial context across 4+ disconnected tools per case
            </div>
            <div className="italic text-[15px] text-[#cbd5e1] border-l-[3px] border-[#818cf8] pl-3.5">
              &ldquo;I need to see the kidney from every angle before I cut.&rdquo;
            </div>
          </div>
          <div className="bg-[rgba(255,255,255,.03)] border border-[rgba(255,255,255,.08)] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl text-white">Medical Assistant</h3>
              <span className="text-[10px] text-[#818cf8] bg-[rgba(129,140,248,.15)] py-1 px-3 rounded-full font-semibold tracking-wider uppercase">Secondary</span>
            </div>
            <div className="flex gap-4 mb-3 text-xs text-[#64748b]">
              <span>📅 Multiple times/day</span>
              <span>🧠 Moderate digital fluency</span>
            </div>
            <div className="text-sm text-[#94a3b8] mb-2">
              <strong className="text-white">Goal:</strong> Streamlined asset organization with version tracking and batch workflows
            </div>
            <div className="text-sm text-[#94a3b8] mb-4">
              <strong className="text-[#f87171]">Pain:</strong> Manual file management across systems with no preview or version control
            </div>
            <div className="italic text-[15px] text-[#cbd5e1] border-l-[3px] border-[#818cf8] pl-3.5">
              &ldquo;By the time I export and email the files, the surgeon has already started prep.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey Map */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Mapping</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Customer Journey Map
        </h2>
        <div className="text-[15px] text-[#94a3b8] mb-6">We mapped the existing workflow to identify pain points and opportunities for improvement across every stage.</div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <div className="text-[11px] text-[#f87171] font-semibold tracking-[2px] uppercase mb-3">⚠️ Key Pain Points</div>
            <div className="flex flex-col gap-2">
              <div className="bg-[rgba(248,113,113,.04)] border border-[rgba(248,113,113,.1)] rounded-lg p-3 text-[13px] text-[#94a3b8]">
                <strong className="text-[#f87171]">Export gauntlet</strong> &mdash; 3 format conversions, each introducing version drift and data loss risk
              </div>
              <div className="bg-[rgba(248,113,113,.04)] border border-[rgba(248,113,113,.1)] rounded-lg p-3 text-[13px] text-[#94a3b8]">
                <strong className="text-[#f87171]">Zero version control</strong> &mdash; &ldquo;Which version did we review last week?&rdquo; was a daily question
              </div>
              <div className="bg-[rgba(248,113,113,.04)] border border-[rgba(248,113,113,.1)] rounded-lg p-3 text-[13px] text-[#94a3b8]">
                <strong className="text-[#f87171]">File-based sharing</strong> &mdash; email and USB drives as collaboration tools
              </div>
            </div>
          </div>
          <div>
            <div className="text-[11px] text-[#34d399] font-semibold tracking-[2px] uppercase mb-3">✅ Design Opportunities</div>
            <div className="flex flex-col gap-2">
              <div className="bg-[rgba(52,211,153,.04)] border border-[rgba(52,211,153,.1)] rounded-lg p-3 text-[13px] text-[#94a3b8]">
                <strong className="text-[#34d399]">Direct browser editing</strong> &mdash; eliminate export steps entirely
              </div>
              <div className="bg-[rgba(52,211,153,.04)] border border-[rgba(52,211,153,.1)] rounded-lg p-3 text-[13px] text-[#94a3b8]">
                <strong className="text-[#34d399]">Continuous spatial context</strong> &mdash; preserve orientation across all modules
              </div>
              <div className="bg-[rgba(52,211,153,.04)] border border-[rgba(52,211,153,.1)] rounded-lg p-3 text-[13px] text-[#94a3b8]">
                <strong className="text-[#34d399]">Automatic versioning</strong> &mdash; explicit save with version history
              </div>
              <div className="bg-[rgba(52,211,153,.04)] border border-[rgba(52,211,153,.1)] rounded-lg p-3 text-[13px] text-[#94a3b8]">
                <strong className="text-[#34d399]">Real-time workspace</strong> &mdash; shared links instead of file attachments
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[rgba(248,113,113,.06)] border border-[rgba(248,113,113,.2)] rounded-xl p-6 mt-8 flex items-center gap-5">
          <div className="text-[48px] font-extrabold text-[#f87171] flex-shrink-0">80%</div>
          <div>
            <div className="text-base font-semibold text-white mb-1">of errors occurred between stages 3&ndash;5</div>
            <div className="text-sm text-[#94a3b8]">Export, edit, and re-export &mdash; the &ldquo;conversion gauntlet&rdquo; &mdash; was where version drift, data loss, and orientation breakdown concentrated. This became the primary design target.</div>
          </div>
        </div>
      </section>

      {/* Design Strategy */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Strategy</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Design Strategy
        </h2>

        {/* Crisis Moment */}
        <div className="bg-[rgba(248,113,113,.04)] border border-[rgba(248,113,113,.15)] rounded-2xl p-9 mb-10">
          <div className="text-xs font-semibold tracking-[2px] uppercase text-[#f87171] mb-3">⚠️ The Turning Point</div>
          <p className="text-[15px] text-[#94a3b8] leading-relaxed mb-4">
            <strong className="text-white">Our first prototype failed.</strong> We used progressive disclosure &mdash; hidden controls, nested menus, gradual complexity. Standard best practice.
          </p>
          <p className="text-[15px] text-[#94a3b8] leading-relaxed">
            Result: a surgeon couldn&rsquo;t find the kidney tumor in 30 seconds. Auto-save committed an accidental vessel move to the patient record. One participant said the workflow felt <em>&ldquo;like training mode, not preparation for tomorrow&rsquo;s operation.&rdquo;</em> We had to rebuild from the domain up.
          </p>
        </div>

        <p className="text-[15px] text-[#94a3b8] leading-relaxed mb-4">
          <strong className="text-white">The solution was not to simplify the workflow. The solution was to make complexity navigable.</strong>
        </p>
        <p className="text-[15px] text-[#94a3b8] leading-relaxed">
          Based on the research findings, I proposed reframing the product from a collection of tools into a <strong className="text-white">continuous patient-centered workspace</strong>.
        </p>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="text-center py-8">
            <div className="text-[22px] font-bold text-white mb-3">Feature Collection</div>
            <div className="text-sm text-[#64748b]">Users jump between disconnected modules</div>
          </div>
          <div className="text-center py-8">
            <div className="text-[22px] font-bold text-white mb-3">Continuous Workflow &gt; Feature Collection</div>
            <div className="text-sm text-[#cbd5e1]">Patient context preserved across all modules</div>
          </div>
        </div>
      </section>

      {/* Design Iterations */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Evolution</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Design Iterations
        </h2>
        <div className="text-[15px] text-[#94a3b8] mb-10">Three critical design decisions that shaped the final product, each tested and refined through multiple iterations.</div>

        <div className="flex flex-col gap-8">
          {/* Iteration 1: Scene Hierarchy */}
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-2xl p-7">
            <div className="text-sm font-bold text-white mb-4">Scene Hierarchy</div>
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
              <div className="text-center">
                <div className="text-[10px] text-[#f87171] font-semibold tracking-wider uppercase mb-2">V1</div>
                <div className="text-[13px] text-[#94a3b8]">Nested folders, hidden by default</div>
                <div className="mt-2 text-[11px] text-[#f87171]">Discovery: <strong>34s</strong></div>
              </div>
              <div className="text-base text-[rgba(129,140,248,.3)]">→</div>
              <div className="text-center bg-[rgba(251,191,36,.04)] rounded-lg p-3">
                <div className="text-[10px] text-[#fbbf24] font-semibold tracking-wider uppercase mb-2">Test</div>
                <div className="text-xs text-[#fbbf24] italic">&ldquo;Where did the tumor go?&rdquo;</div>
              </div>
              <div className="text-base text-[rgba(129,140,248,.3)]">→</div>
              <div className="text-center">
                <div className="text-[10px] text-[#34d399] font-semibold tracking-wider uppercase mb-2">Final</div>
                <div className="text-[13px] text-[#94a3b8]">Flat, always-visible structure with labels</div>
                <div className="mt-2 text-[11px] text-[#34d399]">Discovery: <strong>8s</strong></div>
              </div>
            </div>
          </div>

          {/* Iteration 2: Save Behavior */}
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-2xl p-7">
            <div className="text-sm font-bold text-white mb-4">Save Behavior</div>
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
              <div className="text-center">
                <div className="text-[10px] text-[#f87171] font-semibold tracking-wider uppercase mb-2">V1</div>
                <div className="text-[13px] text-[#94a3b8]">Silent auto-save every 30 seconds</div>
                <div className="mt-2 text-[11px] text-[#f87171]">Trust: <strong>2/10</strong></div>
              </div>
              <div className="text-base text-[rgba(129,140,248,.3)]">→</div>
              <div className="text-center bg-[rgba(251,191,36,.04)] rounded-lg p-3">
                <div className="text-[10px] text-[#fbbf24] font-semibold tracking-wider uppercase mb-2">Test</div>
                <div className="text-xs text-[#fbbf24] italic">&ldquo;I accidentally moved the aorta and it auto-saved. How do I undo?&rdquo;</div>
              </div>
              <div className="text-base text-[rgba(129,140,248,.3)]">→</div>
              <div className="text-center">
                <div className="text-[10px] text-[#34d399] font-semibold tracking-wider uppercase mb-2">Final</div>
                <div className="text-[13px] text-[#94a3b8]">Dirty state indicator + explicit save + version commits</div>
                <div className="mt-2 text-[11px] text-[#34d399]">Trust: <strong>9/10</strong></div>
              </div>
            </div>
          </div>

          {/* Iteration 3: Spatial Controls */}
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-2xl p-7">
            <div className="text-sm font-bold text-white mb-4">Spatial Controls</div>
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
              <div className="text-center">
                <div className="text-[10px] text-[#f87171] font-semibold tracking-wider uppercase mb-2">V1</div>
                <div className="text-[13px] text-[#94a3b8]">Controls hidden behind context menus</div>
                <div className="mt-2 text-[11px] text-[#f87171]">Task time: <strong>+40%</strong></div>
              </div>
              <div className="text-base text-[rgba(129,140,248,.3)]">→</div>
              <div className="text-center bg-[rgba(251,191,36,.04)] rounded-lg p-3">
                <div className="text-[10px] text-[#fbbf24] font-semibold tracking-wider uppercase mb-2">Test</div>
                <div className="text-xs text-[#fbbf24] italic">&ldquo;I need these tools visible, not buried in menus&rdquo;</div>
              </div>
              <div className="text-base text-[rgba(129,140,248,.3)]">→</div>
              <div className="text-center">
                <div className="text-[10px] text-[#34d399] font-semibold tracking-wider uppercase mb-2">Final</div>
                <div className="text-[13px] text-[#94a3b8]">All spatial controls permanently visible with persistent toolbar</div>
                <div className="mt-2 text-[11px] text-[#34d399]">Task time: <strong>-35%</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Workflow */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Transformation</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Workflow Transformation
        </h2>
        <div className="text-[15px] text-[#94a3b8] mb-8">Side-by-side comparison of clinical preparation workflow.</div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="text-base text-[#f87171] italic leading-relaxed py-5 px-0 border-l-[3px] border-[rgba(248,113,113,.3)] pl-5">
            Surgeons rebuilt spatial context at every tool transition. Each export was a reset button on their understanding of the patient&rsquo;s anatomy.
          </div>
          <div className="text-base text-[#34d399] italic leading-relaxed py-5 px-0 border-l-[3px] border-[rgba(52,211,153,.3)] pl-5">
            The patient context remained continuous throughout the workflow. Orientation was preserved, not reconstructed.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">⛔ Before XR Editor</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#f87171] w-12 flex-shrink-0">7</span>
                <span className="text-sm text-[#94a3b8]">disconnected steps per case</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#f87171] w-12 flex-shrink-0">4+</span>
                <span className="text-sm text-[#94a3b8]">separate tools required</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#f87171] w-12 flex-shrink-0">47m</span>
                <span className="text-sm text-[#94a3b8]">average preparation time</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#f87171] w-12 flex-shrink-0">3</span>
                <span className="text-sm text-[#94a3b8]">file format conversions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl w-12 flex-shrink-0">📧</span>
                <span className="text-sm text-[#94a3b8]">Email-based file sharing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#f87171] w-12 flex-shrink-0">0</span>
                <span className="text-sm text-[#94a3b8]">version control</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6">✅ After &mdash; XR Editor</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#34d399] w-12 flex-shrink-0">4</span>
                <span className="text-sm text-[#94a3b8]">streamlined steps per case</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#34d399] w-12 flex-shrink-0">1</span>
                <span className="text-sm text-[#94a3b8]">unified browser platform</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#34d399] w-12 flex-shrink-0">12m</span>
                <span className="text-sm text-[#94a3b8]">average preparation time</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#34d399] w-12 flex-shrink-0">0</span>
                <span className="text-sm text-[#94a3b8]">format conversions needed</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl w-12 flex-shrink-0">🔗</span>
                <span className="text-sm text-[#94a3b8]">Real-time collaboration</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-[#34d399] w-12 flex-shrink-0">∞</span>
                <span className="text-sm text-[#94a3b8]">Automatic versioning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results and Impact */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Outcome</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Results and Impact
        </h2>
        <div className="text-[15px] text-[#94a3b8] mb-6">Preliminary results from pilot usability testing &mdash; not production metrics.</div>

        <div className="bg-[rgba(251,191,36,.06)] border border-[rgba(251,191,36,.15)] rounded-[10px] py-4 px-5 mb-6 text-[13px] text-[#fbbf24]">
          ⚠️ Based on structured pilot testing with 6 specialists across 2 hospitals. These are directional signals from a qualitative study, not statistically validated production metrics.
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-[rgba(129,140,248,.04)] border border-[rgba(129,140,248,.15)] rounded-xl p-6 text-center">
            <div className="text-[32px] font-bold text-[#818cf8] mb-2">~74%</div>
            <div className="text-sm font-semibold text-white mb-2">Reduction in Prep Time</div>
            <div className="text-xs text-[#64748b]">47→12 min · Baseline observed during research phase</div>
          </div>
          <div className="bg-[rgba(129,140,248,.04)] border border-[rgba(129,140,248,.15)] rounded-xl p-6 text-center">
            <div className="text-[32px] font-bold text-[#818cf8] mb-2">0</div>
            <div className="text-sm font-semibold text-white mb-2">Export Steps Required</div>
            <div className="text-xs text-[#64748b]">Workflow redesigned to eliminate file conversions</div>
          </div>
          <div className="bg-[rgba(129,140,248,.04)] border border-[rgba(129,140,248,.15)] rounded-xl p-6 text-center">
            <div className="text-[32px] font-bold text-[#818cf8] mb-2">1</div>
            <div className="text-sm font-semibold text-white mb-2">Unified Platform</div>
            <div className="text-xs text-[#64748b]">Replacing 4+ separate tools in clinical workflow</div>
          </div>
          <div className="bg-[rgba(129,140,248,.04)] border border-[rgba(129,140,248,.15)] rounded-xl p-6 text-center">
            <div className="text-[32px] font-bold text-[#818cf8] mb-2">100%</div>
            <div className="text-sm font-semibold text-white mb-2">Browser-Based</div>
            <div className="text-xs text-[#64748b]">No desktop installation or IT overhead</div>
          </div>
        </div>

        <div className="mt-6 py-4 px-5 bg-[rgba(255,255,255,.03)] border border-[rgba(255,255,255,.06)] rounded-[10px] text-[13px] text-[#94a3b8]">
          <strong className="text-[#cbd5e1]">Methodology:</strong> 6 specialists across 2 hospitals. Shadowed existing workflows, then timed the same scenarios in prototype. All numbers are observed averages, not self-reported.
        </div>

        <div className="mt-6 py-4 px-5 bg-[rgba(129,140,248,.04)] border border-[rgba(129,140,248,.1)] rounded-[10px] text-[13px] text-[#94a3b8]">
          <strong className="text-[#818cf8]">Business context:</strong> Browser-based SaaS for B2B hospital licensing. Replaces ~$20K/yr Mimics licenses. 35-min savings per case across departments handling 50&ndash;200 cases/month.
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-24 px-20 max-w-[1200px] mx-auto">
        <div className="mb-3">
          <span className="text-[13px] font-semibold tracking-[3px] uppercase text-[#818cf8]">Reflection</span>
        </div>
        <h2 className="text-[42px] font-bold mb-4 bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
          Key Learnings
        </h2>

        {/* Surgeon quote */}
        <div className="bg-[rgba(129,140,248,.06)] border border-[rgba(129,140,248,.2)] rounded-2xl py-12 px-12 mb-12 text-center">
          <div className="text-2xl font-semibold text-white leading-relaxed italic max-w-[700px] mx-auto">
            &ldquo;For the first time, I didn&rsquo;t lose the patient in the transition between tools. I stayed with them the whole way through.&rdquo;
          </div>
          <div className="mt-4 text-sm text-[#818cf8] font-medium">&mdash; Senior Surgeon, Final Usability Session</div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-6">
            <h3 className="text-[18px] font-bold text-white mb-3">Progressive Disclosure Fails for Experts</h3>
            <p className="text-[14px] text-[#94a3b8] leading-relaxed">
              Hiding controls behind interactions increased task time by 40%. Surgeons with 20+ years experience don&rsquo;t need onboarding &mdash; they need persistent, predictable access to everything.
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-6">
            <h3 className="text-[18px] font-bold text-white mb-3">Hierarchy &gt; Viewport for Dense 3D</h3>
            <p className="text-[14px] text-[#94a3b8] leading-relaxed">
              Switching from click-in-3D to tree navigation cut target-finding from 34s to 8s. The scene hierarchy was the single most impactful decision in the project &mdash; it matched how surgeons actually think about anatomy.
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-6">
            <h3 className="text-[18px] font-bold text-white mb-3">Trust Trumps Convenience</h3>
            <p className="text-[14px] text-[#94a3b8] leading-relaxed">
              Auto-save &mdash; a UX best practice everywhere else &mdash; destroyed trust with clinical data. Explicit versioning scored 9/10 trust vs 2/10 for auto-save. Domain context overrides pattern libraries.
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,.02)] border border-[rgba(255,255,255,.06)] rounded-xl p-6">
            <h3 className="text-[18px] font-bold text-white mb-3">Flow over Fragmentation</h3>
            <p className="text-[14px] text-[#94a3b8] leading-relaxed">
              The 74% prep time reduction didn&rsquo;t come from any single feature &mdash; it came from eliminating 4 exports, 3 format conversions, and 5 application switches. Continuity was the product.
            </p>
          </div>
        </div>

        {/* Personal reflection */}
        <div className="mt-12 max-w-[700px]">
          <div className="text-xs font-semibold tracking-[2px] uppercase text-[#818cf8] mb-4">Personal Note</div>
          <p className="text-[15px] text-[#94a3b8] leading-relaxed mb-4">
            This project fundamentally changed how I think about UX for expert tools. I came in with a consumer-product mindset &mdash; clean, minimal, progressive disclosure. The domain taught me that elegance in expert interfaces isn&rsquo;t about hiding things. It&rsquo;s about making everything visible, predictable, and trustworthy.
          </p>
          <p className="text-[15px] text-[#94a3b8] leading-relaxed mb-4">
            The moment that stuck with me most wasn&rsquo;t a metric or a test result. It was watching a surgeon navigate the final prototype for the first time and hearing her say, almost to herself: <em>&ldquo;Oh. It just... stays.&rdquo;</em> She meant the orientation. The context. The spatial understanding that every other tool had destroyed at every transition.
          </p>
          <p className="text-[15px] leading-relaxed text-white font-medium">
            That&rsquo;s what months of work sounds like when it works.
          </p>
        </div>
      </section>
    </div>
  );
}
