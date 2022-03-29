import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import AboutMe from './pages/aboutme/AboutMe';
import Home from './pages/home/Home';
import LandingPage from './pages/landingpage/LandingPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      
        <NavBar />

        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/landingpage' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
