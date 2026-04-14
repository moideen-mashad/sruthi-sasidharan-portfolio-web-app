'use client';

import React from 'react';
import Skeleton from './Skeleton';

interface SectionSkeletonProps {
  type: 'introduction' | 'about' | 'contact' | 'project';
  className?: string;
}

const SectionSkeleton: React.FC<SectionSkeletonProps> = ({ type, className = '' }) => {
  if (type === 'introduction') {
    return (
      <div className={`py-20 lg:py-32 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center max-w-7xl mx-auto">
            <div className="w-full lg:w-3/5 lg:pr-12">
              <Skeleton variant="text" width="60%" height={48} className="mb-4" />
              <Skeleton variant="text" width="40%" height={28} className="mb-6" />
              <div className="space-y-2 mb-8">
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="95%" height={20} />
                <Skeleton variant="text" width="85%" height={20} />
              </div>
              <div className="flex gap-4">
                <Skeleton variant="circular" width={48} height={48} />
                <Skeleton variant="circular" width={48} height={48} />
                <Skeleton variant="circular" width={48} height={48} />
              </div>
            </div>
            <div className="hidden lg:block lg:w-2/5">
              <Skeleton variant="rectangular" width="100%" height={400} className="rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'about') {
    return (
      <div className={`py-20 lg:py-32 bg-slate-50 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center max-w-7xl mx-auto">
            <div className="hidden lg:block lg:w-1/2 lg:pr-12">
              <Skeleton variant="rectangular" width="100%" height={450} className="rounded-3xl" />
            </div>
            <div className="w-full lg:w-1/2">
              <Skeleton variant="text" width="30%" height={40} className="mb-6" />
              <Skeleton variant="text" width="50%" height={28} className="mb-4" />
              <div className="space-y-3">
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="95%" height={20} />
                <Skeleton variant="text" width="90%" height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'contact') {
    return (
      <div className={`py-20 lg:py-32 bg-slate-50 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-12 lg:gap-0 max-w-7xl mx-auto">
            <div className="w-full lg:w-1/2 lg:pr-12">
              <Skeleton variant="text" width="40%" height={40} className="mb-6" />
              <div className="space-y-3">
                <Skeleton variant="text" width="100%" height={20} />
                <Skeleton variant="text" width="95%" height={20} />
                <Skeleton variant="text" width="90%" height={20} />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm space-y-6">
                <div>
                  <Skeleton variant="text" width="30%" height={20} className="mb-2" />
                  <Skeleton variant="rectangular" width="100%" height={48} className="rounded-xl" />
                </div>
                <div>
                  <Skeleton variant="text" width="30%" height={20} className="mb-2" />
                  <Skeleton variant="rectangular" width="100%" height={48} className="rounded-xl" />
                </div>
                <div>
                  <Skeleton variant="text" width="25%" height={20} className="mb-2" />
                  <Skeleton variant="rectangular" width="100%" height={150} className="rounded-xl" />
                </div>
                <Skeleton variant="rectangular" width="100%" height={56} className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'project') {
    return (
      <div className={`py-20 lg:py-32 ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <Skeleton variant="text" width="30%" height={40} className="mb-4" />
              <Skeleton variant="text" width="60%" height={24} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden">
                  <Skeleton variant="rectangular" width="100%" height={240} />
                  <div className="p-8">
                    <Skeleton variant="text" width="60%" height={24} className="mb-4" />
                    <div className="flex gap-2 mb-6">
                      <Skeleton variant="rectangular" width={60} height={24} className="rounded-full" />
                      <Skeleton variant="rectangular" width={70} height={24} className="rounded-full" />
                    </div>
                    <div className="flex gap-4 pt-6 border-t border-black/5">
                      <Skeleton variant="rectangular" width="70%" height={48} className="rounded-xl" />
                      <Skeleton variant="rectangular" width={48} height={48} className="rounded-xl" />
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
