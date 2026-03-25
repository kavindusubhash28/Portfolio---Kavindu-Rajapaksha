import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-8 border-t border-white/[0.04]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left - Brand */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                    >
                        <span className="font-heading font-bold text-lg text-white">
                            K<span className="text-accent">.</span>S
                        </span>
                        <span className="text-text-muted text-xs">—</span>
                        <span className="text-text-muted text-xs font-mono">Crafting Digital Excellence</span>
                    </motion.div>

                    {/* Center - Copyright */}
                    <p className="text-text-muted text-xs font-mono text-center">
                        &copy; {currentYear} Kavindu Rajapaksha. All rights reserved.
                    </p>

                    {/* Right - Back to Top */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-xs font-mono"
                        whileHover={{ y: -2 }}
                        data-cursor-hover
                    >
                        <span>Back to Top</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
