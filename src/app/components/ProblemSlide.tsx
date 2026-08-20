import { Database, GitBranch, AlertTriangle } from 'lucide-react';

export default function ProblemSlide() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700 p-12 shadow-2xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl mb-6 shadow-lg shadow-red-500/20">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-white mb-4">Problem</h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto">
            Virtual machine information was scattered across different systems and formats. There was no centralized interface for editing data. All changes were made manually through git, which was very time-consuming and increased the risk of errors. There was no transparent version control and change history.
          </p>
        </div>

        {/* Key Problems */}
        <div className="mb-8">
          <h2 className="text-white mb-8 text-center">Key Problems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProblemCard
              number="01"
              icon={<Database className="w-6 h-6" />}
              title="Lack of Centralized Data Storage"
              description="Virtual machine information is scattered across different sources, making access and management difficult."
              color="blue"
            />
            <ProblemCard
              number="02"
              icon={<GitBranch className="w-6 h-6" />}
              title="Difficulty Tracking Changes"
              description="Absence of transparent monitoring mechanism and configuration version control."
              color="purple"
            />
            <ProblemCard
              number="03"
              icon={<AlertTriangle className="w-6 h-6" />}
              title="Manual Configuration Updates"
              description="Require significant time expenditure and are prone to human error."
              color="orange"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemCard({ 
  number, 
  icon, 
  title, 
  description, 
  color 
}: { 
  number: string; 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: 'blue' | 'purple' | 'orange';
}) {
  const colorClasses = {
    blue: {
      bg: 'from-blue-600/20 to-blue-600/5',
      border: 'border-blue-500/30',
      iconBg: 'bg-blue-600/20',
      iconText: 'text-blue-400',
      iconBorder: 'border-blue-500/30',
      number: 'text-blue-400/40',
      shadow: 'hover:shadow-blue-500/10'
    },
    purple: {
      bg: 'from-purple-600/20 to-purple-600/5',
      border: 'border-purple-500/30',
      iconBg: 'bg-purple-600/20',
      iconText: 'text-purple-400',
      iconBorder: 'border-purple-500/30',
      number: 'text-purple-400/40',
      shadow: 'hover:shadow-purple-500/10'
    },
    orange: {
      bg: 'from-orange-600/20 to-orange-600/5',
      border: 'border-orange-500/30',
      iconBg: 'bg-orange-600/20',
      iconText: 'text-orange-400',
      iconBorder: 'border-orange-500/30',
      number: 'text-orange-400/40',
      shadow: 'hover:shadow-orange-500/10'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`relative bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl p-6 transition-all ${colors.shadow} hover:shadow-lg`} style={{ transform: 'translateZ(0)' }}>
      {/* Number */}
      <div className={`absolute top-4 right-4 text-6xl ${colors.number} select-none pointer-events-none`}>
        {number}
      </div>
      
      {/* Icon */}
      <div className={`w-12 h-12 ${colors.iconBg} ${colors.iconText} rounded-lg flex items-center justify-center mb-4 border ${colors.iconBorder} relative z-10`}>
        {icon}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-white mb-3 pr-12">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}