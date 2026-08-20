import { Search, Lightbulb, Layers, CheckCircle, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function DesignMethodology() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  const phases = [
    {
      id: 0,
      title: "Discover",
      icon: <Search className="w-6 h-6 text-cyan-400" />,
      shortDescription: "Deep problem research, user interviews, context analysis",
      fullContent: (
        <div className="space-y-4">
          <h4 className="text-white text-xl mb-4">Discover Phase</h4>
          <p className="text-slate-300 leading-relaxed">
            During the Discover phase, a deep diagnosis of current virtual machine and hardware configuration management processes was conducted.
          </p>
          <p className="text-slate-300 leading-relaxed">
            As a result of analyzing user scenarios, interviewing engineers, and reviewing existing tools, it became clear that a significant amount of time is spent on routine tasks: manually filling and verifying VM parameters such as cpu_limit, Shared_cpu_group_affinity, Media_mode, Overhead_phys_core, GPU_Model, and dozens of others.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Difficulties with navigation and lack of unified centralized access to Hardware Definitions and their configurations were also identified. Data duplication, absence of filtering by critically important fields (e.g., CPU Generation, Manufacturer), unstructured VM hierarchy (Type → Family → Serie → Name), and lack of batch publication create fragmented user experience and lead to errors.
          </p>
          <p className="text-slate-300 leading-relaxed">
            These observations formed the basis of the problem field, which was subsequently formalized during the Define stage.
          </p>
        </div>
      )
    },
    {
      id: 1,
      title: "Define",
      icon: <Lightbulb className="w-6 h-6 text-cyan-400" />,
      shortDescription: "Formulating key problems and insights based on research",
      fullContent: (
        <div className="space-y-4">
          <h4 className="text-white text-xl mb-4">Define Phase</h4>
          <p className="text-slate-300 leading-relaxed">
            At this stage, key problems identified during Discovery were formulated: overload with manual tasks, lack of structured approach to VM and HW management and configuration, weak scalability, high probability of errors.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The MS Spot project was defined as a solution that should provide centralized, flexible, and reliable management of the entire virtual machine hierarchy - from VM Type to VM Name, including override attributes, resources (CPU, Memory, GPU, FPGA, SGX), and hardware dependencies.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Using MoSCoW prioritization, key features necessary for MVP were identified: unified VM&HW editor, customizable VM List, HW configuration cards, publication and filtering system, advanced settings.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Develop",
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      shortDescription: "Solution ideation, creating prototypes of varying fidelity",
      fullContent: (
        <div className="space-y-4">
          <h4 className="text-white text-xl mb-4">Develop Phase</h4>
          <p className="text-slate-300 leading-relaxed">
            During the Develop phase, active implementation of ideas selected in Define began. Key interfaces were designed: Welcome page with quick access to VM and HW, VM&HW editor with deep attribute editing capabilities (e.g., Overhead_per_core_ratio, Throttle, PaaSResourceDisk, abc_disk_config, etc.), HW List with configuration cards and override support.
          </p>
          <p className="text-slate-300 leading-relaxed">
            VM hierarchy support was implemented, dependencies displayed, row highlighting mechanism during search, breadcrumbs for Add/Edit VM, save and publish functionality.
          </p>
          <p className="text-slate-300 leading-relaxed">
            As part of UI/UX iterations, visual hierarchy was improved, sorting and filtering were reworked, system limits and status flags were added.
          </p>
          <p className="text-slate-300 leading-relaxed">
            In parallel, work was carried out on technical aspects of the publication model and attribute synchronization between layers.
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "Deliver",
      icon: <CheckCircle className="w-6 h-6 text-cyan-400" />,
      shortDescription: "User testing, validation, and solution launch",
      fullContent: (
        <div className="space-y-4">
          <h4 className="text-white text-xl mb-4">Deliver Phase</h4>
          <p className="text-slate-300 leading-relaxed">
            At the final stage, testing was conducted, demo sessions with users, and refinement of critical scenarios.
          </p>
          <p className="text-slate-300 leading-relaxed">
            We achieved significant reduction in time for manual operations, increased configuration stability, and simplified scaling.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Final touches were added: column settings in VM List, publication progress display (e.g., 100 out of 150 VMs), HW popup cards, modal windows with regional information (South Africa\AZ01, Compute Gen 6.0), and removal of obsolete fields.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The final release included only priority fields and features marked as <span className="italic">Must have</span>. Thus, MS Spot transitioned from concept stage to a real working tool that addresses key user pain points and forms the foundation for subsequent scaling.
          </p>
        </div>
      )
    }
  ];

  const moscowData = {
    title: "MoSCoW Method",
    description: "The MoSCoW method gets its name from the acronym formed by the following priority classifications: Must have, Should have, Could have, and Would like.",
    categories: [
      {
        name: "Must Have",
        color: "from-red-600 to-red-500",
        bgColor: "bg-red-600/20",
        borderColor: "border-red-500/50",
        description: "These are stories that must be delivered to solve current business problems."
      },
      {
        name: "Should Have",
        color: "from-orange-600 to-orange-500",
        bgColor: "bg-orange-600/20",
        borderColor: "border-orange-500/50",
        description: "These are stories that are critical to the success of the release."
      },
      {
        name: "Could Have",
        color: "from-yellow-600 to-yellow-500",
        bgColor: "bg-yellow-600/20",
        borderColor: "border-yellow-500/50",
        description: "These are less critical stories."
      },
      {
        name: "Would Like",
        color: "from-green-600 to-green-500",
        bgColor: "bg-green-600/20",
        borderColor: "border-green-500/50",
        description: "These stories will most likely not be included in the product, but may eventually be implemented."
      }
    ]
  };

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(59, 130, 246, 0.4) 2px, transparent 2px),
            radial-gradient(circle, rgba(99, 102, 241, 0.3) 1.5px, transparent 1.5px),
            radial-gradient(circle, rgba(59, 130, 246, 0.25) 1.8px, transparent 1.8px),
            radial-gradient(circle, rgba(147, 51, 234, 0.35) 2.2px, transparent 2.2px)
          `,
          backgroundSize: `
            220px 220px, 
            180px 180px, 
            140px 140px, 
            200px 200px
          `,
          backgroundPosition: `
            25px 25px, 
            65px 85px, 
            105px 45px, 
            45px 125px
          `
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-white mb-6 text-4xl">Hypotheses & Design</h2>
        
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-10 shadow-2xl">
          {/* Introduction */}
          <div className="mb-12">
            <h3 className="text-white text-2xl mb-4">Double Diamond</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              We used the Double Diamond approach as a methodology when developing the platform.
              <br />
              Research (Discover) → Problem Formulation (Define) → Ideation and 
              Prototyping (Develop) → Validation and Launch (Deliver)
            </p>
          </div>

          {/* Double Diamond Diagram */}
          <div className="relative bg-slate-950/50 rounded-xl p-12 border border-slate-700/50">
            {/* Title */}
            <div className="text-center mb-12">
              <h4 className="text-cyan-400 text-xl tracking-wider mb-2">DOUBLE DIAMOND</h4>
            </div>

            {/* Main Diamond Structure */}
            <div className="relative flex items-center justify-center">
              {/* Left Diamond - Discover & Define */}
              <div className="relative">
                {/* First Diamond Container */}
                <div className="flex items-center justify-center" style={{ width: '320px', height: '200px' }}>
                  {/* Left half - RESEARCH */}
                  <div className="absolute left-0" style={{ width: '160px', height: '200px' }}>
                    <svg width="160" height="200" viewBox="0 0 160 200" className="absolute">
                      <polygon 
                        points="0,100 160,0 160,200" 
                        className="fill-cyan-700/40 stroke-cyan-500/50"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center -ml-8">
                        <div className="text-cyan-300 text-sm mb-2">RESEARCH</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right half - DEFINE */}
                  <div className="absolute right-0" style={{ width: '160px', height: '200px' }}>
                    <svg width="160" height="200" viewBox="0 0 160 200" className="absolute">
                      <polygon 
                        points="0,0 0,200 160,100" 
                        className="fill-cyan-600/40 stroke-cyan-500/50"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center -mr-8">
                        <div className="text-cyan-300 text-sm mb-2">DEFINE</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Labels */}
                <div className="absolute -top-8 left-0 text-slate-400 text-sm">AWARENESS</div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-300 text-xs">MEASURABLE<br/>RESULT</div>
              </div>

              {/* Iteration Arrow */}
              <div className="mx-8 flex flex-col items-center">
                <svg width="60" height="80" viewBox="0 0 60 80" className="mb-2">
                  {/* Top curved arrow */}
                  <path 
                    d="M 10 20 Q 30 10, 50 20" 
                    className="stroke-slate-500 fill-none"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <polygon points="50,20 45,15 45,25" className="fill-slate-500" />
                  
                  {/* Bottom curved arrow */}
                  <path 
                    d="M 50 60 Q 30 70, 10 60" 
                    className="stroke-slate-500 fill-none"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <polygon points="10,60 15,55 15,65" className="fill-slate-500" />
                </svg>
                <div className="text-slate-400 text-xs text-center">ITERATE</div>
              </div>

              {/* Right Diamond - Develop & Deliver */}
              <div className="relative">
                {/* Second Diamond Container */}
                <div className="flex items-center justify-center" style={{ width: '320px', height: '200px' }}>
                  {/* Left half - IDEATE */}
                  <div className="absolute left-0" style={{ width: '160px', height: '200px' }}>
                    <svg width="160" height="200" viewBox="0 0 160 200" className="absolute">
                      <polygon 
                        points="0,100 160,0 160,200" 
                        className="fill-cyan-700/40 stroke-cyan-500/50"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center -ml-8">
                        <div className="text-cyan-300 text-sm mb-2">IDEATE</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right half - VALIDATION */}
                  <div className="absolute right-0" style={{ width: '160px', height: '200px' }}>
                    <svg width="160" height="200" viewBox="0 0 160 200" className="absolute">
                      <polygon 
                        points="0,0 0,200 160,100" 
                        className="fill-cyan-600/40 stroke-cyan-500/50"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center -mr-8">
                        <div className="text-cyan-300 text-sm mb-2">VALIDATION</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Labels */}
                <div className="absolute -top-8 right-0 text-slate-400 text-sm">IMPACT</div>
              </div>
            </div>

            {/* Bottom Labels */}
            <div className="flex justify-between mt-16 px-8">
              <div className="text-center flex-1">
                <div className="text-slate-300 text-sm mb-1">EMPATHY</div>
              </div>
              <div className="text-center flex-1">
                <div className="text-slate-300 text-sm mb-1">PROTOTYPE</div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {phases.map((phase) => (
              <div
                key={phase.id}
                onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
                className={`
                  bg-slate-800/50 border rounded-xl p-6 transition-all duration-300 cursor-pointer
                  ${selectedPhase === phase.id 
                    ? 'border-cyan-400 shadow-lg shadow-cyan-900/50 scale-105' 
                    : 'border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/30'
                  }
                `}
              >
                <div className={`
                  w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300
                  ${selectedPhase === phase.id ? 'bg-cyan-600/40' : 'bg-cyan-600/20'}
                `}>
                  {phase.icon}
                </div>
                <h4 className="text-white mb-2">{phase.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  {phase.shortDescription}
                </p>
                <div className="flex items-center gap-2 text-xs text-cyan-400">
                  <span>{selectedPhase === phase.id ? 'Hide details' : 'Learn more'}</span>
                  <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${selectedPhase === phase.id ? 'rotate-90' : ''}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Phase Content */}
          {selectedPhase !== null && (
            <div className="mt-8 bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 border-2 border-cyan-700/50 rounded-xl p-8 animate-in fade-in slide-in-from-top-4 duration-500">
              {phases[selectedPhase].fullContent}
            </div>
          )}

          {/* MoSCoW Method Section */}
          <div className="mt-16 pt-16 border-t border-slate-700">
            <div className="mb-8">
              <h3 className="text-white text-2xl mb-4">{moscowData.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                In addition to the Double Diamond methodology, we also used the MoSCoW method for prioritizing functions and features.
              </p>
              <p className="text-slate-300 leading-relaxed">
                {moscowData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {moscowData.categories.map((category, index) => (
                <div
                  key={index}
                  style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                  className={`
                    group bg-slate-800/50 border-2 rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer
                    ${category.borderColor} hover:shadow-2xl
                  `}
                >
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center mb-4
                    bg-gradient-to-br ${category.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6
                  `}>
                    <span className="text-white text-2xl">{index + 1}</span>
                  </div>
                  
                  <div className={`
                    mb-4 px-4 py-2 rounded-lg inline-block
                    bg-gradient-to-br ${category.color}
                  `}>
                    <span className="text-white">{category.name}</span>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
