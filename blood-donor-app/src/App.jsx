import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Impact from './components/Impact';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Registration from './components/Registration';
import Send from './components/sendsms';
import Signup from './components/Signup';
import WhyBlood from './components/WhyBlood';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <NavBar />
          <HeroSection />
          <WhyBlood />
          <Impact />
          <Footer />
        </>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/sendsms" element={<Send />} />
    </Routes>
  );
}

export default App;

