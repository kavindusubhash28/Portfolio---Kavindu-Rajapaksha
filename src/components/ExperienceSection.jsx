import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
    {
        year: '2023 – Present',
        title: 'BSc (Hons) Computer Science (Undergraduate)',
        company: 'IIT Sri Lanka - University of Westminster',
        description: 'Following Computer Science degree focused on software engineering, FullStack development, data structures, algorithms,Machine Learning and Data mining and database systems.',
        tech: ['Java', 'Python', 'Data Structures', 'Databases', 'Machine Learning', 'Data Mining'],
        type: 'education',
    },
    {
        year: '2026',
        title: 'Actively Seeking Software Engineering Internship',
        company: 'Open to Internship Opportunities',
        description: 'Looking for an internship where I can contribute to real-world projects, collaborate with experienced teams, and grow as a developer.',
        tech: ['Problem Solving', 'Team Collaboration', 'Git/GitHub', 'Communication'],
        type: 'opportunity',
    },
];

const typeColors = {
    project: '#4FC3F7',
    education: '#81C784',
    opportunity: '#FFB74D',
};

const typeIcons = {
    project: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
    opportunity: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
        </svg>
    ),
    education: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
    ),
};

const ExperienceSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-accent/[0.02] to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-accent font-mono text-sm">04.</span>
                        <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white">Experience</h2>
                        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-dark-400 to-transparent" />
                    </div>
                    <p className="text-text-muted font-mono text-sm tracking-wider uppercase">
                        Learning journey and projects
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-5 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-[2px]">
                        <div className="h-full bg-gradient-to-b from-accent via-accent/30 to-transparent" />
                    </div>

                    {experiences.map((exp, i) => {
                        const color = typeColors[exp.type];
                        const isLeft = i % 2 === 0;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className={`relative flex items-start gap-6 mb-12 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-5 lg:left-1/2 -translate-x-1/2 z-10">
                                    <motion.div
                                        whileInView={{ scale: [0, 1.2, 1] }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 + 0.2, duration: 0.4 }}
                                        className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                                        style={{
                                            borderColor: color,
                                            background: `${color}15`,
                                            color: color,
                                        }}
                                    >
                                        {typeIcons[exp.type]}
                                    </motion.div>
                                </div>

                                {/* Content Card */}
                                <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-40px)] ${isLeft ? 'lg:pr-8' : 'lg:pl-8'
                                    }`}>
                                    <div className="glass-card glass-card-hover p-5 lg:p-6" data-cursor-hover>
                                        {/* Year badge */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <span
                                                className="text-xs font-mono px-2.5 py-1 rounded-md border"
                                                style={{
                                                    color: color,
                                                    borderColor: `${color}30`,
                                                    background: `${color}10`,
                                                }}
                                            >
                                                {exp.year}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-heading font-semibold text-white mb-1">
                                            {exp.title}
                                        </h3>
                                        <p className="text-sm text-accent mb-3">{exp.company}</p>
                                        <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Tech tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-xs font-mono px-2 py-0.5 rounded-md bg-dark-500/50 text-text-muted"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="section-divider mt-24 lg:mt-32 mx-auto max-w-4xl" />
        </section>
    );
};

export default ExperienceSection;
