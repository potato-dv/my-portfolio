// src/components/ui/ConfirmationModal.tsx
import React, { useEffect, useState } from "react";
import { X, Send, AlertTriangle } from "lucide-react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  formData?: {
    name: string;
    email: string;
    message: string;
  };
  isLoading?: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Message",
  message = "Are you sure you want to send this message?",
  formData,
  isLoading = false,
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

  // Handle escape key - only allow if not loading
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isLoading) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, isLoading, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only trigger feedback if clicking the backdrop itself and not loading
    if (e.target === e.currentTarget && !isLoading) {
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
          <div className="flex items-center space-x-2">
            <AlertTriangle className="text-theme-primary" size={20} />
            <h3 className="text-lg font-semibold text-theme-primary">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="text-gray-400 hover:text-theme-primary transition-colors p-1 hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="mb-6">
          <p className="text-gray-300 mb-4">{message}</p>

          {/* Form Data Preview */}
          {formData && (
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 space-y-3 border border-theme">
              <div>
                <span className="text-sm font-medium text-gray-400">Name:</span>
                <p className="text-white mt-1">{formData.name}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-400">
                  Email:
                </span>
                <p className="text-white mt-1">{formData.email}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-400">
                  Message:
                </span>
                <p className="text-white mt-1 max-h-24 overflow-y-auto text-sm">
                  {formData.message}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="flex-1 px-4 py-2 border border-theme text-gray-300 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-theme-gradient hover:from-emerald-700 hover:to-green-700 text-white"
            }`}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Send Message</span>
              </>
            )}
          </button>
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

export default ConfirmationModal;
