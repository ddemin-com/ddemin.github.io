import { ArrowRight, Mail, Linkedin, Github, Sparkles, Smartphone, Monitor, Glasses, Cloud, Wallet, ScanLine } from 'lucide-react';
import logoAdobe from '../../imports/adobe-semrush-announcement-logo-3_1.svg?raw';
import logoBeam from '../../imports/beam-logo-full-color-name-right_1.svg?raw';
import logoCiti from '../../imports/Citi_idkUhwKWva_0_1.svg?raw';
import logoCorrect from '../../imports/Correct_Logo_1_1.svg?raw';
import logoEpam from '../../imports/EPAM_Logo_0_1.svg?raw';
import logoExante from '../../imports/EXANTE_idDjqGkTnC_1_1.svg?raw';
import logoGeohub from '../../imports/Geohub_1.svg?raw';
import logoGroup from '../../imports/Group.svg?raw';
import logoIch from '../../imports/ICH_IT_career_hub_light_1.svg?raw';
import logoSaritasa from '../../imports/icon-saritasa-logo_1.svg?raw';
import logoIu from '../../imports/IU_logo.svg_1.svg?raw';
import logoJnj from '../../imports/Johnson___Johnson_Logo_0_1.svg?raw';
import logoKamaz from '../../imports/kamaz_1.svg?raw';
import logoAzure from '../../imports/Microsoft_Azure_Portal_id4YvwdUb-_0_1.svg?raw';
import logoMicrosoft from '../../imports/Microsoft_Logo_0_1.svg?raw';
import logoSap from '../../imports/sap_fiori_1.svg?raw';
import logoSber from '../../imports/Sberbank_id6djdRCRL_0_1.svg?raw';
import logoShape from '../../imports/Shape.svg?raw';
import logoTrivver from '../../imports/TRIVVER_1.svg?raw';

function InlineSvg({ svg, label }: { svg: string; label: string }) {
  const scaled = svg
    .replace(/width="[^"]*"/, 'width="100%"')
    .replace(/height="[^"]*"/, 'height="100%"');
  return (
    <div
      aria-label={label}
      style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      dangerouslySetInnerHTML={{ __html: scaled }}
    />
  );
}
import { projects } from '../data/projects';
import { ToolIcon } from './ToolIcon';
import { useState, useEffect } from 'react';

interface HomePageProps {
  onNavigateToProject: (projectId: string) => void;
}

export default function HomePage({ onNavigateToProject }: HomePageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      setTime(prev => prev + 0.016);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="text-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Background gradient */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #08080F, #020618)' }} />

        {/* Dot pattern background */}
        <div
          className="absolute inset-0 transition-all duration-300 ease-out opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(129, 140, 248, ${0.4 + mousePosition.x * 0.003}) 2px, transparent 2px),
              radial-gradient(circle, rgba(34, 211, 238, ${0.3 + mousePosition.y * 0.003}) 1.5px, transparent 1.5px),
              radial-gradient(circle, rgba(167, 139, 250, ${0.25 + (mousePosition.x + mousePosition.y) * 0.002}) 1.2px, transparent 1.2px),
              radial-gradient(circle, rgba(129, 140, 248, ${0.35 + mousePosition.x * 0.0025}) 2.2px, transparent 2.2px),
              radial-gradient(circle, rgba(34, 211, 238, ${0.2 + mousePosition.y * 0.002}) 0.8px, transparent 0.8px),
              radial-gradient(circle, rgba(167, 139, 250, ${0.15 + mousePosition.x * 0.002}) 1px, transparent 1px),
              radial-gradient(circle, rgba(129, 140, 248, ${0.3 + mousePosition.y * 0.0025}) 1.6px, transparent 1.6px)
            `,
            backgroundSize: `
              ${280 + mousePosition.x * 0.8}px ${280 + mousePosition.y * 0.8}px, 
              ${210 + mousePosition.x * 0.6}px ${210 + mousePosition.y * 0.6}px, 
              ${170 + mousePosition.y * 0.5}px ${170 + mousePosition.x * 0.5}px, 
              ${250 + mousePosition.x * 0.7}px ${250 + mousePosition.y * 0.7}px, 
              ${130 + mousePosition.y * 0.4}px ${130 + mousePosition.x * 0.4}px, 
              ${160 + mousePosition.x * 0.5}px ${160 + mousePosition.y * 0.5}px, 
              ${190 + mousePosition.y * 0.6}px ${190 + mousePosition.x * 0.6}px
            `,
            backgroundPosition: `
              ${Math.sin(time * 0.3) * 30 + mousePosition.x * 0.5}px ${Math.cos(time * 0.2) * 30 + mousePosition.y * 0.5}px, 
              ${37 + Math.sin(time * 0.4) * 20 + mousePosition.x * 0.3}px ${17 + Math.cos(time * 0.5) * 20 + mousePosition.y * 0.3}px, 
              ${83 - Math.sin(time * 0.35) * 25 - mousePosition.x * 0.2}px ${109 + Math.cos(time * 0.3) * 25 + mousePosition.y * 0.4}px, 
              ${19 + Math.sin(time * 0.5) * 15 + mousePosition.x * 0.4}px ${71 - Math.cos(time * 0.4) * 15 - mousePosition.y * 0.2}px, 
              ${127 - Math.sin(time * 0.25) * 35 - mousePosition.x * 0.3}px ${31 + Math.cos(time * 0.45) * 35 + mousePosition.y * 0.5}px, 
              ${61 + Math.sin(time * 0.6) * 20 + mousePosition.x * 0.25}px ${149 - Math.cos(time * 0.35) * 20 - mousePosition.y * 0.3}px, 
              ${103 - Math.sin(time * 0.55) * 30 - mousePosition.x * 0.35}px ${53 + Math.cos(time * 0.25) * 30 + mousePosition.y * 0.35}px
            `,
            transform: `rotate(${Math.sin(time * 0.1) * 2 + (mousePosition.x - 50) * 0.02}deg) scale(${1 + Math.abs(Math.sin(time * 0.15)) * 0.02 + Math.abs(mousePosition.x - 50) * 0.0008})`
          }}
        />
        
        {/* Subtle animated glow following cursor */}
        <div 
          className="absolute w-full h-full transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(129,140,248,0.08), transparent 70%)`,
            opacity: 0.5
          }}
        />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 border border-slate-700/60 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-slate-300 text-sm font-medium">Hi, I'm Dmitry Demin</span>
          </div>
          
          <h1 className="mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            UX/UI Designer (enterprise, data-heavy, desktop & mobile)
          </h1>
          
          <p className="text-slate-300 text-2xl mb-4 max-w-3xl leading-relaxed font-semibold">
            I turn complex products into clear interfaces.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
              <span className="text-slate-400 text-sm">Experience:</span>
              <span className="text-white ml-2">12+ years</span>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
              <span className="text-slate-400 text-sm">Projects:</span>
              <span className="text-white ml-2">50+</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
              <Smartphone className="w-4 h-4 text-blue-400" />
              <span className="text-white">Mobile</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
              <Monitor className="w-4 h-4 text-purple-400" />
              <span className="text-white">Desktop</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
              <Glasses className="w-4 h-4 text-pink-400" />
              <span className="text-white">AR</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
              <ScanLine className="w-4 h-4 text-purple-400" />
              <span className="text-white">XR</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-white">AI</span>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-slate-400 text-sm mb-3">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'UX Design', 'UI Design', 'Product Thinking', 'Design Systems',
                'User Research', 'Information Architecture', 'Prototyping', 'JTBD',
                'Metrics & Data Analysis', 'UX Strategy', 'Cross-functional Collaboration',
                'Team Management', 'Development Support'
              ].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg">
              <Mail className="w-5 h-5" />
              <span className="select-text cursor-text">ddemin001@gmail.com</span>
            </div>
            <a 
              href="https://www.linkedin.com/in/dmitriidemin/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="https://t.me/mrstick001" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Telegram
            </a>
            <a
              href="https://wa.me/31687331541"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Companies Marquee */}
      <section className="py-20 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <p className="text-center text-[11px] font-semibold tracking-[3px] uppercase text-slate-600 mb-10">Companies & Projects I've Worked With</p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #08080f, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #08080f, transparent)' }} />
          <div className="flex" style={{ animation: 'marquee 40s linear infinite' }}>
            {([
              [logoAdobe,'Adobe/Semrush'],[logoBeam,'Beam'],[logoCiti,'Citi'],[logoCorrect,'Correct'],[logoEpam,'EPAM'],
              [logoExante,'EXANTE'],[logoGeohub,'Geohub'],[logoGroup,'Group'],[logoIch,'IT Career Hub'],[logoSaritasa,'Saritasa'],
              [logoIu,'IU'],[logoJnj,'J&J'],[logoKamaz,'KAMAZ'],[logoAzure,'Azure'],[logoMicrosoft,'Microsoft'],
              [logoSap,'SAP Fiori'],[logoSber,'Sberbank'],[logoShape,'Shape'],[logoTrivver,'Trivver'],
              [logoAdobe,'Adobe/Semrush'],[logoBeam,'Beam'],[logoCiti,'Citi'],[logoCorrect,'Correct'],[logoEpam,'EPAM'],
              [logoExante,'EXANTE'],[logoGeohub,'Geohub'],[logoGroup,'Group'],[logoIch,'IT Career Hub'],[logoSaritasa,'Saritasa'],
              [logoIu,'IU'],[logoJnj,'J&J'],[logoKamaz,'KAMAZ'],[logoAzure,'Azure'],[logoMicrosoft,'Microsoft'],
              [logoSap,'SAP Fiori'],[logoSber,'Sberbank'],[logoShape,'Shape'],[logoTrivver,'Trivver'],
            ] as [string, string][]).map(([logo, name], i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center" style={{ width: '160px', height: '48px', opacity: 0.85 }}>
                <div style={{ width: '120px', height: '36px' }}>
                  <InlineSvg svg={logo} label={name} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6" id="projects">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl">My Projects</h2>
            <p className="text-slate-400 text-xl">
              Product case studies: from problem to outcome.
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onClick={() => onNavigateToProject(project.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-center text-4xl">Skills & Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCategory 
              title="Design"
              skills={['Figma', 'Adobe Creative Cloud', 'Sketch', 'Principle', 'ProtoPie', 'InVision', 'Framer', 'Axure', 'Zeplin', 'Miro']}
            />
            <SkillCategory 
              title="Research"
              skills={['User Interviews', 'Usability Testing', 'A/B Testing', 'Analytics', 'Surveys', 'Hotjar', 'Maze', 'UserTesting', 'Google Analytics']}
            />
            <SkillCategory 
              title="Development"
              skills={['HTML', 'CSS', 'A11y', 'Design Systems', 'Git', 'JavaScript', 'Storybook', 'Jira', 'Responsive Design', 'Confluence']}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2026 UX/UI Designer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ 
  project, 
  index, 
  onClick 
}: { 
  project: typeof projects[0]; 
  index: number;
  onClick: () => void;
}) {
  const colorClasses = {
    blue: 'from-blue-600/20 to-blue-600/5 border-blue-500/30 hover:border-blue-500/50',
    purple: 'from-zinc-900/60 to-zinc-900/20 border-zinc-700/40 hover:border-zinc-600/60',
    green: 'from-green-600/20 to-green-600/5 border-green-500/30 hover:border-green-500/50',
  };

  const getProjectIcon = (id: string) => {
    if (id === 'ms-spot') return <Cloud className="w-6 h-6" />;
    if (id === 'fintech-app') return <Wallet className="w-6 h-6" />;
    if (id === 'xr-editor') return <Glasses className="w-6 h-6" />;
    return null;
  };

  const getProjectIconColor = (id: string) => {
    if (id === 'ms-spot') return 'text-blue-400';
    if (id === 'fintech-app') return 'text-green-400';
    if (id === 'xr-editor') return 'text-zinc-400';
    return 'text-blue-400';
  };

  return (
    <button
      onClick={onClick}
      className={`w-full bg-gradient-to-br ${colorClasses[project.color as keyof typeof colorClasses]} border rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 text-left group`}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className={getProjectIconColor(project.id)}>
              {getProjectIcon(project.id)}
            </div>
            <h3 className="text-white">{project.title}</h3>
          </div>
          <p className="text-slate-400 mb-4">{project.subtitle}</p>
          <p className="text-slate-300 leading-relaxed">{project.description}</p>
        </div>
        <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:translate-x-2 transition-all ml-4 flex-shrink-0" />
      </div>
      
      <div className="flex flex-wrap gap-6 text-sm">
        <div>
          <span className="text-slate-500">Role:</span>
          <span className="text-slate-300 ml-2">{project.role}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500">Tools:</span>
          <div className="flex gap-2">
            {project.tools.slice(0, 3).map(tool => (
              <div key={tool} className="flex items-center gap-1 px-2 py-1 bg-slate-800/50 border border-slate-700 rounded text-slate-300">
                <ToolIcon name={tool} className="w-4 h-4" />
                <span className="text-xs">{tool}</span>
              </div>
            ))}
            {project.tools.length > 3 && (
              <div className="flex items-center px-2 py-1 bg-slate-800/50 border border-slate-700 rounded text-slate-400">
                <span className="text-xs">+{project.tools.length - 3} more</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
      <h3 className="text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <div key={skill} className="flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-sm">
            <ToolIcon name={skill} className="w-4 h-4" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}