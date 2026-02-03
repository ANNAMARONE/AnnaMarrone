import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Navigation } from '@/app/components/navigation';
import { Footer } from '@/app/components/footer';
import { HomePage } from '@/app/pages/home';
import { AboutPage } from '@/app/pages/about';
import { SkillsPage } from '@/app/pages/skills';
import { ProjectsPage } from '@/app/pages/projects';
import { BlogPage } from '@/app/pages/blog';
import { ResourcesPage } from '@/app/pages/resources';
import { ContactPage } from '@/app/pages/contact';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
