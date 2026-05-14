import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { CMSProvider } from './context/CMSContext';
import EntryScreen from './pages/EntryScreen';
import AdminLogin from './pages/admin/AdminLogin';
import AdminPanel from './pages/admin/AdminPanel';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CMSProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EntryScreen />} />
          <Route path="/home/*" element={<App />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminPanel />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </CMSProvider>
  </StrictMode>,
);
