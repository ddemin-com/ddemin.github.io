import { DollarSign, TrendingUp, Globe } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CryptoBusinessModel() {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  const revenueData = [
    { name: 'Swaps DEX', percentage: 28, color: '#a3e635' },
    { name: 'Fiat bridge', percentage: 21, color: '#84cc16' },
    { name: 'Swaps CEX (Haqqex)', percentage: 17, color: '#65a30d' },
    { name: 'Earn (Staking, Liquidity)', percentage: 11, color: '#4d7c0f' },
    { name: 'P2P provided by CEX (Haqqex)', percentage: 9, color: '#3f6212' },
    { name: 'AI Strategy', percentage: 8, color: '#365314' },
    { name: 'Token Issuance', percentage: 4, color: '#1a2e05' },
    { name: 'Merchant service', percentage: 3, color: '#0f1a02' },
  ];

  return (
    <>
      {/* Revenue Model Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-white mb-4 text-4xl flex items-center gap-3">
              <span className="text-3xl">💰</span>
              Monetization Model
            </h2>
            <p className="text-slate-400 text-lg">
              Diversified revenue model with multiple sources
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Revenue Chart */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Center Circle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <div className="w-40 h-40 bg-slate-900 border-4 border-slate-700 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      {hoveredSegment !== null ? (
                        <>
                          <div className="text-white mb-1 text-sm">{revenueData[hoveredSegment].name.split(' ')[0]}</div>
                          <div className="text-green-400 text-2xl">{revenueData[hoveredSegment].percentage}%</div>
                        </>
                      ) : (
                        <>
                          <div className="text-white mb-1">REVENUE</div>
                          <div className="text-white">MODEL</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* SVG Donut Chart */}
                <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
                  {revenueData.map((item, index) => {
                    const offset = revenueData.slice(0, index).reduce((sum, d) => sum + d.percentage, 0);
                    const isHovered = hoveredSegment === index;
                    return (
                      <circle
                        key={index}
                        cx="100"
                        cy="100"
                        r="70"
                        fill="none"
                        stroke={item.color}
                        strokeWidth={isHovered ? "45" : "40"}
                        strokeDasharray={`${item.percentage} ${100 - item.percentage}`}
                        strokeDashoffset={`-${offset}`}
                        className="transition-all duration-300 cursor-pointer"
                        style={{ filter: isHovered ? 'brightness(1.3)' : 'brightness(1)' }}
                        onMouseEnter={() => setHoveredSegment(index)}
                        onMouseLeave={() => setHoveredSegment(null)}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="space-y-3">
              {revenueData.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 bg-slate-800/30 border rounded-lg transition-all duration-300 cursor-pointer ${
                    hoveredSegment === index 
                      ? 'border-lime-500 bg-slate-800/50 shadow-lg' 
                      : 'border-slate-700'
                  }`}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-sm transition-transform duration-300" 
                      style={{ 
                        backgroundColor: item.color,
                        transform: hoveredSegment === index ? 'scale(1.2)' : 'scale(1)'
                      }}
                    ></div>
                    <span className={`transition-colors ${hoveredSegment === index ? 'text-white' : 'text-slate-300'}`}>
                      {item.name}
                    </span>
                  </div>
                  <span className={`font-semibold transition-colors ${hoveredSegment === index ? 'text-lime-400' : 'text-white'}`}>
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Audience Section */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-white mb-4 text-4xl flex items-center gap-3">
              <Globe className="w-10 h-10 text-green-400" />
              Our Audience
            </h2>
            <p className="text-slate-400 text-lg">
              Market entry strategy and target regions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Strategy Steps */}
            <div className="flex flex-col gap-6 h-full">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 flex-1 flex items-center">
                <div className="flex items-start gap-4 w-full">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-green-500/50">
                    <span className="text-green-400">1</span>
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Step 1</h3>
                    <p className="text-slate-300">
                      Currently focusing on Haqqex top countries
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 flex-1 flex items-center">
                <div className="flex items-start gap-4 w-full">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-green-500/50">
                    <span className="text-green-400">2</span>
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Step 2</h3>
                    <p className="text-slate-300">
                      Further expansion in MENA and Asia regions
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 flex-1 flex items-center">
                <div className="flex items-start gap-4 w-full">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-green-500/50">
                    <span className="text-green-400">3</span>
                  </div>
                  <div>
                    <h3 className="text-white mb-2">Step 3</h3>
                    <p className="text-slate-300">
                      European countries with large Muslim populations, 
                      as well as Haqabi offers many features useful for non-Muslim 
                      investors (France, Germany, UK, Italy, Spain)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Countries */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 h-full flex flex-col justify-between">
              <div className="mb-6">
                <h3 className="text-white text-xl mb-2">Top Countries</h3>
                <p className="text-lime-400">Developing Muslim countries</p>
              </div>

              <div className="space-y-4 flex-1 flex flex-col justify-center">
                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg border border-slate-700/50 hover:border-lime-500/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-600 flex-shrink-0">
                      <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1663602532604-358d1c8d2086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWElMjBmbGFnfGVufDF8fHx8MTc3Mzc4NDQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Indonesia flag" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-slate-300">Indonesia</span>
                  </div>
                  <span className="text-white text-lg font-semibold">236M</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg border border-slate-700/50 hover:border-lime-500/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-600 flex-shrink-0">
                      <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1693141520831-f0466dd82cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWtpc3RhbiUyMGZsYWd8ZW58MXx8fHwxNzczNzg0NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Pakistan flag" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-slate-300">Pakistan</span>
                  </div>
                  <span className="text-white text-lg font-semibold">240M</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg border border-slate-700/50 hover:border-lime-500/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-600 flex-shrink-0">
                      <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1709545900940-f86b833d5704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGZsYWd8ZW58MXx8fHwxNzczNzg0NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="India flag" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-slate-300">India</span>
                  </div>
                  <span className="text-white text-lg font-semibold">200M</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg border border-slate-700/50 hover:border-lime-500/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-600 flex-shrink-0">
                      <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1664333396993-bc1ddbc46c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYW5nbGFkZXNoJTIwZmxhZ3xlbnwxfHx8fDE3NzM3ODQ0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Bangladesh flag" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-slate-300">Bangladesh</span>
                  </div>
                  <span className="text-white text-lg font-semibold">150M</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg border border-slate-700/50 hover:border-lime-500/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-600 flex-shrink-0">
                      <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1668993656053-f02798d671e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhJTIwZmxhZ3xlbnwxfHx8fDE3NzM3ODQ0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Nigeria flag" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-slate-300">Nigeria</span>
                  </div>
                  <span className="text-white text-lg font-semibold">97M</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg border border-slate-700/50 hover:border-lime-500/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-600 flex-shrink-0">
                      <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1663602534700-bcb4b7d603c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFZ3lwdCUyMGZsYWd8ZW58MXx8fHwxNzczNzg0NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Egypt flag" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-slate-300">Egypt</span>
                  </div>
                  <span className="text-white text-lg font-semibold">90M</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg border border-slate-700/50 hover:border-lime-500/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-600 flex-shrink-0">
                      <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1555223302-e369e66cf4e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUdXJrZXklMjBmbGFnfGVufDF8fHx8MTc3Mzc4NDQ2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Turkey flag" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-slate-300">Turkey</span>
                  </div>
                  <span className="text-white text-lg font-semibold">84M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
