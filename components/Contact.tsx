import React, { useState, FormEvent } from 'react';
import { ICONS } from '../constants';
import ScrollReveal from './ScrollReveal';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message) newErrors.message = 'Message is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
        // Mock success/error
        if (Math.random() > 0.1) { // 90% success rate
             setStatus('success');
             setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('error');
        }
    }, 1500);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormErrors]) {
        setErrors(prev => ({...prev, [id]: undefined}));
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-slate-950/90 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              Get In Touch
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-500 dark:text-slate-400">
              Have a project in mind or just want to connect? Send me a message!
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800/70">
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="sr-only">Name</label>
                  {ICONS.FormUser}
                  <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required
                    className={`w-full bg-white dark:bg-slate-800/50 border ${errors.name ? 'border-red-500/50' : 'border-slate-300 dark:border-slate-700/60'} text-slate-800 dark:text-slate-200 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all`} />
                  {errors.name && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="sr-only">Email</label>
                  {ICONS.FormAtSymbol}
                  <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required
                    className={`w-full bg-white dark:bg-slate-800/50 border ${errors.email ? 'border-red-500/50' : 'border-slate-300 dark:border-slate-700/60'} text-slate-800 dark:text-slate-200 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all`} />
                  {errors.email && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                {/* Message Field */}
                <div className="relative">
                  <label htmlFor="message" className="sr-only">Message</label>
                   {ICONS.FormPencil}
                  <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required
                    className={`w-full bg-white dark:bg-slate-800/50 border ${errors.message ? 'border-red-500/50' : 'border-slate-300 dark:border-slate-700/60'} text-slate-800 dark:text-slate-200 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none`}></textarea>
                  {errors.message && <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
              </div>
              
              <div className="mt-6">
                 <button type="submit" disabled={status === 'loading'}
                  className="w-full flex justify-center items-center bg-sky-600 hover:bg-sky-700 disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 focus:ring-sky-500">
                  {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : 'Send Message'}
                </button>
              </div>

              <div className="mt-4 h-6 text-center" aria-live="polite">
                {status === 'success' && (
                  <p className="flex items-center justify-center text-green-600 dark:text-green-400">
                    {ICONS.CheckCircle} Message sent successfully!
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center justify-center text-red-600 dark:text-red-400">
                    {ICONS.XCircle} An error occurred. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;