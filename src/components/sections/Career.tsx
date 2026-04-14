'use client';

import { useState, useEffect } from 'react';
import { LuBuilding2, LuMapPin, LuLink, LuTrophy, LuArrowRight } from 'react-icons/lu';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCareers } from '@/lib/utils/data';
import { CareerItem } from '@/types';

const Career = () => {
  const careers = getCareers();
  const [selectedCareer, setSelectedCareer] = useState<CareerItem | null>(null);

  useEffect(() => {
    if (selectedCareer) {
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
  }, [selectedCareer]);

  const openModal = (career: CareerItem) => setSelectedCareer(career);
  const closeModal = () => setSelectedCareer(null);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  if (!careers || careers.length === 0) return null;

  return (
    <section className="career_bg py-8 lg:py-12" id="experience">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="w-full text-left mb-6 lg:mb-8">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="section-title mb-0 whitespace-nowrap">Professional Journey</h2>
              <div className="h-px w-full bg-slate-100" />
            </div>
            <p className="para text-base sm:text-lg leading-relaxed">
              Career history and key contributions within the technology ecosystem.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-10">
            {/* Vertical line */}
            <div className="absolute left-[17px] top-0 bottom-0 w-0.5 bg-slate-100" />

            <div className="space-y-8">
              {careers.map((career: CareerItem, index: number) => (
                <div key={career.id} className="relative pl-14 group">
                  {/* Icon bubble on the line */}
                  <div className="absolute left-0 top-5 w-[36px] h-[36px] rounded-full bg-black text-white flex items-center justify-center z-10 shadow-sm">
                    <LuBuilding2 size={16} />
                  </div>

                  {/* Card */}
                  <div
                    className="premium-card p-5 md:p-6 lg:p-8 cursor-pointer transition-all"
                    onClick={() => openModal(career)}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-5">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg lg:text-xl font-black tracking-tight text-black mb-1 leading-tight">
                          {career.role}
                        </h3>
                        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
                          {career.companyName}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-black tracking-widest text-slate-500 uppercase">
                          {formatDate(career.startDate)} — {career.isCurrent ? 'PRESENT' : career.endDate ? formatDate(career.endDate) : ''}
                        </span>
                        {career.isCurrent && (
                          <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="project-card-description mb-6 line-clamp-2">
                      {career.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <button className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest group-hover:gap-3 transition-all">
                        Read Highlights <LuArrowRight size={13} />
                      </button>
                      {career.location && (
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                          <LuMapPin size={11} /> {career.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCareer && (
          <div className="fixed inset-0 z-[9999]" role="dialog" aria-modal="true">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white/90 backdrop-blur-xl"
            />
            <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6" onClick={closeModal}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col overflow-hidden"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 sm:top-10 sm:right-10 z-50 p-3 bg-slate-50/80 backdrop-blur-md hover:bg-black hover:text-white rounded-full transition-all shadow-sm"
                >
                  <X size={24} />
                </button>

                <div className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-16 custom-scrollbar">
                  <div className="max-w-3xl">
                    <div className="mb-12">
                      <span className="inline-block px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">Experience</span>
                      <h3 className="text-3xl sm:text-4xl font-bold text-black mb-2 tracking-tight leading-none">{selectedCareer.role}</h3>
                      <p className="text-lg text-slate-400 font-medium">@ {selectedCareer.companyName}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
                      <div className="lg:col-span-3">
                        <h4 className="sub-heading mb-6">Role & Responsibility</h4>
                        <p className="para text-base sm:text-lg leading-relaxed mb-10">{selectedCareer.description}</p>

                        {selectedCareer.bullets && selectedCareer.bullets.length > 0 && (
                          <>
                            <h4 className="sub-heading mb-6">Key Benchmarks</h4>
                            <ul className="space-y-6 list-none pl-0">
                              {selectedCareer.bullets.map((bullet, i) => (
                                <li key={i} className="flex gap-6 para text-base sm:text-lg leading-relaxed">
                                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-slate-200 shrink-0" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>

                      <div className="space-y-10">
                        <div>
                          <h4 className="sub-heading mb-4">Duration</h4>
                          <span className="text-sm font-bold text-black">
                            {formatDate(selectedCareer.startDate)} — {selectedCareer.isCurrent ? 'Present' : selectedCareer.endDate ? formatDate(selectedCareer.endDate) : ''}
                          </span>
                        </div>

                        {selectedCareer.highlight && (
                          <div>
                            <h4 className="sub-heading mb-4">Impact</h4>
                            <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-100 text-[11px] font-bold text-yellow-800 flex gap-3">
                              <LuTrophy className="shrink-0 mt-0.5" /> {selectedCareer.highlight}
                            </div>
                          </div>
                        )}

                        {selectedCareer.companyWebsite && (
                          <div className="pt-6 border-t border-slate-100">
                            <a href={selectedCareer.companyWebsite} target="_blank" rel="noopener noreferrer"
                              className="flex items-center justify-between text-sm font-bold hover:text-blue-600 transition-colors">
                              Verify Organization <LuLink size={16} />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Career;
