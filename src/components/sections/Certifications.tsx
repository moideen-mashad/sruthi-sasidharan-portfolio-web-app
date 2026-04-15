'use client';

import { getCertifications } from '@/lib/utils/data';
import { Award, Calendar, MapPin } from 'lucide-react';

const Certifications = () => {
  const certifications = getCertifications();

  return (
    <section className="py-8 lg:py-12" id="certifications">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="w-full text-left mb-6 lg:mb-8">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="section-title mb-0 whitespace-nowrap">
                Certifications
              </h2>
              <div className="h-px w-full bg-slate-100" />
            </div>
          </div>

          <div className="grid gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="premium-card p-6 lg:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-8 cursor-pointer group">
                <div className="flex items-start gap-4 lg:gap-5 flex-1 min-w-0">
                  <div className="p-3.5 lg:p-4 bg-slate-50 rounded-2xl shrink-0 group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                    <Award size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-xl font-black tracking-tight text-black mb-1 leading-tight break-words">
                      {cert.title}
                    </h3>
                    <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col flex-wrap gap-x-6 gap-y-2 text-[10px] md:text-[11px] font-bold text-slate-400 md:text-right border-t md:border-t-0 md:border-l border-slate-50 pt-6 md:pt-0 md:pl-8 shrink-0">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar size={14} className="text-slate-300 md:w-4 md:h-4" />
                    <span className="whitespace-nowrap uppercase tracking-wider">{cert.date}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin size={14} className="text-slate-300 md:w-4 md:h-4" />
                    <span className="whitespace-nowrap uppercase tracking-wider">{cert.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
