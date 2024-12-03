import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import AnimatedBackground from './components/AnimatedBackground';
import * as LazyPages from './utils/lazyImports';
import { CartProvider } from './contexts/CartContext';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <div className="flex flex-col min-h-screen">
        <AnimatedBackground />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<LazyPages.Home />} />
              <Route path="/profiles" element={<LazyPages.Profiles />} /> 
              <Route path="/profile/:id" element={<LazyPages.ProfilePage />} />
              <Route path="/settings" element={<LazyPages.Settings />} />
              <Route path="/about" element={<LazyPages.About />} />
              <Route path="/careers" element={<LazyPages.Careers />} />
              <Route path="/press" element={<LazyPages.Press />} />
              <Route path="/help" element={<LazyPages.HelpCenter />} />
              <Route path="/safety" element={<LazyPages.SafetyCenter />} />
              <Route path="/guidelines" element={<LazyPages.CommunityGuidelines />} />
              <Route path="/privacy" element={<LazyPages.Privacy />} />
              <Route path="/terms" element={<LazyPages.Terms />} />
              <Route path="/cookie" element={<LazyPages.Cookie />} />
              <Route path="/trending" element={<LazyPages.TrendingPost />} />
              <Route path="/history" element={<LazyPages.WatchHistory />} />
              <Route path="/chats" element={<LazyPages.PrivateChats />} />
              <Route path="/merch" element={<LazyPages.Merch />} />
              <Route path="/sitemap" element={<LazyPages.Sitemap />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      </CartProvider>
    </AuthProvider>
  );
}