import { Navbar, Footer } from '@/components/layouts';
import BackToHome from '@/components/ui/BackToHome';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 className="text-8xl font-black text-slate-900 mb-4">404</h1>
          <p className="text-2xl font-semibold text-slate-700 mb-3">Page Not Found</p>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            We&apos;re sorry, but the page you are looking for does not exist.
          </p>
          <BackToHome />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
