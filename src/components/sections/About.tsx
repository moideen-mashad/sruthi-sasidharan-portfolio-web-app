import { getUserData } from '@/lib/utils/data';

const About = () => {
  const userData = getUserData();

  return (
    <div className="about_bg py-8 lg:py-12" id="aboutMe">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 hidden lg:flex justify-center pr-12">
            <div className="relative w-full max-w-md aspect-square premium-card p-2 group overflow-hidden">
              <div className="w-full h-full bg-slate-50 rounded-2xl flex items-center justify-center border border-dashed border-slate-200 group-hover:bg-white transition-colors">
                <div className="flex flex-col items-center gap-4 text-slate-300 group-hover:text-slate-400">
                  <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center animate-pulse">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-lg tracking-tight">Biography</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="sub_title mb-0 text-3xl sm:text-4xl font-bold tracking-tight whitespace-nowrap">About Me</h2>
              <div className="h-px w-full bg-slate-100" />
            </div>
            <h3 className="category_title mb-3 font-semibold text-xl opacity-90 border-l-4 border-black pl-4 py-1">
              {userData.job_role}
            </h3>
            <p className="para text-base sm:text-lg leading-relaxed space-y-4 max-w-xl">
             {userData.about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
