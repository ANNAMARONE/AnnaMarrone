import { motion } from 'motion/react';
import { Calendar, Clock, Tag, TrendingUp, BookOpen, Code, Lightbulb } from 'lucide-react';
import React from 'react';

export function BlogPage() {
  const blogPosts = [
    {
      title: 'Architecture React moderne : les patterns qui font la différence',
      excerpt: 'Exploration approfondie des patterns avancés en React : composition, render props, hooks personnalisés et architecture scalable pour des applications performantes.',
      date: '15 Janvier 2026',
      readTime: '12 min',
      category: 'React',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      tags: ['React', 'Architecture', 'Best Practices'],
      image: 'coding developer workspace'
    },
    {
      title: 'TypeScript : au-delà des bases',
      excerpt: 'Utilisation avancée de TypeScript pour créer des APIs type-safe, utiliser les utility types et implémenter des patterns fonctionnels robustes.',
      date: '8 Janvier 2026',
      readTime: '15 min',
      category: 'TypeScript',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      tags: ['TypeScript', 'Type Safety', 'Advanced'],
      image: 'programming code editor'
    },
    {
      title: 'Optimisation des performances web : guide complet',
      excerpt: 'Techniques concrètes pour améliorer les Web Vitals : lazy loading, code splitting, optimisation des images et stratégies de caching.',
      date: '2 Janvier 2026',
      readTime: '18 min',
      category: 'Performance',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      tags: ['Performance', 'Web Vitals', 'Optimization'],
      image: 'fast speed performance'
    },
    {
      title: 'De junior à senior : mon parcours en 5 ans',
      excerpt: 'Retour d\'expérience sur mon évolution professionnelle, les leçons apprises et les conseils que j\'aurais aimé recevoir en début de carrière.',
      date: '28 Décembre 2025',
      readTime: '10 min',
      category: 'Carrière',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-600',
      tags: ['Carrière', 'Retour d\'expérience', 'Conseils'],
      image: 'career growth development'
    },
    {
      title: 'Design Systems : créer une UI cohérente et scalable',
      excerpt: 'Comment construire un design system efficace avec Tailwind CSS, documenter les composants et maintenir la cohérence à travers les projets.',
      date: '20 Décembre 2025',
      readTime: '14 min',
      category: 'Design',
      icon: BookOpen,
      color: 'from-pink-500 to-red-600',
      tags: ['Design System', 'UI', 'Tailwind CSS'],
      image: 'design interface UI'
    },
    {
      title: 'Développement mobile avec React Native : tips & tricks',
      excerpt: 'Les meilleures pratiques pour créer des applications mobiles performantes et natives avec React Native, Expo et les derniers outils.',
      date: '15 Décembre 2025',
      readTime: '16 min',
      category: 'Mobile',
      icon: Code,
      color: 'from-cyan-500 to-blue-600',
      tags: ['React Native', 'Mobile', 'Expo'],
      image: 'mobile app development'
    }
  ];

  const categories = [
    { name: 'Tous', count: blogPosts.length },
    { name: 'React', count: 2 },
    { name: 'TypeScript', count: 1 },
    { name: 'Performance', count: 1 },
    { name: 'Carrière', count: 1 },
    { name: 'Design', count: 1 }
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
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary mb-6">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm">Blog & Documentation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Partage de connaissances
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Articles techniques, tutoriels, retours d'expérience et réflexions sur le développement web moderne.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-4 py-2 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200"
            >
              {category.name} <span className="text-muted-foreground">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {(() => {
            const FeaturedIcon = blogPosts[0].icon;
            return (
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl overflow-hidden border border-primary/20 hover:shadow-2xl transition-all duration-500 group cursor-pointer">
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium mb-4 w-fit">
                      <TrendingUp className="h-3 w-3" />
                      <span>Article vedette</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {blogPosts[0].date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {blogPosts[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-muted rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-64 md:h-full rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${blogPosts[0].color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                        <FeaturedIcon className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => {
            const PostIcon = post.icon;
            return (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500 group cursor-pointer"
              >
                {/* Card Image */}
                <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                      <PostIcon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${post.color} text-white rounded-full text-xs font-medium`}>
                      {post.category}
                    </span>
                  </div>
                </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted rounded-full text-xs flex items-center"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-center text-white shadow-2xl"
        >
          <BookOpen className="h-12 w-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Restons connectés</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Recevez mes derniers articles, tutoriels et conseils directement dans votre boîte mail. 
            Une newsletter mensuelle, sans spam, que du contenu de qualité.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium">
              S'abonner
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Déjà +500 développeurs abonnés ✨
          </p>
        </motion.div>
      </div>
    </div>
  );
}
