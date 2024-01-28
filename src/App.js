import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AfterLoginPage from './pages/AfterLoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/pageAfterLogin" element={<AfterLoginPage />} />
        <Route index element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
