import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ItemPage from './pages/ItemPage';
import LoginPage from './pages/LoginPage';
import PartnerPage from './pages/PartnerPage';
import MapPage from './pages/MapPage';
import CheckoutPage from './pages/CheckoutPage';
import MitraPage from './pages/MitraPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/partner/:id" element={<PartnerPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/mitra" element={<MitraPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
