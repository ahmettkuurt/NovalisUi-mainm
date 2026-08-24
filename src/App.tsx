import { AnimatePresence } from 'motion/react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import CustomCursor from './components/layout/CustomCursor';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import PageTransition from './components/layout/PageTransition';
import RouteSparkles from './components/layout/RouteSparkles';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <CustomCursor />

      <Header />

      <RouteSparkles
        key={location.pathname}
        pathname={location.pathname}
      />

      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />

          <Route
            path="/hizmetler"
            element={
              <PageTransition>
                <ServicesPage />
              </PageTransition>
            }
          />

          <Route
            path="/hakkimizda"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />

          <Route
            path="/iletisim"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;