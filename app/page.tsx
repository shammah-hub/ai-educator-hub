'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#faf8f5]/80 backdrop-blur-lg z-50 px-4 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-serif font-semibold text-[#1a2332]">AI Educator Hub</div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 xl:gap-12 items-center">
            <a href="#features" className="text-[#3d4451] hover:text-[#c85a3e] transition">Features</a>
            <a href="#how-it-works" className="text-[#3d4451] hover:text-[#c85a3e] transition">How It Works</a>
            <a href="#testimonials" className="text-[#3d4451] hover:text-[#c85a3e] transition">Testimonials</a>
            <a href="#about" className="text-[#3d4451] hover:text-[#c85a3e] transition">About</a>
            <Link href="/login">
              <button className="px-6 xl:px-8 py-3 bg-[#1a2332] text-[#faf8f5] hover:bg-[#c85a3e] transition text-sm">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#1a2332] p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-[#3d4451] hover:text-[#c85a3e] transition py-2">Features</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-[#3d4451] hover:text-[#c85a3e] transition py-2">How It Works</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-[#3d4451] hover:text-[#c85a3e] transition py-2">Testimonials</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-[#3d4451] hover:text-[#c85a3e] transition py-2">About</a>
            <Link href="/login">
              <button className="w-full px-6 py-3 bg-[#1a2332] text-[#faf8f5] hover:bg-[#c85a3e] transition text-sm">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 lg:pt-32 pb-12 relative overflow-hidden">
        <div className="max-w-4xl z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 lg:mb-8 leading-tight">
            Mindful AI Integration
            <span className="block font-semibold text-[#c85a3e]">for Educators</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] mb-8 lg:mb-12 max-w-2xl font-light leading-relaxed">
            Track, reflect, and optimize your AI teaching tools with intentionality. 
            Join a community of educators exploring the ethical frontier of AI-assisted teaching.
          </p>
          <Link href="/signup">
            <button className="px-8 sm:px-10 lg:px-12 py-4 lg:py-5 bg-[#c85a3e] text-white text-base lg:text-lg hover:bg-[#d66a4f] transition hover:shadow-xl w-full sm:w-auto">
              Start Your Journey
            </button>
          </Link>
        </div>
        
        {/* Minimalistic floating geometric shapes - hidden on mobile */}
        <div className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 w-125 h-125">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#7a8b7e]/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-[#c85a3e]/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#c85a3e] rounded-full"></div>
          <div className="absolute top-[15%] right-[20%] w-2 h-2 bg-[#7a8b7e]/40 rounded-full"></div>
          <div className="absolute bottom-[20%] left-[15%] w-2 h-2 bg-[#7a8b7e]/40 rounded-full"></div>
          <div className="absolute top-[35%] left-[10%] w-1.5 h-1.5 bg-[#c85a3e]/50 rounded-full"></div>
          <div className="absolute bottom-[30%] right-[25%] w-1.5 h-1.5 bg-[#c85a3e]/50 rounded-full"></div>
          <div className="absolute top-[25%] right-[15%] w-24 h-24 border-t border-r border-[#7a8b7e]/15 rounded-tr-full"></div>
          <div className="absolute bottom-[25%] left-[15%] w-32 h-32 border-b border-l border-[#c85a3e]/15 rounded-bl-full"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-[#e8e3dc]">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-10 lg:mb-16">What You Can Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-7xl">
          {[
            { number: '01', title: 'Discover AI Tools', desc: 'Browse a curated directory of AI tools designed for teaching, filtered by task and pedagogical approach.' },
            { number: '02', title: 'Track Usage', desc: 'Log your AI interactions, measure workload impact, and build a personal archive of your teaching evolution.' },
            { number: '03', title: 'Reflect Ethically', desc: 'Assess autonomy, bias, and transparency with guided reflection frameworks rooted in educational research.' },
            { number: '04', title: 'Learn from Peers', desc: 'Access anonymized insights from educators worldwide navigating the same AI integration challenges.' }
          ].map((feature, i) => (
            <div key={i} className="bg-[#faf8f5] p-6 sm:p-8 lg:p-10 border-l-4 border-transparent hover:border-[#c85a3e] transition hover:translate-x-1 lg:hover:translate-x-2">
              <div className="text-4xl sm:text-5xl font-serif font-light text-[#7a8b7e] opacity-30 mb-3 lg:mb-4">{feature.number}</div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-3 lg:mb-4 text-[#1a2332]">{feature.title}</h3>
              <p className="text-sm sm:text-base text-[#3d4451] font-light leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 lg:mb-8 text-center">How It Works</h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] text-center mb-12 lg:mb-20 font-light max-w-2xl mx-auto">
            A simple, thoughtful process designed to fit seamlessly into your teaching workflow
          </p>
          <div className="relative">
            {/* Connecting line - hidden on mobile */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-[#7a8b7e] via-[#c85a3e] to-[#7a8b7e] opacity-20 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 relative">
              {[
                {
                  step: 'Step 1',
                  title: 'Explore & Choose',
                  desc: 'Browse our curated collection of AI tools. Filter by subject, grade level, and teaching philosophy to find tools that align with your values.',
                  icon: <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#c85a3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                },
                {
                  step: 'Step 2',
                  title: 'Implement & Track',
                  desc: 'Use AI tools in your practice and log your experiences. Our simple tracking system helps you measure time saved, quality of output, and student engagement.',
                  icon: <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#7a8b7e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                },
                {
                  step: 'Step 3',
                  title: 'Reflect & Grow',
                  desc: 'Complete guided reflections on ethics, pedagogy, and impact. Compare insights with peers and adjust your AI integration strategy over time.',
                  icon: <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#c85a3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                }
              ].map((item, i) => (
                <div key={i} className="relative bg-white p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition group">
                  <div className="absolute -top-4 sm:-top-6 left-6 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 bg-[#c85a3e] rounded-full flex items-center justify-center text-white font-serif text-lg sm:text-xl group-hover:scale-110 transition">
                    {i + 1}
                  </div>
                  <div className="mb-4 sm:mb-6 mt-4">{item.icon}</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#c85a3e] mb-2 sm:mb-3 tracking-wider uppercase">{item.step}</div>
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-3 sm:mb-4 text-[#1a2332]">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#3d4451] font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-[#1a2332] text-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-12 lg:mb-20 text-center font-light">Trusted by Educators Worldwide</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {[
              { number: '12,000+', label: 'Active Educators' },
              { number: '85%', label: 'Report Time Savings' },
              { number: '50+', label: 'Countries Represented' },
              { number: '4.8/5', label: 'Average Rating' }
            ].map((stat, i) => (
              <div key={i} className="text-center border-l-2 border-[#c85a3e]/30 pl-4 sm:pl-6 lg:pl-8">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#c85a3e] mb-2 lg:mb-3">{stat.number}</div>
                <div className="text-sm sm:text-base lg:text-lg text-[#faf8f5]/80 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-[#e8e3dc]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-12 lg:mb-20 text-center">What Educators Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              {
                quote: "This platform helped me move from AI-anxious to AI-intentional. I finally feel like I'm using these tools in ways that align with my teaching values.",
                name: "Sarah Chen",
                role: "High School English Teacher",
                location: "Seattle, WA"
              },
              {
                quote: "The reflection prompts are game-changing. They've helped me articulate concerns I didn't even know I had and make more informed decisions about AI in my classroom.",
                name: "Marcus Thompson",
                role: "Middle School Science Teacher",
                location: "Austin, TX"
              },
              {
                quote: "I love seeing how other educators are navigating the same challenges. The community insights feature makes me feel less alone in this rapidly changing landscape.",
                name: "Priya Patel",
                role: "Elementary School Principal",
                location: "Toronto, ON"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#faf8f5] p-6 sm:p-8 lg:p-10 relative hover:translate-y-[-4px] lg:hover:translate-y-[-8px] transition">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-serif text-[#c85a3e] opacity-20 absolute top-4 sm:top-6 left-4 sm:left-6">"</div>
                <p className="text-base sm:text-lg text-[#3d4451] mb-6 sm:mb-8 mt-8 sm:mt-12 font-light leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-[#7a8b7e]/20 pt-4 sm:pt-6">
                  <div className="font-serif font-semibold text-[#1a2332] mb-1 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-[#3d4451] font-light">{testimonial.role}</div>
                  <div className="text-xs sm:text-sm text-[#7a8b7e] font-light">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 lg:mb-6">About AI Educator Hub</h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#3d4451] font-light max-w-3xl mx-auto leading-relaxed">
              We're a team of educators, researchers, and technologists united by a common belief: AI in education must be approached with care, ethics, and pedagogical wisdom.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 lg:mb-20">
            <div className="bg-white p-6 sm:p-10 lg:p-12 border-l-4 border-[#c85a3e]">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold mb-4 lg:mb-6 text-[#1a2332]">Our Mission</h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#3d4451] font-light leading-relaxed">
                To empower educators worldwide with the tools, knowledge, and community support needed to integrate AI into their teaching practice thoughtfully and ethically, ensuring technology serves pedagogy—not the other way around.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-10 lg:p-12 border-l-4 border-[#7a8b7e]">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold mb-4 lg:mb-6 text-[#1a2332]">Our Vision</h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#3d4451] font-light leading-relaxed">
                A future where every educator has the confidence and resources to harness AI's potential while maintaining the irreplaceable human elements of teaching—empathy, creativity, and critical thinking.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-12 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-8 lg:mb-12 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {[
                {
                  title: 'Pedagogical Integrity',
                  desc: 'AI tools must enhance, not compromise, sound teaching practices. We prioritize educational outcomes over technological novelty.',
                  icon: <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto text-[#c85a3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                },
                {
                  title: 'Ethical Transparency',
                  desc: 'We believe educators deserve clear information about how AI tools work, their limitations, and their potential biases.',
                  icon: <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto text-[#7a8b7e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                },
                {
                  title: 'Community Wisdom',
                  desc: 'The best insights come from practitioners. We amplify educator voices and facilitate peer learning at every level.',
                  icon: <svg className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto text-[#c85a3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                }
              ].map((value, i) => (
                <div key={i} className="text-center">
                  <div className="mb-4 sm:mb-6">{value.icon}</div>
                  <h4 className="text-lg sm:text-xl font-serif font-semibold mb-3 sm:mb-4 text-[#1a2332]">{value.title}</h4>
                  <p className="text-sm sm:text-base text-[#3d4451] font-light leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Statement */}
          <div className="bg-[#e8e3dc] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#c85a3e] opacity-5 rounded-full -mr-24 sm:-mr-32 -mt-24 sm:-mt-32"></div>
            <div className="relative z-10 max-w-4xl">
              <h3 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6 text-[#1a2332]">Our Philosophy</h3>
              <p className="text-base sm:text-lg text-[#3d4451] mb-4 sm:mb-6 font-light leading-relaxed">
                We believe AI should amplify, not replace, the irreplaceable human elements of teaching: empathy, creativity, and critical thinking. Technology is a tool, not a teacher—and the most powerful learning happens in the space between human connection and technological capability.
              </p>
              <p className="text-base sm:text-lg text-[#3d4451] font-light leading-relaxed">
                Our platform is built on research-backed frameworks from educational psychology, critical pedagogy, and technology ethics. We're committed to helping educators navigate AI integration with intentionality, maintaining agency over their practice while exploring new possibilities.
              </p>
            </div>
          </div>

          {/* Team or Founding Story */}
          <div className="mt-12 lg:mt-20 text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-4 sm:mb-6">Founded by Educators</h3>
            <p className="text-base sm:text-lg text-[#3d4451] font-light max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
              AI Educator Hub was born from late-night conversations among teachers grappling with AI's rapid emergence in education. We saw colleagues either rejecting AI entirely or adopting it uncritically—and we knew there had to be a better path.
            </p>
            <p className="text-base sm:text-lg text-[#3d4451] font-light max-w-3xl mx-auto leading-relaxed">
              Today, we're a global community of over 12,000 educators committed to that middle path: thoughtful, ethical, and pedagogically sound AI integration.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-linear-to-br from-[#7a8b7e] to-[#5a6b5e] text-[#faf8f5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 font-light">Stay Informed</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 lg:mb-12 opacity-90 font-light leading-relaxed">
            Join our monthly newsletter for AI teaching tips, research updates, and community stories.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/30 text-[#faf8f5] placeholder-[#faf8f5]/60 focus:outline-none focus:border-[#c85a3e] backdrop-blur-sm text-sm sm:text-base"
            />
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-[#c85a3e] text-white hover:bg-[#d66a4f] transition whitespace-nowrap text-sm sm:text-base">
              Subscribe
            </button>
          </form>
          <p className="text-xs sm:text-sm mt-4 sm:mt-6 opacity-70">No spam. Unsubscribe anytime. We respect your inbox.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-12 lg:mb-20 text-center">Common Questions</h2>
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                question: "Is this platform only for tech-savvy educators?",
                answer: "Not at all. We've designed the platform to be accessible to educators of all technical skill levels. Our interface is intuitive, and we provide support resources for those new to AI tools."
              },
              {
                question: "How do you protect student privacy?",
                answer: "Privacy is paramount. We never ask for student data. Our tracking focuses on your experience as an educator, and all data is encrypted and stored securely. You maintain full control over what you share."
              },
              {
                question: "What if I'm skeptical about AI in education?",
                answer: "Your skepticism is valid and valuable. Our platform encourages critical engagement with AI, not blind adoption. Many of our most active users are educators working through complex feelings about AI integration."
              },
              {
                question: "Is there a cost to use the platform?",
                answer: "We offer a free tier with core features. Premium features that support ongoing research and development are available through affordable subscription plans designed with educator budgets in mind."
              }
            ].map((faq, i) => (
              <div key={i} className="border-l-4 border-[#7a8b7e]/30 pl-4 sm:pl-6 lg:pl-8 py-3 sm:py-4 hover:border-[#c85a3e] transition">
                <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 sm:mb-3 text-[#1a2332]">{faq.question}</h3>
                <p className="text-sm sm:text-base text-[#3d4451] font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 bg-[#1a2332] text-[#faf8f5] text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 lg:mb-8 leading-tight">Ready to Transform Your Teaching?</h2>
        <p className="text-base sm:text-lg lg:text-xl mb-8 lg:mb-12 opacity-90 max-w-2xl mx-auto">
          Join educators worldwide who are thoughtfully integrating AI into their practice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center max-w-2xl mx-auto">
          <Link href="/signup" className="flex-1 sm:flex-initial">
            <button className="w-full px-8 sm:px-10 lg:px-12 py-4 lg:py-5 bg-[#c85a3e] text-white text-base lg:text-lg hover:bg-[#d66a4f] transition">
              Create Free Account
            </button>
          </Link>
          <Link href="/login" className="flex-1 sm:flex-initial">
            <button className="w-full px-8 sm:px-10 lg:px-12 py-4 lg:py-5 bg-transparent border-2 border-[#faf8f5] text-[#faf8f5] text-base lg:text-lg hover:bg-[#faf8f5] hover:text-[#1a2332] transition">
              Sign In
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="text-xl sm:text-2xl font-serif font-semibold text-[#1a2332] mb-3 sm:mb-4">AI Educator Hub</div>
            <p className="text-[#3d4451] font-light text-sm leading-relaxed">
              Empowering educators to integrate AI with intention, ethics, and excellence.
            </p>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-[#1a2332] mb-3 sm:mb-4 text-sm sm:text-base">Platform</h4>
            <ul className="space-y-2 text-[#3d4451] font-light text-sm">
              <li><a href="#features" className="hover:text-[#c85a3e] transition">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-[#c85a3e] transition">How It Works</a></li>
              <li><a href="/pricing" className="hover:text-[#c85a3e] transition">Pricing</a></li>
              <li><a href="/tools" className="hover:text-[#c85a3e] transition">AI Tools Directory</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-[#1a2332] mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
            <ul className="space-y-2 text-[#3d4451] font-light text-sm">
              <li><a href="/blog" className="hover:text-[#c85a3e] transition">Blog</a></li>
              <li><a href="/research" className="hover:text-[#c85a3e] transition">Research</a></li>
              <li><a href="/community" className="hover:text-[#c85a3e] transition">Community</a></li>
              <li><a href="/support" className="hover:text-[#c85a3e] transition">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-[#1a2332] mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
            <ul className="space-y-2 text-[#3d4451] font-light text-sm">
              <li><a href="/about" className="hover:text-[#c85a3e] transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#c85a3e] transition">Contact</a></li>
              <li><a href="/privacy" className="hover:text-[#c85a3e] transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#c85a3e] transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#e8e3dc] pt-6 sm:pt-8 text-center text-[#3d4451] font-light text-sm">
          <p>&copy; 2026 AI Educator Hub. Built for educators, by educators.</p>
        </div>
      </footer>
    </div>
  )
}