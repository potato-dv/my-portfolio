// src/pages/Contact.tsx
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ConfirmationModal from '../components/ui/ConfirmationModal';
import SuccessModal from '../components/ui/SuccessModal';
import ErrorModal from '../components/ui/ErrorModal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      // Initialize EmailJS with your public key
      (window as any).emailjs.init('mNSKB_x5ZHMZ0C2Bh');
      setEmailjsLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setShowErrorModal(true);
      return;
    }

    // Show confirmation modal instead of directly submitting
    setShowConfirmModal(true);
  };

  const handleConfirmSend = async () => {
    setIsSubmitting(true);
    setShowConfirmModal(false);

    try {
      if (emailjsLoaded && (window as any).emailjs) {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'laurisjay@gmail.com'
        };

        await (window as any).emailjs.send(
          'service_zm009vl',      // Your Service ID
          'template_qjfhlwq',     // Your Template ID
          templateParams
        );

        setShowSuccessModal(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback to mailto if EmailJS fails to load
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:laurisjay@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', message: '' });
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setShowErrorModal(false);
    setShowConfirmModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section id="contact" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a 
                      href="mailto:laurisjay@gmail.com" 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      laurisjay@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a 
                      href="tel:+639308047639" 
                      className="text-gray-400 hover:text-green-400 transition-colors"
                    >
                      +63 930 804 7639
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-400">Montalban, Rizal. PH</div>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
              
              <p className="text-sm text-gray-400 text-center">
                * Required fields. {emailjsLoaded ? 'EmailJS is ready!' : 'Loading email service...'}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmSend}
        title="Confirm Message"
        message="Please review your message before sending:"
        formData={formData}
        isLoading={isSubmitting}
      />

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Message Sent Successfully!"
        message="Thank you for reaching out! I'll get back to you as soon as possible."
      />

      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        onRetry={handleRetry}
        title="Message Failed to Send"
        message="Please check your internet connection and try again, or contact me directly using the information below."
        showRetry={true}
      />
    </>
  );
};

export default Contact;