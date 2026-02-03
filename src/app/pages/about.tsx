import { motion } from 'motion/react';
import { Award, BookOpen, Heart, Target, Zap } from 'lucide-react';
import React from 'react';

export function AboutPage() {
  const milestones = [
    {
      year: '2019',
      title: 'L\'étincelle',
      description: 'Première ligne de code. Un monde de possibilités s\'ouvre devant moi. La programmation devient ma passion.'
    },
    {
      year: '2021',
      title: 'Formation intensive',
      description: 'Immersion totale dans le développement web. Apprentissage des fondamentaux et des technologies modernes.'
    },
    {
      year: '2022',
      title: 'Premiers projets',
      description: 'Lancement de mes premières applications. Impact réel sur des communautés locales. La tech au service du social.'
    },
    {
      year: '2023-2024',
      title: 'Croissance & expertise',
      description: 'Diversification des compétences. Collaboration avec des startups et organisations à impact. Mentoring de juniors.'
    },
    {
      year: '2025-2026',
      title: 'Vision internationale',
      description: 'Ambition de travailler sur des projets d\'envergure mondiale. Contribution à l\'open source. Leadership technique.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Rigueur et qualité dans chaque ligne de code. Code propre, testé et maintenable.'
    },
    {
      icon: Heart,
      title: 'Empathie',
      description: 'Comprendre les besoins réels des utilisateurs pour créer des solutions qui comptent vraiment.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Curiosité insatiable et veille technologique constante pour rester à la pointe.'
    },
    {
      icon: BookOpen,
      title: 'Apprentissage',
      description: 'Chaque projet est une opportunité d\'apprendre et de grandir professionnellement.'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary mb-6">
            <Award className="h-4 w-4" />
            <span className="text-sm">Mon parcours</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Une histoire de passion et d'ambition
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Je suis Marone, développeuse Full Stack guidée par une conviction profonde : 
            la technologie peut transformer des vies. Mon parcours est celui d'une jeune femme 
            déterminée à faire bouger les lignes dans un secteur en constante évolution.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-card rounded-2xl p-8 md:p-12 border border-border"
        >
          <h2 className="text-3xl font-bold mb-6">Qui suis-je vraiment ?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Issue d'un parcours non conventionnel, j'ai découvert le développement web par curiosité. 
              Ce qui devait être une simple exploration s'est transformé en passion dévorante. 
              J'ai rapidement compris que le code n'était pas qu'une série d'instructions : c'était 
              un outil puissant pour créer, innover et avoir un impact positif.
            </p>
            <p>
              Aujourd'hui, je me spécialise dans le développement d'applications web et mobile modernes, 
              avec une attention particulière portée à l'expérience utilisateur et à l'accessibilité. 
              Mais au-delà de la technique, ce qui me motive vraiment, c'est de créer des solutions 
              qui résolvent de vrais problèmes et qui améliorent le quotidien des gens.
            </p>
            <p>
              Mon ambition ? Travailler sur des projets d'envergure internationale, avec des équipes 
              qui partagent mes valeurs d'innovation, d'impact social et d'excellence technique. 
              Je veux contribuer à construire le futur du web, un projet à la fois.
            </p>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Mon parcours en quelques étapes</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-primary to-secondary mt-2"></div>
                  )}
                </div>
                <div className="pb-12 flex-1">
                  <div className="bg-card rounded-lg p-6 border border-border group-hover:shadow-lg transition-all duration-300">
                    <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Mes valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20"
        >
          <h2 className="text-3xl font-bold mb-6">Ma vision pour l'avenir</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Je rêve d'un monde où la technologie est accessible à tous et où elle sert 
            véritablement l'intérêt collectif. Dans les années à venir, je veux :
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Participer à des projets d'envergure internationale qui ont un impact positif sur des millions de personnes</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Contribuer activement à l'open source et partager mes connaissances avec la communauté</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Inspirer d'autres jeunes, en particulier les femmes, à se lancer dans la tech</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Continuer à apprendre, évoluer et repousser les limites de ce qui est possible</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
