import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Skill from './components/Skill/Skill';
import Contact from './components/Contact/Contact';
import Career from './components/Career/Career';

function App() {

  return (
    <div className="container-fluid">
      <Navbar />
      <Banner />
      <AboutMe />
      <Career />
      <Contact />
    </div>
  )
}

export default App
