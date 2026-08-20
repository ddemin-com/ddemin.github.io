import { useState } from 'react';
import { Users, Search, UserCircle, Layout, ArrowRight, Lightbulb, Target } from 'lucide-react';

export function ResearchSection() {
  const [activeView, setActiveView] = useState<'initial' | 'reality'>('initial');

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white mb-6 text-4xl">Research</h2>
          
          {/* Interactive Before/After Comparison */}
          <div className="mb-12">
            <div className="flex gap-4 mb-6 justify-center">
              <button
                onClick={() => setActiveView('initial')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeView === 'initial'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Initial Vision
                </div>
              </button>
              <button
                onClick={() => setActiveView('reality')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeView === 'reality'
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/50'
                    : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  What We Discovered
                </div>
              </button>
            </div>

            <div className="relative min-h-[300px]">
              {/* Initial Vision */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  activeView === 'initial'
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8 pointer-events-none'
                }`}
              >
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 border border-blue-800/50 rounded-2xl p-8 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white text-2xl mb-2">Initial Vision</h3>
                      <p className="text-blue-300/80">What we planned to do</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-300 text-lg">
                        Optimized virtual machine management tool
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-300 text-lg">
                        Convenient data sorting and filtering functions
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-300 text-lg">
                        Fast information extraction and editing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reality / Discovery */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  activeView === 'reality'
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8 pointer-events-none'
                }`}
              >
                <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/10 border border-amber-800/50 rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-7 h-7 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-white text-2xl mb-2">What We Discovered</h3>
                      <p className="text-amber-300/80">Real user needs</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-300 text-lg">
                        The problem wasn't VM management, but <span className="text-amber-300 font-medium">workflow integration</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-300 text-lg">
                        Users couldn't effectively integrate VM work into their <span className="text-amber-300 font-medium">daily workflow</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-300 text-lg">
                        Needed a solution that <span className="text-amber-300 font-medium">naturally fits into the tool ecosystem</span>
                      </p>
                    </div>
                  </div>

                
                </div>
              </div>
            </div>
          </div>

          {/* Research Methods */}
          <div className="mb-4 mt-16">
            <h3 className="text-white text-3xl mb-6">Research Methods</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/40 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 group" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 group-hover:scale-110 transition-all duration-300">
                  <Users className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-2">Interviews</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                    Series of in-depth interviews with system administrators and end users
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/40 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 group" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 group-hover:scale-110 transition-all duration-300">
                  <Search className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-2">Competitive Analysis</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                    Evaluation of existing solutions to identify gaps and opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/40 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 group" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 group-hover:scale-110 transition-all duration-300">
                  <UserCircle className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-2">Persona Creation</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                    Development of detailed personas for deep understanding of needs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/40 hover:bg-slate-800/70 transition-all duration-300 hover:-translate-y-1 group" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 group-hover:scale-110 transition-all duration-300">
                  <Layout className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-2">Use Case Scenarios</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                    Identifying key scenarios and revealing user pain points
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Takeaway */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-2xl border-2 border-blue-700/50 p-12 shadow-2xl text-center hover:border-blue-600/50 hover:shadow-blue-900/30 transition-all duration-500" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white mb-6 text-4xl">Key Takeaway:</h3>
              <p className="text-slate-200 text-2xl leading-relaxed max-w-4xl mx-auto">
                Never assume you know and understand the entire problem. 
                User interviews and hypothesis testing can 
                reveal unpredictable insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}