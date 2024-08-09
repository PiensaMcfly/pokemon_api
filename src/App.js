
import './App.css';
import PokemonGroup from './Components/PokemonGroup'; 
import PokemonDetails from './Components/PokemonDetails';
import Cuerpo from './Components/Cuerpo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Cuerpo />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      <Route path="/group/:groupId" element={<PokemonGroup />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
