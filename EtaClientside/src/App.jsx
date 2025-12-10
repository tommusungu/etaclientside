import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Add this line
import NotFound from './pages/NotFound';
import WebFont from 'webfontloader';
import ReactGA from 'react-ga';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Whatsapp from './components/Whatsapp';
import TopBar from './components/TopBar';

// Lazy-loaded components
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const VotePage = lazy(() => import('./pages/VotePage'));
const VoteNominee = lazy(() => import('./pages/VoteNominee'));
const NominatePage = lazy(() => import('./pages/NominatePage'));
const NominateLeader = lazy(() => import('./pages/NominateLeader'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const Policy = lazy(() => import('./pages/Policy'));
const E_Posters = lazy(() => import('./pages/E_PostersPage'));
const BuyTickets = lazy(() => import('./pages/BuyTicketsPage'));
const UpdatesPage = lazy(() => import('./pages/UpdatesPage'));

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Outfit', 'Oswald'],
      },
    });
    ReactGA.initialize('G-WGC690XKXD');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <HelmetProvider> {/* Wrap your entire app with HelmetProvider */}
      <div>
        <Router>
          <ScrollToTop />
          
          <div className='hidden md:flex'>
            <TopBar/>
          </div>
          <div className=" fixed bottom-0 right-10 sm:right-12 md:right-14 z-50">
            <Whatsapp />
          </div>
          <Suspense
            fallback={
              <div className="flex justify-center items-center w-full h-[100vh] bg-[#101010]">
                <div className="custom-loader"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/our-gallery" element={<GalleryPage />} />
              <Route path="/nominations" element={<NominatePage />} />
              <Route path="/vote" element={<VotePage />} />
              <Route path="/vote/:name/:code" element={<VoteNominee />} />
              <Route path="/updates/:id" element={<UpdatesPage />} />
              <Route path="/kiongozi-bora" element={<NominateLeader />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/generate-poster" element={<E_Posters />} />
              <Route path="/buy-tickets" element={<BuyTickets />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <ToastContainer />
          <Footer />
        </Router>
      </div>
    </HelmetProvider>
  );
};

export default App;
