'use client';

import Marquee from 'react-fast-marquee';
import {
  SiHtml5, SiCss, SiTailwindcss, SiJavascript, SiReact, SiRedux,
  SiNextdotjs, SiVite, SiNodedotjs, SiNpm, SiWordpress, SiDocker,
  SiVercel, SiGithub, SiGitlab,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const STATIC_SKILLS = [
  { label: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
  { label: 'CSS3', icon: <SiCss className="text-[#1572B6]" /> },
  { label: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { label: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { label: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
  { label: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
  { label: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { label: 'Vite', icon: <SiVite className="text-[#646CFF]" /> },
  { label: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
  { label: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
  { label: 'Vercel', icon: <SiVercel className="text-black" /> },
  { label: 'AWS', icon: <FaAws className="text-[#232F3E]" /> },
  { label: 'GitHub', icon: <SiGithub className="text-[#181717]" /> },
  { label: 'GitLab', icon: <SiGitlab className="text-[#FC6D26]" /> },
  { label: 'npm', icon: <SiNpm className="text-[#CB3837]" /> },
  { label: 'WordPress', icon: <SiWordpress className="text-[#21759B]" /> },
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
    <div className="w-full tech_stack_container py-4 relative">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
        <div className="flex-shrink-0 flex items-center gap-5 group lg:rotate-[-90deg] lg:translate-x-[-20%]">
          <div className="hidden lg:block h-px w-8 bg-slate-200 group-hover:w-16 group-hover:bg-black transition-all duration-700" />
          <h6 className="font-black text-[10px] md:text-xs uppercase tracking-[0.5em] text-slate-300 group-hover:text-black transition-colors whitespace-nowrap text-center">
            The Stack
          </h6>
          <div className="h-px w-8 bg-slate-100 lg:hidden" />
        </div>

        <div className="flex-1 w-full overflow-hidden relative group/marquee space-y-4 md:space-y-6">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
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
