import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import AppHero from "./components/Hero";
import Works from "./components/Works";
import Teams from "./components/Teams";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header id="header">
        <Header />
      </header>
      <main>
        <AppHero />
        <About />
        <Services />
        <Works />
        <Teams />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
