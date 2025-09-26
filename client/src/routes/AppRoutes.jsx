import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';
import { PublicLayouts } from '../layouts/PublicLayouts.jsx';
import { PrivateRoutes } from './PrivateRoutes.jsx';
import { UserLayouts } from '../layouts/UserLayouts.jsx';
import { AdminLayouts } from '../layouts/AdminLayouts.jsx';

//Componentes Públicos
const Home = lazy(() => import('../pages/PublicPages/Home/Home.jsx'));
const About = lazy(() => import('../pages/PublicPages/About/About.jsx'));
const Login = lazy(() => import('../pages/PublicPages/Login/Login.jsx'));
const Register = lazy(() => import('../pages/PublicPages/Register/Register.jsx'));

//Componentes User
const UserDashboard = lazy(()=> import('../pages/UserPages/userDashboard/UserDashboard.jsx'));

//Componentes Admin
const AdminDashboard = lazy(()=> import('../pages/AdminPages/adminDashboard/AdminDashboard.jsx'))


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          {/* Rutas públicas */}
          <Route element={<PublicRoutes />}>
            <Route element={<PublicLayouts />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Route>
          {/* Rutas de user */}
          <Route element={<PrivateRoutes />}>
            <Route element={<UserLayouts />}>
              <Route path="/user" element={<UserDashboard />} />
            </Route>
          </Route>
          {/* Rutas de admin */}
          <Route element={<PrivateRoutes />}>
            <Route element={<AdminLayouts />}>
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>
          </Route>
          {/* Ruta de error */}
          <Route path='*' element={<h1>Error not found</h1>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
