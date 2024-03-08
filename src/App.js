import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Hero from './components/Hero';
import Banner from './components/Banner';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <NavBar/>
      <Main/>
      <Hero/>
      <Banner/>
      <FirstSection/>
      <SecondSection/>
      <Footer/>
    </div>
  );
}

export default App;