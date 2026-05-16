import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { CMSProvider } from './context/CMSContext';
import AdminLogin from './pages/admin/AdminLogin';
import AdminPanel from './pages/admin/AdminPanel';
import App from './App';

const isAdminSubdomain = window.location.hostname === 'main.exzibo.online';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CMSProvider>
      <BrowserRouter>
        {isAdminSubdomain ? (
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/dashboard" element={<AdminPanel />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminPanel />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </BrowserRouter>
    </CMSProvider>
  </StrictMode>,
);
