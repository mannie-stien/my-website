import React, { useState, useEffect } from 'react';

const Particle: React.FC<{ style: React.CSSProperties; className?: string; isReverse?: boolean; children?: React.ReactNode }> = ({ style, className = '', isReverse = false, children }) => (
    <div className={`absolute ${isReverse ? 'particle-reverse' : 'particle'} ${className}`} style={style}>{children}</div>
);

const AnimatedBackground: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
          className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-white dark:bg-slate-950"
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        >
            {/* Abstract Shapes */}
            <Particle style={{ top: '10%', left: '5%', width: '80px', height: '80px', background: 'radial-gradient(circle, rgba(2,132,199,0.1) 0%, rgba(2,132,199,0) 70%)', borderRadius: '50%' }} />
            <Particle style={{ top: '80%', left: '90%', width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0) 70%)', borderRadius: '50%' }} isReverse={true} />
            <Particle style={{ top: '50%', left: '15%', width: '20px', height: '20px', backgroundColor: 'rgba(252, 211, 77, 0.2)', borderRadius: '50%' }} />
            
            {/* Floating Code Snippets */}
            <Particle style={{ top: '20%', left: '80%', fontSize: '10px' }} className="text-green-500/30 dark:text-green-400/40 font-mono" isReverse={true}>
                <pre>{`const data = {\n  users: 3000\n};`}</pre>
            </Particle>
             <Particle style={{ top: '70%', left: '10%', fontSize: '10px' }} className="text-sky-500/30 dark:text-sky-400/30 font-mono">
                <pre>{`<Metric value="99.9%" />`}</pre>
            </Particle>

            {/* Floating Bar Charts */}
            <Particle style={{ top: '85%', left: '45%' }} isReverse={true}>
                <div className="flex items-end h-12 space-x-1">
                    <div className="w-2 h-4 bg-sky-500/20 dark:bg-sky-600/30 rounded-t-sm"></div>
                    <div className="w-2 h-8 bg-sky-400/20 dark:bg-sky-500/30 rounded-t-sm"></div>
                    <div className="w-2 h-6 bg-sky-300/20 dark:bg-sky-400/30 rounded-t-sm"></div>
                </div>
            </Particle>
            <Particle style={{ top: '15%', left: '40%' }}>
                 <div className="flex items-end h-10 space-x-1">
                    <div className="w-1.5 h-8 bg-green-500/30 dark:bg-green-600/40 rounded-t-sm"></div>
                    <div className="w-1.5 h-5 bg-green-400/30 dark:bg-green-500/40 rounded-t-sm"></div>
                    <div className="w-1.5 h-9 bg-green-300/30 dark:bg-green-400/40 rounded-t-sm"></div>
                </div>
            </Particle>

            {/* Timeline element */}
            <Particle style={{ top: '40%', left: '85%' }} isReverse={true}>
                <div className="flex items-center w-24">
                    <div className="w-2 h-2 bg-amber-400/40 dark:bg-amber-400/50 rounded-full"></div>
                    <div className="flex-grow h-px bg-amber-400/20 dark:bg-amber-400/30"></div>
                    <div className="w-2 h-2 bg-amber-400/40 dark:bg-amber-400/50 rounded-full"></div>
                </div>
            </Particle>

             {/* More subtle particles */}
            <Particle style={{ top: '5%', left: '70%', width: '5px', height: '5px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '50%' }} />
            <Particle style={{ top: '95%', left: '5%', width: '8px', height: '8px', backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: '50%' }} isReverse={true} />
        </div>
    );
};

export default AnimatedBackground;