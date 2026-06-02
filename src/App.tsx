import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ItemPage from './pages/ItemPage';
import LoginPage from './pages/LoginPage';
import PartnerPage from './pages/PartnerPage';
import MapPage from './pages/MapPage';
import CheckoutPage from './pages/CheckoutPage';
import MitraDashboard from './pages/dashboard/mitra';
import ProfileDashboard from './pages/dashboard/profile';
import ProfileOrders from './pages/dashboard/profile/orders';
import ProfileAddresses from './pages/dashboard/profile/addresses';
import ProfileSettings from './pages/dashboard/profile/settings';
import MitraInventory from './pages/dashboard/mitra/inventory';
import MitraAnalytics from './pages/dashboard/mitra/analytics';
import MitraHistory from './pages/dashboard/mitra/history';

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
        <Route path="/dashboard/mitra" element={<MitraDashboard />} />
        <Route path="/dashboard/mitra/inventory" element={<MitraInventory />} />
        <Route path="/dashboard/mitra/analytics" element={<MitraAnalytics />} />
        <Route path="/dashboard/mitra/history" element={<MitraHistory />} />
        <Route path="/dashboard/profile" element={<ProfileDashboard />} />
        <Route path="/dashboard/profile/orders" element={<ProfileOrders />} />
        <Route path="/dashboard/profile/addresses" element={<ProfileAddresses />} />
        <Route path="/dashboard/profile/settings" element={<ProfileSettings />} />

        <Route path="/login" element={<LoginPage />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
