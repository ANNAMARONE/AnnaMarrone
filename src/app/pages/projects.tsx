import { motion } from 'motion/react';
import { ExternalLink, Github, Users, Heart, Sparkles, Globe } from 'lucide-react';
import React from 'react';

export function ProjectsPage() {
  const projects = [
    {
      title: 'ConnectCommunity',
      category: 'Impact Social',
      description: 'Plateforme web et mobile connectant les associations locales aux bénévoles. Facilite l\'engagement citoyen et renforce les liens communautaires.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase'],
      impact: '+5000 utilisateurs actifs, 200+ associations partenaires',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      link: 'https://example.com',
      github: 'https://github.com',
      image: 'community volunteer teamwork'
    },
    {
      title: 'HealthTrack',
      category: 'Santé & Bien-être',
      description: 'Application mobile de suivi de santé personnalisé avec système de rappels intelligent et tableaux de bord analytics pour améliorer le bien-être quotidien.',
      technologies: ['React Native', 'TypeScript', 'Supabase', 'Recharts'],
      impact: 'Amélioration mesurable de 70% dans les routines santé des utilisateurs',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      link: 'https://example.com',
      github: 'https://github.com',
      image: 'health wellness mobile app'
    },
    {
      title: 'EduLearn',
      category: 'Éducation',
      description: 'Plateforme e-learning avec système de mentoring pair-à-pair. Démocratise l\'accès à l\'éducation de qualité dans les zones rurales.',
      technologies: ['Next.js', 'MongoDB', 'WebRTC', 'Tailwind CSS'],
      impact: '10,000+ étudiants formés, 50+ mentors actifs',
      icon: Sparkles,
      color: 'from-purple-500 to-purple-600',
      link: 'https://example.com',
      github: 'https://github.com',
      image: 'education learning student'
    },
    {
      title: 'EcoMarket',
      category: 'Environnement',
      description: 'Marketplace connectant producteurs locaux et consommateurs éco-responsables. Réduit l\'empreinte carbone en favorisant les circuits courts.',
      technologies: ['React', 'Django', 'PostgreSQL', 'Stripe'],
      impact: '-30% d\'empreinte carbone, 100+ producteurs locaux soutenus',
      icon: Globe,
      color: 'from-green-500 to-emerald-600',
      link: 'https://example.com',
      github: 'https://github.com',
      image: 'farmers market local produce'
    },
    {
      title: 'SafeSpace',
      category: 'Sécurité & Support',
      description: 'Application de soutien psychologique avec chat anonyme et ressources. Espace sécurisé pour les personnes en détresse.',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      impact: '2000+ conversations de soutien, partenariats avec 15 ONG',
      icon: Heart,
      color: 'from-cyan-500 to-blue-600',
      link: 'https://example.com',
      github: 'https://github.com',
      image: 'mental health support wellness'
    },
    {
      title: 'SkillShare',
      category: 'Formation Professionnelle',
      description: 'Plateforme de partage de compétences en tech. Les développeurs seniors mentorent les juniors via des sessions live et des projets collaboratifs.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'tRPC'],
      impact: '500+ développeurs formés, 80% de taux de satisfaction',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      link: 'https://example.com',
      github: 'https://github.com',
      image: 'developers coding mentorship'
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
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Projets à impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des applications web et mobile conçues pour résoudre des problèmes réels 
            et créer un impact positif dans la vie des utilisateurs.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { label: 'Projets réalisés', value: '15+' },
            { label: 'Utilisateurs impactés', value: '20K+' },
            { label: 'Technologies maîtrisées', value: '30+' },
            { label: 'Satisfaction client', value: '98%' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                  {/* Project Image */}
                  <div className="relative h-64 md:h-full rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                        <project.icon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium border border-border">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Impact */}
                      <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4 border border-accent/20 mb-6">
                        <div className="flex items-start space-x-2">
                          <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-sm mb-1">Impact mesurable</h4>
                            <p className="text-sm text-muted-foreground">{project.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex space-x-3">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 group/btn"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        Voir le projet
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 border border-primary/20"
        >
          <h2 className="text-3xl font-bold mb-4">Vous avez un projet en tête ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Je suis toujours à la recherche de nouveaux défis et opportunités de collaboration. 
            Discutons de votre projet et de comment nous pouvons créer quelque chose d'exceptionnel ensemble.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Démarrer une collaboration
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
