import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Equipments from'./pages/Equipments';
import Tutorials from './pages/Tutorials';
import Terms from './pages/Terms';
import Patterns from './pages/Patterns'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/equipments' element={<Equipments />} />
          <Route path='/tutorials' element={<Tutorials />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/patterns' element={<Patterns />} />
        </Routes>
        <Footer />

    </div>
  );
}

export default App;
