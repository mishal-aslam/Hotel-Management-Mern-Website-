// src/layouts/MainLayout.js
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar */}
      <main>
        <Outlet /> {/* This is where the matched route will render */}
      </main>
      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default MainLayout;