'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle, Info } from 'lucide-react';

interface AlertProps {
  show: boolean;
  handleClose: () => void;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  statusIcon?: React.ReactNode;
  actionBtn: string;
}

const Alert = ({ show, handleClose, message, type, actionBtn }: AlertProps) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle2 size={48} className="text-emerald-500 mb-4" />;
      case 'error':
        return <XCircle size={48} className="text-red-500 mb-4" />;
      case 'warning':
        return <AlertCircle size={48} className="text-yellow-500 mb-4" />;
      case 'info':
        return <Info size={48} className="text-blue-500 mb-4" />;
      default:
        return <Info size={48} className="text-slate-500 mb-4" />;
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-white/80 backdrop-blur-sm transition-all"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col items-center p-8 text-center"
          >
            {getIcon()}
            
            <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
              {type === 'success' ? 'Message Sent' : type === 'error' ? 'Oops! Error' : 'Attention'}
            </h3>
            
            <p className="text-sm text-slate-500 leading-relaxed mb-8">
              {message}
            </p>
            
            <button
              onClick={handleClose}
              className="w-full py-3 bg-black text-white rounded-xl font-semibold text-sm transition-all hover:bg-slate-900 active:scale-95"
            >
              {actionBtn}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Alert;

