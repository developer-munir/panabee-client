import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const Main = () => {
    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Main;