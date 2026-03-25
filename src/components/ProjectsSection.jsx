import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'MediCare Portal',
        description: 'A comprehensive healthcare management platform with doctor-patient interaction, appointment scheduling, prescription management, and real-time notifications.',
        tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        category: 'fullstack',
        color: '#4FC3F7',
        github: 'https://github.com/kavindusubhash28',
        live: '#',
        featured: true,
    },
    {
        id: 2,
        title: 'E-Commerce Dashboard',
        description: 'Admin dashboard with real-time analytics, inventory management, order tracking, and dynamic charts for monitoring business performance.',
        tech: ['React', 'Express', 'MySQL', 'Chart.js'],
        category: 'fullstack',
        color: '#81C784',
        github: 'https://github.com/kavindusubhash28',
        live: '#',
        featured: true,
    },
    {
        id: 3,
        title: 'Task Flow App',
        description: 'A kanban-style project management tool with drag-and-drop, real-time collaboration, and team workspaces for productive project tracking.',
        tech: ['Next.js', 'Tailwind', 'Firebase', 'DnD Kit'],
        category: 'frontend',
        color: '#FFB74D',
        github: 'https://github.com/kavindusubhash28',
        live: '#',
        featured: false,
    },
    {
        id: 4,
        title: 'Chat Application',
        description: 'Real-time messaging platform with group chats, file sharing, typing indicators, and end-to-end message encryption.',
        tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
        category: 'fullstack',
        color: '#CE93D8',
        github: 'https://github.com/kavindusubhash28',
        live: '#',
        featured: false,
    },
    {
        id: 5,
        title: 'Weather Dashboard',
        description: 'Beautiful weather application with 7-day forecasts, interactive maps, location-based weather alerts, and animated visualizations.',
        tech: ['React', 'OpenWeather API', 'Tailwind', 'Framer'],
        category: 'frontend',
        color: '#4DD0E1',
        github: 'https://github.com/kavindusubhash28',
        live: '#',
        featured: false,
    },
    {
        id: 6,
        title: 'REST API Service',
        description: 'Secure, scalable RESTful API with JWT authentication, role-based access control, rate limiting, and comprehensive API documentation.',
        tech: ['Node.js', 'Express', 'MongoDB', 'Swagger'],
        category: 'backend',
        color: '#A5D6A7',
        github: 'https://github.com/kavindusubhash28',
        live: '#',
        featured: false,
    },
];

const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className={`glass-card glass-card-hover group relative overflow-hidden ${project.featured ? 'lg:col-span-2 p-6 lg:p-8' : 'p-5 lg:p-6'
            }`}
        data-cursor-hover
    >
        {/* Top color bar */}
        <div
            className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />

        {/* Hover background glow */}
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
                background: `radial-gradient(ellipse at 30% 20%, ${project.color}06, transparent 60%)`,
            }}
        />

        <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    {/* Folder icon */}
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/[0.06]"
                        style={{ background: `${project.color}12` }}
                    >
                        <svg className="w-5 h-5" style={{ color: project.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                    </div>
                    {project.featured && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                            Featured
                        </span>
                    )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors"
                        data-cursor-hover
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors"
                        data-cursor-hover
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Title & Description */}
            <h3 className="text-lg lg:text-xl font-heading font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                {project.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-dark-500/50 text-text-muted border border-white/[0.04]"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-accent font-mono text-sm">03.</span>
                        <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white">Projects</h2>
                        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-dark-400 to-transparent" />
                    </div>
                    <p className="text-text-muted font-mono text-sm tracking-wider uppercase">
                        Things I've built
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-wrap gap-3 mb-10"
                >
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            data-cursor-hover
                            className={`px-5 py-2.5 rounded-xl text-sm font-heading font-medium transition-all duration-300 ${activeFilter === filter.id
                                    ? 'bg-accent/15 text-accent border border-accent/30'
                                    : 'bg-dark-600/40 text-text-secondary border border-white/[0.04] hover:text-white hover:border-white/[0.08]'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    key={activeFilter}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    {filteredProjects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </motion.div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center mt-12"
                >
                    <a
                        href="https://github.com/kavindusubhash28"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline px-8 py-3 rounded-xl font-heading font-semibold text-sm inline-flex items-center gap-2"
                        data-cursor-hover
                    >
                        <span>View All on GitHub</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </motion.div>
            </div>

            <div className="section-divider mt-24 lg:mt-32 mx-auto max-w-4xl" />
        </section>
    );
};

export default ProjectsSection;
