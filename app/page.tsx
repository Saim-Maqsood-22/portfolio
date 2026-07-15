// app/page.tsx
'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Image from 'next/image';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-in' : ''} ${className}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [showEmailPopup, setShowEmailPopup] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Contact information
  const linkedinUrl = "https://www.linkedin.com/in/saim-maqsood-8b27a737a";
  const githubUrl = "https://github.com/Saim-Maqsood-22";
  const emailAddress = "maqsoodsaim2002@gmail.com";

  // LinkedIn post URL for XDimension app interface
  const xDimensionPostUrl = "https://www.linkedin.com/posts/saim-maqsood-8b27a737a_turning-a-concept-into-a-functional-ui-ugcPost-7428364709310910464-qJ2h?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF270kYBij__hZg6X6lQaMU8h4ndLWsceR8";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Email handler
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

  // Carousel slides
  const carouselSlides = useMemo(() => [
    { id: 0, title: 'U: THE UNIVERSE EYE', subtitle: 'ROLE CLARITY', image: '/images/image2.png' },
    { id: 1, title: 'THE PROBLEM', subtitle: 'Why unclear roles weaken systems', image: '/images/image3.png' },
    { id: 2, title: 'U= THE UNIVERSE EYE', subtitle: 'ROLE CLARITY · STRUCTURE', image: '/images/image4.png' },
    { id: 3, title: 'U • THE UNIVERSE EYE', subtitle: 'ROLE CLARITY', image: '/images/image5.png' },
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  }, [carouselSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  }, [carouselSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const navLinks = [
    { href: '#gallery', label: 'Gallery' },
    { href: '#experience', label: 'Experience' },
    { href: '#video', label: 'Video' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Ambient background */}
      <div className="fixed inset-0 bg-grid pointer-events-none" />
      <div className="fixed -top-40 -right-40 w-[32rem] h-[32rem] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-float-slow" />
      <div className="fixed -bottom-40 -left-40 w-[32rem] h-[32rem] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-float-slow" style={{ animationDelay: '3s' }} />

      {/* Email Popup Notification */}
      {showEmailPopup && (
        <div className="fixed bottom-4 right-4 z-50 bg-gray-900 border border-cyan-500/50 rounded-xl p-4 shadow-2xl shadow-cyan-500/10 max-w-xs">
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 text-xl mt-0.5">✉</span>
            <div>
              <p className="text-white text-sm font-medium">Email client didn&apos;t open?</p>
              <button onClick={copyEmailToClipboard} className="text-cyan-400 text-xs hover:text-cyan-300 underline mt-1 cursor-pointer">
                Copy {emailAddress}
              </button>
            </div>
            <button onClick={() => setShowEmailPopup(false)} className="text-gray-500 hover:text-white ml-1 cursor-pointer">✕</button>
          </div>
        </div>
      )}

      {/* Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0a0e1a]/85 backdrop-blur-md border-b border-gray-800 shadow-lg shadow-black/20' : 'border-b border-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-wrap justify-between items-center py-4">
          <a href="#top" className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            Saim Maqsood
          </a>
          <nav className="flex gap-6 text-sm text-gray-400">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-cyan-300 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div id="top" className="max-w-6xl mx-auto px-6 lg:px-8 py-10 md:py-14 relative">

        {/* Hero Section */}
        <Reveal>
          <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/80 to-gray-900/80 border border-gray-800 p-8 md:p-12 mb-20 shadow-2xl">
            <div className="relative z-10 max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-emerald-500/15 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Open to new opportunities
                </span>
                <span className="bg-indigo-500/15 text-indigo-300 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-500/30">UAE · Immediate joiner</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-white to-cyan-200 bg-clip-text text-transparent">
                Designing governance &amp; role-clarity systems
              </h1>
              <p className="text-gray-400 text-base leading-relaxed mb-2">
                UI/UX Designer &amp; Full-Stack Developer
              </p>
              <p className="text-gray-400 max-w-2xl leading-relaxed">
                Most recently at <span className="text-cyan-300 font-medium">Elchai Group</span>, I crafted high-impact visual narratives that turned abstract structural concepts into compelling design stories — including the <span className="text-cyan-300 font-medium">Universe Eye</span> campaign, where design meets accountability architecture.
              </p>
              <div className="flex flex-wrap gap-3 mt-7">
                <a href="#gallery" className="bg-cyan-500 hover:bg-cyan-400 transition-colors px-6 py-2.5 rounded-full text-gray-950 text-sm font-semibold shadow-lg shadow-cyan-500/20">
                  View designs
                </a>
                <a href="#video" className="border border-gray-700 hover:border-cyan-400 hover:text-cyan-300 px-6 py-2.5 rounded-full text-gray-300 text-sm transition-colors">
                  Watch showreel
                </a>
                <a href="#contact" className="border border-gray-700 hover:border-cyan-400 hover:text-cyan-300 px-6 py-2.5 rounded-full text-gray-300 text-sm transition-colors">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="absolute right-0 top-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute left-1/3 bottom-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
          </section>
        </Reveal>

        {/* Elchai Group highlight */}
        <Reveal className="mb-20">
          <section className="bg-gradient-to-r from-cyan-500/[0.07] via-indigo-500/[0.07] to-violet-500/[0.07] rounded-3xl p-7 md:p-8 border border-cyan-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-2xl shrink-0">🎨</div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Design work at Elchai Group</h2>
                <p className="text-cyan-400 text-sm">UI/UX Designer · Feb 2026 – May 2026</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-gray-950/40 rounded-2xl p-5 border border-gray-800/80">
                <h3 className="font-semibold text-white mb-1.5 text-sm">Responsive prototypes</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Mobile-first, responsive designs in Figma that translated seamlessly to development.</p>
              </div>
              <div className="bg-gray-950/40 rounded-2xl p-5 border border-gray-800/80">
                <h3 className="font-semibold text-white mb-1.5 text-sm">Cross-team collaboration</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Worked closely with senior management and cross-functional teams on user-centered solutions.</p>
              </div>
              <div className="bg-gray-950/40 rounded-2xl p-5 border border-gray-800/80">
                <h3 className="font-semibold text-white mb-1.5 text-sm">Design-to-dev handoff</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Kept the development process smooth with organized Figma files and design systems.</p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* VIDEO SHOWCASE */}
        <Reveal className="mb-20 scroll-mt-24" delay={0}>
          <section id="video">
            <SectionHeading title="Video showcase — Elchai Group" />
            <div className="bg-gray-900/60 rounded-3xl p-6 md:p-7 border border-gray-800 transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-500/5">
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
                <video src="/videos/video1.mp4" controls className="w-full h-full object-cover"></video>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-white mb-2">Elchai Group brand story</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">A motion design piece created for Elchai Group&apos;s brand campaign, exploring the intersection of governance, role clarity, and organizational trust — transforming abstract concepts into a compelling visual narrative.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Tag color="indigo">Motion design</Tag>
                  <Tag color="indigo">After Effects</Tag>
                  <Tag color="indigo">Brand identity</Tag>
                  <Tag color="indigo">60 seconds</Tag>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* SINGLE IMAGE POST - Trust as structure */}
        <Reveal className="mb-20 scroll-mt-24">
          <section id="gallery">
            <SectionHeading title="Featured design — Universe Eye" />
            <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-900/60 rounded-3xl p-6 md:p-7 border border-gray-800 transition-shadow duration-300 hover:shadow-2xl hover:shadow-cyan-500/5">
              <div className="relative overflow-hidden rounded-2xl bg-slate-950/40">
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/images/image1.png" alt="Universe Eye Trust Design" width={800} height={600} className="w-full h-full object-contain rounded-lg" priority />
                </div>
              </div>
              <div>
                <p className="text-cyan-400 text-xs font-mono uppercase tracking-wide mb-3">Single post · Social card</p>
                <h3 className="text-2xl font-bold text-white mb-3">Trust as structure</h3>
                <p className="text-gray-400 leading-relaxed">A minimalist design exploring how structural governance builds organizational trust. The visual language emphasizes clarity and hierarchy.</p>
                <p className="mt-4 text-gray-500 text-sm">Figma design · Brand campaign for <span className="text-cyan-300">Universe Eye · theuniverseye.com</span></p>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Tag color="cyan">Typography focus</Tag>
                  <Tag color="cyan">Minimalist</Tag>
                  <Tag color="cyan">Corporate identity</Tag>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Boundaries as strength */}
        <Reveal className="mb-20">
          <section>
            <SectionHeading title="Boundaries as strength" />
            <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-900/60 rounded-3xl p-6 md:p-7 border border-gray-800 transition-shadow duration-300 hover:shadow-2xl hover:shadow-teal-500/5">
              <div className="relative overflow-hidden rounded-2xl bg-slate-950/40">
                <div className="relative w-full aspect-[4/3]">
                  <Image src="/images/image6.jpeg" alt="Boundaries are not restrictions on strong systems" width={800} height={600} className="w-full h-full object-contain rounded-lg" />
                </div>
              </div>
              <div>
                <p className="text-teal-400 text-xs font-mono uppercase tracking-wide mb-3">Single post · Quote card</p>
                <h3 className="text-2xl font-bold text-white mb-3">Boundaries as strength</h3>
                <p className="text-gray-400 leading-relaxed">Boundaries are not restrictions on strong systems. They are part of what makes them strong. They preserve integrity and reduce confusion.</p>
                <p className="mt-4 text-gray-500 text-sm">Figma design · Brand messaging for <span className="text-teal-300">Elchai Group</span></p>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <Tag color="teal">Quote design</Tag>
                  <Tag color="teal">Minimalist</Tag>
                  <Tag color="teal">Typography</Tag>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* App Interface Design – XDimension Solutions */}
        <Reveal className="mb-20">
          <section>
            <SectionHeading title="App interface design — XDimension Solutions" />
            <div className="bg-gray-900/60 rounded-3xl p-8 md:p-10 border border-gray-800 text-center transition-shadow duration-300 hover:shadow-2xl hover:shadow-amber-500/5">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 mb-5 text-3xl">📲</div>
              <h3 className="text-xl font-bold text-white mb-3">Turning a concept into a functional UI</h3>
              <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
                During my internship at XDimension Solutions, I designed and developed a complete app interface that bridges frontend design with backend integration — transforming wireframes into a fully interactive, user-friendly application.
              </p>
              <a
                href={xDimensionPostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold px-6 py-3 rounded-full transition-colors shadow-lg shadow-amber-500/20"
              >
                View the full case study on LinkedIn →
              </a>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <Tag color="amber">UI/UX Design</Tag>
                <Tag color="amber">Flutter</Tag>
                <Tag color="amber">Firebase integration</Tag>
                <Tag color="amber">Internship project</Tag>
              </div>
            </div>
          </section>
        </Reveal>

        {/* CAROUSEL SECTION */}
        <Reveal className="mb-24">
          <section>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <SectionHeading title="Carousel series · Role Clarity Framework" noMargin />
              <span className="text-gray-500 text-xs bg-gray-900 px-3 py-1.5 rounded-full border border-gray-800">4 slides · interactive</span>
            </div>
            <div className="bg-gray-900/60 rounded-3xl p-4 md:p-6 border border-gray-800">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative min-h-[500px] md:min-h-[580px] bg-black/30 rounded-2xl">
                  {carouselSlides.map((slide, idx) => (
                    <div key={slide.id} className={`absolute inset-0 transition-all duration-500 ease-in-out ${currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                      <div className="bg-slate-900/80 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 md:p-8 shadow-2xl h-full overflow-auto">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-cyan-300 text-xs font-mono tracking-wide">0{idx + 1} / 04</span>
                          <span className="text-indigo-300 text-xs font-mono tracking-wide">{slide.subtitle}</span>
                        </div>
                        <div className="relative w-full h-[400px] md:h-[420px]">
                          <Image src={slide.image} alt={slide.title} width={800} height={600} className="w-full h-full object-contain rounded-lg" />
                        </div>
                        <p className="text-gray-500 text-xs mt-4 text-right">Universe Eye · theuniverseye.com →</p>
                      </div>
                    </div>
                  ))}
                  <button onClick={prevSlide} aria-label="Previous slide" className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-xl bg-black/50 hover:bg-cyan-600 transition-colors cursor-pointer">←</button>
                  <button onClick={nextSlide} aria-label="Next slide" className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-xl bg-black/50 hover:bg-cyan-600 transition-colors cursor-pointer">→</button>
                </div>
                <div className="flex justify-center gap-2 mt-6">
                  {carouselSlides.map((_, idx) => (
                    <button key={idx} onClick={() => goToSlide(idx)} className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? 'bg-cyan-400 w-8' : 'bg-gray-700 hover:bg-gray-500 w-2.5'}`} aria-label={`Go to slide ${idx + 1}`} />
                  ))}
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                {carouselSlides.map((slide, idx) => (
                  <button key={slide.id} onClick={() => goToSlide(idx)} className={`text-left cursor-pointer rounded-xl p-3 border transition-all ${currentSlide === idx ? 'bg-indigo-500/10 border-indigo-500/40 ring-1 ring-indigo-500/30' : 'bg-gray-950/30 border-gray-800 hover:border-gray-700'}`}>
                    <span className="text-[10px] font-mono text-indigo-400 block mb-1">SLIDE 0{idx + 1}</span>
                    <span className="text-xs font-semibold text-white line-clamp-1">{slide.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* Technical & Design Skills */}
        <Reveal className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gray-900/60 rounded-3xl p-7 border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-6">Technical &amp; design skills</h2>
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-3">Design tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe XD', 'Responsive Design', 'Wireframing', 'Prototyping', 'UI/UX Principles', 'Design Systems', 'After Effects', 'Premiere Pro'].map(skill => (
                    <span key={skill} className="bg-gray-950/60 text-gray-300 px-3.5 py-1.5 rounded-full text-sm font-medium hover:text-cyan-200 hover:border-cyan-500/40 transition-colors cursor-default border border-gray-800">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-wide mb-3">Development stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['ReactJS', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'React Native', 'Flutter', 'Expo', 'Django', 'Python', 'PostgreSQL / MongoDB', 'Firebase', 'Git/GitHub', 'RESTful APIs', 'Data Structures & Algorithms', 'OOP'].map(skill => (
                    <span key={skill} className="bg-gray-950/60 text-gray-300 px-3.5 py-1.5 rounded-full text-sm font-medium hover:text-indigo-200 hover:border-indigo-500/40 transition-colors cursor-default border border-gray-800">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-900/60 rounded-3xl p-7 border border-gray-800 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-2xl">🚀</div>
                <h3 className="font-bold text-lg text-white">Immediate availability</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">Available for immediate join in UAE — no visa processing overhead, ready to start within 24 hours.</p>
              <hr className="my-5 border-gray-800" />
              <div className="space-y-3 text-sm">
                <div><span className="text-amber-400 font-semibold">Certifications</span><p className="text-gray-400 mt-0.5">Google Cybersecurity Professional Certificate V2</p><p className="text-gray-400 mt-1">1 Million Prompters — Dubai Future Foundation (Jul 2026)</p></div>
                <div><span className="text-indigo-400 font-semibold">Education</span><p className="text-gray-400 mt-0.5">BSc Computer Science (2025) — University of Management &amp; Technology, Lahore</p></div>
              </div>
              <div className="mt-5 bg-gray-950/50 rounded-xl p-4 border border-gray-800 text-sm">
                <p className="text-gray-300"><span className="text-gray-500">UAE:</span> +971 54 4825957</p>
                <p className="text-gray-300 mt-1"><span className="text-gray-500">Pakistan:</span> +92 315 1455522</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Work Experience */}
        <Reveal className="mb-20 scroll-mt-24">
          <section id="experience">
            <SectionHeading title="Work experience" size="lg" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 border-l-4 border-l-cyan-500 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3 className="text-lg font-bold text-cyan-400">Elchai Group</h3>
                  <span className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full">Feb 2026 – May 2026</span>
                </div>
                <p className="text-gray-400 font-medium text-sm mb-3">UI/UX Designer</p>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                  <li>Designed responsive prototypes using Figma, ensuring smooth handoff for development teams</li>
                  <li>Collaborated with senior management and cross-functional teams to deliver user-centered designs</li>
                  <li>Created design systems and component libraries for consistent UI across multiple projects</li>
                  <li>Produced motion graphics and video content for brand campaigns</li>
                </ul>
              </div>
              <div className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 border-l-4 border-l-violet-500 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3 className="text-lg font-bold text-violet-400">XDimension Solutions</h3>
                  <span className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full">Nov 2025 – Feb 2026</span>
                </div>
                <p className="text-gray-400 font-medium text-sm mb-3">Flutter App Developer (Internship)</p>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2">
                  <li>Built cross-platform mobile apps with Flutter ensuring seamless UI/UX</li>
                  <li>Integrated Firebase services for secure authentication and real-time data management</li>
                  <li>Participated in full software development lifecycle (SDLC) within an on-site team environment</li>
                </ul>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Design Portfolio Highlights */}
        <Reveal className="mb-20">
          <section>
            <SectionHeading title="Design portfolio highlights" size="lg" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Elchai Group — Design System", icon: "🎯", desc: "Built a comprehensive design system and component library for consistent branding across Elchai Group's digital products.", tags: ["Figma", "Design System", "Component Library", "UI/UX"] },
                { title: "Responsive Web Prototypes", icon: "📱", desc: "Created mobile-first, fully responsive web prototypes that adapt seamlessly across devices and screen sizes.", tags: ["Figma", "Responsive Design", "Wireframing", "Prototyping"] },
                { title: "Motion Graphics & Video", icon: "🎬", desc: "Produced engaging motion design pieces and brand videos that communicate complex governance concepts simply.", tags: ["After Effects", "Premiere Pro", "Motion Design", "Video Editing"] }
              ].map((design) => (
                <div key={design.title} className="bg-gray-900/60 rounded-2xl overflow-hidden border border-gray-800 hover:-translate-y-1.5 hover:border-gray-700 transition-all duration-300">
                  <div className="h-1 bg-gradient-to-r from-cyan-500 to-indigo-500"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="text-2xl">{design.icon}</span>
                      <h3 className="text-base font-bold text-white">{design.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{design.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {design.tags.map(tag => (
                        <span key={tag} className="text-xs bg-gray-950/60 text-cyan-300 px-2.5 py-1 rounded-full border border-cyan-500/20">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Contact Section */}
        <Reveal className="mb-6 scroll-mt-24">
          <section id="contact" className="bg-gradient-to-br from-slate-900/80 to-gray-900/80 rounded-3xl border border-gray-800 p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Let&apos;s bring structure &amp; design together</h3>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">Saim Maqsood — UI/UX Designer &amp; Developer, available for freelance or full-time opportunities in the UAE.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-8 text-sm">
              <a href="tel:+971544825957" className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors">+971 54 4825957</a>
              <button onClick={handleEmailClick} className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer">
                <span className="border-b border-transparent hover:border-cyan-400 transition-colors">{emailAddress}</span>
              </button>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors">GitHub</a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors">LinkedIn</a>
              <a href="tel:+923151455522" className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors">+92 315 1455522</a>
            </div>
            <button onClick={copyEmailToClipboard} className="mt-5 text-xs text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer">Copy email address</button>
            <div className="mt-7 text-xs text-gray-500">Dubai, UAE &nbsp;·&nbsp; Immediate joiner, no sponsorship needed &nbsp;·&nbsp; Open to freelance &amp; full-time</div>
          </section>
        </Reveal>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-800/80 pt-8 mt-10">
          <div className="flex flex-wrap justify-center gap-6 mb-3">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <button onClick={handleEmailClick} className="hover:text-cyan-400 transition-colors cursor-pointer">Email</button>
            <span className="text-gray-600">Google Cybersecurity &amp; Dubai Future Foundation Certified</span>
          </div>
          <p>© 2026 Saim Maqsood — UI/UX Designer &amp; Full-Stack Developer</p>
        </footer>
      </div>
    </div>
  );
}

function SectionHeading({ title, size = 'md', noMargin = false }: { title: string; size?: 'md' | 'lg'; noMargin?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${noMargin ? '' : 'mb-6'}`}>
      <div className="h-6 w-1 bg-gradient-to-b from-cyan-400 to-indigo-500 rounded-full"></div>
      <h2 className={`font-bold text-white tracking-tight ${size === 'lg' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>{title}</h2>
    </div>
  );
}

const tagColors: Record<string, string> = {
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25',
  indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25',
  teal: 'bg-teal-500/10 text-teal-300 border-teal-500/25',
  amber: 'bg-amber-500/10 text-amber-300 border-amber-500/25',
};

function Tag({ children, color }: { children: React.ReactNode; color: keyof typeof tagColors }) {
  return (
    <span className={`text-xs px-3 py-1 rounded-full border font-medium ${tagColors[color]}`}>
      {children}
    </span>
  );
}
