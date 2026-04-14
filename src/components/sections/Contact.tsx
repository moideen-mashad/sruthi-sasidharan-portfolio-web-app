'use client';

import ContactForm from './ContactForm';
import { getUserData } from '@/lib/utils/data';

const Contact = () => {
  const userData = getUserData();

  return (
    <div className="contactme_bg py-8 lg:py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-12 lg:gap-0 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 lg:pr-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="sub_title mb-0 text-3xl sm:text-4xl font-bold tracking-tight whitespace-nowrap">Let&apos;s Talk</h2>
              <div className="h-px w-full bg-slate-200" />
            </div>
            <p className="para text-base sm:text-lg leading-relaxed max-w-lg">
              {userData.connect}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="premium-card p-6 sm:p-8 lg:p-6 lg:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
