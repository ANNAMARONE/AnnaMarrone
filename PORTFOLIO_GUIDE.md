# 🎨 Portfolio Marone - Guide Complet

## 📘 À propos

Portfolio professionnel de **Marone**, développeuse Full Stack passionnée par l'innovation technologique et la création de solutions à fort impact social.

---

## 🎨 Identité Visuelle

### Palette de couleurs

#### Couleur Principale - Bleu Profond
**Light Mode:** `#1e40af` | **Dark Mode:** `#3b82f6`

**Signification:** Confiance, professionnalisme, technologie, stabilité

**Utilisation:**
- Navigation principale et header
- Boutons primaires (CTA)
- Liens actifs
- Éléments d'identité (logo)

**Règles:**
- Hover: opacité à 90% ou version légèrement plus claire
- Contraste minimum: 4.5:1 avec le fond blanc
- Usage: éléments d'action principaux

---

#### Couleur Secondaire - Violet
**Light Mode:** `#7c3aed` | **Dark Mode:** `#8b5cf6`

**Signification:** Créativité, innovation, ambition, modernité

**Utilisation:**
- Titres de sections importantes
- Éléments décoratifs (gradients)
- Badges et labels secondaires
- Accents visuels

**Règles:**
- Souvent utilisée en gradient avec la couleur principale
- Ne jamais utiliser seule pour les CTA principaux
- Bon pour les éléments informatifs non-cliquables

---

#### Couleur d'Accent - Cyan/Teal
**Light Mode:** `#06b6d4` | **Dark Mode:** `#06b6d4`

**Signification:** Dynamisme, énergie, action, appels à l'attention

**Utilisation:**
- Boutons d'action secondaires
- Badges "Nouveau" ou "Disponible"
- Indicateurs de statut actif
- Liens hover
- Icons d'impact/succès

**Règles:**
- Utilisée avec parcimonie pour attirer l'attention
- Parfaite pour les micro-interactions
- Bon contraste avec les fonds clairs et sombres

---

#### Couleurs de Fond

**Light Mode:**
- Background principal: `#ffffff`
- Background secondaire: `#f9fafb`
- Cards: `#ffffff`
- Muted: `#f3f4f6`

**Dark Mode:**
- Background principal: `#0f172a`
- Background secondaire: `#1e293b`
- Cards: `#1e293b`
- Muted: `#334155`

**Règles:**
- Toujours tester les deux modes
- Utiliser `backdrop-blur` pour les éléments superposés
- Cards avec border subtile pour la profondeur

---

#### Couleurs de Texte

**Light Mode:**
- Texte principal: `#1f2937`
- Texte secondaire: `#6b7280`

**Dark Mode:**
- Texte principal: `#f1f5f9`
- Texte secondaire: `#94a3b8`

**Règles:**
- Ratio de contraste minimum: 4.5:1 (WCAG AA)
- Utiliser `text-muted-foreground` pour les descriptions
- Ne jamais utiliser de gris trop clair sur fond blanc (ou inversement)

---

### Gradients

Les gradients sont utilisés pour créer de la profondeur et attirer l'attention:

**Gradient Principal:**
```css
bg-gradient-to-r from-primary via-secondary to-accent
```

**Gradient de Fond:**
```css
bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5
```

**Gradient pour Icons:**
```css
bg-gradient-to-br from-primary to-secondary
```

---

## 🏗️ Structure du Portfolio

### Pages

1. **Accueil (`/`)**
   - Hero section avec accroche inspirante
   - Section valeurs (3 piliers)
   - CTA vers projets et contact

2. **À propos (`/about`)**
   - Histoire personnelle
   - Timeline du parcours (2019-2026)
   - Valeurs et vision pour l'avenir

3. **Compétences (`/skills`)**
   - Compétences techniques par catégories (8 sections)
   - Barres de progression animées
   - Soft skills
   - Technologies en cours d'apprentissage

4. **Projets (`/projects`)**
   - 6 projets à impact social
   - Cards détaillées avec technologies et impact mesurable
   - Stats globales
   - CTA pour collaboration

5. **Blog (`/blog`)**
   - Article vedette en grand format
   - Grille d'articles
   - Filtres par catégorie
   - Newsletter CTA

6. **Ressources (`/resources`)**
   - 6 catégories de ressources
   - Outils, librairies, tutoriels
   - Liens externes
   - Section contribution

7. **Contact (`/contact`)**
   - Formulaire de contact complet
   - Informations de contact
   - FAQ
   - Temps de réponse

---

## 🎯 Composants Clés

### Navigation
- Sticky header avec backdrop blur
- Indicateur de page active (bg-primary)
- Toggle dark/light mode
- Menu mobile responsive

### Footer
- Liens rapides
- Réseaux sociaux
- Brand info
- Copyright

### Cards
```tsx
className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
```

### Buttons

**Primaire:**
```tsx
className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
```

**Secondaire:**
```tsx
className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground"
```

**Accent:**
```tsx
className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90"
```

---

## ⚡ Animations

Toutes les animations utilisent `motion` de Motion (anciennement Framer Motion):

**Fade In:**
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Stagger Children:**
```tsx
transition={{ delay: index * 0.1, duration: 0.6 }}
```

**Hover Scale:**
```tsx
className="transform hover:scale-110 transition-transform duration-500"
```

---

## 📱 Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Grilles
- Mobile: 1 colonne
- Tablet: 2 colonnes
- Desktop: 3-4 colonnes

### Texte
- Mobile: text-4xl
- Desktop: text-6xl

---

## ♿ Accessibilité

- Contraste minimum WCAG AA (4.5:1)
- Navigation au clavier
- ARIA labels sur les boutons d'icon
- Focus visible avec ring
- Texte alternatif sur les images
- Dark mode respecte les préférences système

---

## 🚀 Technologies Utilisées

- **React** 18.3.1
- **TypeScript**
- **React Router DOM** 7.13.0
- **Tailwind CSS** 4.1.12
- **Motion** (Framer Motion) 12.23.24
- **next-themes** 0.4.6 (dark mode)
- **Lucide React** 0.487.0 (icons)
- **Vite** 6.3.5

---

## 📦 Structure des Fichiers

```
/src
  /app
    /components
      navigation.tsx      # Navigation avec routing
      footer.tsx         # Footer global
    /pages
      home.tsx          # Page d'accueil
      about.tsx         # À propos
      skills.tsx        # Compétences
      projects.tsx      # Projets
      blog.tsx          # Blog
      resources.tsx     # Ressources
      contact.tsx       # Contact
    App.tsx             # Router principal
  /styles
    theme.css           # Variables CSS et tokens
    fonts.css           # Import des fonts
    index.css           # Styles globaux
```

---

## 🎨 Règles de Design

### Spacing
- Sections: `py-20`
- Cards internes: `p-6` ou `p-8`
- Grid gaps: `gap-6` ou `gap-8`

### Borders
- Border radius: `rounded-lg` (8px) ou `rounded-xl` (12px) ou `rounded-2xl` (16px)
- Border color: `border-border` (adaptatif light/dark)

### Shadows
- Default: aucune
- Hover: `hover:shadow-lg`
- Important: `shadow-xl` ou `shadow-2xl`

### Typography
- Titres: hérite des styles définis dans theme.css
- Body: 16px (base)
- Petits textes: `text-sm`

---

## 🔧 Personnalisation

### Changer les couleurs

Éditer `/src/styles/theme.css`:

```css
:root {
  --primary: #NOUVELLE_COULEUR;
  --secondary: #NOUVELLE_COULEUR;
  --accent: #NOUVELLE_COULEUR;
}

.dark {
  --primary: #NOUVELLE_COULEUR_DARK;
  /* ... */
}
```

### Ajouter une page

1. Créer un fichier dans `/src/app/pages/ma-page.tsx`
2. Ajouter la route dans `/src/app/App.tsx`
3. Ajouter le lien dans `/src/app/components/navigation.tsx`

### Modifier le contenu

Tout le contenu est directement dans les fichiers de pages. Modifier les arrays d'objets pour changer:
- Projets
- Articles de blog
- Ressources
- Compétences
- etc.

---

## 📊 Contenu Actuel

### Projets (6)
- ConnectCommunity (Impact Social)
- HealthTrack (Santé)
- EduLearn (Éducation)
- EcoMarket (Environnement)
- SafeSpace (Soutien)
- SkillShare (Formation)

### Articles de Blog (6)
- Architecture React moderne
- TypeScript avancé
- Optimisation performances
- Parcours professionnel
- Design Systems
- React Native tips

### Catégories de Compétences (8)
- Frontend Development
- Backend Development
- Mobile Development
- Cloud & DevOps
- Design & UX
- Version Control
- Testing & Quality
- Tools & Workflow

### Ressources (6 catégories)
- Outils de développement
- Librairies & Frameworks
- Ressources d'apprentissage
- Vidéos & Podcasts
- Code Snippets
- Inspiration & Design

---

## 🎯 Objectifs du Portfolio

1. **Inspirer confiance** aux recruteurs et clients
2. **Mettre en avant** l'expertise technique et humaine
3. **Démontrer** l'impact social des projets
4. **Faciliter** la prise de contact
5. **Partager** les connaissances (blog et ressources)
6. **Refléter** la personnalité : ambitieuse, curieuse, engagée

---

## 💡 Conseils d'Utilisation

### Pour Marone

**Maintenance:**
- Mettre à jour régulièrement les projets
- Ajouter de nouveaux articles de blog
- Actualiser les compétences et technologies
- Répondre rapidement aux messages

**Évolution:**
- Ajouter des case studies détaillées
- Intégrer un CMS pour le blog
- Ajouter des testimonials clients
- Créer une section portfolio interactif

**Promotion:**
- Partager les articles sur les réseaux sociaux
- Optimiser le SEO (meta tags, sitemap)
- Créer du contenu régulier
- Networking et présence en ligne

---

## 🔍 SEO & Performance

### Bonnes Pratiques
- Utiliser des balises sémantiques
- Ajouter des meta descriptions
- Optimiser les images (lazy loading)
- Minimiser le JavaScript
- Utiliser le SSR avec Next.js (future upgrade)

### Performance
- Code splitting par route (React Router)
- Lazy loading des images
- Animations GPU-accelerated
- Tailwind CSS purge en production

---

## 📞 Support

Pour toute question ou suggestion d'amélioration:
- Email: contact@marone.dev
- GitHub: [lien vers repo]

---

**Dernière mise à jour:** Février 2026

Conçu avec ❤️ et React
