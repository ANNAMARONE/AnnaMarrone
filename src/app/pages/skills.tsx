import { motion } from 'motion/react';
import { Code2, Database, Palette, Smartphone, Cloud, GitBranch, TestTube, Wrench } from 'lucide-react';
import React from 'react';

export function SkillsPage() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML5 / CSS3', level: 95 },
        { name: 'Vue.js', level: 75 },
        { name: 'Motion / Framer', level: 80 }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js / Express', level: 85 },
        { name: 'Python / Django', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Expo', level: 80 },
        { name: 'Mobile UI/UX', level: 85 },
        { name: 'App Store Deployment', level: 75 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Vercel / Netlify', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Firebase', level: 85 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & UX',
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Accessibility (a11y)', level: 85 },
        { name: 'Design Systems', level: 80 }
      ]
    },
    {
      icon: GitBranch,
      title: 'Version Control & Collaboration',
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Agile / Scrum', level: 85 },
        { name: 'Code Review', level: 85 },
        { name: 'Documentation', level: 90 }
      ]
    },
    {
      icon: TestTube,
      title: 'Testing & Quality',
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        { name: 'Jest / Vitest', level: 80 },
        { name: 'React Testing Library', level: 75 },
        { name: 'Cypress / Playwright', level: 70 },
        { name: 'Unit & Integration Tests', level: 80 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Workflow',
      color: 'from-yellow-500 to-yellow-600',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 90 },
        { name: 'Notion / Jira', level: 85 },
        { name: 'Webpack / Vite', level: 80 }
      ]
    }
  ];

  const softSkills = [
    {
      title: 'Communication',
      description: 'Capacité à expliquer des concepts techniques complexes de manière claire et accessible'
    },
    {
      title: 'Résolution de problèmes',
      description: 'Approche analytique et créative face aux défis techniques'
    },
    {
      title: 'Travail d\'équipe',
      description: 'Collaboration efficace en équipe distribuée et multidisciplinaire'
    },
    {
      title: 'Autonomie',
      description: 'Capacité à gérer des projets de bout en bout et prendre des initiatives'
    },
    {
      title: 'Apprentissage continu',
      description: 'Curiosité insatiable et capacité d\'adaptation aux nouvelles technologies'
    },
    {
      title: 'Leadership',
      description: 'Mentorat de développeurs juniors et contribution à la culture d\'équipe'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent mb-6">
            <Code2 className="h-4 w-4" />
            <span className="text-sm">Stack technique</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Compétences & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un ensemble de compétences techniques et humaines pour créer des solutions 
            digitales complètes, performantes et accessibles.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12"
          >
            Compétences techniques
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.05, duration: 0.5 }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.05 + skillIndex * 0.02, duration: 0.8, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12">Compétences humaines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-gradient-to-br from-card to-muted/30 rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning & Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20"
        >
          <h2 className="text-3xl font-bold mb-6">En cours d'apprentissage</h2>
          <p className="text-lg text-muted-foreground mb-8">
            La technologie évolue constamment, et je m'efforce de rester à jour avec les dernières tendances :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Web3 & Blockchain fundamentals',
              'Machine Learning basics avec TensorFlow',
              'Architecture microservices avancée',
              'Performance optimization & Web Vitals',
              'Rust pour le développement système',
              'Design patterns avancés'
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex items-center space-x-3 bg-card/50 rounded-lg p-4"
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
