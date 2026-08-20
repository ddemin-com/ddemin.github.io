import { useState } from 'react';
import { Monitor, Maximize2, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import resultImage1 from 'figma:asset/b5fb3fa2daf13c7895cde54af764f924669b157a.png';
import resultImage2 from 'figma:asset/1904b0dcb7fc4fcac9e474f3440c426e281f9c34.png';

export function Results() {
  const [selectedScreen, setSelectedScreen] = useState<number | null>(null);

  const screens = [
    {
      id: 0,
      title: "Search and Filtering",
      description: "Powerful search across all virtual machine parameters with instant results",
      image: resultImage1,
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 1,
      title: "List Management",
      description: "Flexible column display and data customization for different roles",
      image: resultImage2,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Regional Settings",
      description: "VM filtering and management by region with detailed analytics",
      image: resultImage2,
      color: "from-cyan-600 to-teal-600"
    }
  ];

  return (
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
            15px 15px, 
            55px 75px, 
            95px 35px, 
            35px 115px
          `
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12">
          <h2 className="text-white mb-6 text-4xl">Results</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            The platform was successfully launched and is actively used by Azure teams. The interface is adapted 
            for different roles and usage scenarios.
          </p>
        </div>

        {/* Screens Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {screens.map((screen, index) => (
            <div
              key={screen.id}
              className="group relative"
            >
              {/* Device Frame */}
              <div className="relative">
                {/* Monitor Frame */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-cyan-900/50">
                  {/* Monitor Top Bar */}
                  <div className="bg-slate-950 rounded-t-xl px-3 py-2 flex items-center gap-2 border-b border-slate-800">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="inline-block bg-slate-800/50 rounded px-3 py-0.5">
                        <span className="text-xs text-slate-400">MS Spot Editor</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedScreen(screen.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-slate-800 rounded p-1"
                    >
                      <Maximize2 className="w-3 h-3 text-slate-400" />
                    </button>
                  </div>

                  {/* Screen Content */}
                  <div 
                    className="relative bg-black rounded-b-xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedScreen(screen.id)}
                  >
                    <div className="aspect-video relative">
                      <ImageWithFallback
                        src={screen.image}
                        alt={screen.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Screen Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${screen.color} flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300`}>
                          <Maximize2 className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Monitor Stand */}
                  <div className="flex justify-center mt-3">
                    <div className="relative">
                      {/* Stand Neck */}
                      <div className="w-12 h-8 bg-gradient-to-b from-slate-700 to-slate-800 rounded-t-lg mx-auto"></div>
                      {/* Stand Base */}
                      <div className="w-20 h-2 bg-gradient-to-b from-slate-800 to-slate-900 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Number Badge */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${screen.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-10`}>
                  <span className="text-white text-xl">{index + 1}</span>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${screen.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h3 className="text-white text-xl mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {screen.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedScreen !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedScreen(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedScreen(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Content */}
          <div className="max-w-7xl w-full animate-in zoom-in-95 duration-300">
            {/* Browser Frame */}
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-2xl border-2 border-slate-700 overflow-hidden">
              {/* Browser Header */}
              <div className="bg-slate-950 px-4 py-3 flex items-center gap-3 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 bg-slate-800/50 rounded-lg px-4 py-2 flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-400">MS Spot Editor - {screens[selectedScreen].title}</span>
                  </div>
                </div>
              </div>

              {/* Screen Image */}
              <div className="relative bg-black">
                <ImageWithFallback
                  src={screens[selectedScreen].image}
                  alt={screens[selectedScreen].title}
                  className="w-full h-auto"
                />
                {/* Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Info Below */}
            <div className="mt-6 text-center">
              <h3 className="text-white text-3xl mb-3">{screens[selectedScreen].title}</h3>
              <p className="text-slate-400 text-lg max-w-3xl mx-auto">{screens[selectedScreen].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
