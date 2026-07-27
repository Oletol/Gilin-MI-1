import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Profile from './components/Profile';
import Experience from './components/Experience';
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
      <Contact />
      <Footer />
    </div>
  );
}
