import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Use Navigate for redirection
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BookYourStay from './pages/BookYourStay';
import MainLayout from './components/layouts/MainLayout';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  // Check if user is logged in by checking localStorage
  const isLoggedIn = localStorage.getItem("user");

  return (
    <Router>
      <div className="">
        <Routes>
          {/* Protected routes */}
          <Route path="/" element={isLoggedIn ? <MainLayout /> : <Navigate to="/login" />}>
            <Route index element={<Home />} /> 
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="bookyourstay" element={<BookYourStay />} />
            <Route path="/booking" element={<BookingPage />} />
          </Route>
          
          {/* Public routes */}
          <Route path='/login' element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
