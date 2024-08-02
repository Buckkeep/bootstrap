import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import AppHero from './components/Hero';


function App() {

  return (
    <>
      <header id="header">
        <Header />
      </header>
      <AppHero />
      <About />
      <Services />
    </>
  )
}

export default App
