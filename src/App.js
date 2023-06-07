// import logo from './logo.svg';
import './App.css';
import CardNoticia from './Components/CardNoticia';
import NavScrollExample from './Components/Nav';
import FooterT from './Components/Footer';
import About from './Pages/About';


function App() {
  return (
    <>  
      <header>
        <NavScrollExample />
      </header>
      <main style={{position: 'relative', minHeight: '100vh'}}>
        <div  style={{paddingBottom:'15rem' }}>
          {/* <CardNoticia /> <CardNoticia /> */}
          <About></About>
        </div>
        <FooterT />
      </main>
    </>
  );
}

export default App;
