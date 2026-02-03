import { motion } from 'motion/react';
import { Bookmark, ExternalLink, Code, Book, Video, Package, Wrench, Sparkles } from 'lucide-react';
import React from 'react';

export function ResourcesPage() {
  const resourceCategories = [
    {
      title: 'Outils de développement',
      icon: Wrench,
      color: 'from-blue-500 to-blue-600',
      resources: [
        {
          name: 'VS Code',
          description: 'Mon éditeur de code favori avec extensions React, Prettier et ESLint',
          link: 'https://code.visualstudio.com',
          type: 'Tool'
        },
        {
          name: 'Figma',
          description: 'Design et prototypage d\'interfaces utilisateur',
          link: 'https://figma.com',
          type: 'Design'
        },
        {
          name: 'Postman',
          description: 'Test et documentation d\'APIs REST',
          link: 'https://postman.com',
          type: 'Tool'
        },
        {
          name: 'GitHub Copilot',
          description: 'Assistant IA pour accélérer le développement',
          link: 'https://github.com/features/copilot',
          type: 'AI'
        }
      ]
    },
    {
      title: 'Librairies & Frameworks',
      icon: Package,
      color: 'from-purple-500 to-purple-600',
      resources: [
        {
          name: 'React',
          description: 'La librairie JavaScript pour construire des interfaces utilisateur',
          link: 'https://react.dev',
          type: 'Framework'
        },
        {
          name: 'Next.js',
          description: 'Framework React pour production avec SSR et SSG',
          link: 'https://nextjs.org',
          type: 'Framework'
        },
        {
          name: 'Tailwind CSS',
          description: 'Framework CSS utility-first pour un design rapide',
          link: 'https://tailwindcss.com',
          type: 'CSS'
        },
        {
          name: 'Motion',
          description: 'Animations fluides et performantes pour React',
          link: 'https://motion.dev',
          type: 'Animation'
        }
      ]
    },
    {
      title: 'Ressources d\'apprentissage',
      icon: Book,
      color: 'from-green-500 to-green-600',
      resources: [
        {
          name: 'MDN Web Docs',
          description: 'Documentation complète sur les technologies web',
          link: 'https://developer.mozilla.org',
          type: 'Documentation'
        },
        {
          name: 'JavaScript.info',
          description: 'Tutoriel moderne et approfondi sur JavaScript',
          link: 'https://javascript.info',
          type: 'Tutorial'
        },
        {
          name: 'React TypeScript Cheatsheet',
          description: 'Guide de référence pour React avec TypeScript',
          link: 'https://react-typescript-cheatsheet.netlify.app',
          type: 'Reference'
        },
        {
          name: 'Web.dev',
          description: 'Guides et bonnes pratiques par Google',
          link: 'https://web.dev',
          type: 'Learning'
        }
      ]
    },
    {
      title: 'Vidéos & Podcasts',
      icon: Video,
      color: 'from-red-500 to-red-600',
      resources: [
        {
          name: 'Fireship',
          description: 'Tutoriels courts et efficaces sur les technologies modernes',
          link: 'https://youtube.com/@fireship',
          type: 'YouTube'
        },
        {
          name: 'Syntax.fm',
          description: 'Podcast sur le développement web par Wes Bos et Scott Tolinski',
          link: 'https://syntax.fm',
          type: 'Podcast'
        },
        {
          name: 'Frontend Masters',
          description: 'Cours avancés sur le développement frontend',
          link: 'https://frontendmasters.com',
          type: 'Course'
        },
        {
          name: 'TheNetNinja',
          description: 'Tutoriels complets sur JavaScript, React et plus',
          link: 'https://youtube.com/@netninja',
          type: 'YouTube'
        }
      ]
    },
    {
      title: 'Code Snippets & Templates',
      icon: Code,
      color: 'from-cyan-500 to-cyan-600',
      resources: [
        {
          name: 'Custom React Hooks',
          description: 'Collection de hooks React réutilisables et testés',
          link: '#',
          type: 'Snippet'
        },
        {
          name: 'TypeScript Utility Types',
          description: 'Types utilitaires pour améliorer la sécurité du code',
          link: '#',
          type: 'Snippet'
        },
        {
          name: 'API Error Handling',
          description: 'Pattern robuste pour gérer les erreurs d\'API',
          link: '#',
          type: 'Pattern'
        },
        {
          name: 'Form Validation Schemas',
          description: 'Schémas de validation réutilisables avec Zod',
          link: '#',
          type: 'Snippet'
        }
      ]
    },
    {
      title: 'Inspiration & Design',
      icon: Sparkles,
      color: 'from-pink-500 to-pink-600',
      resources: [
        {
          name: 'Dribbble',
          description: 'Inspiration design et UI/UX',
          link: 'https://dribbble.com',
          type: 'Inspiration'
        },
        {
          name: 'Awwwards',
          description: 'Les meilleurs sites web du moment',
          link: 'https://awwwards.com',
          type: 'Inspiration'
        },
        {
          name: 'Tailwind UI',
          description: 'Composants UI premium avec Tailwind CSS',
          link: 'https://tailwindui.com',
          type: 'Components'
        },
        {
          name: 'Shadcn UI',
          description: 'Composants React accessibles et personnalisables',
          link: 'https://ui.shadcn.com',
          type: 'Components'
        }
      ]
    }
  ];

  const quickLinks = [
    { label: 'GitHub', url: 'https://github.com', description: 'Mes projets open source' },
    { label: 'CodePen', url: 'https://codepen.io', description: 'Expérimentations et démos' },
    { label: 'Dev.to', url: 'https://dev.to', description: 'Articles techniques' },
    { label: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Contributions communauté' }
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
            <Bookmark className="h-4 w-4" />
            <span className="text-sm">Boîte à outils</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Ressources & Outils
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une collection soigneusement sélectionnée d'outils, librairies, tutoriels et 
            ressources qui m'accompagnent au quotidien dans mon travail de développeuse.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {quickLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors flex items-center">
                {link.label}
                <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Resource Categories */}
        <div className="space-y-16">
          {resourceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.05, duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <motion.div
                    key={resource.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: resourceIndex * 0.05, duration: 0.5 }}
                    className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {resource.name}
                          </h3>
                          <span className="px-2 py-0.5 bg-muted rounded text-xs">
                            {resource.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {resource.description}
                        </p>
                      </div>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-3 w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100"
                        aria-label="Visit resource"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 border border-primary/20"
        >
          <div className="text-center max-w-2xl mx-auto">
            <Sparkles className="h-12 w-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Une ressource à recommander ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Je suis toujours à la recherche de nouveaux outils et ressources qui peuvent 
              améliorer mon workflow. N'hésitez pas à me faire vos recommandations !
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Partager une ressource
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          <p>
            💡 Cette liste est régulièrement mise à jour avec mes dernières découvertes. 
            Dernière mise à jour : Février 2026
          </p>
        </motion.div>
      </div>
    </div>
  );
}
