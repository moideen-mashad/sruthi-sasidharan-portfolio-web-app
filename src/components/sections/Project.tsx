'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink, Linkedin, Info, X, Terminal, ArrowRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getUserData, getProjects } from '@/lib/utils/data';
import CardPlaceholder from '@/components/ui/CardPlaceholder';
import { Project as ProjectType } from '@/types';

const Project = () => {
  const [projectList, setProjectList] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    setIsClient(true);
    try {
      setProjectList(getProjects());
    } finally {
      setIsLoading(false);
    }
  }, []);

  const userData = getUserData();

  useEffect(() => {
    if (selectedProject) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const openModal = (project: ProjectType) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section className="project_bg py-8 lg:py-12" id="projects">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="w-full text-left mb-6">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="section-title mb-0 whitespace-nowrap">
                {userData.project_title || "Projects"}
              </h2>
              <div className="h-px w-full bg-slate-100" />
            </div>
            <p className="para text-base sm:text-lg leading-relaxed">
              Architecture and implementation of enterprise-grade systems and retail solutions.
            </p>
          </div>

          <div className="w-full">
            {isLoading || !isClient ? (
              <CardPlaceholder />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectList.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="project-card group cursor-pointer"
                      onClick={() => openModal(item)}
                    >
                      <div className="project-card-body h-full flex flex-col p-6 sm:p-8">
                        <div className="flex items-start gap-5 mb-8">
                          <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                            {index % 2 === 0 ? <Terminal size={24} /> : <Layers size={24} />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg lg:text-xl font-black tracking-tight text-black mb-1 leading-tight truncate">{item.name}</h3>
                            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">{item.subtitle}</p>
                          </div>
                          <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shrink-0">
                            <ArrowRight size={18} />
                          </div>
                        </div>

                        <p className="project-card-description mb-6 line-clamp-2">
                          {item.description}
                        </p>

                        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {item.technology_used.slice(0, 3).map((tech, i) => (
                              <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-md text-[10px] font-bold uppercase tracking-wider">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">
                            Details <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/90 backdrop-blur-xl"
              onClick={closeModal}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 sm:top-10 sm:right-10 z-50 p-3 bg-slate-50/80 backdrop-blur-md hover:bg-black hover:text-white rounded-full transition-all shadow-sm"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-16 custom-scrollbar">
                <div className="max-w-3xl">
                  <div className="mb-12">
                    <span className="inline-block px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">Case Study</span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-black mb-2 tracking-tight leading-none">{selectedProject.name}</h3>
                    {selectedProject.subtitle && (
                      <p className="text-lg text-slate-400 font-medium">@ {selectedProject.subtitle}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
                    <div className="lg:col-span-3">
                      <h4 className="sub-heading mb-6">Architecture & Key Features</h4>
                      <div className="space-y-6">
                        {selectedProject.bullets && selectedProject.bullets.length > 0 ? (
                          <ul className="space-y-6 list-none pl-0">
                            {selectedProject.bullets.map((bullet, i) => (
                              <li key={i} className="flex gap-6 para text-base sm:text-lg leading-relaxed">
                                <span className="mt-3 w-1.5 h-1.5 rounded-full bg-slate-200 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="para text-base sm:text-lg leading-relaxed">
                            {selectedProject.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-10">
                      <div>
                        <h4 className="sub-heading mb-4">Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technology_used.map((tech, i) => (
                            <span key={i} className="px-3 py-1 border border-black/10 rounded-md text-[10px] font-bold text-black uppercase">{tech}</span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                        {selectedProject.host_link && (
                          <Link
                            href={selectedProject.host_link}
                            target="_blank"
                            className="flex items-center justify-between text-sm font-bold text-black hover:text-blue-600 transition-colors"
                          >
                            Live System <ExternalLink size={16} />
                          </Link>
                        )}
                        {selectedProject.linkedin_post && (
                          <Link
                            href={selectedProject.linkedin_post}
                            target="_blank"
                            className="flex items-center justify-between text-sm font-bold text-black hover:text-blue-600 transition-colors"
                          >
                            Project Insight <Linkedin size={16} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Project;
