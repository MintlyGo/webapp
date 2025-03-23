import { useState } from 'react';
import { X } from 'lucide-react';
import { submitWaitlistEmail } from '@/lib/api';
import Toast from '@/components/ui/Toast';

interface WaitlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ToastState {
  message: string;
  type: 'success' | 'error';
}

const WaitlistDialog = ({ isOpen, onClose }: WaitlistDialogProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitWaitlistEmail(email);
      
      if (response.success) {
        setToast({
          type: 'success',
          message: 'Thank you for joining our waitlist! We\'ll keep you updated.',
        });
        setEmail('');
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setToast({
          type: 'error',
          message: response.message,
        });
      }
    } catch (error) {
      setToast({
        type: 'error',
        message: 'Failed to join waitlist. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop with blur effect */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog Content */}
      <div className="relative w-full max-w-lg mx-4 animate-dialog-slide-in">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/90 to-primary-700/90 rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-10" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Content */}
        <div className="relative p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/50 hover:text-white transition-colors transform hover:scale-110 duration-200"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Join the Waitlist</h2>
            <p className="text-lg text-gray-300/90">
              Be among the first to experience the future of digital finance.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="satoshi@mintlygo.com"
                className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20 transition-all duration-300 group-hover:bg-white/15"
                required
                disabled={isSubmitting}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-cyan-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-300 text-primary-900 font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>

          {toast && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistDialog; 