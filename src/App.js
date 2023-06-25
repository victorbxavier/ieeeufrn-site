// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //Do tutorial
import './App.css';
import NavScrollExample from './Components/Nav';
import FooterT from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Capitulos from './Pages/Capitulos';
import News from './Pages/News';
import Projects from './Pages/Projects';
import Events from './Pages/Events';
import PostForms from './Pages/PostForms';
import AboutCS from './Pages/AboutCS';
import AboutInClass from './Pages/AboutInClass';
import AboutPelsIas from './Pages/AboutPELSIAS';
import AboutRAS from './Pages/AboutRAS';
import AboutWIE from './Pages/AboutWIE';

function App() {
  return (
    <>  
      <header>
        <NavScrollExample />
      </header>
      <main style={{position: 'relative', minHeight: '100vh'}}>
        <div style={{paddingBottom:'15rem' }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Noticias" element={<News/>}/>
            <Route path="/Projetos" element={<Projects/>}/>
            <Route path="/Eventos" element={<Events/>}/>
            <Route path="/Capitulos" element={<Capitulos/>}/>
            <Route path="/Sobre" element={<About/>}/>
            <Route path="/Post" element={<PostForms/>}/>
            <Route path="/SobreCS" element={<AboutCS/>}/>
            <Route path="/SobreInClass" element={<AboutInClass/>}/>
            <Route path="/SobrePelsias" element={<AboutPelsIas/>}/>
            <Route path="/SobreRAS" element={<AboutRAS/>}/>
            <Route path="/SobreWie" element={<AboutWIE/>}/>
          </Routes>
        </Router>
        </div>
        <FooterT />
      </main>
    </>
  );
}

export default App;
