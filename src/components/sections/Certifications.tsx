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
              <div key={cert.id} className="premium-card p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-8 cursor-pointer group">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-slate-50 rounded-2xl shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                    <Award size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-xl font-black tracking-tight text-black mb-1 leading-tight truncate">{cert.title}</h3>
                    <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-8 text-[11px] font-bold text-slate-400 sm:text-right border-t sm:border-t-0 sm:border-l border-slate-50 pt-6 sm:pt-0 sm:pl-8">
                  <div className="flex items-center gap-2 sm:justify-end">
                    <Calendar size={16} className="text-slate-300" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:justify-end">
                    <MapPin size={16} className="text-slate-300" />
                    <span>{cert.location}</span>
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
