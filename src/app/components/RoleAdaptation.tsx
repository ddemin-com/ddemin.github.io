import { Layers, Users, Code, Palette, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function RoleAdaptation() {
  const [activeRole, setActiveRole] = useState<number | null>(null);

  const responsibilities = [
    {
      icon: Users,
      title: 'User Research',
      color: 'blue',
      description: 'Conducted in-depth interviews with 25+ cryptocurrency service users, identified key fears and needs: asset security, transaction simplicity, clear portfolio analytics',
      tasks: [
        'Target audience interviews',
        'Competitor analysis',
        'Persona creation',
        'Journey mapping'
      ]
    },
    {
      icon: Layers,
      title: 'Application Architecture',
      color: 'purple',
      description: 'Designed comprehensive application architecture with educational onboarding, main screen with balance and charts, detailed analytics, and multi-level security system',
      tasks: [
        'Information architecture',
        'User flows',
        'Wireframes',
        'Prototyping'
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      color: 'emerald',
      description: 'Led the full UX/UI development cycle for a mobile cryptocurrency portfolio management app — from user research to final development handoff',
      tasks: [
        'Design system',
        'High-fidelity mockups',
        'Interactive prototypes',
        'Responsive design'
      ]
    },
    {
      icon: Code,
      title: 'Development Collaboration',
      color: 'amber',
      description: 'Worked closely with developers on implementing dark theme, transition animations, and adaptive components ensuring smooth UX on iOS and Android',
      tasks: [
        'Figma mockup handoff',
        'Implementation oversight',
        'UI component refinement',
        'QA and testing'
      ]
    }
  ];

  const colorMap: { [key: string]: { bg: string; border: string; text: string; hover: string } } = {
    blue: {
      bg: 'bg-blue-600/10',
      border: 'border-blue-500/50',
      text: 'text-blue-400',
      hover: 'hover:border-blue-400'
    },
    purple: {
      bg: 'bg-purple-600/10',
      border: 'border-purple-500/50',
      text: 'text-purple-400',
      hover: 'hover:border-purple-400'
    },
    emerald: {
      bg: 'bg-emerald-600/10',
      border: 'border-emerald-500/50',
      text: 'text-emerald-400',
      hover: 'hover:border-emerald-400'
    },
    amber: {
      bg: 'bg-amber-600/10',
      border: 'border-amber-500/50',
      text: 'text-amber-400',
      hover: 'hover:border-amber-400'
    }
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
            5px 5px, 
            45px 65px, 
            85px 25px, 
            25px 105px
          `
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-white mb-4 text-4xl">Role in the Project</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Full UX/UI development cycle — from research to development handoff
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {responsibilities.map((item, index) => {
            const Icon = item.icon;
            const colors = colorMap[item.color];
            const isActive = activeRole === index;

            return (
              <div
                key={index}
                className={`bg-slate-800/50 border-2 ${isActive ? colors.border : 'border-slate-700'} rounded-xl p-6 cursor-pointer transition-all duration-300 ${colors.hover} ${isActive ? 'shadow-xl scale-105' : 'hover:scale-102'}`}
                onMouseEnter={() => setActiveRole(index)}
                onMouseLeave={() => setActiveRole(null)}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 ${colors.bg} border-2 ${colors.border} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-white mb-2 text-lg transition-colors ${isActive ? colors.text : ''}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Tasks */}
                <div className={`space-y-2 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                  {item.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <span className="text-slate-300 text-sm">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
