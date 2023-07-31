import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Equipments from'./pages/Equipments';
import Tutorials from './pages/Tutorials';
import Terms from './pages/Terms';
import Patterns from './pages/Patterns'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom';

    
function App() {
  return (
    <div className="App">

        <Navbar />
        <Routes>
          <Route path='/create-crochet' element={<Home />} />
          <Route path='/equipments' element={<Equipments />} />
          <Route path='/tutorials' element={<Tutorials />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/patterns' element={<Patterns />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
    </div>
  );
}


export default App;
