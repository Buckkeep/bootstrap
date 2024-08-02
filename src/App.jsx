import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import About from './components/About';


function App() {

  return (
    <>
      <header id="header">
        <Header />
      </header>
      <About />
    </>
  )
}

export default App
