import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const categories = [
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'tools', label: 'Tools & DevOps', icon: '🛠' },
    { id: 'other', label: 'Other', icon: '💡' },
];

const skills = {
    frontend: [
        { name: 'React', level: 90, icon: '⚛️', color: '#61DAFB' },
        { name: 'Next.js', level: 80, icon: '▲', color: '#FFFFFF' },
        { name: 'JavaScript', level: 92, icon: 'JS', color: '#F7DF1E' },
        { name: 'TypeScript', level: 75, icon: 'TS', color: '#3178C6' },
        { name: 'HTML/CSS', level: 95, icon: '🌐', color: '#E34F26' },
        { name: 'Tailwind CSS', level: 90, icon: '💨', color: '#06B6D4' },
    ],
    backend: [
        { name: 'Node.js', level: 85, icon: '🟢', color: '#68A063' },
        { name: 'Express.js', level: 82, icon: '🚂', color: '#FFFFFF' },
        { name: 'Python', level: 78, icon: '🐍', color: '#3776AB' },
        { name: 'Java', level: 75, icon: '☕', color: '#ED8B00' },
        { name: 'MongoDB', level: 80, icon: '🍃', color: '#47A248' },
        { name: 'MySQL', level: 78, icon: '🗄', color: '#4479A1' },
    ],
    tools: [
        { name: 'Git & GitHub', level: 88, icon: '📂', color: '#F05032' },
        { name: 'Docker', level: 65, icon: '🐳', color: '#2496ED' },
        { name: 'VS Code', level: 95, icon: '💻', color: '#007ACC' },
        { name: 'Figma', level: 70, icon: '🎯', color: '#F24E1E' },
        { name: 'Postman', level: 85, icon: '📮', color: '#FF6C37' },
        { name: 'Linux', level: 72, icon: '🐧', color: '#FCC624' },
    ],
    other: [
        { name: 'REST APIs', level: 88, icon: '🔌', color: '#FF7A00' },
        { name: 'Firebase', level: 75, icon: '🔥', color: '#FFCA28' },
        { name: 'Agile/Scrum', level: 80, icon: '📋', color: '#00C853' },
        { name: 'Problem Solving', level: 90, icon: '🧩', color: '#AB47BC' },
    ],
};

const SkillCard = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        whileHover={{ y: -6, scale: 1.02 }}
        className="glass-card glass-card-hover p-5 group relative overflow-hidden"
        data-cursor-hover
    >
        {/* Hover glow */}
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
                background: `radial-gradient(circle at 50% 0%, ${skill.color}08, transparent 70%)`,
            }}
        />

        <div className="relative z-10">
            {/* Icon & Name */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold border border-white/[0.06]"
                        style={{ background: `${skill.color}15`, color: skill.color }}
                    >
                        {skill.icon}
                    </div>
                    <span className="text-sm font-heading font-semibold text-white">{skill.name}</span>
                </div>
                <span className="text-xs font-mono text-text-muted">{skill.level}%</span>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-dark-500 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.8, ease: 'easeOut' }}
                />
            </div>
        </div>
    </motion.div>
);

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeCategory, setActiveCategory] = useState('frontend');

    return (
        <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-accent/[0.02] to-transparent" />

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
                        <span className="text-accent font-mono text-sm">02.</span>
                        <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white">Tech Stack</h2>
                        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-dark-400 to-transparent" />
                    </div>
                    <p className="text-text-muted font-mono text-sm tracking-wider uppercase">
                        Technologies I work with
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-wrap gap-3 mb-10"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            data-cursor-hover
                            className={`px-5 py-2.5 rounded-xl text-sm font-heading font-medium flex items-center gap-2 transition-all duration-300 ${activeCategory === cat.id
                                    ? 'bg-accent/15 text-accent border border-accent/30'
                                    : 'bg-dark-600/40 text-text-secondary border border-white/[0.04] hover:text-white hover:border-white/[0.08]'
                                }`}
                        >
                            <span>{cat.icon}</span>
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {skills[activeCategory]?.map((skill, i) => (
                        <SkillCard key={skill.name} skill={skill} index={i} />
                    ))}
                </motion.div>
            </div>

            <div className="section-divider mt-24 lg:mt-32 mx-auto max-w-4xl" />
        </section>
    );
};

export default SkillsSection;
