'use client';

import { getEducation } from '@/lib/utils/data';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const educationList = getEducation();

  return (
    <section className="py-8 lg:py-12 bg-slate-50" id="education">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="w-full text-left mb-6 lg:mb-8">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="section-title mb-0 whitespace-nowrap">Education</h2>
              <div className="h-px w-full bg-slate-200" />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative mt-10">
            {/* Vertical line */}
            <div className="absolute left-[17px] top-0 bottom-0 w-0.5 bg-slate-200" />

            <div className="space-y-8">
              {educationList.map((item, index) => (
                <div key={item.id} className="relative pl-14 group">
                  {/* Icon bubble on the line */}
                  <div className="absolute left-0 top-5 w-[36px] h-[36px] rounded-full bg-slate-100 text-slate-500 flex items-center justify-center z-10">
                    <GraduationCap size={16} />
                  </div>

                  {/* Card */}
                  <div className="premium-card p-5 md:p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-5">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg lg:text-xl font-black tracking-tight text-black mb-1 leading-tight">
                          {item.degree}
                        </h3>
                        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
                          {item.institution}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">
                          <Calendar size={11} className="text-slate-300" />
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg">
                          <MapPin size={11} className="text-slate-300" />
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.status === 'Pursuing' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                        {item.status}
                      </span>
                      {item.grade && (
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">CGPA</span>
                          <span className="text-base font-black text-black">{item.grade}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
