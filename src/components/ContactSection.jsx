import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [focused, setFocused] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
        window.location.href = `mailto:kavindusubhash28@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    };

    const socials = [
        {
            name: 'GitHub',
            url: 'https://github.com/kavindusubhash28',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/kavindurajapaksha',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: 'Email',
            url: 'mailto:kavindusubhash28@gmail.com',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent font-mono text-sm mb-4 block">05. What's Next?</span>
                    <h2 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6">
                        Let's Build Something{' '}
                        <span className="gradient-text">Great.</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        I'm currently open to new opportunities. Whether you have a project in mind,
                        want to collaborate, or just want to say hello — my inbox is always open.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div className="relative">
                                <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-body text-sm ${focused === 'name' || formData.name
                                    ? '-top-2.5 text-xs text-accent bg-dark-900 px-1'
                                    : 'top-3.5 text-text-muted'
                                    }`}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="contact-name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('name')}
                                    onBlur={() => setFocused('')}
                                    className="w-full bg-dark-600/40 border border-white/[0.06] rounded-xl px-4 py-3.5 text-white text-sm font-body outline-none focus:border-accent/50 transition-colors"
                                />
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-body text-sm ${focused === 'email' || formData.email
                                    ? '-top-2.5 text-xs text-accent bg-dark-900 px-1'
                                    : 'top-3.5 text-text-muted'
                                    }`}>
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="contact-email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused('')}
                                    className="w-full bg-dark-600/40 border border-white/[0.06] rounded-xl px-4 py-3.5 text-white text-sm font-body outline-none focus:border-accent/50 transition-colors"
                                />
                            </div>

                            {/* Message */}
                            <div className="relative">
                                <label className={`absolute left-4 transition-all duration-300 pointer-events-none font-body text-sm ${focused === 'message' || formData.message
                                    ? '-top-2.5 text-xs text-accent bg-dark-900 px-1'
                                    : 'top-3.5 text-text-muted'
                                    }`}>
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    id="contact-message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused('')}
                                    className="w-full bg-dark-600/40 border border-white/[0.06] rounded-xl px-4 py-3.5 text-white text-sm font-body outline-none focus:border-accent/50 transition-colors resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="btn-primary w-full px-8 py-3.5 rounded-xl font-heading font-semibold text-white text-sm flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                data-cursor-hover
                            >
                                <span>Send Message</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            {/* Email card */}
                            <a
                                href="mailto:kavindusubhash28@gmail.com"
                                className="glass-card glass-card-hover p-5 flex items-center gap-4 block"
                                data-cursor-hover
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-text-muted font-mono mb-0.5">Email</p>
                                    <p className="text-sm text-white font-medium">kavindusubhash28@gmail.com</p>
                                </div>
                            </a>

                            {/* Location card */}
                            <div className="glass-card p-5 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-text-muted font-mono mb-0.5">Location</p>
                                    <p className="text-sm text-white font-medium">Sri Lanka</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <p className="text-xs text-text-muted font-mono mb-4 uppercase tracking-wider">Find me on</p>
                            <div className="flex gap-3">
                                {socials.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
                                        whileHover={{ y: -4, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        data-cursor-hover
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
