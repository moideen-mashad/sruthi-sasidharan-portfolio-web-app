'use client';

import Marquee from 'react-fast-marquee';
import {
  SiHtml5, SiCss, SiJavascript, SiDocker,
  SiPython, SiDjango, SiMysql,
  SiGit, SiBootstrap, SiJquery, SiPandas, SiJsonwebtokens, SiPostman, SiInsomnia
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const STATIC_SKILLS = [
  { label: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
  { label: 'Django', icon: <SiDjango className="text-[#092E20]" /> },
  { label: 'Pandas', icon: <SiPandas className="text-[#150458]" /> },
  { label: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
  { label: 'Azure', icon: <VscAzure className="text-[#0078D4]" /> },
  { label: 'REST API', icon: <SiInsomnia className="text-[#5849BE]" /> },
  { label: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
  { label: 'JWT Token', icon: <SiJsonwebtokens className="text-[#000000]" /> },
  { label: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { label: 'jQuery', icon: <SiJquery className="text-[#0769AD]" /> },
  { label: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" /> },
  { label: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
  { label: 'CSS3', icon: <SiCss className="text-[#1572B6]" /> },
  { label: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
  { label: 'Git', icon: <SiGit className="text-[#F05032]" /> },
];

const TechStack = () => {
  const midPoint = Math.ceil(STATIC_SKILLS.length / 2);
  const row1 = STATIC_SKILLS.slice(0, midPoint);
  const row2 = STATIC_SKILLS.slice(midPoint);

  const renderSkill = (skill: { label: string; icon: React.ReactElement }, index: number) => (
    <div
      key={index}
      className="mx-2 md:mx-3 flex items-center gap-2.5 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 bg-white/40 backdrop-blur-md border border-slate-100/50 rounded-xl md:rounded-2xl shadow-[0_4px_15px_-4px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group cursor-default"
    >
      <div className="text-xl md:text-2xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
        {skill.icon}
      </div>
      <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-black transition-colors">
        {skill.label}
      </span>
    </div>
  );

  return (
    <div className="w-full tech_stack_container py-1 relative">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:p-8 lg:gap-16">
        <div className="flex-shrink-0 flex items-center gap-5 group lg:rotate-[-90deg] lg:translate-x-[-20%]">
          <div className="hidden lg:block h-px w-8 bg-slate-200 group-hover:w-16 group-hover:bg-black transition-all duration-700" />
          <h6 className="font-black text-[10px] md:text-xs uppercase tracking-[0.5em] text-slate-300 group-hover:text-black transition-colors whitespace-nowrap text-center">
            The Stack
          </h6>
          <div className="h-px w-8 bg-slate-100 lg:hidden" />
        </div>

        <div className="flex-1 w-full overflow-hidden relative group/marquee space-y-2 md:space-y-3">
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <Marquee gradient={false} speed={25} direction="left" pauseOnHover>
            {row1.map((skill, index) => renderSkill(skill, index))}
          </Marquee>
          <Marquee gradient={false} speed={30} direction="right" pauseOnHover>
            {row2.map((skill, index) => renderSkill(skill, index))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
