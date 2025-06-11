// src/components/ui/ErrorModal.tsx
import React, { useEffect, useState } from "react";
import { X, AlertCircle, Mail, Phone, RefreshCw } from "lucide-react";

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry?: () => void;
  title?: string;
  message?: string;
  showContactInfo?: boolean;
  showRetry?: boolean;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  isOpen,
  onClose,
  onRetry,
  title = "Message Failed to Send",
  message = "There was an issue sending your message. Please try again or contact me directly.",
  showContactInfo = true,
  showRetry = true,
}) => {
  const [isBlinking, setIsBlinking] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px"; // Prevent layout shift from scrollbar
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only trigger feedback if clicking the backdrop itself
    if (e.target === e.currentTarget) {
      // Trigger blink animation
      setIsBlinking(true);

      // Reset blink animation after it completes
      setTimeout(() => {
        setIsBlinking(false);
      }, 800); // Match the animation duration
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-strong"
        onClick={handleBackdropClick}
      />

      {/* Modal */}
      <div
        className="relative bg-gray-800/95 backdrop-blur-strong rounded-xl p-6 mx-4 max-w-md w-full transition-all duration-200 border border-theme"
        style={{
          animation: isBlinking ? "blink 0.8s ease-in-out" : undefined,
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-theme-gradient rounded-full flex items-center justify-center">
              <AlertCircle className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-theme-primary">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-theme-primary transition-colors p-1 hover:bg-gray-700 rounded"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="mb-6">
          <p className="text-gray-300 mb-4 leading-relaxed">{message}</p>

          {showContactInfo && (
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-theme">
              <p className="text-sm text-gray-400 mb-3">Contact me directly:</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail size={14} className="text-theme-primary" />
                  <a
                    href="mailto:laurisjay@gmail.com"
                    className="text-theme-primary hover:text-theme-secondary transition-colors"
                  >
                    laurisjay@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone size={14} className="text-theme-primary" />
                  <a
                    href="tel:+639308047639"
                    className="text-theme-primary hover:text-theme-secondary transition-colors"
                  >
                    +63 930 804 7639
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-theme text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
          {showRetry && onRetry && (
            <button
              onClick={onRetry}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-theme-gradient hover:from-emerald-700 hover:to-green-700 text-white rounded-lg font-semibold transition-all duration-300"
            >
              <RefreshCw size={16} />
              <span>Try Again</span>
            </button>
          )}
        </div>
      </div>

      {/* Custom blink animation */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { 
              box-shadow: none;
            }
            12.5%, 37.5% { 
              box-shadow: 0 0 0 1px var(--tw-gradient-from);
            }
            25%, 50% { 
              box-shadow: none;
            }
            62.5%, 87.5% { 
              box-shadow: 0 0 0 1px var(--tw-gradient-from);
            }
            75% { 
              box-shadow: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ErrorModal;
