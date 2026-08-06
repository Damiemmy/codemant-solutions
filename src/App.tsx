import { HashRouter, Route, Routes } from 'react-router-dom'
import SiteShell from './layouts/SiteShell'
import { HeroSection } from './sections/HeroSection'
import { ValueSection } from './sections/ValueSection'
import { ServicesSection } from './sections/ServicesSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { AboutSection } from './sections/AboutSection'
import { ProcessSection } from './sections/ProcessSection'
import { TestimonialsSection } from './sections/TestimonialsSection'
import { FaqSection } from './sections/FaqSection'
import { CtaSection } from './sections/CtaSection'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SiteShell>
              <HeroSection />
              <ValueSection />
              <ServicesSection />
              <ProjectsSection />
              <AboutSection />
              <ProcessSection />
              <TestimonialsSection />
              <FaqSection />
              <CtaSection />
            </SiteShell>
          }
        />
      </Routes>
    </HashRouter>
  )
}

export default App