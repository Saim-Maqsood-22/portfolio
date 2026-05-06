// app/page.tsx
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [showEmailPopup, setShowEmailPopup] = useState<boolean>(false);


  // Contact information
  const linkedinUrl = "https://www.linkedin.com/in/saim-maqsood-8b27a737a";
  const githubUrl = "https://github.com/Saim-Maqsood-22";
  const emailAddress = "maqsoodsaim2002@gmail.com";

  // Email handler function
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${emailAddress}?subject=Portfolio%20Inquiry%20from%20Your%20Portfolio&body=Hello%20Saim%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20with%20you.%0A%0ABest%20regards%2C`;

    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    setTimeout(() => {
      setShowEmailPopup(true);
      setTimeout(() => setShowEmailPopup(false), 5000);
    }, 500);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    alert('Email address copied to clipboard!');
    setShowEmailPopup(false);
  };

  // Carousel images (image2, image3, image4, image5)
  const carouselSlides = [
    {
      id: 0,
      title: 'U: THE UNIVERSE EYE',
      subtitle: 'ROLE CLARITY',
      image: '/images/image2.png',
    },
    {
      id: 1,
      title: 'THE PROBLEM',
      subtitle: 'Why unclear roles weaken systems',
      image: '/images/image3.png',
    },
    {
      id: 2,
      title: 'U= THE UNIVERSE EYE',
      subtitle: 'ROLE CLARITY · STRUCTURE',
      image: '/images/image4.png',
    },
    {
      id: 3,
      title: 'U • THE UNIVERSE EYE',
      subtitle: 'ROLE CLARITY',
      image: '/images/image5.png',
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

        {/* Email Popup Notification */}
        {showEmailPopup && (
          <div className="fixed bottom-4 right-4 z-50 bg-gray-900 border border-cyan-500 rounded-lg p-4 shadow-xl animate-slide-up">
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 text-2xl">✉️</span>
              <div>
                <p className="text-white text-sm">Email client didn't open?</p>
                <button
                  onClick={copyEmailToClipboard}
                  className="text-cyan-400 text-xs hover:text-cyan-300 underline mt-1"
                >
                  Click here to copy {emailAddress}
                </button>
              </div>
              <button
                onClick={() => setShowEmailPopup(false)}
                className="text-gray-500 hover:text-white ml-2"
              >
                ✕
              </button>
            </div>
          </div>
        )}

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
            <a href="#video" className="hover:text-white transition flex items-center gap-1">
              <span>📹</span> Video
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
              <a href="#video" className="border border-gray-600 hover:border-cyan-400 px-5 py-2 rounded-full text-gray-300 text-sm transition">
                <span className="mr-1">📹</span> Watch video
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

        {/* VIDEO SHOWCASE SECTION */}
        <div id="video" className="mb-16 scroll-mt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">📹 Video showcase — Elchai Group</h2>
          </div>
          <div className="bg-gradient-to-br from-[#111827] to-[#0f172a] rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 border border-gray-800">
            <div className="relative group">
              {/* Video Player */}
              <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
                <video 
                  src="/videos/video1.mp4" 
                  controls
                  autoPlay
                  loop
                  className="w-full h-full object-cover"
                ></video>
              </div>

              {/* Video Info */}
              <div className="mt-5">
                <h3 className="text-xl font-bold text-white mb-2">Elchai Group Brand Story</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A motion design piece created for Elchai Group's brand campaign. This video explores the intersection of governance,
                  role clarity, and organizational trust — transforming abstract concepts into a compelling visual narrative.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="bg-gray-800 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-500/30">🎬 Motion Design</span>
                  <span className="bg-gray-800 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-500/30">✨ After Effects</span>
                  <span className="bg-gray-800 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-500/30">🎨 Brand Identity</span>
                  <span className="bg-gray-800 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-500/30">📽️ 60 seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SINGLE IMAGE POST - IMAGE1 (UniversEyes Trust Design) */}
        <div id="gallery" className="mb-16 scroll-mt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-indigo-500 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">✦ Featured design — UniversEyes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-[#111827] to-[#0f172a] rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 border border-gray-800">
            <div className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/image1.png"
                  alt="UniversEyes Trust Design - Trust is not only earned by people"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain rounded-lg"
                  priority
                />
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

        {/* NEW ADDITION: Boundaries Image */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">✦ Boundaries as strength</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-[#111827] to-[#0f172a] rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 border border-gray-800">
            <div className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/image6.jpeg"
                  alt="Boundaries are not restrictions on strong systems"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-emerald-400 text-xl">💪</span>
                <span className="text-emerald-400 text-sm font-mono">Single post · Quote card</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Boundaries as strength</h3>
              <p className="text-gray-300 leading-relaxed">
                Boundaries are not restrictions on strong systems. They are part of what makes them strong. They preserve integrity and reduce confusion.
              </p>
              <div className="mt-4 flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-emerald-400">🎨</span> Figma design · Brand messaging for <span className="text-emerald-300">Elchai Group</span>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">Quote design</span>
                <span className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">Minimalist</span>
                <span className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">Typography</span>
              </div>
            </div>
          </div>
        </div>

        {/* CAROUSEL SECTION - IMAGES 2, 3, 4, 5 */}
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

                {/* Slide 0 - Image 2 - Role Clarity */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                >
                  <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 md:p-8 shadow-2xl h-full overflow-auto">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-cyan-300 text-sm font-mono">01/04</span>
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <span className="text-indigo-400 text-xl">🏛️</span>
                      </div>
                    </div>
                    <div className="relative w-full h-[400px] md:h-[420px]">
                      <Image
                        src="/images/image2.png"
                        alt="Role Clarity - UniversEyes Slide 1"
                        width={800}
                        height={600}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <p className="text-gray-500 text-xs mt-4 text-right">UniversEyes · theuniverseye.com →</p>
                  </div>
                </div>

                {/* Slide 1 - Image 3 - The Problem */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                >
                  <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 md:p-8 shadow-2xl h-full overflow-auto">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-cyan-300 text-sm font-mono">02/04</span>
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <span className="text-purple-400 text-xl">⚠️</span>
                      </div>
                    </div>
                    <div className="relative w-full h-[400px] md:h-[420px]">
                      <Image
                        src="/images/image3.png"
                        alt="The Problem - Why unclear roles weaken systems"
                        width={800}
                        height={600}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <p className="text-gray-500 text-xs mt-4 text-right">UniversEyes · theuniverseye.com</p>
                  </div>
                </div>

                {/* Slide 2 - Image 4 - Structure */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                >
                  <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 md:p-8 shadow-2xl h-full overflow-auto">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-cyan-300 text-sm font-mono">03/04</span>
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 text-xl">⚙️</span>
                      </div>
                    </div>
                    <div className="relative w-full h-[400px] md:h-[420px]">
                      <Image
                        src="/images/image4.png"
                        alt="Role Clarity Structure - Authority and Responsibility"
                        width={800}
                        height={600}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <p className="text-gray-300 text-sm italic mt-4">
                      Role boundaries are not bureaucratic constraints. They are the structural conditions under which accountability becomes possible.
                    </p>
                  </div>
                </div>

                {/* Slide 3 - Image 5 - Closing */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${currentSlide === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                >
                  <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-2xl h-full overflow-auto">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-cyan-300 text-sm font-mono">04/04</span>
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <span className="text-amber-400 text-xl">✨</span>
                      </div>
                    </div>
                    <div className="relative w-full h-[400px] md:h-[420px]">
                      <Image
                        src="/images/image5.png"
                        alt="Role Clarity Closing - Architecture of Accountability"
                        width={800}
                        height={600}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="mt-4 italic text-gray-300 border-l-2 border-cyan-500 pl-3">
                      "Clarity is not a preference. It is the architecture of accountability."
                    </div>
                    <p className="text-gray-500 text-xs mt-4 text-right">UniversEyes · theuniverseye.com</p>
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

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {carouselSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-cyan-400 w-8' : 'bg-gray-700 hover:bg-gray-500'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail navigation */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {carouselSlides.map((slide, idx) => (
                <div
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`cursor-pointer rounded-lg p-3 border transition-all ${currentSlide === idx
                      ? 'bg-indigo-500/10 border-indigo-500/50 ring-1 ring-indigo-500/30'
                      : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                    }`}
                >
                  <span className="text-[10px] font-mono text-indigo-400 block mb-1">SLIDE 0{idx + 1}</span>
                  <span className="text-xs font-bold text-white line-clamp-1">{slide.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical & Design Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-gray-900 rounded-2xl shadow-md p-6 border border-gray-800">
            <h2 className="text-2xl font-bold text-white border-l-4 border-cyan-500 pl-3 mb-5 flex items-center gap-2">
              <span className="text-cyan-500">{'</>'}</span> Technical & Design Skills
            </h2>
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-cyan-400 mb-2">🎨 Design Tools</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Figma', 'Adobe XD', 'Responsive Design', 'Wireframing', 'Prototyping', 'UI/UX Principles', 'Design Systems', 'After Effects', 'Premiere Pro'].map((skill) => (
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
                <li>Producing motion graphics and video content for brand campaigns</li>
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
                title: "Motion Graphics & Video",
                icon: "🎬",
                desc: "Producing engaging motion design pieces and brand videos that communicate complex governance concepts simply.",
                tags: ["After Effects", "Premiere Pro", "Motion Design", "Video Editing"]
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

        {/* Contact Section */}
        <div id="contact" className="mt-16 bg-gradient-to-r from-slate-900 to-gray-900 rounded-2xl border border-gray-800 p-6 md:p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Let's bring structure & design together</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Saim Maqsood — UI/UX Designer & Developer. Currently shaping experiences at Elchai Group, available for freelance or full-time opportunities in UAE.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-6">
            <a href="tel:+971544825957" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition">
              <span className="text-cyan-400">📞</span> +971 54 4825957
            </a>

            <button onClick={handleEmailClick} className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition cursor-pointer group">
              <span className="text-cyan-400">✉️</span>
              <span className="border-b border-transparent group-hover:border-cyan-400 transition">{emailAddress}</span>
            </button>

            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition">
              <span className="text-cyan-400">🐙</span> GitHub
            </a>

            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition">
              <span className="text-cyan-400">🔗</span> LinkedIn
            </a>

            <a href="tel:+923151455522" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition">
              <span className="text-cyan-400">🇵🇰</span> +92 315 1455522
            </a>
          </div>

          <div className="mt-4">
            <button onClick={copyEmailToClipboard} className="text-xs text-gray-500 hover:text-cyan-400 transition">
              📋 Click here to copy email address
            </button>
          </div>

          <div className="mt-6 text-xs text-gray-500">
            📍 Dubai, UAE | Immediate joiner · No sponsorship needed | Open to freelance & full-time
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8 mt-6">
          <div className="flex flex-wrap justify-center gap-6 mb-3">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">🐙 GitHub</a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">🔗 LinkedIn</a>
            <button onClick={handleEmailClick} className="hover:text-cyan-400 transition cursor-pointer">✉️ Email</button>
            <span className="text-gray-500">🏆 Google Cybersecurity Certified</span>
          </div>
          <p>© 2026 Saim Maqsood — UI/UX Designer & Full‑Stack Developer | saim-maqsood-portfolio.vercel.app</p>
        </footer>
      </div>
    </div>
  );
}