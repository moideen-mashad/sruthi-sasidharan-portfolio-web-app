'use client';

import ContactForm from './ContactForm';
import { getUserData } from '@/lib/utils/data';

const Contact = () => {
  const userData = getUserData();

  return (
    <div className="contactme_bg py-20 lg:py-32" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-12 lg:gap-0 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 lg:pr-12">
            <h2 className="sub_title text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
              Let&apos;s Talk
            </h2>
            <p className="para text-base sm:text-lg opacity-80 leading-relaxed max-w-lg">
              {userData.connect}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="premium-card p-6 sm:p-8 lg:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
