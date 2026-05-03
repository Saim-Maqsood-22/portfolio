// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 md:py-12">
        
        {/* Hero Section - Sleek Dark Theme */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-800 via-gray-800 to-slate-800 border border-gray-700 text-white p-6 md:p-10 mb-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -mr-24 -mt-24"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl -ml-24 -mb-24"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Saim Maqsood
                </h1>
                <span className="bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 text-sm font-semibold px-3 py-1.5 rounded-full border border-cyan-500/30 flex items-center gap-1">
                  <span>🎨</span> UI/UX Designer & Full-Stack Developer
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-gray-300 text-base mt-2">
                <div className="flex items-center gap-2"><span className="text-cyan-400">📍</span> Dubai, UAE</div>
                <div className="flex items-center gap-2"><span className="text-emerald-400">💼</span> Immediate Joiner · No Sponsorship Required</div>
                <div className="flex items-center gap-2"><span className="text-amber-400">🌍</span> Pakistani Citizen</div>
              </div>
              <p className="mt-4 text-gray-300 max-w-2xl text-md md:text-lg leading-relaxed border-l-4 border-cyan-400 pl-4">
                Results-driven Computer Science Graduate specializing in full‑stack development and UI/UX design. Currently crafting responsive designs at Elchai Group while building scalable web & mobile apps with Next.js, React, React Native, and Django.
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-gray-900/50 p-5 rounded-2xl backdrop-blur-md w-full lg:w-auto border border-gray-700">
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold px-6 py-2.5 rounded-full text-center hover:from-cyan-600 hover:to-indigo-600 transition flex items-center justify-center gap-2 shadow-lg">
                <span>✉️</span> Contact me
              </a>
              <div className="text-sm text-gray-300 text-center">📞 UAE: +971 54 4825957  |  🇵🇰 +92 315 1455522</div>
              <div className="text-xs text-gray-400 text-center">maqsoodsaim2002@gmail.com</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-400 border-t border-gray-700 pt-5 justify-between items-center">
            <div className="flex gap-4">
              <span>🔗</span> linkedin.com/in/saim-maqsood 
              <span className="mx-2">|</span> 
              <span>🐙</span> 
              <a href="https://github.com/Saim-Maqsood-22" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                github.com/Saim-Maqsood-22
              </a>
            </div>
            <div className="flex gap-2"><span className="text-emerald-400">✓</span> Available Now | Currently at Elchai Group</div>
          </div>
        </div>

        {/* Current Role Highlight - Elchai Design Work */}
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

        {/* Technical Skills + Availability Card */}
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

        {/* Professional Experience */}
        <div className="mb-14">
          <div className="flex items-center gap-2 border-b-2 border-gray-800 pb-3 mb-6">
            <span className="text-3xl">💼</span>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Work Experience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-cyan-900/20 p-5 rounded-xl shadow-sm border-l-4 border-cyan-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-xl font-bold text-cyan-400">ELCHAI GROUP</h3>
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">Feb 2026 – Present</span>
              </div>
              <p className="text-cyan-500 font-medium text-sm">UI/UX Designer (Current Role)</p>
              <ul className="list-disc list-inside text-gray-400 text-sm mt-3 space-y-2">
                <li>Designing responsive prototypes using Figma, ensuring smooth handoff for development teams</li>
                <li>Collaborating with senior management and cross-functional teams to deliver user-centered designs</li>
                <li>Creating design systems and component libraries for consistent UI across multiple projects</li>
                <li>Conducting user research and implementing feedback-driven design iterations</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-5 rounded-xl shadow-sm border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400">
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

        {/* Featured Design Work Section - NEW */}
        <div className="mb-14">
          <div className="flex items-center gap-2 border-b-2 border-gray-800 pb-3 mb-6">
            <span className="text-3xl">🎨</span>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Design Portfolio Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
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

        {/* Projects Section */}
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
                gradient: "from-indigo-600 to-purple-600",
                icon: "📱"
              },
              {
                title: "Pour & Explore by Shazia",
                period: "Aug 2025 - Sept 2025",
                desc: "Developed a minimalistic, high-performance marketplace and portfolio for resin art using the Django framework. Engineered efficient backend logic and database schemas to manage dynamic product listings.",
                tags: ["Django", "PostgreSQL", "Python"],
                gradient: "from-emerald-600 to-teal-600",
                icon: "🎨"
              },
              {
                title: "Med Magic",
                period: "Nov 2024 - July 2025",
                desc: "Designed and deployed a modern full-stack e-commerce storefront utilizing Next.js for server-side rendering and enhanced SEO. Implemented responsive, component-based architecture for optimal performance.",
                tags: ["Next.js", "React", "Tailwind CSS"],
                gradient: "from-blue-600 to-sky-600",
                icon: "🏥"
              },
              {
                title: "React Native / Flutter Suite",
                period: "Academic & Personal",
                desc: "Built cross-platform mobile applications with React Native and Flutter, integrating RESTful APIs, Firebase, and modern UI/UX principles for seamless user experiences across iOS and Android.",
                tags: ["React Native", "Flutter", "API Integration"],
                gradient: "from-amber-600 to-orange-600",
                icon: "🚀"
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-800">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
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
          
          <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 border border-gray-800 text-white rounded-2xl p-6 shadow-xl" id="contact">
            <h3 className="text-2xl font-bold flex items-center gap-2 mb-3">
              <span>📧</span> Contact & Availability
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2"><span className="text-cyan-400">✉️</span> maqsoodsaim2002@gmail.com</p>
              <p className="flex items-center gap-2"><span className="text-cyan-400">📞</span> UAE: +971 54 4825957</p>
              <p className="flex items-center gap-2"><span className="text-cyan-400">📞</span> Pakistan: +92 315 1455522</p>
              <p className="flex items-center gap-2"><span className="text-cyan-400">🔗</span> LinkedIn: Saim Maqsood</p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">🐙</span> 
                <a href="https://github.com/Saim-Maqsood-22" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
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

        {/* Collaboration Footer */}
        <div className="bg-gray-900 rounded-2xl shadow-sm p-6 border border-gray-800 mb-12">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="text-2xl">👥</span> 
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Design + Development</span>
              </h3>
              <p className="text-gray-400 text-sm mt-1">Bridging the gap between design and development — experienced in both UI/UX design (Figma) and full-stack implementation.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="text-2xl">📱</span> 
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mobile & Web Focus</span>
              </h3>
              <p className="text-gray-400 text-sm">React Native, Flutter, Next.js, Django Rest — delivering end-to-end solutions from prototype to production-ready apps.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="text-2xl">📈</span> 
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Performance Driven</span>
              </h3>
              <p className="text-gray-400 text-sm">SEO optimization (Next.js SSR), responsive UI/UX, optimized database queries for high-performance marketplaces.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8 mt-6">
          <div className="flex flex-wrap justify-center gap-6 mb-3">
            <a href="https://github.com/Saim-Maqsood-22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors">
              <span>🐙</span> GitHub/Saim-Maqsood-22
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