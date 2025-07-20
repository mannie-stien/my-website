import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import ScrollReveal from './ScrollReveal';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white dark:bg-slate-950/70 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              What My Colleagues Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-500 dark:text-slate-400">
              Feedback from those I've had the pleasure to work with.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <div key={testimonial.id} className="fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="h-full bg-slate-50 dark:bg-slate-900/60 p-8 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-lg hover:shadow-sky-500/10 dark:hover:shadow-sky-400/10 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-3xl text-sky-500 dark:text-sky-400 mb-4">&ldquo;</div>
                  <blockquote className="text-slate-600 dark:text-slate-300 italic mb-6">
                    {testimonial.content}
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-sky-200 dark:border-sky-800"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-100">{testimonial.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;