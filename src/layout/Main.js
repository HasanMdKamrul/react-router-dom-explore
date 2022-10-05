import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const Main = () => {
    return (
        <div>
          <NavBar/>
          <Outlet/>
          <div>Hello world</div>
        </div>
    );
};

export default Main;