'use client';

import Skeleton from './Skeleton';
import { getProjects, getCareers, getEducation, getCertifications } from '@/lib/utils/data';

interface SectionSkeletonProps {
  type: 'introduction' | 'about' | 'contact' | 'project' | 'career' | 'education' | 'certifications';
  className?: string;
}

const SectionSkeleton: React.FC<SectionSkeletonProps> = ({ type, className = '' }) => {
  const projectsCount = getProjects().length || 2;
  const careersCount = getCareers().length || 1;
  const educationCount = getEducation().length || 2;
  const certsCount = getCertifications().length || 1;
  if (type === 'introduction') {
    return (
      <div className={`introduction_bg relative overflow-hidden flex items-center pt-24 min-h-screen lg:pt-28 pb-12 lg:pb-16 ${className}`} id="home">
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center mb-6 lg:mb-8">
              <div className="w-full lg:w-1/2 text-left">
                <Skeleton variant="text" width="70%" height={60} className="mb-4" />
                <Skeleton variant="text" width="40%" height={32} className="mb-3" />
                <div className="space-y-3 mb-4 max-w-xl">
                  <Skeleton variant="text" width="100%" height={24} />
                  <Skeleton variant="text" width="95%" height={24} />
                  <Skeleton variant="text" width="85%" height={24} />
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="social_media flex flex-wrap gap-3">
                    <Skeleton variant="rectangular" width={48} height={48} className="rounded-xl" />
                    <Skeleton variant="rectangular" width={48} height={48} className="rounded-xl" />
                    <Skeleton variant="rectangular" width={48} height={48} className="rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 hidden lg:flex justify-end pr-8">
                <div className="relative">
                  <Skeleton variant="rectangular" width={320} height={320} className="rounded-3xl border-[6px] border-white z-10 relative" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-full blur-3xl -z-10" />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-100 rounded-full blur-3xl -z-10" />
                </div>
              </div>
            </div>
            <div className="tech_stack_container mt-6 lg:mt-8">
              <Skeleton variant="rectangular" width="100%" height={120} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'about') {
    return (
      <div className={`about_bg py-8 lg:py-12 ${className}`} id="aboutMe">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center max-w-7xl mx-auto">
            <div className="w-full lg:w-1/2 hidden lg:flex justify-center pr-12">
              <div className="relative w-full max-w-md aspect-square premium-card p-2 overflow-hidden bg-slate-50/50 border-dashed border-2 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <Skeleton variant="rectangular" width={80} height={80} className="rounded-full" />
                  <Skeleton variant="text" width={100} height={24} />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <Skeleton variant="text" width={200} height={48} />
                <div className="h-px w-full bg-slate-100" />
              </div>
              <Skeleton variant="rectangular" width="45%" height={36} className="mb-4 rounded border-l-4 border-slate-200 pl-4 py-1" />
              <div className="space-y-4 max-w-xl">
                <Skeleton variant="text" width="100%" height={24} />
                <Skeleton variant="text" width="95%" height={24} />
                <Skeleton variant="text" width="98%" height={24} />
                <Skeleton variant="text" width="80%" height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'contact') {
    return (
      <div className={`contactme_bg py-8 lg:py-12 ${className}`} id="contact">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-12 lg:gap-0 max-w-7xl mx-auto">
            <div className="w-full lg:w-1/2 lg:pr-12">
              <div className="flex items-center gap-4 mb-6">
                <Skeleton variant="text" width={200} height={40} />
                <div className="h-px w-full bg-slate-200" />
              </div>
              <div className="space-y-3 max-w-lg">
                <Skeleton variant="text" width="100%" height={24} />
                <Skeleton variant="text" width="95%" height={24} />
                <Skeleton variant="text" width="90%" height={24} />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="premium-card p-6 sm:p-8 lg:p-6 lg:p-8">
                <div className="space-y-6">
                  <div>
                    <Skeleton variant="text" width="20%" height={20} className="mb-2" />
                    <Skeleton variant="rectangular" width="100%" height={56} className="rounded-xl" />
                  </div>
                  <div>
                    <Skeleton variant="text" width="20%" height={20} className="mb-2" />
                    <Skeleton variant="rectangular" width="100%" height={56} className="rounded-xl" />
                  </div>
                  <div>
                    <Skeleton variant="text" width="20%" height={20} className="mb-2" />
                    <Skeleton variant="rectangular" width="100%" height={150} className="rounded-xl" />
                  </div>
                  <Skeleton variant="rectangular" width="100%" height={56} className="rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'project') {
    return (
      <div className={`project_bg py-8 lg:py-12 ${className}`} id="projects">
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="w-full text-left mb-6">
              <div className="flex items-center gap-4 mb-4">
                <Skeleton variant="text" width={240} height={48} />
                <div className="h-px w-full bg-slate-100" />
              </div>
              <Skeleton variant="text" width="60%" height={24} className="max-w-2xl" />
            </div>
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Array.from({ length: projectsCount }).map((_, i) => (
                  <div key={i} className="h-auto flex">
                    <div className="project-card group w-full">
                      <div className="project-card-body flex flex-col h-full">
                        <div className="flex items-start gap-5 mb-8">
                          <Skeleton variant="rectangular" width={56} height={56} className="rounded-2xl shrink-0" />
                          <div className="flex-1 min-w-0 space-y-2">
                            <Skeleton variant="text" width="80%" height={28} />
                            <Skeleton variant="text" width="40%" height={16} />
                          </div>
                        </div>
                        <div className="flex-1 mb-4 space-y-2">
                          <Skeleton variant="text" width="100%" height={20} />
                          <Skeleton variant="text" width="100%" height={20} />
                          <Skeleton variant="text" width="80%" height={20} />
                        </div>
                        <div className="project-card-footer mt-auto flex flex-col gap-4 pt-5">
                          <div className="project-card-tech flex flex-wrap gap-2 mb-8">
                            <Skeleton variant="rectangular" width={60} height={24} className="rounded-lg" />
                            <Skeleton variant="rectangular" width={60} height={24} className="rounded-lg" />
                            <Skeleton variant="rectangular" width={60} height={24} className="rounded-lg" />
                          </div>
                          <Skeleton variant="text" width={120} height={24} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'career') {
    return (
      <div className={`career_bg py-8 lg:py-12 ${className}`} id="experience">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="w-full text-left mb-6 lg:mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Skeleton variant="text" width={280} height={48} />
                <div className="h-px w-full bg-slate-100" />
              </div>
              <Skeleton variant="text" width="50%" height={24} className="max-w-2xl" />
            </div>
            
            <div className="relative mt-12 pb-12 pl-12 md:pl-0">
              <div className="absolute left-[38px] top-0 bottom-0 w-1 bg-slate-100 hidden md:block" />
              <div className="space-y-12">
                {Array.from({ length: careersCount }).map((_, i) => (
                  <div key={i} className="relative md:pl-28 group">
                    <div className="absolute left-[20px] top-6 w-10 h-10 rounded-full bg-slate-50 border-4 border-slate-200 z-10 hidden md:block" />
                    <div className="premium-card p-5 md:p-6 lg:p-8 w-full">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                        <div className="flex items-start gap-4">
                           <Skeleton variant="rectangular" width={44} height={44} className="rounded-xl shrink-0" />
                           <div className="space-y-2 flex-1">
                              <Skeleton variant="text" width="200px" height={28} />
                              <Skeleton variant="text" width="100px" height={14} />
                           </div>
                        </div>
                        <Skeleton variant="rectangular" width={140} height={28} className="rounded-lg" />
                      </div>
                      <div className="space-y-2 mb-8">
                        <Skeleton variant="text" width="100%" height={16} />
                        <Skeleton variant="text" width="85%" height={16} />
                      </div>
                      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                        <Skeleton variant="text" width={100} height={16} />
                        <Skeleton variant="text" width={80} height={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'education') {
    return (
      <div className={`py-8 lg:py-12 bg-slate-50 ${className}`} id="education">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="w-full text-left mb-6 lg:mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Skeleton variant="text" width={240} height={48} />
                <div className="h-px w-full bg-slate-200" />
              </div>
            </div>

            <div className="relative mt-12 pb-12 pl-12 md:pl-0">
              <div className="absolute left-[38px] top-0 bottom-0 w-1 bg-slate-200 hidden md:block" />
              <div className="space-y-12">
                {Array.from({ length: educationCount }).map((_, i) => (
                  <div key={i} className="relative md:pl-28 group">
                    <div className="absolute left-[20px] top-6 w-10 h-10 rounded-full bg-white border-4 border-slate-100 z-10 hidden md:block" />
                    <div className="premium-card p-5 md:p-6 lg:p-8 w-full">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                        <div className="flex items-start gap-4">
                           <Skeleton variant="rectangular" width={44} height={44} className="rounded-xl shrink-0" />
                           <div className="space-y-2 flex-1">
                              <Skeleton variant="text" width="200px" height={28} />
                              <Skeleton variant="text" width="100px" height={14} />
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <Skeleton variant="rectangular" width={100} height={28} className="rounded-lg" />
                           <Skeleton variant="rectangular" width={100} height={28} className="rounded-lg" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                        <Skeleton variant="rectangular" width={90} height={28} className="rounded-full" />
                        <Skeleton variant="text" width={60} height={20} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'certifications') {
    return (
      <div className={`py-8 lg:py-12 ${className}`} id="certifications">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="w-full text-left mb-6 lg:mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Skeleton variant="text" width={260} height={48} />
                <div className="h-px w-full bg-slate-100" />
              </div>
            </div>
            <div className="grid gap-6">
              {Array.from({ length: certsCount }).map((_, i) => (
                <div key={i} className="premium-card p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-slate-50 rounded-2xl shrink-0">
                      <Skeleton variant="rectangular" width={24} height={24} />
                    </div>
                    <div className="flex-1 min-w-0 space-y-2">
                      <Skeleton variant="text" width="90%" height={28} />
                      <Skeleton variant="text" width="50%" height={16} />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-8 sm:border-l border-slate-50 sm:pl-8">
                    <div className="flex items-center gap-2">
                      <Skeleton variant="rectangular" width={16} height={16} className="rounded" />
                      <Skeleton variant="text" width={80} height={16} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton variant="rectangular" width={16} height={16} className="rounded" />
                      <Skeleton variant="text" width={80} height={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default SectionSkeleton;
