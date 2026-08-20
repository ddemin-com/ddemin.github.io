import { CheckCircle2, AlertTriangle, Users, TrendingUp, Zap, Target, Layers, Box, Grid, ArrowRight, Clock, Award, Package, Shield } from 'lucide-react';

export function XREditorContent() {
  return (
    <div className="space-y-16">
      {/* Role & Impact Section */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Role</span>
          </div>
          <h2 className="text-white mb-12 text-4xl font-bold">Role &amp; Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* My Contribution */}
            <div>
              <div className="bg-purple-900/10 border border-purple-700/30 rounded-2xl p-8 min-h-[340px]">
                <h3 className="text-purple-400 text-xs font-bold tracking-wider uppercase mb-4">My Contribution</h3>
                <div className="space-y-2">
                  {[
                    'Product discovery & domain research',
                    'Information architecture',
                    'User flows & interaction modeling',
                    'UX architecture for 3D editing environment',
                    'Prototyping (low-fi through high-fidelity)',
                    'Usability testing design & facilitation',
                    'Developer handoff & interaction specs'
                  ].map((item, index) => (
                    <div key={index} className="flex items-baseline gap-2 text-slate-300">
                      <span className="text-purple-400">&rarr;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-pink-900/10 border border-pink-700/30 rounded-xl p-4 text-center">
                  <div className="text-pink-400 text-2xl font-bold">47&rarr;12m</div>
                  <div className="text-slate-400 text-xs mt-1">planning time</div>
                </div>
                <div className="bg-cyan-900/10 border border-cyan-700/30 rounded-xl p-4 text-center">
                  <div className="text-cyan-400 text-2xl font-bold">4&rarr;1</div>
                  <div className="text-slate-400 text-xs mt-1">tools unified</div>
                </div>
                <div className="bg-green-900/10 border border-green-700/30 rounded-xl p-4 text-center">
                  <div className="text-green-400 text-2xl font-bold">34&rarr;8s</div>
                  <div className="text-slate-400 text-xs mt-1">discovery time</div>
                </div>
              </div>
            </div>

            {/* Not Responsible For */}
            <div>
              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 min-h-[340px]">
                <h3 className="text-slate-500 text-xs font-bold tracking-wider uppercase mb-4">Not Responsible For</h3>
                <div className="space-y-2">
                  {[
                    'Visual branding & identity',
                    'Final visual polish & UI skin',
                    'Marketing materials'
                  ].map((item, index) => (
                    <div key={index} className="flex items-baseline gap-2 text-slate-500">
                      <span>&mdash;</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-amber-900/10 border border-amber-700/30 rounded-xl p-4 text-center">
                  <div className="text-amber-400 text-2xl font-bold">20+</div>
                  <div className="text-slate-400 text-xs mt-1">workflows</div>
                </div>
                <div className="bg-purple-900/10 border border-purple-700/30 rounded-xl p-4 text-center">
                  <div className="text-purple-400 text-2xl font-bold">50+</div>
                  <div className="text-slate-400 text-xs mt-1">screens</div>
                </div>
                <div className="bg-red-900/10 border border-red-700/30 rounded-xl p-4 text-center">
                  <div className="text-red-400 text-2xl font-bold">0</div>
                  <div className="text-slate-400 text-xs mt-1">exports</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Project */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Overview</span>
          </div>
          <h2 className="text-white mb-6 text-4xl font-bold">About the Project</h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-4 max-w-4xl">
            XR Editor is a browser-based platform for medical 3D visualization and anatomical editing designed for pre-operative planning and clinical collaboration.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-4xl">
            The platform unified fragmented medical workflows into a single continuous environment combining: DICOM data ingestion, anatomical reconstruction, 3D editing workflows, patient asset management, and XR-based spatial review.
          </p>

          <div className="bg-purple-900/10 border-l-4 border-purple-500 rounded-lg p-4 mb-6 max-w-4xl">
            <p className="text-slate-400 text-sm">
              ⚠️ Due to NDA restrictions, some visuals, flows, and data have been modified or simplified.
            </p>
          </div>

          <p className="text-slate-200 text-lg italic border-l-4 border-purple-500/30 pl-5 my-8 max-w-4xl">
            The vision was clear &mdash; but once we began, the path to get there turned out far more complex than expected.
          </p>
        </div>
      </section>

      {/* The Real Problem */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white mb-6 text-4xl font-bold">The Real Problem</h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-4 max-w-4xl">
            Clinical teams preparing for surgery typically worked across multiple disconnected systems &mdash; PACS viewers for CT/MRI scans, desktop 3D software for segmentation, external converters for STL/OBJ export, and separate XR applications for spatial review.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-4xl">
            The issue was not simply &ldquo;too many tools.&rdquo; <strong className="text-white">The real problem was cognitive fragmentation.</strong> Every export, application switch, or format conversion forced users to rebuild context while working with highly complex anatomical structures under time pressure.
          </p>

          <div className="bg-red-900/10 border border-red-700/30 rounded-2xl p-8 mb-8">
            <h3 className="text-white text-2xl mb-6">Old Workflow Pain Points</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-300"><strong className="text-white">PACS:</strong> View CT/MRI &rarr; Export DICOM slices</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-300"><strong className="text-white">Desktop 3D tool:</strong> Import DICOM &rarr; Segment anatomy &rarr; Export mesh</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-300"><strong className="text-white">Converter:</strong> Convert formats (STL/OBJ/FBX)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-300"><strong className="text-white">XR app:</strong> Import 3D model &rarr; Spatial review</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="text-red-400 font-semibold">⚠️ 4 exports · 5 tools · 3 format conversions · 0 version control</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🧭</div>
              <h4 className="text-white text-xl mb-2">Lost Orientation</h4>
              <p className="text-slate-400">
                Anatomical orientation was frequently lost between tools. Surgeons rebuilt spatial context at every step.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🔗</div>
              <h4 className="text-white text-xl mb-2">Fragmented Workflows</h4>
              <p className="text-slate-400">
                Users switched between 4&ndash;6 tools per case, often rebuilding the same context repeatedly.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-3">⏱️</div>
              <h4 className="text-white text-xl mb-2">Time-consuming Setup</h4>
              <p className="text-slate-400">
                Average pre-op case setup: <strong className="text-white">47 minutes</strong>, most spent on file juggling rather than medical planning.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="text-white text-xl mb-2">No Collaboration</h4>
              <p className="text-slate-400">
                Tools didn&rsquo;t support team workflows &mdash; no shared cases, no annotations, no review history.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-purple-900/10 border border-purple-700/30 rounded-xl p-6 max-w-4xl">
            <p className="text-slate-200 text-lg italic">
              &ldquo;I lose orientation every time I switch tools&rdquo;
            </p>
            <p className="text-slate-400 text-sm mt-2">&mdash; Lead surgeon during discovery interview</p>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Discovery</span>
          </div>
          <h2 className="text-white mb-6 text-4xl font-bold">Research &amp; Discovery</h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-4 max-w-4xl">
            We interviewed surgeons, medical assistants, and technical specialists involved in surgical preparation workflows.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-4xl">
            Early research revealed something important. Through interview synthesis, I identified that <strong className="text-white">the biggest frustration was not interface complexity itself &mdash; it was the constant loss of orientation between systems.</strong> Surgeons described the workflow as mentally exhausting because every tool introduced a different navigation model, hierarchy structure, and spatial context.
          </p>

          <div className="bg-purple-900/20 border border-purple-700/50 rounded-2xl p-10 text-center mb-12">
            <p className="text-white text-2xl font-bold mb-3">This was not a visualization problem.<br />It was an orientation problem.</p>
            <p className="text-purple-400 text-sm">Key Insight That Changed the Product Direction</p>
          </div>

          <h3 className="text-white text-2xl mb-6">Key Research Insights</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-3">🔗</div>
              <h4 className="text-white text-lg mb-2">Fragmented Workflows</h4>
              <p className="text-slate-400 text-sm">
                Users switched between 4&ndash;6 tools per case, often rebuilding the same context repeatedly.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-3">⚠️</div>
              <h4 className="text-white text-lg mb-2">Export = Operational Risk</h4>
              <p className="text-slate-400 text-sm">
                Each export/import step introduced version drift, incompatible formats, duplicated files, and uncertainty around &ldquo;latest&rdquo; revisions.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-white text-lg mb-2">Experts Prefer Density</h4>
              <p className="text-slate-400 text-sm">
                Attempts to hide controls or reduce visible tooling increased friction during testing. Experienced users wanted persistent controls and minimal mode switching.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-pink-900/10 border border-pink-700/20 rounded-xl p-4">
              <div className="text-pink-400 text-xs font-semibold tracking-wider uppercase mb-2">🔀 Fragmentation</div>
              <p className="text-slate-300 text-sm italic">&ldquo;I use 5 different apps before I even get to surgery planning&rdquo;</p>
            </div>
            <div className="bg-cyan-900/10 border border-cyan-700/20 rounded-xl p-4">
              <div className="text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-2">🧭 Orientation</div>
              <p className="text-slate-300 text-sm italic">&ldquo;I lose orientation every time I switch tools&rdquo;</p>
            </div>
            <div className="bg-green-900/10 border border-green-700/20 rounded-xl p-4">
              <div className="text-green-400 text-xs font-semibold tracking-wider uppercase mb-2">⚡ Expert Needs</div>
              <p className="text-slate-300 text-sm italic">&ldquo;Don&rsquo;t hide controls from me &mdash; I know what I&rsquo;m doing&rdquo;</p>
            </div>
            <div className="bg-amber-900/10 border border-amber-700/20 rounded-xl p-4">
              <div className="text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">📋 Trust</div>
              <p className="text-slate-300 text-sm italic">&ldquo;Auto-save scares me with clinical data&rdquo;</p>
            </div>
          </div>

          <p className="text-center text-slate-500 text-xs italic mt-6">
            Based on 8 in-depth interviews · 3 surgeons · 3 medical assistants · 2 radiologists
          </p>
        </div>
      </section>

      {/* Users and Context */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">People</span>
          </div>
          <h2 className="text-white mb-6 text-4xl font-bold">Users and Context</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-4xl">
            Understanding the primary and secondary users helped shape every interaction decision in the platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lead Surgeon */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-white text-2xl">Lead Surgeon</h3>
                <span className="px-3 py-1 bg-purple-600/20 border border-purple-500 rounded-full text-purple-400 text-sm font-medium">Primary</span>
              </div>
              <div className="flex gap-4 mb-3 text-xs text-slate-500">
                <span>📅 Daily use</span>
                <span>🧠 Domain expert, low digital fluency</span>
              </div>
              <p className="text-slate-400 mb-3 text-sm">
                <strong className="text-white">Goal:</strong> Single workspace for anatomy review, surgical planning, and team collaboration
              </p>
              <p className="text-slate-400 mb-4 text-sm">
                <strong className="text-red-400">Pain:</strong> Rebuilding spatial context across 4+ disconnected tools per case
              </p>
              <p className="text-slate-200 italic border-l-4 border-purple-500 pl-4">
                &ldquo;I need to see the kidney from every angle before I cut.&rdquo;
              </p>
            </div>

            {/* Medical Assistant */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-white text-2xl">Medical Assistant</h3>
                <span className="px-3 py-1 bg-slate-600/20 border border-slate-500 rounded-full text-slate-400 text-sm font-medium">Secondary</span>
              </div>
              <div className="flex gap-4 mb-3 text-xs text-slate-500">
                <span>📅 Multiple times/day</span>
                <span>🧠 Moderate digital fluency</span>
              </div>
              <p className="text-slate-400 mb-3 text-sm">
                <strong className="text-white">Goal:</strong> Streamlined asset organization with version tracking and batch workflows
              </p>
              <p className="text-slate-400 mb-4 text-sm">
                <strong className="text-red-400">Pain:</strong> Manual file management across systems with no preview or version control
              </p>
              <p className="text-slate-200 italic border-l-4 border-purple-500 pl-4">
                &ldquo;By the time I export and email the files, the surgeon has already started prep.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey Map */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Mapping</span>
          </div>
          <h2 className="text-white mb-6 text-4xl font-bold">Customer Journey Map</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-4xl">
            We mapped the existing workflow to identify pain points and opportunities for improvement across every stage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-red-400 text-xs font-semibold tracking-wider uppercase mb-4">⚠️ Key Pain Points</h4>
              <div className="space-y-3">
                <div className="bg-red-900/10 border border-red-700/20 rounded-xl p-4">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-red-400">Export gauntlet</strong> &mdash; 3 format conversions, each introducing version drift and data loss risk
                  </p>
                </div>
                <div className="bg-red-900/10 border border-red-700/20 rounded-xl p-4">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-red-400">Zero version control</strong> &mdash; &ldquo;Which version did we review last week?&rdquo; was a daily question
                  </p>
                </div>
                <div className="bg-red-900/10 border border-red-700/20 rounded-xl p-4">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-red-400">File-based sharing</strong> &mdash; email and USB drives as collaboration tools
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-green-400 text-xs font-semibold tracking-wider uppercase mb-4">✅ Design Opportunities</h4>
              <div className="space-y-3">
                <div className="bg-green-900/10 border border-green-700/20 rounded-xl p-4">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-green-400">Direct browser editing</strong> &mdash; eliminate export steps entirely
                  </p>
                </div>
                <div className="bg-green-900/10 border border-green-700/20 rounded-xl p-4">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-green-400">Continuous spatial context</strong> &mdash; preserve orientation across all modules
                  </p>
                </div>
                <div className="bg-green-900/10 border border-green-700/20 rounded-xl p-4">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-green-400">Automatic versioning</strong> &mdash; explicit save with version history
                  </p>
                </div>
                <div className="bg-green-900/10 border border-green-700/20 rounded-xl p-4">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-green-400">Real-time workspace</strong> &mdash; shared links instead of file attachments
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-900/10 border border-red-700/30 rounded-xl p-6 flex items-center gap-6">
            <div className="text-red-400 text-5xl font-bold flex-shrink-0">80%</div>
            <div>
              <h4 className="text-white text-lg mb-2">of errors occurred between stages 3&ndash;5</h4>
              <p className="text-slate-400 text-sm">
                Export, edit, and re-export &mdash; the &ldquo;conversion gauntlet&rdquo; &mdash; was where version drift, data loss, and orientation breakdown concentrated. This became the primary design target.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Research */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Analysis</span>
          </div>
          <h2 className="text-white mb-6 text-4xl font-bold">Market Research</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-4xl">
            We analyzed existing medical and spatial systems to identify gaps and opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🔌</div>
              <h4 className="text-white text-lg mb-3">Fragmented Tooling</h4>
              <p className="text-slate-400 text-sm">
                3D Slicer, OsiriX, Blender, Mimics &mdash; no single platform combined editing, viewing, and collaboration
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🖥️</div>
              <h4 className="text-white text-lg mb-3">Desktop Lock-in</h4>
              <p className="text-slate-400 text-sm">
                Every competitor required per-workstation installation &mdash; a dealbreaker for hospital IT procurement
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👤</div>
              <h4 className="text-white text-lg mb-3">Zero Collaboration</h4>
              <p className="text-slate-400 text-sm">
                No centralized asset management, no shared environments, no real-time review capabilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Strategy */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white mb-6 text-4xl font-bold">Design Strategy</h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-4xl">
            Based on the research findings, I proposed reframing the product from a collection of tools into a <strong className="text-white">continuous patient-centered workspace</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-700/50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-white text-2xl mb-4">Strategic Decision #1</h3>
              <h4 className="text-purple-400 text-xl mb-3">Patient-First Architecture</h4>
              <p className="text-slate-300 mb-4">
                Instead of a project- or file-based model, the entire interface revolves around patient cases. Every scan, model, annotation, and session lives under one patient record.
              </p>
              <div className="mt-6">
                <p className="text-cyan-400 text-sm font-semibold mb-2">Impact</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Reduced context switching between tools</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Minimized duplicate file handling</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Created a single source of truth per patient case</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Improved collaboration consistency across teams</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-700/50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🧰</div>
              <h3 className="text-white text-2xl mb-4">Strategic Decision #2</h3>
              <h4 className="text-purple-400 text-xl mb-3">Persistent Toolset</h4>
              <p className="text-slate-300 mb-4">
                All editing tools (segmentation, cleanup, measurement, annotation) are always visible in a left panel. No hidden features, no deep menus, no modality switches.
              </p>
              <div className="mt-6">
                <p className="text-cyan-400 text-sm font-semibold mb-2">Impact</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Faster task completion (tools always at hand)</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Reduced cognitive load (no tool hunting)</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Encouraged exploration and feature discovery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 border border-purple-700/50 rounded-2xl p-10 text-center">
            <p className="text-white text-3xl font-bold mb-3">Key Insight</p>
            <p className="text-slate-200 text-xl italic max-w-3xl mx-auto">
              &ldquo;Elegance in expert interfaces isn&rsquo;t about hiding things. It&rsquo;s about making everything visible, predictable, and trustworthy.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Design Iterations */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Evolution</span>
          </div>
          <h2 className="text-white mb-6 text-4xl font-bold">Design Iterations</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-4xl">
            Key decisions evolved through testing. Here&rsquo;s what changed and why.
          </p>

          <div className="space-y-6">
            {/* Iteration 1: Scene Hierarchy */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h4 className="text-white text-lg mb-6">Scene Hierarchy</h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="text-center">
                  <div className="text-red-400 text-xs font-semibold tracking-wider uppercase mb-2">V1</div>
                  <p className="text-slate-400 text-sm mb-3">Flat alphabetical list of all anatomical parts</p>
                  <p className="text-red-400 text-xs">Find time: <strong>34s</strong></p>
                </div>
                <div className="text-center text-purple-400 text-lg">&rarr;</div>
                <div className="bg-amber-900/10 border border-amber-700/30 rounded-xl p-4 text-center">
                  <div className="text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">Test</div>
                  <p className="text-amber-400 text-xs italic">&ldquo;I scrolled for 30 seconds and still couldn&rsquo;t find the tumor&rdquo;</p>
                </div>
                <div className="text-center text-purple-400 text-lg">&rarr;</div>
                <div className="text-center">
                  <div className="text-green-400 text-xs font-semibold tracking-wider uppercase mb-2">Final</div>
                  <p className="text-slate-400 text-sm mb-3">Collapsible anatomical tree with grouping and multi-select</p>
                  <p className="text-green-400 text-xs">Find time: <strong>8s</strong></p>
                </div>
              </div>
            </div>

            {/* Iteration 2: Save Flow */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h4 className="text-white text-lg mb-6">Save Behavior</h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="text-center">
                  <div className="text-red-400 text-xs font-semibold tracking-wider uppercase mb-2">V1</div>
                  <p className="text-slate-400 text-sm mb-3">Silent auto-save every 30 seconds</p>
                  <p className="text-red-400 text-xs">Trust: <strong>2/10</strong></p>
                </div>
                <div className="text-center text-purple-400 text-lg">&rarr;</div>
                <div className="bg-amber-900/10 border border-amber-700/30 rounded-xl p-4 text-center">
                  <div className="text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">Test</div>
                  <p className="text-amber-400 text-xs italic">&ldquo;I accidentally moved the aorta and it auto-saved. How do I undo?&rdquo;</p>
                </div>
                <div className="text-center text-purple-400 text-lg">&rarr;</div>
                <div className="text-center">
                  <div className="text-green-400 text-xs font-semibold tracking-wider uppercase mb-2">Final</div>
                  <p className="text-slate-400 text-sm mb-3">Dirty state indicator + explicit save + version commits</p>
                  <p className="text-green-400 text-xs">Trust: <strong>9/10</strong></p>
                </div>
              </div>
            </div>

            {/* Iteration 3: Spatial Controls */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <h4 className="text-white text-lg mb-6">Spatial Controls</h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="text-center">
                  <div className="text-red-400 text-xs font-semibold tracking-wider uppercase mb-2">V1</div>
                  <p className="text-slate-400 text-sm mb-3">Controls hidden behind context menus</p>
                  <p className="text-red-400 text-xs">Task time: <strong>+40%</strong></p>
                </div>
                <div className="text-center text-purple-400 text-lg">&rarr;</div>
                <div className="bg-amber-900/10 border border-amber-700/30 rounded-xl p-4 text-center">
                  <div className="text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">Test</div>
                  <p className="text-amber-400 text-xs italic">&ldquo;I need these tools visible, not buried in menus&rdquo;</p>
                </div>
                <div className="text-center text-purple-400 text-lg">&rarr;</div>
                <div className="text-center">
                  <div className="text-green-400 text-xs font-semibold tracking-wider uppercase mb-2">Final</div>
                  <p className="text-slate-400 text-sm mb-3">All spatial controls permanently visible with persistent toolbar</p>
                  <p className="text-green-400 text-xs">Task time: <strong>-35%</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade-offs */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white mb-6 text-4xl font-bold">Trade-offs</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-4xl">
            Not every decision was straightforward. Here are the key trade-offs and why we made them.
          </p>

          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h4 className="text-white text-xl mb-4">Browser vs Desktop</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-green-400 font-semibold mb-2">✓ What We Gained</h5>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    <li>• Zero installation friction</li>
                    <li>• Cross-platform support</li>
                    <li>• Instant updates</li>
                    <li>• Link-based sharing</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-400 font-semibold mb-2">✗ What We Lost</h5>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    <li>• Raw GPU performance</li>
                    <li>• Offline functionality</li>
                    <li>• File system integration</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4 italic">
                We chose web because accessibility &gt; raw performance for this use case.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h4 className="text-white text-xl mb-4">Auto-save vs Explicit Save</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-green-400 font-semibold mb-2">✓ What We Gained</h5>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    <li>• User trust and control</li>
                    <li>• Clear version points</li>
                    <li>• Reduced accidental edits</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-red-400 font-semibold mb-2">✗ What We Lost</h5>
                  <ul className="space-y-1 text-slate-400 text-sm">
                    <li>• Protection from crashes</li>
                    <li>• Seamless workflow</li>
                    <li>• &ldquo;Set and forget&rdquo; UX</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4 italic">
                Medical users valued trust over convenience. Explicit save won decisively in testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Workflow */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white mb-12 text-4xl font-bold">Workflow Transformation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-900/10 border border-red-700/30 rounded-2xl p-8">
              <h3 className="text-white text-2xl mb-6 flex items-center gap-3">
                <span>⛔</span> Before XR Editor
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="text-red-400 text-xl font-bold">4+</div>
                  <div className="text-slate-400">separate tools required</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-red-400 text-xl font-bold">47 min</div>
                  <div className="text-slate-400">average setup time</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-red-400 text-xl font-bold">3&ndash;5</div>
                  <div className="text-slate-400">format conversions</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-red-400 text-xl font-bold">Email</div>
                  <div className="text-slate-400">primary sharing method</div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-green-900/10 border border-green-700/30 rounded-2xl p-8">
              <h3 className="text-white text-2xl mb-6 flex items-center gap-3">
                <span>✅</span> After &mdash; XR Editor
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div className="text-green-400 text-xl font-bold">1</div>
                  <div className="text-slate-400">unified platform</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-green-400 text-xl font-bold">12 min</div>
                  <div className="text-slate-400">average setup time</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-green-400 text-xl font-bold">0</div>
                  <div className="text-slate-400">manual exports needed</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-green-400 text-xl font-bold">Built-in</div>
                  <div className="text-slate-400">collaboration features</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results and Impact */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white mb-12 text-4xl font-bold">Results and Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-purple-900/20 border border-purple-700/50 rounded-2xl p-8 text-center">
              <div className="text-purple-400 text-5xl font-bold mb-2">1</div>
              <div className="text-white text-xl mb-2">Unified Platform</div>
              <div className="text-slate-400">Replacing 4+ separate tools in clinical workflow</div>
            </div>

            <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-2xl p-8 text-center">
              <div className="text-cyan-400 text-5xl font-bold mb-2">75%</div>
              <div className="text-white text-xl mb-2">Faster Setup</div>
              <div className="text-slate-400">From 47 minutes to 12 minutes per case</div>
            </div>

            <div className="bg-green-900/20 border border-green-700/50 rounded-2xl p-8 text-center">
              <div className="text-green-400 text-5xl font-bold mb-2">0</div>
              <div className="text-white text-xl mb-2">Context Loss</div>
              <div className="text-slate-400">Continuous workflow without tool switching</div>
            </div>
          </div>

          <div className="bg-purple-900/20 border border-purple-700/50 rounded-2xl p-10 text-center">
            <p className="text-white text-3xl font-bold mb-6 italic max-w-4xl mx-auto">
              &ldquo;For the first time, I didn&rsquo;t lose the patient in the transition between tools. I stayed with them the whole way through.&rdquo;
            </p>
            <p className="text-slate-400">&mdash; Lead Surgeon, post-launch feedback</p>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white mb-8 text-4xl font-bold">Key Learnings</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-white text-xl mb-3">Expert Interfaces Need Visibility, Not Simplicity</h3>
              <p className="text-slate-300">
                This project fundamentally changed how I think about UX for expert tools. I came in with a consumer-product mindset &mdash; clean, minimal, progressive disclosure. The domain taught me that elegance in expert interfaces isn&rsquo;t about hiding things. It&rsquo;s about making everything visible, predictable, and trustworthy.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-white text-xl mb-3">Talk to Users in Their Context</h3>
              <p className="text-slate-300">
                The most valuable insights came from contextual inquiry sessions where I watched surgeons work through real cases. Sitting through a 2-hour case-prep session taught me more than any interview transcript.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-white text-xl mb-3">Continuous Workflow &gt; Feature Collection</h3>
              <p className="text-slate-300">
                The biggest UX win wasn&rsquo;t any single feature &mdash; it was eliminating the transitions between tools. Users don&rsquo;t want a &ldquo;better viewer&rdquo; or a &ldquo;better editor.&rdquo; They want to stay with the patient from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
