// src/App.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Carpenters from './pages/carpenters/page';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/Home/page';
import MyBookings from './pages/Bookings/page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/booking" element={<AuthProvider><Carpenters /></AuthProvider>} />
          <Route path="/my-bookings" element={<AuthProvider><MyBookings /></AuthProvider>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;