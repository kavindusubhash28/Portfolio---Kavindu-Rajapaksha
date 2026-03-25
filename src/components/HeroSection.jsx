import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '../assets/hero.jpg.png';

// Floating tech icons as SVG components
const TechIcon = ({ icon, className, delay = 0 }) => (
    <motion.div
        className={`absolute pointer-events-none ${className}`}
        animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
        }}
        transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
        }}
    >
        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-dark-600/50 backdrop-blur-sm border border-white/[0.05] flex items-center justify-center text-accent/30 text-lg">
            {icon}
        </div>
    </motion.div>
);

const techIcons = [
    { icon: '⚛', className: 'top-[15%] right-[5%] lg:right-[8%]', delay: 0 },
    { icon: '🟢', className: 'top-[30%] right-[15%] lg:right-[2%]', delay: 1.2 },
    { icon: '🐍', className: 'top-[55%] right-[3%] lg:right-[5%]', delay: 0.6 },
    { icon: '☕', className: 'bottom-[20%] right-[12%] lg:right-[10%]', delay: 1.8 },
    { icon: '🗄', className: 'top-[10%] right-[25%] lg:right-[20%]', delay: 2.2 },
    { icon: '🔷', className: 'bottom-[35%] right-[0%] lg:right-[0%]', delay: 0.9 },
];

const HeroSection = () => {
    const [bootComplete, setBootComplete] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [bootLines, setBootLines] = useState([]);

    const bootSequence = [
        { text: '> Initializing Kavindu.exe…', delay: 0 },
        { text: '> Loading modules...', delay: 400 },
        { text: '> React ✓  Node.js ✓  Python ✓', delay: 800 },
        { text: '> Full Stack Developer Loaded ✓', delay: 1300 },
        { text: '> Portfolio Ready.', delay: 1800 },
    ];

    useEffect(() => {
        bootSequence.forEach((line, i) => {
            setTimeout(() => {
                setBootLines(prev => [...prev, line.text]);
                if (i === bootSequence.length - 1) {
                    setTimeout(() => {
                        setBootComplete(true);
                        setTimeout(() => setShowContent(true), 300);
                    }, 600);
                }
            }, line.delay);
        });
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 grid-bg animate-grid-move" />

            {/* Split Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-dark-700 via-dark-800 to-dark-900" />
            </div>

            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[120px]" />

            {/* Boot Sequence Overlay */}
            <AnimatePresence>
                {!bootComplete && (
                    <motion.div
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 bg-dark-900 flex items-center justify-center"
                    >
                        <div className="max-w-lg w-full px-6">
                            <div className="font-mono text-sm space-y-2">
                                {bootLines.map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`${line.includes('✓') ? 'text-accent' : 'text-text-secondary'
                                            }`}
                                    >
                                        {line}
                                        {i === bootLines.length - 1 && (
                                            <motion.span
                                                animate={{ opacity: [1, 0] }}
                                                transition={{ duration: 0.5, repeat: Infinity }}
                                                className="inline-block w-2 h-4 bg-accent ml-1 align-middle"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                            {/* Progress bar */}
                            <motion.div className="mt-6 h-0.5 bg-dark-500 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 2.2, ease: 'easeInOut' }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20 lg:pt-0">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-10">

                    {/* Left Side - Text */}
                    <motion.div
                        className="lg:max-w-[50%] xl:max-w-[45%] text-center lg:text-left flex-shrink-0"
                        initial={{ opacity: 0, y: 40 }}
                        animate={showContent ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={showContent ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/[0.08] border border-accent/20 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-xs font-mono text-accent tracking-wider uppercase">Available for work</span>
                        </motion.div>

                        <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-4">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={showContent ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="block text-white"
                            >
                                KAVINDU
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={showContent ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.45, duration: 0.6 }}
                                className="block gradient-text"
                            >
                                RAJAPAKSHA
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={showContent ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-lg lg:text-xl text-text-secondary font-light max-w-lg mx-auto lg:mx-0 mb-3"
                        >
                            Building Digital Products That Feel{' '}
                            <span className="text-accent font-medium">Effortless.</span>
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={showContent ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="text-sm text-text-muted font-mono tracking-wide mb-8"
                        >
                            Full Stack Developer &bull; Problem Solver &bull; Tech Enthusiast
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={showContent ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.85, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <motion.button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary px-8 py-3.5 rounded-xl font-heading font-semibold text-white text-sm flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                data-cursor-hover
                            >
                                <span>View My Work</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.button>

                            <motion.button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-outline px-8 py-3.5 rounded-xl font-heading font-semibold text-sm flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                data-cursor-hover
                            >
                                <span>Let's Talk</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={showContent ? { opacity: 1 } : {}}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            className="flex items-center gap-8 mt-10 justify-center lg:justify-start"
                        >
                            {[
                                { value: '2+', label: 'Years Exp.' },
                                { value: '15+', label: 'Projects' },
                                { value: '10+', label: 'Technologies' },
                            ].map((stat, i) => (
                                <div key={i} className="text-center lg:text-left">
                                    <div className="text-2xl lg:text-3xl font-heading font-bold text-accent">{stat.value}</div>
                                    <div className="text-xs text-text-muted mt-0.5">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        className="flex-1 relative flex items-center justify-center min-w-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={showContent ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Glow behind image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-accent/[0.06] rounded-full blur-[80px]" />
                        </div>

                        {/* Decorative ring */}
                        <motion.div
                            className="absolute w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] rounded-full border border-accent/10"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent/30" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-accent/20" />
                        </motion.div>

                        {/* Second ring */}
                        <motion.div
                            className="absolute w-[360px] h-[360px] lg:w-[540px] lg:h-[540px] rounded-full border border-white/[0.03]"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                        >
                            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/20" />
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            className="relative z-10"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <img
                                src={heroImage}
                                alt="Kavindu Rajapaksha - Full Stack Developer"
                                className="w-[280px] lg:w-[400px] xl:w-[440px] drop-shadow-2xl glow-amber select-none"
                                draggable={false}
                            />
                        </motion.div>

                        {/* Floating tech icons */}
                        {techIcons.map((tech, i) => (
                            <TechIcon key={i} {...tech} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={showContent ? { opacity: 1 } : {}}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-text-muted font-mono tracking-widest uppercase">Scroll</span>
                <motion.div
                    className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-2 bg-accent rounded-full"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
