import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ItemPage from './pages/ItemPage';
import LoginPage from './pages/LoginPage';
import BecomeMitraPage from './pages/BecomeMitraPage';
import PartnerPage from './pages/PartnerPage';
import MapPage from './pages/MapPage';
import CheckoutPage from './pages/CheckoutPage';
import MitraDashboard from './pages/dashboard/mitra';
import ProfileDashboard from './pages/dashboard/profile';
import ProfileStore from './pages/dashboard/profile/store';
import ProfileEditStore from './pages/dashboard/profile/edit-store';
import ProfileAddresses from './pages/dashboard/profile/addresses';
import ProfileWallet from './pages/dashboard/profile/wallet';
import ProfileSettings from './pages/dashboard/profile/settings';
import MitraInventory from './pages/dashboard/mitra/inventory';
import MitraAnalytics from './pages/dashboard/mitra/analytics';
import MitraHistory from './pages/dashboard/mitra/history';
import MitraNewListing from './pages/dashboard/mitra/new-listing';
import MitraFood from './pages/dashboard/mitra/food';
import MitraCoupons from './pages/dashboard/mitra/coupons';
import MitraNewCoupon from './pages/dashboard/mitra/new-coupon';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/mitra" replace />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/partner/:id" element={<PartnerPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/dashboard/mitra" element={<MitraDashboard />} />
        <Route path="/dashboard/mitra/inventory" element={<MitraInventory />} />
        <Route path="/dashboard/mitra/analytics" element={<MitraAnalytics />} />
        <Route path="/dashboard/mitra/history" element={<MitraHistory />} />
        <Route path="/dashboard/mitra/food" element={<MitraFood />} />
        <Route path="/dashboard/mitra/coupons" element={<MitraCoupons />} />
        <Route path="/dashboard/mitra/new-coupon" element={<MitraNewCoupon />} />
        <Route path="/dashboard/mitra/new-listing" element={<MitraNewListing />} />
        <Route path="/dashboard/profile" element={<ProfileDashboard />} />
        <Route path="/dashboard/profile/store" element={<ProfileStore />} />
        <Route path="/dashboard/profile/store/edit" element={<ProfileEditStore />} />
        <Route path="/dashboard/profile/addresses" element={<ProfileAddresses />} />
        <Route path="/dashboard/profile/wallet" element={<ProfileWallet />} />
        <Route path="/dashboard/profile/settings" element={<ProfileSettings />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/become-mitra" element={<BecomeMitraPage />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
