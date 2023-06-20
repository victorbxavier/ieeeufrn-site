// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //Do tutorial
import './App.css';
import NavScrollExample from './Components/Nav';
import FooterT from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Capitulos from './Pages/Capitulos';

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
            <Route path="/Capitulos" element={<Capitulos/>}/>
            <Route path="/Sobre" element={<About/>}/>
          </Routes>
        </Router>
        </div>
        <FooterT />
      </main>
    </>
  );
}

export default App;
