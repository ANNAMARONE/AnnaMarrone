import { motion } from 'motion/react';
import { ArrowRight, Code, Rocket, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
          

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Bonjour, je suis{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Marone
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
                Développeuse Full Stack passionnée par l'innovation et l'impact social
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Je crée des solutions technologiques qui ont du sens. Des applications web et mobile
              qui connectent les communautés, résolvent des problèmes réels et transforment des idées
              en expériences exceptionnelles.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Découvrir mes projets
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Collaborons ensemble
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ce qui me anime
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trois piliers fondamentaux guident mon approche du développement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Innovation technologique',
                description: 'Toujours à la pointe des dernières technologies, j\'expérimente et adopte les outils qui permettent de créer des expériences utilisateur exceptionnelles.',
                color: 'from-primary to-primary/70'
              },
              {
                icon: Users,
                title: 'Impact social',
                description: 'La technologie au service de l\'humain. Je développe des solutions qui créent de la valeur réelle pour les communautés et améliorent le quotidien.',
                color: 'from-secondary to-secondary/70'
              },
              {
                icon: Rocket,
                title: 'Ambition & curiosité',
                description: 'Chaque projet est une opportunité d\'apprendre et de repousser mes limites. Je transforme les défis en opportunités de croissance.',
                color: 'from-accent to-accent/70'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à transformer vos idées en réalité ?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Que vous soyez une startup, une entreprise ou une organisation à impact, 
              collaborons pour créer quelque chose d'extraordinaire.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl font-medium group"
            >
              Démarrons un projet
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
