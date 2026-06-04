import { ArrowRight, Cpu, Layers, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-brand-accent/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* 1) Animated Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-8 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="text-sm font-medium text-brand-accent tracking-wide uppercase">
              Open to Opportunities
            </span>
          </div>

          {/* 2) Massive Bold Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-textPrimary mb-6 tracking-tight leading-[1.1]">
            Engineering Agentic AI & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">
              Scalable Full-Stack Systems
            </span>
          </h1>

          {/* 3) Recruiter-Focused Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-textSecondary mb-10 leading-relaxed">
            Architecting production-grade MERN applications and automated AI workflows. 
            Focused on building robust, agent-driven architectures that bridge the gap 
            between complex AI models and scalable business solutions.
          </p>

          {/* 4) Interactive CTA Button */}
          <div className="flex items-center justify-center mb-20">
            <button className="group flex items-center gap-2 px-8 py-4 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-accent/25">
              Explore Selected Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 5) Operational Metrics Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-6 bg-brand-card/50 border border-white/5 rounded-2xl backdrop-blur-sm">
              <div className="p-3 bg-brand-accent/10 rounded-lg">
                <Cpu size={24} className="text-brand-accent" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-brand-textPrimary">4+</div>
                <div className="text-sm text-brand-textSecondary font-medium">Deployed AI Agents</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-brand-card/50 border border-white/5 rounded-2xl backdrop-blur-sm">
              <div className="p-3 bg-brand-accent/10 rounded-lg">
                <Layers size={24} className="text-brand-accent" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-brand-textPrimary">5+</div>
                <div className="text-sm text-brand-textSecondary font-medium">Live Full-Stack Apps</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-brand-card/50 border border-white/5 rounded-2xl backdrop-blur-sm">
              <div className="p-3 bg-brand-accent/10 rounded-lg">
                <ShieldCheck size={24} className="text-brand-accent" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-brand-textPrimary">100%</div>
                <div className="text-sm text-brand-textSecondary font-medium">Production Grade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
