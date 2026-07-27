import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Science from './components/Science';
import Certificates from './components/Certificates';
import Gratitude from './components/Gratitude';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-navy-950 text-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Profile />
      <Experience />
      <Science />
      <Certificates />
      <Gratitude />
      <Contact />
      <Footer />
    </div>
  );
}
