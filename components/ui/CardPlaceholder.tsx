'use client';

import { useWindowSize } from '@/hooks';
import Skeleton from './Skeleton';

const CardPlaceholder = () => {
  const { width } = useWindowSize();

  const getVisibleCards = (): number => {
    if (!width) return 3;
    if (width >= 992) return 3;
    if (width >= 768) return 2;
    return 1;
  };

  const placeholders = Array(getVisibleCards()).fill(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholders.map((_, index) => (
          <div className="w-full" key={index}>
            <div className="bg-white rounded-[20px] shadow-sm border border-black/5 overflow-hidden" aria-hidden="true">
              <Skeleton variant="rectangular" height={200} className="w-full" />
              <div className="p-6">
                <Skeleton variant="text" width="60%" height={24} className="mb-4" />
                <div className="flex gap-2 mb-6 flex-wrap">
                  <Skeleton variant="rectangular" width={60} height={24} className="rounded-full" />
                  <Skeleton variant="rectangular" width={70} height={24} className="rounded-full" />
                  <Skeleton variant="rectangular" width={50} height={24} className="rounded-full" />
                </div>
                <div className="flex gap-3">
                  <Skeleton variant="rectangular" width={100} height={40} className="rounded-xl" />
                  <Skeleton variant="rectangular" width={40} height={40} className="rounded-xl" />
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
