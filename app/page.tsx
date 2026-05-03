// app/page.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // LinkedIn profile link (updated with your specific URL)
  const linkedinUrl = "https://www.linkedin.com/in/saim-maqsood-8b27a737a";
  const githubUrl = "https://github.com/Saim-Maqsood-22";

  const carouselSlides = [
    {
      id: 0,
      title: 'THE UNIVERSE EYE',
      subtitle: 'ROLE CLARITY',
    },
    {
      id: 1,
      title: 'THE PROBLEM',
      subtitle: 'Why unclear roles weaken systems',
    },
    {
      id: 2,
      title: 'THE UNIVERSE EYE',
      subtitle: 'ROLE CLARITY · STRUCTURE',
    },
    {
      id: 3,
      title: 'THE UNIVERSE EYE',
      subtitle: 'ROLE CLARITY',
    },
  ];

  const nextSlide = useCallback((): void => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  }, [carouselSlides.length]);

  const prevSlide = useCallback((): void => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  }, [carouselSlides.length]);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0f1422] to-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-8 pb-2 border-b border-gray-800">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Saim Maqsood
            </h1>
            <p className="text-gray-400 text-sm mt-1">UI/UX Designer @ Elchai Group · Full-Stack Developer</p>
          </div>
          <div className="flex gap-4 text-cyan-300 text-sm">
            <a href="#gallery" className="hover:text-white transition flex items-center gap-1">
              <span>🎨</span> Gallery
            </a>
            <a href="#contact" className="hover:text-white transition flex items-center gap-1">
              <span>📧</span> Contact
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 to-gray-900 border border-gray-800 p-6 md:p-8 mb-12 shadow-2xl">
          <div className="absolute right-0 top-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-500/30">
                <span className="mr-1">🎨</span> Current Designer @ Elchai
              </span>
              <span className="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/30">
                <span className="mr-1">⚡</span> UAE Immediate Joiner
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Designing governance & role clarity systems</h2>
            <p className="text-gray-300 max-w-2xl text-md leading-relaxed">
              At Elchai Group, I craft high-impact visual narratives that transform abstract structural concepts into compelling design stories. Below are my recent works — including the <span className="text-cyan-300 font-medium">UniversEyes</span> campaign, where design meets accountability architecture.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#gallery" className="bg-cyan-600 hover:bg-cyan-500 transition px-5 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
                <span className="mr-1">↓</span> View designs
              </a>
              <a href="#contact" className="border border-gray-600 hover:border-cyan-400 px-5 py-2 rounded-full text-gray-300 text-sm transition">
                <span className="mr-1">📧</span> Contact
              </a>
            </div>
          </div>
        </div>

        {/* Currently Crafting at Elchai Group */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl p-6 border border-cyan-500/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🎨</span>
              <div>
                <h2 className="text-2xl font-bold text-white">Currently Crafting at Elchai Group</h2>
                <p className="text-cyan-400 text-sm">UI/UX Designer · Feb 2026 – Present</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                <span className="text-3xl block mb-2">🎯</span>
                <h3 className="font-semibold text-white mb-2">Responsive Prototypes</h3>
                <p className="text-gray-400 text-sm">Creating mobile-first, responsive designs in Figma that translate seamlessly to development.</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                <span className="text-3xl block mb-2">🤝</span>
                <h3 className="font-semibold text-white mb-2">Cross-Team Collaboration</h3>
                <p className="text-gray-400 text-sm">Working closely with senior management and cross-functional teams to deliver user-centered solutions.</p>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                <span className="text-3xl block mb-2">⚡</span>
                <h3 className="font-semibold text-white mb-2">Design-to-Dev Handoff</h3>
                <p className="text-gray-400 text-sm">Ensuring smooth development process with organized Figma files and design systems.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SINGLE IMAGE POST - UNIVERS EYES (Logo removed, text kept) */}
        <div id="gallery" className="mb-16 scroll-mt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-indigo-500 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">✦ Featured design — UniversEyes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-[#111827] to-[#0f172a] rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 border border-gray-800">
            <div className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="p-6 md:p-8">
                <div className="text-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold">Trust is not only earned by people</h3>
                  <p className="text-cyan-400 text-lg mt-2">It is reinforced by structure.</p>
                  <div className="mt-6 p-4 md:p-6 bg-black/40 rounded-lg border border-gray-700">
                    <p className="text-gray-200 text-sm md:text-base italic leading-relaxed">
                      "When governance is embedded and records are transparent, trust is no longer a promise — it is an outcome."
                    </p>
                  </div>
                  <p className="text-cyan-400 text-sm mt-4 font-mono">UniversEyes · theuniverseye.com</p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-cyan-400 text-xl">🏆</span>
                <span className="text-cyan-400 text-sm font-mono">Single post · Social card</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Trust as structure</h3>
              <p className="text-gray-300 leading-relaxed">
                A minimalist design exploring how structural governance builds organizational trust. The visual language emphasizes clarity and hierarchy.
              </p>
              <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-cyan-400">🎨</span> Figma design · Brand campaign for <span className="text-cyan-300">UniversEyes · theuniverseye.com</span>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">Typography focus</span>
                <span className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">Minimalist</span>
                <span className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">Corporate identity</span>
              </div>
            </div>
          </div>
        </div>

        {/* CAROUSEL SECTION - ROLE CLARITY FRAMEWORK */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">🎠 Carousel series · Role Clarity Framework</h2>
            </div>
            <span className="text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-full">
              <span className="mr-1">📸</span> 4 slides · interactive carousel
            </span>
          </div>

          <div className="bg-gradient-to-br from-[#111827] to-[#0f172a] rounded-2xl p-4 md:p-6 border border-gray-800">
            <div className="relative overflow-hidden rounded-xl">
              <div className="relative min-h-[500px] md:min-h-[580px] bg-black/30 rounded-xl">
                
                {/* Slide 0 - Role Clarity */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 md:p-8 shadow-2xl h-full overflow-auto">
                    <div className="flex justify-between items-start">
                      <span className="text-cyan-300 text-sm font-mono">01/04</span>
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <span className="text-indigo-400 text-xl">🏛️</span>
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4">U: THE UNIVERSE EYE</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-indigo-400 my-4"></div>
                    <p className="text-cyan-200 font-semibold text-lg">ROLE CLARITY</p>
                    <div className="grid grid-cols-1 gap-4 mt-6">
                      <div className="bg-black/40 p-4 rounded-xl border-l-4 border-cyan-500">
                        <span className="text-white font-bold">✦ Authority</span>
                        <p className="text-gray-300 text-sm mt-1">Who makes the call</p>
                      </div>
                      <div className="bg-black/40 p-4 rounded-xl border-l-4 border-emerald-500">
                        <span className="text-white font-bold">✦ Responsibility</span>
                        <p className="text-gray-300 text-sm mt-1">Who owns the outcome</p>
                      </div>
                      <div className="bg-black/40 p-4 rounded-xl border-l-4 border-amber-500">
                        <span className="text-white font-bold">✦ Accountability</span>
                        <p className="text-gray-300 text-sm mt-1">Who answers for both</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs mt-6 text-right">UniversEyes · theuniverseye.com →</p>
                  </div>
                </div>

                {/* Slide 1 - The Problem */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-8 shadow-2xl h-full overflow-auto">
                    <div className="flex justify-between items-start">
                      <span className="text-cyan-300 text-sm font-mono">02/04</span>
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <span className="text-purple-400 text-xl">⚠️</span>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">THE PROBLEM</h2>
                    <p className="text-cyan-200 text-xl font-semibold mt-1">Why unclear roles weaken systems</p>
                    <div className="space-y-4 mt-6">
                      <div className="flex gap-3 items-start">
                        <span className="text-cyan-400 font-bold min-w-[30px]">01</span>
                        <p className="text-gray-300 text-sm leading-relaxed">When authority is shared without definition, decisions stall and ownership dissolves.</p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <span className="text-cyan-400 font-bold min-w-[30px]">02</span>
                        <p className="text-gray-300 text-sm leading-relaxed">When responsibility is assumed rather than assigned, critical gaps form silently.</p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <span className="text-cyan-400 font-bold min-w-[30px]">03</span>
                        <p className="text-gray-300 text-sm leading-relaxed">When both overlap without structure, accountability becomes impossible to trace.</p>
                      </div>
                    </div>
                    <div className="mt-6 italic text-gray-300 border-l-2 border-cyan-500 pl-3">
                      Ambiguity is not a people problem. It is a design problem.
                    </div>
                    <p className="text-gray-500 text-xs mt-4">UniversEyes · theuniverseye.com</p>
                  </div>
                </div>

                {/* Slide 2 - Structure */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 md:p-8 shadow-2xl h-full overflow-auto">
                    <div className="flex justify-between items-start">
                      <span className="text-cyan-300 text-sm font-mono">03/04</span>
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 text-xl">⚙️</span>
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white">U= THE UNIVERSE EYE</h2>
                    <p className="text-indigo-300 font-semibold text-lg mt-1">ROLE CLARITY · STRUCTURE</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="bg-cyan-500/10 p-4 rounded-xl">
                        <span className="block text-white font-bold">AUTHORITY</span>
                        <span className="text-xs text-gray-300 mt-1 block">Defines who decides, sets the scope of action</span>
                      </div>
                      <div className="bg-emerald-500/10 p-4 rounded-xl">
                        <span className="block text-white font-bold">RESPONSIBILITY</span>
                        <span className="text-xs text-gray-300 mt-1 block">Defines who delivers, owns the outcome</span>
                      </div>
                    </div>
                    <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/30">
                      <span className="block text-amber-300 font-bold">ACCOUNTABILITY</span>
                      <span className="text-xs text-gray-300">Answers for both</span>
                    </div>
                    <p className="text-gray-300 text-sm italic mt-4">
                      Role boundaries are not bureaucratic constraints. They are the structural conditions under which accountability becomes possible.
                    </p>
                  </div>
                </div>

                {/* Slide 3 - Closing */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    currentSlide === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-2xl h-full overflow-auto">
                    <div className="flex justify-between items-start">
                      <span className="text-cyan-300 text-sm font-mono">04/04</span>
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <span className="text-amber-400 text-xl">✨</span>
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-cyan-300 via-indigo-400 to-amber-300 bg-clip-text text-transparent mt-2">
                      U • THE UNIVERSE EYE
                    </h2>
                    <div className="h-px bg-gradient-to-r from-cyan-500 via-indigo-500 to-amber-500 my-4"></div>
                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed">“Clarity is not a preference. It is the architecture of accountability.”</p>
                    <div className="flex flex-wrap gap-3 mt-6">
                      <div className="px-4 py-2 rounded-full text-sm font-mono border border-cyan-500/50 bg-cyan-500/20 text-cyan-300">
                        PRINCIPLE → Structure
                      </div>
                      <div className="px-4 py-2 rounded-full text-sm font-mono border border-indigo-500/50 bg-indigo-500/20 text-indigo-300">
                        FOUNDATION → Authority
                      </div>
                      <div className="px-4 py-2 rounded-full text-sm font-mono border border-amber-500/50 bg-amber-500/20 text-amber-300">
                        OUTCOME → Accountability
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mt-5">
                      Every system that holds does so because someone knew exactly what they owned.
                    </p>
                    <p className="text-gray-500 text-right text-xs mt-4">UniversEyes · theuniverseye.com</p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-xl bg-black/60 hover:bg-cyan-600 transition-all"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-xl bg-black/60 hover:bg-cyan-600 transition-all"
                  aria-label="Next slide"
                >
                  →
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-3 mt-6 mb-2">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`transition-all rounded-full cursor-pointer ${
                      currentSlide === idx ? 'w-8 h-2 bg-cyan-400' : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="text-center text-gray-500 text-xs mt-3">
              <span className="mr-1">🖱️</span> Click arrows or dots — carousel designed for UniversEyes campaign
            </div>
          </div>
          <div className="mt-6 text-gray-400 text-sm flex justify-between items-center flex-wrap gap-3">
            <div>
              <span className="text-cyan-400 mr-1">🏷️</span>
              Design system: Role Clarity campaign | Visual identity by Saim Maqsood @Elchai Group
            </div>
            <div className="flex gap-2">
              <span className="bg-gray-800 rounded-full px-3 py-1 text-xs">Figma prototype</span>
              <span className="bg-gray-800 rounded-full px-3 py-1 text-xs">Governance design</span>
              <span className="bg-gray-800 rounded-full px-3 py-1 text-xs">Brand identity</span>
            </div>
          </div>
        </div>

        {/* Technical & Design Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-gray-900 rounded-2xl shadow-md p-6 border border-gray-800">
            <h2 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-3 mb-5 flex items-center gap-2">
              <span className="text-cyan-500">{'</>'}</span> Technical & Design Skills
            </h2>
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">🎨 Design Tools</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Figma', 'Adobe XD', 'Responsive Design', 'Wireframing', 'Prototyping', 'UI/UX Principles', 'Design Systems'].map((skill) => (
                  <span key={skill} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:text-white transition-all duration-200 cursor-default border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">⚡ Development Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['ReactJS', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'React Native', 'Flutter', 'Expo', 'Django', 'Python', 'PostgreSQL / MongoDB', 'Firebase', 'Git/GitHub', 'RESTful APIs', 'Data Structures & Algorithms', 'OOP'].map((skill) => (
                  <span key={skill} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:text-white transition-all duration-200 cursor-default border border-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-900 rounded-2xl shadow-md p-6 border border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">🚀</span>
              <h3 className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Immediate Availability</h3>
            </div>
            <p className="text-gray-300 text-sm">✅ Available for immediate join in UAE — no visa processing overhead, ready to start within 24 hours.</p>
            <hr className="my-4 border-gray-800" />
            <div><span className="text-amber-400 mr-2">🏆</span> <span className="font-semibold text-white">Certifications:</span> <span className="text-gray-300">Google Cybersecurity Professional Certificate V2</span></div>
            <div className="mt-3 text-sm"><span className="text-indigo-400 mr-2">🎓</span> <span className="text-gray-300">BSc Computer Science (2025) — University of Management & Technology, Lahore</span></div>
            <div className="mt-4 bg-gray-800/50 rounded-lg p-3 shadow-inner border border-gray-700">
              <span className="text-green-400 mr-2">📞</span> <strong className="text-white">Contact UAE:</strong> <span className="text-gray-300">+971 54 4825957</span> &nbsp;|&nbsp; <strong className="text-white">Pakistan:</strong> <span className="text-gray-300">+92 315 1455522</span>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-14">
          <div className="flex items-center gap-2 border-b-2 border-gray-800 pb-3 mb-6">
            <span className="text-3xl">💼</span>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Work Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-cyan-900/20 p-5 rounded-xl shadow-sm border-l-4 border-cyan-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-xl font-bold text-cyan-400">ELCHAI GROUP</h3>
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">Feb 2026 – Present</span>
              </div>
              <p className="text-cyan-500 font-medium text-sm">UI/UX Designer (Current Role)</p>
              <ul className="list-disc list-inside text-gray-400 text-sm mt-3 space-y-2">
                <li>Designing responsive prototypes using Figma, ensuring smooth handoff for development teams</li>
                <li>Collaborating with senior management and cross-functional teams to deliver user-centered designs</li>
                <li>Creating design systems and component libraries for consistent UI across multiple projects</li>
                <li>Conducting user research and implementing feedback-driven design iterations</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-5 rounded-xl shadow-sm border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-xl font-bold text-purple-400">XDIMENSION SOLUTIONS</h3>
                <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">Nov 2025 – Feb 2026</span>
              </div>
              <p className="text-purple-500 font-medium text-sm">Flutter App Developer (Internship)</p>
              <ul className="list-disc list-inside text-gray-400 text-sm mt-3 space-y-1">
                <li>Built cross-platform mobile apps with Flutter ensuring seamless UI/UX.</li>
                <li>Integrated Firebase services for secure authentication and real-time data management.</li>
                <li>Participated in full software development lifecycle (SDLC) within an on-site team environment.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Design Portfolio Highlights */}
        <div className="mb-14">
          <div className="flex items-center gap-2 border-b-2 border-gray-800 pb-3 mb-6">
            <span className="text-3xl">🎨</span>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Design Portfolio Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                title: "Elchai Group - Design System",
                icon: "🎯",
                desc: "Developing a comprehensive design system and component library for consistent branding across all Elchai Group digital products.",
                tags: ["Figma", "Design System", "Component Library", "UI/UX"]
              },
              {
                title: "Responsive Web Prototypes",
                icon: "📱",
                desc: "Creating mobile-first, fully responsive web prototypes that adapt seamlessly across devices and screen sizes.",
                tags: ["Figma", "Responsive Design", "Wireframing", "Prototyping"]
              },
              {
                title: "Cross-Team Collaboration Projects",
                icon: "🤝",
                desc: "Working with developers and stakeholders to translate design concepts into functional, pixel-perfect implementations.",
                tags: ["Collaboration", "Design Handoff", "Agile", "User Testing"]
              }
            ].map((design, idx) => (
              <div key={idx} className="bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-800">
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-indigo-500"></div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{design.icon}</span>
                    <h3 className="text-xl font-bold text-white">{design.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">{design.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {design.tags.map(tag => (
                      <span key={tag} className="text-xs bg-gray-800 text-cyan-400 px-3 py-1.5 rounded-full font-medium border border-cyan-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Projects */}
        <div className="mb-14">
          <div className="flex items-center gap-2 border-b-2 border-gray-800 pb-3 mb-6">
            <span className="text-3xl">💻</span>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Development Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                title: "Courses - Flutter Cross-Platform App",
                period: "Nov 2025 - Feb 2026",
                desc: "Architecting a mobile courses interface with integrated Firebase authentication for secure user login and registration. Utilizing Git/GitHub for version control and managing open-source code contributions.",
                tags: ["Flutter", "Firebase Auth", "Git/GitHub"],
                icon: "📱"
              },
              {
                title: "Pour & Explore by Shazia",
                period: "Aug 2025 - Sept 2025",
                desc: "Developed a minimalistic, high-performance marketplace and portfolio for resin art using the Django framework. Engineered efficient backend logic and database schemas to manage dynamic product listings.",
                tags: ["Django", "PostgreSQL", "Python"],
                icon: "🎨"
              },
              {
                title: "Med Magic",
                period: "Nov 2024 - July 2025",
                desc: "Designed and deployed a modern full-stack e-commerce storefront utilizing Next.js for server-side rendering and enhanced SEO. Implemented responsive, component-based architecture for optimal performance.",
                tags: ["Next.js", "React", "Tailwind CSS"],
                icon: "🏥"
              },
              {
                title: "React Native / Flutter Suite",
                period: "Academic & Personal",
                desc: "Built cross-platform mobile applications with React Native and Flutter, integrating RESTful APIs, Firebase, and modern UI/UX principles for seamless user experiences across iOS and Android.",
                tags: ["React Native", "Flutter", "API Integration"],
                icon: "🚀"
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-800">
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-indigo-500"></div>
                <div className="p-5">
                  <div className="flex justify-between flex-wrap gap-2 items-start">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{project.icon}</span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                    <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">{project.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full font-medium border border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education + Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          <div className="lg:col-span-2 bg-gray-900 rounded-2xl shadow-sm p-6 border border-gray-800">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <span className="text-3xl">🎓</span> 
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-xl font-bold text-white">Bachelor of Computer Science</h3>
              <p className="text-gray-400">University of Management and Technology, Lahore | Graduated 2025</p>
              <p className="text-gray-400 text-sm mt-2">
                <span className="font-medium text-gray-300">Relevant Coursework:</span> Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming (OOP).
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <span className="bg-gray-800 px-3 py-1.5 rounded-full flex items-center gap-1 text-green-400 border border-green-900">
                <span>🔐</span> Google Cybersecurity Professional Certificate V2
              </span>
              <span className="bg-gray-800 px-3 py-1.5 rounded-full flex items-center gap-1 text-blue-400 border border-blue-900">
                <span>🐧</span> Linux Bash Scripting
              </span>
              <span className="bg-gray-800 px-3 py-1.5 rounded-full flex items-center gap-1 text-purple-400 border border-purple-900">
                <span>📊</span> Data Structures & Algorithms
              </span>
            </div>
          </div>
          
          <div id="contact" className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 border border-gray-800 text-white rounded-2xl p-6 shadow-xl">
            <h3 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <span>📧</span> Contact & Availability
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2"><span className="text-cyan-400">✉️</span> maqsoodsaim2002@gmail.com</p>
              <p className="flex items-center gap-2"><span className="text-cyan-400">📞</span> UAE: +971 54 4825957</p>
              <p className="flex items-center gap-2"><span className="text-cyan-400">📞</span> Pakistan: +92 315 1455522</p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">🔗</span> 
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  LinkedIn: Saim Maqsood
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">🐙</span> 
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  GitHub: Saim-Maqsood-22
                </a>
              </p>
              <div className="pt-2 border-t border-gray-800 mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 bg-gray-800 px-3 py-1.5 rounded-full text-sm text-cyan-400 border border-cyan-900">
                  <span>⚡</span> Available Immediately
                </span>
                <span className="inline-flex items-center gap-1 bg-gray-800 px-3 py-1.5 rounded-full text-sm text-indigo-400 border border-indigo-900">
                  <span>📍</span> Based in Dubai, UAE
                </span>
              </div>
              <p className="text-sm mt-3 flex items-center gap-1 text-gray-400"><span>⏰</span> Ready to start within 24h - full-time / contract</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8 mt-6">
          <div className="flex flex-wrap justify-center gap-6 mb-3">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors">
              <span>🐙</span> GitHub/Saim-Maqsood-22
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors">
              <span>🔗</span> LinkedIn/Saim-Maqsood
            </a>
            <span className="flex items-center gap-1 text-gray-400"><span>🏆</span> Google Cybersecurity Certified</span>
            <span className="flex items-center gap-1 text-gray-400"><span>🚀</span> UI/UX Designer & Full-Stack Developer</span>
          </div>
          <p>© 2026 Saim Maqsood — UI/UX Designer & Full‑Stack Developer | Currently crafting designs at Elchai Group | Available across Dubai & remote</p>
        </footer>
      </div>
    </div>
  );
}