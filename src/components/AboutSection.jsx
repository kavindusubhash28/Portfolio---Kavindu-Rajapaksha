import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '../assets/hero.jpg.png';

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/[0.02] to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="mb-16"
                >
                    <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
                        <span className="text-accent font-mono text-sm">01.</span>
                        <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white">About Me</h2>
                        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-dark-400 to-transparent" />
                    </motion.div>
                    <motion.p variants={itemVariants} className="text-text-muted font-mono text-sm tracking-wider uppercase">
                        Get to know who I am
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                >
                    {/* Left - Image */}
                    <motion.div variants={itemVariants} className="relative flex-shrink-0">
                        <div className="relative w-[240px] h-[280px] lg:w-[300px] lg:h-[350px]">
                            {/* Background decoration */}
                            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-accent/5 opacity-50" />
                            <div className="absolute inset-0 rounded-2xl bg-dark-600/50 backdrop-blur-sm border border-white/[0.06] overflow-hidden">
                                <img
                                    src={heroImage}
                                    alt="Kavindu Rajapaksha"
                                    className="w-full h-full object-cover object-top scale-110"
                                />
                            </div>
                            {/* Corner accent */}
                            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-accent/40 rounded-br-2xl" />
                            <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-accent/40 rounded-tl-2xl" />
                        </div>
                    </motion.div>

                    {/* Right - Text */}
                    <motion.div variants={itemVariants} className="flex-1 space-y-6">
                        <p className="text-xl lg:text-2xl font-heading font-medium text-white leading-relaxed">
                            I don't just write code.{' '}
                            <span className="gradient-text">
                                I build digital systems that scale, perform, and feel seamless.
                            </span>
                        </p>

                        <p className="text-text-secondary leading-relaxed">
                            I'm a passionate Full Stack Developer with a keen eye for crafting
                            elegant solutions. I thrive on transforming complex challenges into
                            intuitive, user-friendly applications that make a real impact.
                        </p>

                        <p className="text-text-secondary leading-relaxed">
                            With hands-on experience across the full development stack, from building
                            responsive front-end interfaces to architecting scalable back-end systems,
                            I bring ideas to life through clean, maintainable code and modern technologies.
                        </p>

                        {/* Quick facts */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {[
                                { label: 'Location', value: 'Sri Lanka 🇱🇰' },
                                { label: 'Languages', value: 'English, Sinhala' },
                                { label: 'Degree', value: 'BSc in IT' },
                                { label: 'Interests', value: 'Tech, Innovation' },
                            ].map((fact, i) => (
                                <div key={i} className="glass-card p-3 flex flex-col">
                                    <span className="text-xs text-text-muted font-mono mb-1">{fact.label}</span>
                                    <span className="text-sm text-white font-medium">{fact.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Download CV */}
                        <motion.a
                            href="#"
                            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-medium text-sm group mt-4"
                            whileHover={{ x: 5 }}
                            data-cursor-hover
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>Download Resume</span>
                            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Section Divider */}
            <div className="section-divider mt-24 lg:mt-32 mx-auto max-w-4xl" />
        </section>
    );
};

export default AboutSection;
