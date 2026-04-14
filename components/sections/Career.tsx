'use client';

import { useState } from 'react';
import { LuBuilding2, LuMapPin, LuLink, LuTrophy, LuPlus, LuMinus } from 'react-icons/lu';
import { getCareers } from '@/lib/utils/data';
import { CareerItem } from '@/types';

const Career = () => {
  const careers = getCareers();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  if (!careers || careers.length === 0) return null;

  return (
    <section className="career_bg py-20 lg:py-28" id="experience">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary/70">
              Journey
            </span>
            <h2 className="sub_title mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
              Professional Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent" />
            <div className="space-y-8">
              {careers.map((career: CareerItem) => (
                <div key={career.id} className="relative pl-10 group">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-3 w-2.5 h-2.5 -translate-x-1/2 rounded-full border-2 transition-all duration-300 group-hover:scale-150 ${
                      career.isCurrent
                        ? 'bg-emerald-500 border-emerald-200'
                        : 'bg-white border-slate-300 group-hover:border-primary'
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`rounded-xl p-5 border transition-all duration-200 hover:shadow-sm ${
                      career.type === 'break'
                        ? 'bg-orange-50/30 border-orange-100'
                        : 'bg-white border-slate-100'
                    }`}
                  >
                    {/* Date + badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-medium text-slate-400 tracking-wide">
                        {formatDate(career.startDate)} —{' '}
                        {career.isCurrent
                          ? 'Present'
                          : career.endDate
                          ? formatDate(career.endDate)
                          : '—'}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {career.isCurrent && (
                          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                        {career.type === 'break' && (
                          <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                            Break
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Role + company */}
                    <h3
                      className={`text-lg font-semibold tracking-tight mb-1 ${
                        career.type === 'break' ? 'text-orange-900' : 'text-slate-900'
                      }`}
                    >
                      {career.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {career.companyWebsite ? (
                        <a
                          href={career.companyWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-primary transition-colors"
                        >
                          <LuBuilding2 className="shrink-0" />
                          {career.companyName}
                          <LuLink className="opacity-60" />
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                          <LuBuilding2 className="shrink-0" />
                          {career.companyName}
                        </span>
                      )}
                      {career.location && (
                        <span className="flex items-center gap-1 text-xs text-slate-400">
                          <LuMapPin className="shrink-0" />
                          {career.location}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                      {career.description}
                    </p>

                    {/* Highlight */}
                    {career.highlight && (
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-yellow-700">
                        <LuTrophy className="shrink-0 text-yellow-500" />
                        {career.highlight}
                      </div>
                    )}

                    {/* Bullets */}
                    {career.bullets && career.bullets.length > 0 && (
                      <div className="mt-4">
                        {!expanded[career.id] ? (
                          <button
                            onClick={() => toggleExpand(career.id)}
                            className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary/70 hover:text-primary transition-colors py-0.5"
                          >
                            Key Milestones <LuPlus strokeWidth={2.5} />
                          </button>
                        ) : (
                          <div>
                            <div className="mt-3 space-y-2.5 border-l border-slate-100 pl-4">
                              {career.bullets.map((bullet: string, i: number) => (
                                <div key={i} className="flex items-start gap-2.5">
                                  <div className="mt-2 h-1 w-1 bg-slate-300 rounded-full shrink-0" />
                                  <p className="text-slate-500 text-sm leading-relaxed">{bullet}</p>
                                </div>
                              ))}
                            </div>
                            <button
                              onClick={() => toggleExpand(career.id)}
                              className="mt-3 text-[11px] font-medium text-slate-400 hover:text-slate-600 transition-colors"
                            >
                              Hide
                            </button>
                          </div>
                        )}
                      </div>
                    )}
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

export default Career;
