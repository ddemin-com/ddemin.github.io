import { Lightbulb, Target, Zap, Search, Users, GitBranch, AlertTriangle, Layers, ArrowLeft, Database, Layout as LayoutIcon, FileCode } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

export function ResearchInsights() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const keyProblems = [
    {
      emoji: "💾",
      title: "Lack of unified interface",
      description: "No centralized access to Hardware Definitions and their configurations. Access is only possible from separate points.",
      color: "from-red-600 to-red-500",
      bgColor: "bg-red-600/20",
      borderColor: "border-red-500/50"
    },
    {
      emoji: "⚠️",
      title: "Scaling difficulties",
      description: "Manual work with override attributes makes infrastructure maintenance vulnerable to errors.",
      color: "from-orange-600 to-orange-500",
      bgColor: "bg-orange-600/20",
      borderColor: "border-orange-500/50"
    },
    {
      emoji: "🔍",
      title: "Insufficient transparency",
      description: "No complete picture of VM status, no unified VM List with column customization and filtering.",
      color: "from-amber-600 to-amber-500",
      bgColor: "bg-amber-600/20",
      borderColor: "border-amber-500/50"
    },
    {
      emoji: "👥",
      title: "Human factor risks",
      description: "Errors when working with parameters lead to failures and incorrect resource allocation.",
      color: "from-red-600 to-pink-500",
      bgColor: "bg-red-600/20",
      borderColor: "border-red-500/50"
    },
    {
      emoji: "📋",
      title: "Data structure mismatch",
      description: "The interface is not adapted to the real structure: users don't see the connection between HW Definition → HW Configurations → Override Features.",
      color: "from-purple-600 to-purple-500",
      bgColor: "bg-purple-600/20",
      borderColor: "border-purple-500/50"
    },
    {
      emoji: "🔄",
      title: "Lack of flexible publication model",
      description: "No centralized page for batch VM publication, inconvenient to track progress and status.",
      color: "from-indigo-600 to-indigo-500",
      bgColor: "bg-indigo-600/20",
      borderColor: "border-indigo-500/50"
    }
  ];

  const insightCards = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "DevOps processes",
      description: "Users didn't just edit VM parameters, they integrated it into broader DevOps processes.",
      color: "from-purple-600 to-purple-500",
      bgColor: "bg-purple-600/20",
      borderColor: "border-purple-500/50"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Lack of control",
      description: "The main pain point isn't the change process itself, but the lack of clarity: who changed what, why, where's the history?",
      color: "from-cyan-600 to-teal-500",
      bgColor: "bg-cyan-600/20",
      borderColor: "border-cyan-500/50"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Fear of \"breaking prod\"",
      description: "Users are afraid to break production and therefore avoid edits without full process transparency.",
      color: "from-amber-600 to-orange-500",
      bgColor: "bg-amber-600/20",
      borderColor: "border-amber-500/50"
    }
  ];

  const solutions = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Unified UI for searching, sorting, filtering and editing VMs",
      description: "Created a centralized interface with powerful search and management tools. Users can quickly find the needed VMs, apply complex filters and sort data by any parameters.",
      image: "https://images.unsplash.com/photo-1691725909676-105654d24649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjkzNDYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-blue-600 to-blue-500",
      bgColor: "bg-blue-600/20",
      borderColor: "border-blue-500/50",
      hoverBorder: "hover:border-blue-400",
      shadowColor: "hover:shadow-blue-900/50"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Group editing capability",
      description: "Implemented bulk editing functionality that allows changing parameters of multiple VMs simultaneously. This reduced time for routine operations from hours to minutes.",
      image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjI5NzI0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-purple-600 to-purple-500",
      bgColor: "bg-purple-600/20",
      borderColor: "border-purple-500/50",
      hoverBorder: "hover:border-purple-400",
      shadowColor: "hover:shadow-purple-900/50"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Change history tracking and automatic PR generation",
      description: "Integrated the system with Git, ensuring full transparency of all changes. Each edit automatically creates a pull request with detailed description of who changed what and when.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXQlMjB2ZXJzaW9uJTIwY29udHJvbHxlbnwxfHx8fDE3NjI5MzM5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-green-600 to-green-500",
      bgColor: "bg-green-600/20",
      borderColor: "border-green-500/50",
      hoverBorder: "hover:border-green-400",
      shadowColor: "hover:shadow-green-900/50"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Visual hints and error warnings",
      description: "Developed a real-time validation system with clear warnings. Users see potential problems before saving changes, which minimizes risks.",
      image: "https://images.unsplash.com/photo-1761422458790-6096feb000d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJuaW5nJTIwYWxlcnQlMjBzeXN0ZW18ZW58MXx8fHwxNzYzMDIwNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-amber-600 to-amber-500",
      bgColor: "bg-amber-600/20",
      borderColor: "border-amber-500/50",
      hoverBorder: "hover:border-amber-400",
      shadowColor: "hover:shadow-amber-900/50"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Created Lo-fi prototypes, conducted quick testing with users",
      description: "Used an iterative design approach. Quickly created low-fidelity prototypes, tested with real users and adapted the solution based on their feedback.",
      image: "https://images.unsplash.com/photo-1586296835409-fe3fe6b35b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90b3R5cGUlMjBkZXNpZ24lMjBza2V0Y2h8ZW58MXx8fHwxNjMyOTMzOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-teal-600 to-teal-500",
      bgColor: "bg-teal-600/20",
      borderColor: "border-teal-500/50",
      hoverBorder: "hover:border-teal-400",
      shadowColor: "hover:shadow-teal-900/50"
    }
  ];

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      {/* Research Findings - Cards */}
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
              10px 10px, 
              50px 70px, 
              90px 30px, 
              30px 110px
            `
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-white mb-6 text-4xl">Key Problems from Research</h2>
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              Most of the time is spent on routine actions: manual input of VM parameters, configuration checks, 
              managing CPU, Memory, Disks, GPU, FPGA, SGX, which significantly reduces team productivity.
            </p>
            
            {keyProblems.map((problem, index) => (
              <div key={index} className="pl-4 border-l-4 border-red-500">
                <h3 className="text-white text-xl mb-2">{problem.emoji} {problem.title}</h3>
                <p className="text-slate-400 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section 1 - Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white mb-10 text-4xl">Research Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightCards.map((insight, index) => (
              <div
                key={index}
                style={{ willChange: 'transform', transform: 'translateZ(0)' }}
                className={`
                  group bg-gradient-to-br from-slate-800/50 to-slate-900/50 
                  border-2 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer
                  ${insight.borderColor} hover:shadow-2xl hover:shadow-purple-900/50
                `}
              >
                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-xl flex items-center justify-center mb-6
                  bg-gradient-to-br ${insight.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6
                `}>
                  <div className="text-white">
                    {insight.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-2xl mb-4 transition-colors duration-300 group-hover:text-purple-300">
                  {insight.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section 2 - Solutions */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white mb-10 text-4xl">Solutions</h2>
          
          <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 border border-teal-700/50 rounded-2xl p-10 shadow-xl">
            <p className="text-slate-200 text-lg leading-relaxed mb-10">
              Based on insights, we formulated the following solutions:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => {
                const isFlipped = flippedCards.includes(index);
                
                return (
                  <div
                    key={index}
                    onClick={() => toggleCard(index)}
                    className="relative h-[480px] cursor-pointer perspective-1000"
                    style={{ perspective: '1000px' }}
                  >
                    {/* Card Container with 3D flip */}
                    <div
                      className={`
                        relative w-full h-full transition-all duration-700 transform-style-3d
                        ${isFlipped ? 'rotate-y-180' : ''}
                      `}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      }}
                    >
                      {/* Front Side */}
                      <div
                        className={`
                          absolute inset-0 w-full h-full rounded-2xl border-2 
                          bg-slate-800/50 backdrop-blur-sm p-8
                          border-slate-700 hover:border-slate-600 hover:shadow-2xl
                          transition-all duration-300
                          backface-hidden
                          flex flex-col items-center justify-center text-center
                        `}
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'translateZ(0)',
                        }}
                      >
                        {/* Icon */}
                        <div className={`
                          w-24 h-24 rounded-2xl flex items-center justify-center mb-8
                          ${solution.bgColor}
                          transition-all duration-300
                        `}>
                          <div className="text-slate-400 w-12 h-12">
                            {React.cloneElement(solution.icon as React.ReactElement, { className: 'w-12 h-12' })}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-white text-xl leading-relaxed mb-8 px-4">
                          {solution.title}
                        </h3>

                        {/* Click hint */}
                        <div className="mt-auto">
                          <div className={`
                            flex items-center justify-center gap-2 text-sm
                            px-6 py-3 rounded-lg border border-slate-700
                            bg-gradient-to-br ${solution.color} bg-opacity-10 text-white
                          `}>
                            <span>Click for details</span>
                            <ArrowLeft className="w-4 h-4 rotate-180" />
                          </div>
                        </div>
                      </div>

                      {/* Back Side */}
                      <div
                        className={`
                          absolute inset-0 w-full h-full rounded-2xl border-2 
                          bg-slate-800/90 backdrop-blur-sm overflow-hidden
                          ${solution.borderColor.replace('/50', '')} ${solution.shadowColor} shadow-lg
                          transition-all duration-300
                          backface-hidden flex flex-col
                        `}
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                      >
                        {/* Image */}
                        <div className="relative h-40 flex-shrink-0 overflow-hidden">
                          <ImageWithFallback
                            src={solution.image}
                            alt={solution.title}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-b ${solution.color} opacity-30`}></div>
                        </div>

                        {/* Content - scrollable */}
                        <div className="flex-1 p-6 overflow-y-auto">
                          {/* Icon badge */}
                          <div className={`
                            inline-flex w-10 h-10 rounded-xl items-center justify-center mb-3
                            bg-gradient-to-br ${solution.color}
                          `}>
                            <div className="text-white text-sm">
                              {solution.icon}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-slate-200 text-sm leading-relaxed mb-4">
                            {solution.description}
                          </p>

                          {/* Back button hint */}
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <ArrowLeft className="w-3 h-3" />
                            <span>Click to flip back</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Empty placeholder cards to align the grid */}
              {solutions.length % 3 !== 0 && (
                <>
                  {Array.from({ length: 3 - (solutions.length % 3) }).map((_, i) => (
                    <div key={`placeholder-${i}`} className="hidden lg:block"></div>
                  ))}
                </>
              )}
            </div>

            {/* Interactive hint */}
            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm">
                🎴 Click on a card to see detailed description and visualization
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
