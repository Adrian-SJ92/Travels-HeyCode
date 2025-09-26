import React from 'react';
import { Outlet } from 'react-router-dom';
import { PublicNavbar } from '../components/Navbars/PublicNavbar';

export const PublicLayouts = () => {
  return (
    <>
      <header>
        <PublicNavbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        footer
      </footer>
    </>
  );
};
