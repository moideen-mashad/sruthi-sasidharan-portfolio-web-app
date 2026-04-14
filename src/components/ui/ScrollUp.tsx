'use client';

import dynamic from 'next/dynamic';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = dynamic(() => import('react-scroll-to-top'), { ssr: false });

const ScrollUp = () => {
  return (
    <ScrollToTop
      smooth
      top={200}
      component={
        <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900 text-white transition-all hover:bg-black">
          <ArrowUp size={20} />
        </div>
      }
      className="!bottom-6 !right-6 !flex !h-12 !w-12 !items-center !justify-center !rounded-full !bg-transparent !p-0 !shadow-lg !transition-all !duration-300 hover:!scale-110 hover:!shadow-xl focus:!outline-none overflow-hidden border border-slate-200"
    />
  );
};

export default ScrollUp;

