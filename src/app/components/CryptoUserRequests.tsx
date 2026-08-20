import { Users, CheckCircle2, Sparkles, Target } from 'lucide-react';
import { useState } from 'react';

export function CryptoUserRequests() {
  const [hoveredBubble, setHoveredBubble] = useState<number | null>(null);

  const requestsData = [
    { name: 'Multi-Network Support', nameEn: 'Multi-Network Support', percentage: 36, color: '#3b82f6', gradient: 'from-blue-400 to-blue-600' },
    { name: 'P2P Exchange', nameEn: 'P2P Exchange', percentage: 24, color: '#fbbf24', gradient: 'from-amber-400 to-amber-600' },
    { name: 'Web3 & dApps', nameEn: 'Web3 & dApps', percentage: 18, color: '#84cc16', gradient: 'from-lime-400 to-green-600' },
    { name: 'Staking', nameEn: 'Staking', percentage: 8, color: '#ef4444', gradient: 'from-rose-400 to-red-600' },
    { name: 'Fiat Gateway', nameEn: 'Fiat Gateway', percentage: 8, color: '#f97316', gradient: 'from-orange-400 to-orange-600' },
    { name: 'Social Login', nameEn: 'Social Login', percentage: 6, color: '#a855f7', gradient: 'from-purple-400 to-purple-600' },
  ];

  const implementedFeatures = [
    {
      title: 'Multi-Network Support',
      description: 'Support for multiple blockchain networks for extended capabilities',
      status: 'implemented'
    },
    {
      title: 'P2P Exchange via CEX',
      description: 'P2P exchange integration on Haqqex platform for direct transactions',
      status: 'implemented'
    },
    {
      title: 'Web3 and dApps',
      description: 'Built-in browser for interacting with decentralized applications',
      status: 'implemented'
    },
    {
      title: 'Staking',
      description: 'Earn function for staking and liquidity provision',
      status: 'implemented'
    },
    {
      title: 'Fiat Gateway',
      description: 'Ability to buy and sell cryptocurrency for fiat money',
      status: 'implemented'
    },
    {
      title: 'Google Authentication',
      description: 'Social login via Google for simplified access',
      status: 'implemented'
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-white mb-4 text-4xl flex items-center gap-3">
            <Users className="w-10 h-10 text-blue-400" />
            User Requests
          </h2>
          <p className="text-slate-400 text-lg">
            Based on user feedback, we identified key features they wanted to see in the application
          </p>
        </div>

        <div className="mb-12">
          {/* Interactive Bubble Chart */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8">
            <div className="mb-8">
              <h3 className="text-white text-xl mb-2 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-400" />
                User Request Distribution
              </h3>
              <p className="text-slate-400 text-sm">Based on feedback from 130+ respondents • Bubble size = request popularity</p>
            </div>

            {/* Bubbles */}
            <div className="relative bg-slate-900/30 rounded-xl border border-slate-700/50 p-8 min-h-[500px] flex items-center justify-center overflow-hidden">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(148, 163, 184)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative w-full max-w-4xl mx-auto" style={{ height: '450px' }}>
                {/* Bubble 1 - Largest (36%) - Top Left */}
                <div
                  className="absolute cursor-pointer transition-all duration-500 group"
                  style={{
                    top: '10%',
                    left: '8%',
                    width: '200px',
                    height: '200px',
                  }}
                  onMouseEnter={() => setHoveredBubble(0)}
                  onMouseLeave={() => setHoveredBubble(null)}
                >
                  <div 
                    className={`w-full h-full rounded-full bg-gradient-to-br ${requestsData[0].gradient} flex items-center justify-center transition-all duration-300 relative`}
                    style={{
                      transform: hoveredBubble === 0 ? 'scale(1.1)' : 'scale(1)',
                      opacity: hoveredBubble === null || hoveredBubble === 0 ? 0.9 : 0.3,
                      boxShadow: hoveredBubble === 0 ? `0 0 40px ${requestsData[0].color}` : `0 10px 30px rgba(0,0,0,0.3)`,
                    }}
                  >
                    <div className="text-center px-4">
                      <div className="text-white font-bold text-5xl mb-2">{requestsData[0].percentage}%</div>
                      <div className="text-white/90 font-semibold text-sm">{requestsData[0].nameEn}</div>
                    </div>
                    {hoveredBubble === 0 && (
                      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="text-white font-semibold text-sm">{requestsData[0].name}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bubble 2 - Second (24%) - Left Middle */}
                <div
                  className="absolute cursor-pointer transition-all duration-500 group"
                  style={{
                    top: '52%',
                    left: '5%',
                    width: '165px',
                    height: '165px',
                  }}
                  onMouseEnter={() => setHoveredBubble(1)}
                  onMouseLeave={() => setHoveredBubble(null)}
                >
                  <div 
                    className={`w-full h-full rounded-full bg-gradient-to-br ${requestsData[1].gradient} flex items-center justify-center transition-all duration-300 relative`}
                    style={{
                      transform: hoveredBubble === 1 ? 'scale(1.1)' : 'scale(1)',
                      opacity: hoveredBubble === null || hoveredBubble === 1 ? 0.9 : 0.3,
                      boxShadow: hoveredBubble === 1 ? `0 0 40px ${requestsData[1].color}` : `0 10px 30px rgba(0,0,0,0.3)`,
                    }}
                  >
                    <div className="text-center px-3">
                      <div className="text-white font-bold text-4xl mb-2">{requestsData[1].percentage}%</div>
                      <div className="text-white/90 font-semibold text-xs">{requestsData[1].nameEn}</div>
                    </div>
                    {hoveredBubble === 1 && (
                      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 animate-in fade-in-from-top-2 duration-200">
                        <div className="text-white font-semibold text-sm">{requestsData[1].name}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bubble 3 - Third (18%) - Top Center */}
                <div
                  className="absolute cursor-pointer transition-all duration-500 group"
                  style={{
                    top: '5%',
                    left: '48%',
                    width: '145px',
                    height: '145px',
                  }}
                  onMouseEnter={() => setHoveredBubble(2)}
                  onMouseLeave={() => setHoveredBubble(null)}
                >
                  <div 
                    className={`w-full h-full rounded-full bg-gradient-to-br ${requestsData[2].gradient} flex items-center justify-center transition-all duration-300 relative`}
                    style={{
                      transform: hoveredBubble === 2 ? 'scale(1.1)' : 'scale(1)',
                      opacity: hoveredBubble === null || hoveredBubble === 2 ? 0.9 : 0.3,
                      boxShadow: hoveredBubble === 2 ? `0 0 40px ${requestsData[2].color}` : `0 10px 30px rgba(0,0,0,0.3)`,
                    }}
                  >
                    <div className="text-center px-3">
                      <div className="text-white font-bold text-3xl mb-1">{requestsData[2].percentage}%</div>
                      <div className="text-white/90 font-semibold text-xs">{requestsData[2].nameEn}</div>
                    </div>
                    {hoveredBubble === 2 && (
                      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="text-white font-semibold text-sm">{requestsData[2].name}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bubble 4 - Fourth (8%) - Center Right */}
                <div
                  className="absolute cursor-pointer transition-all duration-500 group"
                  style={{
                    top: '50%',
                    left: '65%',
                    width: '110px',
                    height: '110px',
                  }}
                  onMouseEnter={() => setHoveredBubble(3)}
                  onMouseLeave={() => setHoveredBubble(null)}
                >
                  <div 
                    className={`w-full h-full rounded-full bg-gradient-to-br ${requestsData[3].gradient} flex items-center justify-center transition-all duration-300 relative`}
                    style={{
                      transform: hoveredBubble === 3 ? 'scale(1.1)' : 'scale(1)',
                      opacity: hoveredBubble === null || hoveredBubble === 3 ? 0.9 : 0.3,
                      boxShadow: hoveredBubble === 3 ? `0 0 40px ${requestsData[3].color}` : `0 10px 30px rgba(0,0,0,0.3)`,
                    }}
                  >
                    <div className="text-center px-2">
                      <div className="text-white font-bold text-2xl mb-1">{requestsData[3].percentage}%</div>
                      <div className="text-white/90 font-semibold text-[10px]">{requestsData[3].nameEn}</div>
                    </div>
                    {hoveredBubble === 3 && (
                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="text-white font-semibold text-xs">{requestsData[3].name}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bubble 5 - Fifth (8%) - Bottom Right */}
                <div
                  className="absolute cursor-pointer transition-all duration-500 group"
                  style={{
                    top: '68%',
                    left: '75%',
                    width: '110px',
                    height: '110px',
                  }}
                  onMouseEnter={() => setHoveredBubble(4)}
                  onMouseLeave={() => setHoveredBubble(null)}
                >
                  <div 
                    className={`w-full h-full rounded-full bg-gradient-to-br ${requestsData[4].gradient} flex items-center justify-center transition-all duration-300 relative`}
                    style={{
                      transform: hoveredBubble === 4 ? 'scale(1.1)' : 'scale(1)',
                      opacity: hoveredBubble === null || hoveredBubble === 4 ? 0.9 : 0.3,
                      boxShadow: hoveredBubble === 4 ? `0 0 40px ${requestsData[4].color}` : `0 10px 30px rgba(0,0,0,0.3)`,
                    }}
                  >
                    <div className="text-center px-2">
                      <div className="text-white font-bold text-2xl mb-1">{requestsData[4].percentage}%</div>
                      <div className="text-white/90 font-semibold text-[10px]">{requestsData[4].nameEn}</div>
                    </div>
                    {hoveredBubble === 4 && (
                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="text-white font-semibold text-xs">{requestsData[4].name}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bubble 6 - Smallest (6%) - Top Right */}
                <div
                  className="absolute cursor-pointer transition-all duration-500 group"
                  style={{
                    top: '22%',
                    left: '78%',
                    width: '95px',
                    height: '95px',
                  }}
                  onMouseEnter={() => setHoveredBubble(5)}
                  onMouseLeave={() => setHoveredBubble(null)}
                >
                  <div 
                    className={`w-full h-full rounded-full bg-gradient-to-br ${requestsData[5].gradient} flex items-center justify-center transition-all duration-300 relative`}
                    style={{
                      transform: hoveredBubble === 5 ? 'scale(1.1)' : 'scale(1)',
                      opacity: hoveredBubble === null || hoveredBubble === 5 ? 0.9 : 0.3,
                      boxShadow: hoveredBubble === 5 ? `0 0 40px ${requestsData[5].color}` : `0 10px 30px rgba(0,0,0,0.3)`,
                    }}
                  >
                    <div className="text-center px-2">
                      <div className="text-white font-bold text-xl mb-1">{requestsData[5].percentage}%</div>
                      <div className="text-white/90 font-semibold text-[9px]">{requestsData[5].nameEn}</div>
                    </div>
                    {hoveredBubble === 5 && (
                      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-800 border border-slate-600 rounded-lg px-3 py-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="text-white font-semibold text-xs">{requestsData[5].name}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Legend & Stats */}
            <div className="mt-8 space-y-4">
              {/* Legend */}
              <div className="flex flex-wrap gap-4 justify-center pb-6 border-b border-slate-700">
                {requestsData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 cursor-pointer group"
                    onMouseEnter={() => setHoveredBubble(index)}
                    onMouseLeave={() => setHoveredBubble(null)}
                  >
                    <div
                      className="w-3 h-3 rounded-full transition-transform"
                      style={{
                        backgroundColor: item.color,
                        transform: hoveredBubble === index ? 'scale(1.4)' : 'scale(1)',
                      }}
                    />
                    <span className={`text-xs transition-colors ${hoveredBubble === index ? 'text-white font-semibold' : 'text-slate-400'}`}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                  <div className="text-slate-400 text-xs mb-1">Total Categories</div>
                  <div className="text-white font-bold text-2xl">6</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                  <div className="text-slate-400 text-xs mb-1">Respondents</div>
                  <div className="text-white font-bold text-2xl">130+</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
                  <div className="text-slate-400 text-xs mb-1">Top Request</div>
                  <div className="text-white font-bold text-lg">Networks 36%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implemented Features */}
        <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-2 border-green-600/50 rounded-2xl p-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-900/40 border border-green-600/50 rounded-xl mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-semibold">All Requests Implemented</span>
            </div>
            <h3 className="text-white mb-2 text-2xl">Implemented Features</h3>
            <p className="text-slate-300">
              We listened to our users and implemented all requested features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {implementedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-green-700/30 rounded-xl p-5 hover:border-green-500 hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white mb-2 font-semibold">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-green-700/50">
            <p className="text-slate-200 text-center leading-relaxed">
              Based on user requests, we created a <span className="text-white font-semibold">full-featured</span> cryptocurrency application 
              that covers all major user needs — from <span className="text-white font-semibold">multi-network support</span> to 
              <span className="text-white font-semibold"> Web3 integration</span> and <span className="text-white font-semibold">social login</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
