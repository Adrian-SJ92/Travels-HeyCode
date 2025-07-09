import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { PublicLayouts } from '../layouts/PublicLayouts.jsx';

const Home = lazy(() => import('../pages/Home/Home.jsx'));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route element={<PublicLayouts />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
