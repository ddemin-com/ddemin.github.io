import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import prototypeImage1 from 'figma:asset/ad0ccdcf3fa96d53f1834ebf1656d22084d30fb2.png';
import prototypeImage2 from 'figma:asset/41c163ce1944d3d5441c40cd47e70b13774bc7b9.png';

export function LoFiPrototypes() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const prototypes = [
    {
      id: 0,
      image: prototypeImage1,
      title: "First Low-level Prototypes",
      description: "Table and card view data representation options"
    },
    {
      id: 1,
      image: prototypeImage2,
      title: "Hardware and VM Editor",
      description: "Interface development for different roles and scenarios"
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
            20px 20px, 
            60px 80px, 
            100px 40px, 
            40px 120px
          `
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-white mb-10 text-4xl">Lo-Fi Prototypes</h2>

        <div className="space-y-12">
          {/* First Text Block */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8">
            <p className="text-slate-200 text-lg leading-relaxed">
              Based on research, we started designing the first low-level prototypes. Next step, 
              we created several different interactive prototypes for different flows depending on roles. And 
              tested them first within the team.
            </p>
          </div>

          {/* Prototype Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prototypes.map((prototype) => (
              <div
                key={prototype.id}
                onClick={() => setSelectedImage(prototype.id)}
                className="group relative bg-slate-800/50 border-2 border-slate-700 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/30 hover:scale-105"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={prototype.image}
                    alt={prototype.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-white text-sm">Click to enlarge</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-white text-xl mb-2">{prototype.title}</h3>
                  <p className="text-slate-400 text-sm">{prototype.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Second Text Block */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8">
            <p className="text-slate-200 text-lg leading-relaxed">
              The platform includes both a hardware editor and a virtual machine editor. For each 
              part of the ecosystem, in close cooperation with the development team, we worked through each user flow in 
              several variations. After approval of prototypes and logic, it was time for mid/high-level 
              wireframes.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-6xl w-full animate-in zoom-in-95 duration-300">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-2xl shadow-purple-900/50">
              <ImageWithFallback
                src={prototypes[selectedImage].image}
                alt={prototypes[selectedImage].title}
                className="w-full h-auto"
              />
            </div>

            {/* Info below image */}
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl mb-2">{prototypes[selectedImage].title}</h3>
              <p className="text-slate-400">{prototypes[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}