import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'web'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'web'
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@marone.dev',
      link: 'mailto:contact@marone.dev'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'France / Remote',
      link: null
    },
    {
      icon: Clock,
      title: 'Disponibilité',
      value: 'Lun - Ven, 9h - 18h',
      link: null
    }
  ];

  const projectTypes = [
    { value: 'web', label: 'Application Web' },
    { value: 'mobile', label: 'Application Mobile' },
    { value: 'fullstack', label: 'Projet Full Stack' },
    { value: 'consulting', label: 'Consulting / Audit' },
    { value: 'other', label: 'Autre' }
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
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">Prenons contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Discutons de votre projet
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vous avez une idée, un projet ou simplement envie d'échanger ? 
            Je serais ravie de discuter avec vous et d'explorer comment nous pouvons collaborer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Message envoyé !</h3>
                  <p className="text-muted-foreground">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Type de projet *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      {projectTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Développement d'une application web"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl group"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Work With Me */}
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
              <h3 className="font-semibold mb-4">Pourquoi collaborer avec moi ?</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Approche centrée sur l'utilisateur et l'impact réel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Code de qualité, testé et maintenable</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                  <span>Communication transparente et régulière</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Respect des délais et du budget</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Passion pour l'innovation et les nouvelles technologies</span>
                </li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-foreground">Actuellement disponible</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Temps de réponse moyen : <span className="font-medium text-foreground">24-48h</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                question: 'Quels types de projets acceptez-vous ?',
                answer: 'Je travaille sur des applications web et mobile, en particulier celles ayant un impact social ou une utilité réelle. Je suis ouverte aux missions freelance, collaborations startups et projets long terme.'
              },
              {
                question: 'Travaillez-vous à distance ?',
                answer: 'Oui, je travaille principalement en remote avec des équipes distribuées. Je suis également disponible pour des rencontres occasionnelles selon la localisation du projet.'
              },
              {
                question: 'Quel est votre processus de travail ?',
                answer: 'Je commence par une phase de découverte pour comprendre vos besoins, puis je propose une solution technique. Le développement se fait de manière itérative avec des points réguliers.'
              },
              {
                question: 'Proposez-vous de la maintenance ?',
                answer: 'Oui, je propose des contrats de maintenance et support après le déploiement initial. Cela inclut les mises à jour, corrections de bugs et évolutions fonctionnelles.'
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
