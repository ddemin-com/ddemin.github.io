import { ArrowLeft, ArrowRight, Calendar, Users, Wrench, CheckCircle2, Database, GitBranch, Filter, Search, UserCircle, Layout, AlertCircle, Clock, ShieldAlert, TrendingDown, Rocket, Waves, Shield, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { HeartViewer3D } from './HeartViewer3D';
import xrHeroImage from '../../imports/3d_editor03_no_BG__without_fill_-1.png';
import { Project } from '../data/projects';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ToolIcon } from './ToolIcon';
import { ResearchSection } from './ResearchSection';
import { ResearchInsights } from './ResearchInsights';
import { DesignMethodology } from './DesignMethodology';
import { LoFiPrototypes } from './LoFiPrototypes';
import { RoleAdaptation } from './RoleAdaptation';
import { Results } from './Results';
import { CryptoRegistration } from './CryptoRegistration';
import { CryptoKillerFeature } from './CryptoKillerFeature';
import { CryptoBusinessModel } from './CryptoBusinessModel';
import { CryptoTestingResults } from './CryptoTestingResults';
import { CryptoUserRequests } from './CryptoUserRequests';
import { ImpactSection } from './ImpactSection';
import { XREditorContentFull } from './XREditorContentFull';
import msSpotImage from 'figma:asset/d7c5f34eb5e024a72db08c6646f75e3e4b314def.png';
import cryptoHeroImage from 'figma:asset/83a6a7d67f068473451dba270d45d48b6a234081.png';
import cryptoWebsiteImage from 'figma:asset/e24063709abd515affe1c2d697e909814e764fa7.png';
import { useState } from 'react';

interface ProjectPageProps {
  project: Project;
  onNavigateToHome: () => void;
}

export default function ProjectPage({ project, onNavigateToHome }: ProjectPageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  // Determine which image to use
  const projectImage = project.id === 'ms-spot'
    ? msSpotImage
    : project.id === 'fintech-app'
    ? cryptoHeroImage
    : project.id === 'xr-editor'
    ? `https://source.unsplash.com/1200x600/?${project.image}`
    : (project.customImage || `https://source.unsplash.com/1200x600/?${project.image}`);
  
  // For crypto website scrollable content
  const websiteImage = project.id === 'fintech-app' ? cryptoWebsiteImage : null;

  return (
    <div className="text-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <button
            onClick={onNavigateToHome}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: project.id === 'xr-editor' ? '#08080f' : undefined }}
        onMouseMove={handleMouseMove}
      >
        {project.id !== 'xr-editor' && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
        )}
        {/* Interactive pattern background for Crypto Wallet App */}
        {project.id === 'fintech-app' && (
          <div 
            className="absolute inset-0 transition-all duration-300 ease-out pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(16, 185, 129, ${0.4 + mousePosition.x * 0.003}) 2px, transparent 2px),
                radial-gradient(circle, rgba(34, 197, 94, ${0.3 + mousePosition.y * 0.003}) 1.5px, transparent 1.5px),
                radial-gradient(circle, rgba(20, 184, 166, ${0.25 + (mousePosition.x + mousePosition.y) * 0.002}) 1.2px, transparent 1.2px),
                radial-gradient(circle, rgba(52, 211, 153, ${0.35 + mousePosition.x * 0.0025}) 2.2px, transparent 2.2px),
                radial-gradient(circle, rgba(16, 185, 129, ${0.2 + mousePosition.y * 0.002}) 0.8px, transparent 0.8px),
                radial-gradient(circle, rgba(34, 197, 94, ${0.15 + mousePosition.x * 0.002}) 1px, transparent 1px),
                radial-gradient(circle, rgba(16, 185, 129, ${0.3 + mousePosition.y * 0.0025}) 1.6px, transparent 1.6px)
              `,
              backgroundSize: `
                ${260 + mousePosition.x * 0.7}px ${260 + mousePosition.y * 0.7}px, 
                ${200 + mousePosition.x * 0.5}px ${200 + mousePosition.y * 0.5}px, 
                ${160 + mousePosition.y * 0.4}px ${160 + mousePosition.x * 0.4}px, 
                ${240 + mousePosition.x * 0.6}px ${240 + mousePosition.y * 0.6}px, 
                ${120 + mousePosition.y * 0.3}px ${120 + mousePosition.x * 0.3}px, 
                ${150 + mousePosition.x * 0.4}px ${150 + mousePosition.y * 0.4}px, 
                ${180 + mousePosition.y * 0.5}px ${180 + mousePosition.x * 0.5}px
              `,
              backgroundPosition: `
                ${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px, 
                ${30 + mousePosition.x * 0.3}px ${15 + mousePosition.y * 0.3}px, 
                ${70 - mousePosition.x * 0.2}px ${95 + mousePosition.y * 0.4}px, 
                ${15 + mousePosition.x * 0.4}px ${60 - mousePosition.y * 0.2}px, 
                ${110 - mousePosition.x * 0.3}px ${25 + mousePosition.y * 0.5}px, 
                ${50 + mousePosition.x * 0.25}px ${130 - mousePosition.y * 0.3}px, 
                ${90 - mousePosition.x * 0.35}px ${45 + mousePosition.y * 0.35}px
              `,
              transform: `rotate(${(mousePosition.x - 50) * 0.015}deg) scale(${1 + Math.abs(mousePosition.x - 50) * 0.0006})`
            }}
          />
        )}
        
        {/* Interactive pattern background for MS Spot */}
        {project.id === 'ms-spot' && (
          <div
            className="absolute inset-0 transition-all duration-300 ease-out pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(59, 130, 246, ${0.4 + mousePosition.x * 0.003}) 2px, transparent 2px),
                radial-gradient(circle, rgba(99, 102, 241, ${0.3 + mousePosition.y * 0.003}) 1.5px, transparent 1.5px),
                radial-gradient(circle, rgba(59, 130, 246, ${0.25 + (mousePosition.x + mousePosition.y) * 0.002}) 1.2px, transparent 1.2px),
                radial-gradient(circle, rgba(147, 51, 234, ${0.35 + mousePosition.x * 0.0025}) 2.2px, transparent 2.2px),
                radial-gradient(circle, rgba(59, 130, 246, ${0.2 + mousePosition.y * 0.002}) 0.8px, transparent 0.8px),
                radial-gradient(circle, rgba(99, 102, 241, ${0.15 + mousePosition.x * 0.002}) 1px, transparent 1px),
                radial-gradient(circle, rgba(59, 130, 246, ${0.3 + mousePosition.y * 0.0025}) 1.6px, transparent 1.6px)
              `,
              backgroundSize: `
                ${260 + mousePosition.x * 0.7}px ${260 + mousePosition.y * 0.7}px,
                ${200 + mousePosition.x * 0.5}px ${200 + mousePosition.y * 0.5}px,
                ${160 + mousePosition.y * 0.4}px ${160 + mousePosition.x * 0.4}px,
                ${240 + mousePosition.x * 0.6}px ${240 + mousePosition.y * 0.6}px,
                ${120 + mousePosition.y * 0.3}px ${120 + mousePosition.x * 0.3}px,
                ${150 + mousePosition.x * 0.4}px ${150 + mousePosition.y * 0.4}px,
                ${180 + mousePosition.y * 0.5}px ${180 + mousePosition.x * 0.5}px
              `,
              backgroundPosition: `
                ${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px,
                ${30 + mousePosition.x * 0.3}px ${15 + mousePosition.y * 0.3}px,
                ${70 - mousePosition.x * 0.2}px ${95 + mousePosition.y * 0.4}px,
                ${15 + mousePosition.x * 0.4}px ${60 - mousePosition.y * 0.2}px,
                ${110 - mousePosition.x * 0.3}px ${25 + mousePosition.y * 0.5}px,
                ${50 + mousePosition.x * 0.25}px ${130 - mousePosition.y * 0.3}px,
                ${90 - mousePosition.x * 0.35}px ${45 + mousePosition.y * 0.35}px
              `,
              transform: `rotate(${(mousePosition.x - 50) * 0.015}deg) scale(${1 + Math.abs(mousePosition.x - 50) * 0.0006})`
            }}
          />
        )}

        {/* Interactive pattern background for XR Editor */}
        {project.id === 'xr-editor' && (
          <div
            className="absolute inset-0 transition-all duration-300 ease-out pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(129, 140, 248, ${0.4 + mousePosition.x * 0.003}) 2px, transparent 2px),
                radial-gradient(circle, rgba(167, 139, 250, ${0.3 + mousePosition.y * 0.003}) 1.5px, transparent 1.5px),
                radial-gradient(circle, rgba(34, 211, 238, ${0.25 + (mousePosition.x + mousePosition.y) * 0.002}) 1.2px, transparent 1.2px),
                radial-gradient(circle, rgba(129, 140, 248, ${0.35 + mousePosition.x * 0.0025}) 2.2px, transparent 2.2px),
                radial-gradient(circle, rgba(167, 139, 250, ${0.2 + mousePosition.y * 0.002}) 0.8px, transparent 0.8px),
                radial-gradient(circle, rgba(34, 211, 238, ${0.15 + mousePosition.x * 0.002}) 1px, transparent 1px),
                radial-gradient(circle, rgba(129, 140, 248, ${0.3 + mousePosition.y * 0.0025}) 1.6px, transparent 1.6px)
              `,
              backgroundSize: `
                ${260 + mousePosition.x * 0.7}px ${260 + mousePosition.y * 0.7}px,
                ${200 + mousePosition.x * 0.5}px ${200 + mousePosition.y * 0.5}px,
                ${160 + mousePosition.y * 0.4}px ${160 + mousePosition.x * 0.4}px,
                ${240 + mousePosition.x * 0.6}px ${240 + mousePosition.y * 0.6}px,
                ${120 + mousePosition.y * 0.3}px ${120 + mousePosition.x * 0.3}px,
                ${150 + mousePosition.x * 0.4}px ${150 + mousePosition.y * 0.4}px,
                ${180 + mousePosition.y * 0.5}px ${180 + mousePosition.x * 0.5}px
              `,
              backgroundPosition: `
                ${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px,
                ${30 + mousePosition.x * 0.3}px ${15 + mousePosition.y * 0.3}px,
                ${70 - mousePosition.x * 0.2}px ${95 + mousePosition.y * 0.4}px,
                ${15 + mousePosition.x * 0.4}px ${60 - mousePosition.y * 0.2}px,
                ${110 - mousePosition.x * 0.3}px ${25 + mousePosition.y * 0.5}px,
                ${50 + mousePosition.x * 0.25}px ${130 - mousePosition.y * 0.3}px,
                ${90 - mousePosition.x * 0.35}px ${45 + mousePosition.y * 0.35}px
              `,
              transform: `rotate(${(mousePosition.x - 50) * 0.015}deg) scale(${1 + Math.abs(mousePosition.x - 50) * 0.0006})`
            }}
          />
        )}
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Microsoft Badge - MS Spot only */}
          {project.id === 'ms-spot' && (
            <div className="mb-8 flex items-center gap-4">
              <div className="flex items-center gap-3 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-xl">
                <svg className="w-8 h-8" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="11" height="11" fill="#F25022"/>
                  <rect x="12" width="11" height="11" fill="#7FBA00"/>
                  <rect y="12" width="11" height="11" fill="#00A4EF"/>
                  <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
                </svg>
                <span className="text-slate-300 text-lg">Microsoft Azure Project</span>
              </div>
            </div>
          )}

          <div className="mb-8 text-center">
            <h1 className={`mb-6 text-[72px] font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r ${
              project.id === 'ms-spot'
                ? 'from-white via-[#60a5fa] to-[#6366f1]'
                : project.id === 'fintech-app'
                ? 'from-[#C3F539] to-[#C3F539]'
                : 'from-white via-[#818cf8] to-[#22d3ee]'
            }`}>
              {project.title}
            </h1>
            <p className="text-2xl text-slate-300">{project.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <InfoCard icon={<Users className="w-5 h-5" />} label="Role" value={project.role} />
            <InfoCard icon={<Calendar className="w-5 h-5" />} label="Domain" value={project.domain} />
            <InfoCard icon={<Users className="w-5 h-5" />} label="Team" value={project.team} />
          </div>

          {/* Tools - MS Spot only */}
          {project.id === 'ms-spot' && (
            <div className="mb-12">
              <h3 className="text-white mb-4 text-xl">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map(tool => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300"
                  >
                    <ToolIcon name={tool} className="w-5 h-5 flex-shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools - Crypto Wallet App only */}
          {project.id === 'fintech-app' && (
            <div className="mb-12">
              <h3 className="text-white mb-4 text-xl">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map(tool => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 hover:border-green-500 hover:bg-slate-800 transition-all duration-300"
                  >
                    <ToolIcon name={tool} className="w-5 h-5 flex-shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools - XR Editor only */}
          {project.id === 'xr-editor' && (
            <div className="mb-12">
              <h3 className="text-white mb-4 text-xl">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map(tool => (
                  <div
                    key={tool}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 hover:border-purple-500 hover:bg-slate-800 transition-all duration-300"
                  >
                    <ToolIcon name={tool} className="w-5 h-5 flex-shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Image */}
          <div className="relative">
            {/* Monitor Frame */}
            <div className={project.id === 'xr-editor'
              ? "p-8 rounded-3xl border border-[rgba(255,255,255,.1)] shadow-2xl"
              : "bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-700"
            }>
              {/* Monitor Bezel */}
              <div className={project.id === 'xr-editor'
                ? "bg-[#0a0a0f] rounded-2xl overflow-hidden border-4 border-[#1a1a24] shadow-inner"
                : "bg-black rounded-2xl p-3 shadow-inner"
              }>
                {/* Screen */}
                {project.id === 'fintech-app' && websiteImage ? (
                  // Scrollable website for Crypto Wallet App
                  <div className="relative rounded-xl overflow-hidden bg-slate-950 h-[600px] group">
                    <div className="overflow-y-auto h-full scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900 hover:scrollbar-thumb-slate-600 transition-colors">
                      <ImageWithFallback
                        src={websiteImage}
                        alt="Haqabi Website"
                        className="w-full h-auto"
                      />
                    </div>
                    {/* Scroll Indicator - More Prominent */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-green-600/20 backdrop-blur-md border-2 border-green-500 rounded-2xl px-6 py-3 flex items-center gap-3 pointer-events-none shadow-2xl shadow-green-900/50 group-hover:opacity-0 transition-opacity">
                      <svg className="w-5 h-5 text-green-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      <span className="text-green-400 font-semibold">Scroll to view</span>
                      <svg className="w-5 h-5 text-green-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                ) : project.id === 'xr-editor' ? (
                  // XR Editor: editor screenshot + rotating logo overlay
                  <div className="relative rounded-xl overflow-hidden bg-[#0a0a0f]">
                    <ImageWithFallback
                      src={xrHeroImage}
                      alt="XR Editor 3D interface"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[52%] h-[78%] flex items-center justify-center">
                        <HeartViewer3D />
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular image for other projects
                  <div className="relative rounded-xl overflow-hidden bg-slate-950">
                    <ImageWithFallback
                      src={projectImage}
                      alt={project.title}
                      className={`w-full ${project.id === 'fintech-app' ? 'h-auto object-contain' : 'h-96 object-cover'}`}
                    />
                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                )}
              </div>
              
              {/* Monitor Stand */}
              {project.id === 'xr-editor' ? (
                <div className="flex flex-col items-center mt-4">
                  <div className="w-24 h-6 bg-gradient-to-b from-[#2a2a3a] to-[#1a1a24] rounded-b-lg"></div>
                  <div className="w-48 h-3 bg-gradient-to-b from-[#1a1a24] to-[#0a0a0f] rounded-full mt-1"></div>
                </div>
              ) : (
                <div className="flex justify-center mt-4">
                  <div className="relative">
                    <div className="w-20 h-16 bg-gradient-to-b from-slate-700 to-slate-800 rounded-t-lg mx-auto shadow-lg"></div>
                    <div className="w-32 h-3 bg-gradient-to-b from-slate-800 to-slate-900 rounded-full shadow-xl"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Description - only for MS Spot */}
      {project.id === 'ms-spot' && (
        <section className="py-16 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-white mb-2 text-4xl">About the Project</h2>
                </div>
              </div>
              <p className="text-slate-300 text-xl leading-relaxed">
                MS Spot is a platform that allows users to edit various technical information about all virtual machines in Azure.
              </p>
            </div>

            {/* Context */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 mb-8">
              <h3 className="text-white mb-4 flex items-center gap-3">
                <GitBranch className="w-6 h-6 text-blue-400" />
                Context
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                The main source of virtual machine information is JSON files stored in Git. The application should extract data from these files and present it in a structured form in a web application.
              </p>
              <p className="text-slate-300 leading-relaxed">
                After user editing, the application should write changes back to JSON files and create a pull request to merge changes into the master branch.
              </p>
            </div>

            {/* Functionality */}
            <div>
              <h3 className="text-white mb-6">Platform Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
                <FeatureCard 
                  icon={<Filter className="w-5 h-5" />}
                  title="Sorting and Filtering"
                  description="Various types of data sorting and filtering"
                />
                <FeatureCard 
                  icon={<Search className="w-5 h-5" />}
                  title="Full-text Search"
                  description="Fast search across all data"
                />
                <FeatureCard 
                  icon={<UserCircle className="w-5 h-5" />}
                  title="Role Management"
                  description="Different user roles"
                />
                <FeatureCard 
                  icon={<Layout className="w-5 h-5" />}
                  title="Flexible Workspace"
                  description="Customizable workspace"
                />
                <FeatureCard 
                  icon={<GitBranch className="w-5 h-5" />}
                  title="Git Integration"
                  description="Automatic pull requests"
                />
                <FeatureCard 
                  icon={<Database className="w-5 h-5" />}
                  title="Data Management"
                  description="JSON file editing"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Key Problems - only for MS Spot */}
      {project.id === 'ms-spot' && (
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
                0 0, 
                40px 60px, 
                80px 20px, 
                20px 100px
              `
            }}
          />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4 text-4xl">Key Problems</h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                The existing virtual machine data management process had several critical shortcomings
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Large Problem Cards - Left Column */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Problem 1 */}
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/50 rounded-xl p-6 hover:border-red-600 hover:shadow-lg hover:shadow-red-900/50 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 group-hover:scale-110 transition-all duration-300">
                      <Database className="w-6 h-6 text-red-400 group-hover:text-white" />
                    </div>
                    <span className="text-red-400/50 text-sm group-hover:text-white group-hover:text-base transition-all">01</span>
                  </div>
                  <h3 className="text-white mb-3">Data Decentralization</h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                    Virtual machine information was fragmented and stored in various sources, making data search and updates difficult.
                  </p>
                </div>

                {/* Problem 2 */}
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/50 rounded-xl p-6 hover:border-red-600 hover:shadow-lg hover:shadow-red-900/50 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 group-hover:scale-110 transition-all duration-300">
                      <GitBranch className="w-6 h-6 text-red-400 group-hover:text-white" />
                    </div>
                    <span className="text-red-400/50 text-sm group-hover:text-white group-hover:text-base transition-all">02</span>
                  </div>
                  <h3 className="text-white mb-3">Change Tracking</h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                    There was no versioning system for changes, leading to loss of modification history and rollback difficulties.
                  </p>
                </div>

                {/* Problem 3 */}
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/50 rounded-xl p-6 hover:border-red-600 hover:shadow-lg hover:shadow-red-900/50 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 group-hover:scale-110 transition-all duration-300">
                      <AlertCircle className="w-6 h-6 text-red-400 group-hover:text-white" />
                    </div>
                    <span className="text-red-400/50 text-sm group-hover:text-white group-hover:text-base transition-all">03</span>
                  </div>
                  <h3 className="text-white mb-3">Manual Updates</h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                    The data update process required manual JSON file editing, which was labor-intensive and prone to human errors.
                  </p>
                </div>

                {/* Problem 4 */}
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/50 rounded-xl p-6 hover:border-red-600 hover:shadow-lg hover:shadow-red-900/50 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 group-hover:scale-110 transition-all duration-300">
                      <Clock className="w-6 h-6 text-red-400 group-hover:text-white" />
                    </div>
                    <span className="text-red-400/50 text-sm group-hover:text-white group-hover:text-base transition-all">04</span>
                  </div>
                  <h3 className="text-white mb-3">Low Efficiency</h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                    Engineers spent significant time searching for needed data and making changes instead of solving core tasks.
                  </p>
                </div>
              </div>

              {/* Right Column - Stacked Problems */}
              <div className="flex flex-col gap-6">
                {/* Problem 5 */}
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/50 rounded-xl p-6 hover:border-red-600 hover:shadow-lg hover:shadow-red-900/50 hover:-translate-y-1 transition-all duration-300 group flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 group-hover:scale-110 transition-all duration-300">
                      <ShieldAlert className="w-6 h-6 text-red-400 group-hover:text-white" />
                    </div>
                    <span className="text-red-400/50 text-sm group-hover:text-white group-hover:text-base transition-all">05</span>
                  </div>
                  <h3 className="text-white mb-3">Error Risk</h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                    Manual JSON editing led to syntax errors and incorrect data, affecting system stability.
                  </p>
                </div>

                {/* Problem 6 */}
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/50 rounded-xl p-6 hover:border-red-600 hover:shadow-lg hover:shadow-red-900/50 hover:-translate-y-1 transition-all duration-300 group flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 group-hover:scale-110 transition-all duration-300">
                      <TrendingDown className="w-6 h-6 text-red-400 group-hover:text-white" />
                    </div>
                    <span className="text-red-400/50 text-sm group-hover:text-white group-hover:text-base transition-all">06</span>
                  </div>
                  <h3 className="text-white mb-3">Limited Scalability</h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                    With growing number of virtual machines, the current approach became unmanageable and couldn't scale effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Implementation Plan - only for MS Spot */}
      {project.id === 'ms-spot' && (
        <section className="py-16 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-white mb-4 text-4xl">Implementation Plan</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                In the context of the problem, we identified several key directions and growth points. We focused on simplifying virtual machine configuration processes, reducing errors and manual actions, improving solution scalability, and ensuring tracking of all changes through a convenient UI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Automation */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-5xl">🗂️</span>
                </div>
                <h3 className="text-white mb-4">Automation</h3>
                <p className="text-slate-400 leading-relaxed">
                  A tool is needed to automate configuration updates and management.
                </p>
              </div>

              {/* Centralization */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-5xl">🎯</span>
                </div>
                <h3 className="text-white mb-4">Data Centralization</h3>
                <p className="text-slate-400 leading-relaxed">
                  A unified platform is needed for storing and accessing virtual machine information.
                </p>
              </div>

              {/* Transparent Management */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-5xl">👁️</span>
                </div>
                <h3 className="text-white mb-4">Transparent Change Management</h3>
                <p className="text-slate-400 leading-relaxed">
                  It's crucial to have a system that ensures tracking and control of all changes made.
                </p>
              </div>
            </div>

            {/* Design Artifacts */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white text-2xl mb-6">Development Artifact</h3>
              </div>

              {/* User Flow Diagram */}
              <div className="bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 border border-indigo-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h4 className="text-white text-xl">User Flow</h4>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2">
                    <div className="flex flex-col items-center min-w-[120px]">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-2 border-2 border-blue-500/50">
                        <span className="text-2xl">📝</span>
                      </div>
                      <p className="text-slate-300 text-sm text-center">Select VM</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <div className="flex flex-col items-center min-w-[120px]">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-2 border-2 border-blue-500/50">
                        <span className="text-2xl">✏️</span>
                      </div>
                      <p className="text-slate-300 text-sm text-center">Editing</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <div className="flex flex-col items-center min-w-[120px]">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-2 border-2 border-blue-500/50">
                        <span className="text-2xl">✅</span>
                      </div>
                      <p className="text-slate-300 text-sm text-center">Validation</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-blue-400 flex-shrink-0" />
                    <div className="flex flex-col items-center min-w-[120px]">
                      <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mb-2 border-2 border-green-500/50">
                        <GitBranch className="w-8 h-8 text-green-400" />
                      </div>
                      <p className="text-slate-300 text-sm text-center">Pull Request</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Architecture */}
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-700/50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <h4 className="text-white text-xl">Information Architecture</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                    <div className="text-center mb-3">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Database className="w-6 h-6 text-purple-400" />
                      </div>
                      <p className="text-white">Data</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-slate-800/50 rounded px-3 py-2 text-slate-400">• JSON files</div>
                      <div className="bg-slate-800/50 rounded px-3 py-2 text-slate-400">• Git repository</div>
                      <div className="bg-slate-800/50 rounded px-3 py-2 text-slate-400">• VM metadata</div>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                    <div className="text-center mb-3">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Layout className="w-6 h-6 text-purple-400" />
                      </div>
                      <p className="text-white">Interface</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-slate-800/50 rounded px-3 py-2 text-slate-400">• Dashboard</div>
                      <div className="bg-slate-800/50 rounded px-3 py-2 text-slate-400">• Editor</div>
                      <div className="bg-slate-800/50 rounded px-3 py-2 text-slate-400">• Workspace</div>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                    <div className="text-center mb-3">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <UserCircle className="w-6 h-6 text-purple-400" />
                      </div>
                      <p className="text-white">Roles</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="bg-slate-800/50 rounded px-3 py-2 text-slate-400">• Administrator</div>
                      <div className="bg-slate-800/50 rounded px-3 py-2 text-slate-400">• Editor</div>
                      <div className="bg-slate-800/50 rounded px-3 py-2 text-slate-400">• Reader</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Research - only for MS Spot */}
      {project.id === 'ms-spot' && (
        <ResearchSection />
      )}

      {/* Research Insights - only for MS Spot */}
      {project.id === 'ms-spot' && (
        <ResearchInsights />
      )}

      {/* Design Methodology - only for MS Spot */}
      {project.id === 'ms-spot' && (
        <DesignMethodology />
      )}

      {/* LoFi Prototypes - only for MS Spot */}
      {project.id === 'ms-spot' && (
        <LoFiPrototypes />
      )}

      {/* Role Adaptation - only for MS Spot */}
      {project.id === 'ms-spot' && (
        <RoleAdaptation />
      )}

      {/* Results - only for MS Spot */}
      {project.id === 'ms-spot' && (
        <Results />
      )}

      {/* Role Section - only for MS Spot */}
      {project.id === 'ms-spot' && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-2 border-blue-700/50 rounded-2xl p-12">
              <h2 className="text-white mb-8 text-4xl">Role</h2>
              
              <div className="space-y-6 text-slate-200 text-lg leading-relaxed">
                <p>
                  Participated <span className="text-white font-semibold">at all stages of the project</span>: from conducting user interviews and gathering requirements 
                  to designing interfaces, UX iterations, testing and handoff of ready solutions to development;
                </p>

                <p>
                  Analyzed existing processes and identified key bottlenecks: manual VM attribute management, 
                  complex hierarchy VM Type → Family → Serie → Name, absence of 
                  centralized HW Definitions management;
                </p>

                <div>
                  <p className="mb-3">Developed comprehensive UX structure for VM management, including:</p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>HW cards and configurations with filtering system and tabs (General Info / Configurations);</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>bulk publishing mechanism and VM List customization with columns and filters</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Worked in close collaboration with Microsoft engineers to adapt complex 
                      technical entities into understandable UX interface;</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* XR Editor Content - only for XR Editor */}
      {project.id === 'xr-editor' && (
        <XREditorContentFull />
      )}

      {/* Overview Section - only for Crypto Wallet App */}
      {project.id === 'fintech-app' && (
        <section className="py-16 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-white mb-4 text-4xl">About the Project</h2>
              <p className="text-slate-300 text-xl leading-relaxed">
                Mobile application for managing cryptocurrency portfolio that makes working with digital assets simple, secure and understandable for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem */}
              <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-white text-2xl">Problem</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Existing crypto wallets are either too complex for beginners or don't provide enough features for experienced users. Users are afraid of making mistakes when transferring and don't understand how their portfolio grows.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-white text-2xl">Solution</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Created an intuitive interface with progressive disclosure of complexity, educational onboarding, clear data visualization and multi-level security system that doesn't interfere with usability.
                </p>
              </div>
            </div>

            {/* Goals */}
            <div className="mt-12">
              <h3 className="text-white mb-6 text-2xl">Project Goals</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-600/50 hover:shadow-lg hover:shadow-green-900/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h4 className="text-white mb-3">Ease of Use</h4>
                  <p className="text-slate-400">
                    Make cryptocurrency management accessible for users of any level
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-600/50 hover:shadow-lg hover:shadow-green-900/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <h4 className="text-white mb-3">Security</h4>
                  <p className="text-slate-400">
                    Provide maximum asset protection without compromising convenience
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-600/50 hover:shadow-lg hover:shadow-green-900/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h4 className="text-white mb-3">Transparency</h4>
                  <p className="text-slate-400">
                    Show real portfolio value and dynamics of changes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* User Research - only for Crypto Wallet App */}
      {project.id === 'fintech-app' && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-white mb-4 text-4xl">User Research</h2>
              <p className="text-slate-400 text-lg">
                Conducted in-depth research to understand needs, fears and expectations of cryptocurrency service users
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/50 rounded-xl p-6 text-center">
                <div className="text-5xl mb-4">👥</div>
                <div className="text-4xl text-white mb-2">25+</div>
                <p className="text-slate-400">In-depth Interviews</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-800/50 rounded-xl p-6 text-center">
                <div className="text-5xl mb-4">📊</div>
                <div className="text-4xl text-white mb-2">150+</div>
                <p className="text-slate-400">Survey Respondents</p>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-800/50 rounded-xl p-6 text-center">
                <div className="text-5xl mb-4">🎯</div>
                <div className="text-4xl text-white mb-2">12</div>
                <p className="text-slate-400">Usability Tests</p>
              </div>
            </div>

            {/* Key Insights */}
            <div>
              <h3 className="text-white mb-6 text-2xl">Key Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-600/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💡</div>
                    <div>
                      <h4 className="text-white mb-2">Fear of Losing Funds</h4>
                      <p className="text-slate-400">
                        87% of users fear losing funds due to address input errors or sending to wrong wallet
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-600/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🤔</div>
                    <div>
                      <h4 className="text-white mb-2">Interface Complexity</h4>
                      <p className="text-slate-400">
                        74% of beginners find existing crypto wallets too complex and overloaded
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-600/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📈</div>
                    <div>
                      <h4 className="text-white mb-2">Lack of Analytics</h4>
                      <p className="text-slate-400">
                        69% of users want to see detailed analytics of portfolio growth and asset distribution
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-600/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🔐</div>
                    <div>
                      <h4 className="text-white mb-2">Security Distrust</h4>
                      <p className="text-slate-400">
                        82% worry about security and want additional protection layers (2FA, biometrics)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Target Audience Issues - only for Crypto Wallet App */}
      {project.id === 'fintech-app' && (
        <section className="py-16 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4 text-4xl">Target Audience Problems</h2>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                Problems identified during cryptocurrency service user research
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Issue 1 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-slate-700/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                    <Shield className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Loss of Seed Phrase or Wallet Access</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      Loss of seed phrase or wallet access leads to irreversible loss of funds
                    </p>
                  </div>
                </div>
              </div>

              {/* Issue 2 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-slate-700/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                    <ShieldAlert className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Distrust of Custodial Wallets</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      Distrust of custodial wallets due to potential issues: blocking, manipulation, fraud
                    </p>
                  </div>
                </div>
              </div>

              {/* Issue 3 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-slate-700/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                    <Waves className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Cross-Chain Portfolio Management</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      Cross-chain portfolio management is extremely difficult as wallets are created for specific blockchains
                    </p>
                  </div>
                </div>
              </div>

              {/* Issue 4 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-slate-700/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                    <Layout className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Cryptocurrency Navigation Too Complex</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      Cryptocurrency navigation is too complex, especially for beginners. UX remains the main problem
                    </p>
                  </div>
                </div>
              </div>

              {/* Issue 5 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 hover:shadow-lg transition-all duration-300 group md:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-slate-700/50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                    <AlertCircle className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">No Protection Against Fraudulent Schemes</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      No protection against fraudulent schemes. Many cryptocurrency projects lack interface solutions 
                      that distinguish scams from legitimate tokens
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Crypto Registration and Features - only for Crypto Wallet App */}
      {project.id === 'fintech-app' && (
        <CryptoRegistration />
      )}

      {/* Crypto Killer Feature - only for Crypto Wallet App */}
      {project.id === 'fintech-app' && (
        <CryptoKillerFeature />
      )}

      {/* Crypto Business Model - only for Crypto Wallet App */}
      {project.id === 'fintech-app' && (
        <CryptoBusinessModel />
      )}

      {/* Crypto Testing Results - Итоговые результаты - only for Crypto Wallet App */}
      {project.id === 'fintech-app' && (
        <CryptoTestingResults />
      )}

      {/* Crypto User Requests - only for Crypto Wallet App */}
      {project.id === 'fintech-app' && (
        <CryptoUserRequests />
      )}

      {/* Impact - Аналитика проекта - only for Crypto Wallet App */}
      {project.id === 'fintech-app' && project.impact && project.impact.length > 0 && (
        <ImpactSection impacts={project.impact} />
      )}

      {/* Role Section - Роль в проекте - only for Crypto Wallet App */}
      {project.id === 'fintech-app' && (
        <RoleAdaptation />
      )}

      {/* Result Statement - only for Crypto Wallet App */}
      {project.id === 'fintech-app' && (
        <section className="py-16 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-6xl">✅</span>
            </div>
            <p className="text-slate-100 text-2xl leading-relaxed">
              The result was a mobile application that <span className="text-white font-semibold">lowers the entry barrier to cryptocurrencies, 
              increases asset management security</span> and <span className="text-white font-semibold">provides an intuitive user 
              experience</span> for managing digital assets of any complexity level.
            </p>
          </div>
        </section>
      )}

      {/* Result Statement - only for MS Spot */}
      {project.id === 'ms-spot' && (
        <section className="py-16 px-6 bg-slate-900/50 relative overflow-hidden">
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
                30px 30px,
                70px 90px,
                110px 50px,
                50px 130px
              `
            }}
          />
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <span className="text-6xl">✅</span>
            </div>
            <p className="text-slate-100 text-2xl leading-relaxed">
              The result was a platform that significantly <span className="text-white font-semibold">reduces manual labor, decreases configuration
              errors</span> and <span className="text-white font-semibold">enables stable scaling of virtual
              infrastructure</span> for millions of Azure users.
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-4xl">Want to Discuss a Project?</h2>
          <p className="text-slate-400 text-xl mb-8">
            I'm always open to new interesting challenges and collaboration
          </p>
          <button
            onClick={onNavigateToHome}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            View Other Projects
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </button>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
      <div className="flex items-center gap-2 text-slate-400 mb-2">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
      <p className="text-white text-sm">{value}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/40 transition-all duration-300 group h-full" style={{ transform: 'translateZ(0)' }}>
      <div className="flex items-center gap-2 text-slate-400 mb-2 group-hover:text-blue-400 transition-colors">
        {icon}
        <span className="text-sm">{title}</span>
      </div>
      <p className="text-slate-300 text-sm group-hover:text-white transition-colors">{description}</p>
    </div>
  );
}