'use client';

import { useWindowSize } from '@/hooks';
import Skeleton from './Skeleton';

const CardPlaceholder = () => {
  const { width } = useWindowSize();

  const getVisibleCards = (): number => {
    if (!width) return 4;
    if (width >= 768) return 4;
    return 2;
  };

  const placeholders = Array(getVisibleCards()).fill(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6 lg:p-8">
        {placeholders.map((_, index) => (
          <div className="h-auto flex" key={index}>
            <div className="project-card group w-full" aria-hidden="true">
              <div className="project-card-body flex flex-col h-full">
                <div className="flex items-start gap-5 mb-8">
                  <Skeleton variant="rectangular" width={56} height={56} className="rounded-2xl shrink-0" />
                  <div className="flex-1 min-w-0 space-y-2">
                    <Skeleton variant="text" width="80%" height={28} />
                    <Skeleton variant="text" width="40%" height={16} />
                  </div>
                </div>
                <div className="flex-1 mb-10 space-y-2">
                  <Skeleton variant="text" width="100%" height={20} />
                  <Skeleton variant="text" width="100%" height={20} />
                  <Skeleton variant="text" width="80%" height={20} />
                </div>
                <div className="project-card-footer mt-auto flex flex-col gap-4">
                  <div className="project-card-tech flex flex-wrap gap-2">
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
  );
};

export default CardPlaceholder;
