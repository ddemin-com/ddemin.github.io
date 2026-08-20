import { TrendingUp, Users, Globe, Award, DollarSign, Activity, Zap, Target, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ImpactSectionProps {
  impacts: string[];
}

export function ImpactSection({ impacts }: ImpactSectionProps) {
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  // Key metrics for dashboard
  const keyMetrics = [
    { label: 'Users', value: 100000, icon: Users, color: 'blue', growth: '+900%', unit: '+', showUnitAfter: true },
    { label: 'Countries', value: 172, icon: Globe, color: 'emerald', growth: 'Global', unit: '' },
    { label: 'CSAT Score', value: 17.4, icon: Award, color: 'purple', growth: '+17.4%', unit: '%' },
    { label: 'DAU/MAU Growth', value: 25, icon: Activity, color: 'amber', growth: '+25%', unit: '%' },
    { label: 'Transactions/month', value: 600, icon: DollarSign, color: 'rose', growth: '$600K+', unit: 'K' },
    { label: 'Retention Rate', value: 72, icon: Target, color: 'cyan', growth: '72%', unit: '%' },
  ];

  // Timeline milestones
  const milestones = [
    { month: 'M1-3', title: 'MVP Launch', metric: '5K users', color: 'blue' },
    { month: 'M6-9', title: 'Multichain Swap', metric: '+17.4% CSAT', color: 'purple' },
    { month: 'M12-15', title: 'Gamification', metric: '+25% DAU/MAU', color: 'amber' },
    { month: 'M15-18', title: 'Global Scale', metric: '172 countries', color: 'emerald' },
  ];

  // Animated counter
  const AnimatedCounter = ({ end, duration = 2000, decimals = 0 }: { end: number, duration?: number, decimals?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(end * easeOutQuart);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}</span>;
  };

  // Circular progress
  const CircularProgress = ({ percentage, color, size = 80 }: { percentage: number, color: string, size?: number }) => {
    const [currentProgress, setCurrentProgress] = useState(0);
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (currentProgress / 100) * circumference;

    useEffect(() => {
      const timer = setTimeout(() => setCurrentProgress(percentage), 200);
      return () => clearTimeout(timer);
    }, [percentage]);

    const colorMap: { [key: string]: string } = {
      blue: '#60a5fa',
      emerald: '#34d399',
      purple: '#a78bfa',
      amber: '#fbbf24',
      rose: '#fb7185',
      cyan: '#22d3ee',
    };

    return (
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(148, 163, 184, 0.1)"
          strokeWidth="6"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colorMap[color]}
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
    );
  };

  // Growth chart simulation
  const GrowthChart = () => {
    const dataPoints = [
      { month: 'M1', users: '5K', value: 5 },
      { month: 'M3', users: '15K', value: 15 },
      { month: 'M6', users: '30K', value: 30 },
      { month: 'M9', users: '50K', value: 50 },
      { month: 'M12', users: '75K', value: 75 },
      { month: 'M18', users: '100K', value: 100 },
    ];

    const maxValue = 100;
    const chartHeight = 160;
    const chartWidth = 100;

    // Calculate positions
    const points = dataPoints.map((point, index) => ({
      ...point,
      x: (index / (dataPoints.length - 1)) * chartWidth,
      y: chartHeight - (point.value / maxValue) * chartHeight,
    }));

    // Create path
    const pathD = points.map((point, index) => 
      `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
    ).join(' ');

    return (
      <div className="relative">
        {/* Chart container */}
        <div className="relative bg-slate-900/30 rounded-lg p-4 pt-6">
          <svg 
            viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
            className="w-full h-24"
            preserveAspectRatio="none"
          >
            {/* Grid lines */}
            {[0, 50, 100].map((value) => {
              const y = chartHeight - (value / maxValue) * chartHeight;
              return (
                <line
                  key={value}
                  x1="0"
                  y1={y}
                  x2={chartWidth}
                  y2={y}
                  stroke="rgba(148, 163, 184, 0.1)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}

            {/* Line */}
            <path
              d={pathD}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            {/* Area under line */}
            <path
              d={`${pathD} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`}
              fill="url(#areaGradient)"
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Y-axis labels */}
          <div className="absolute left-0 top-6 bottom-0 flex flex-col justify-between text-xs text-slate-500 pr-2">
            <span>100K</span>
            <span>50K</span>
            <span>0</span>
          </div>
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between px-4 mt-2">
          {dataPoints.map((point, index) => (
            <div 
              key={index}
              className="text-xs text-slate-500"
            >
              {point.month}
            </div>
          ))}
        </div>
      </div>
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 2));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-slate-900 to-slate-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-3 flex items-center justify-center gap-3">
            <Activity className="w-9 h-9 text-blue-400" />
            Project Analytics
          </h2>
          <p className="text-slate-400">
            Measurable impact of design decisions on business metrics
          </p>
        </div>

        {/* Key Metrics Grid - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {keyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const isActive = activeMetric === index;
            
            return (
              <div
                key={index}
                className={`relative bg-slate-800/50 border ${
                  isActive ? `border-${metric.color}-500` : 'border-slate-700'
                } rounded-xl p-4 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg group`}
                onMouseEnter={() => setActiveMetric(index)}
                onMouseLeave={() => setActiveMetric(null)}
                style={{
                  animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg mb-3 bg-${metric.color}-500/20 text-${metric.color}-400 transition-transform duration-300 ${
                  isActive ? 'scale-110' : ''
                }`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Value */}
                <div className={`font-bold mb-1 text-${metric.color}-400 transition-all duration-300`} style={{ fontSize: '1.5rem', lineHeight: '1' }}>
                  <AnimatedCounter 
                    end={metric.value} 
                    decimals={metric.value < 100 && metric.unit === '%' ? 1 : 0}
                  />
                  {metric.unit && (metric.showUnitAfter ? ` ${metric.unit}` : metric.unit)}
                </div>

                {/* Label */}
                <div className="text-slate-400 text-xs mb-2">{metric.label}</div>

                {/* Growth badge */}
                <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs bg-${metric.color}-500/10 text-${metric.color}-400`}>
                  <Zap className="w-3 h-3" />
                  {metric.growth}
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-${metric.color}-500/5 blur-xl -z-10`} />
              </div>
            );
          })}
        </div>

        {/* Two column layout for charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Growth Chart */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <h3 className="text-white text-sm">User Base Growth</h3>
            </div>
            <GrowthChart />
          </div>

          {/* Circular Progress Metrics */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-purple-400" />
              <h3 className="text-white text-sm">Key Metrics</h3>
            </div>
            <div className="flex items-center justify-center gap-12 mt-8">
              <div className="text-center">
                <div className="relative inline-block">
                  <CircularProgress percentage={85} color="emerald" size={110} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-emerald-400 font-bold text-lg">85%</span>
                  </div>
                </div>
                <div className="text-slate-400 text-xs mt-3">Adoption</div>
              </div>
              <div className="text-center">
                <div className="relative inline-block">
                  <CircularProgress percentage={72} color="cyan" size={110} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-lg">72%</span>
                  </div>
                </div>
                <div className="text-slate-400 text-xs mt-3">Retention</div>
              </div>
              <div className="text-center">
                <div className="relative inline-block">
                  <CircularProgress percentage={99} color="amber" size={110} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-amber-400 font-bold text-lg">4.95</span>
                    <div className="flex gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-slate-400 text-xs mt-3">Store Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-amber-400" />
            <h3 className="text-white">Achievement Timeline</h3>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-slate-700" />
            <div 
              className="absolute top-5 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 transition-all duration-2000"
              style={{ width: `${progress}%` }}
            />

            {/* Milestones */}
            <div className="relative flex justify-between">
              {milestones.map((milestone, index) => {
                const colorMap: { [key: string]: string } = {
                  blue: 'border-blue-500 bg-blue-500/20 text-blue-400',
                  purple: 'border-purple-500 bg-purple-500/20 text-purple-400',
                  amber: 'border-amber-500 bg-amber-500/20 text-amber-400',
                  emerald: 'border-emerald-500 bg-emerald-500/20 text-emerald-400',
                };

                return (
                  <div 
                    key={index} 
                    className="flex flex-col items-center group cursor-pointer"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.2 + 0.5}s both`,
                    }}
                  >
                    {/* Dot */}
                    <div className={`w-10 h-10 rounded-full border-2 ${colorMap[milestone.color]} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-125 z-10`}>
                      <div className="w-2 h-2 rounded-full bg-current" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <div className="text-slate-400 text-xs mb-1">{milestone.month}</div>
                      <div className="text-white text-sm mb-1">{milestone.title}</div>
                      <div className={`text-xs ${colorMap[milestone.color].split(' ')[2]}`}>
                        {milestone.metric}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes barGrowth {
          from { height: 0; }
          to { height: 100%; }
        }
        @keyframes shine {
          from { left: -100%; }
          to { left: 100%; }
        }
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }
        @keyframes expandPulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }
        @keyframes shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}