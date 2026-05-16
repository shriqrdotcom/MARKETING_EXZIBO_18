import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAuthenticated, isAuthenticated } from './auth';

const isAdminSubdomain = window.location.hostname === 'main.exzibo.online';
const DASHBOARD_PATH = isAdminSubdomain ? '/dashboard' : '/admin/dashboard';
const ADMIN_USER = isAdminSubdomain ? 'admin@exzibo' : 'admin';
const ADMIN_PASS = isAdminSubdomain ? 'Exzibo@123' : 'admin123';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      console.log('[Auth] Already authenticated — redirecting to dashboard:', DASHBOARD_PATH);
      navigate(DASHBOARD_PATH, { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 400));

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      console.log('[Auth] Login success — setting session and redirecting to:', DASHBOARD_PATH);
      setAuthenticated();
      navigate(DASHBOARD_PATH, { replace: true });
    } else {
      console.log('[Auth] Login failed — invalid credentials');
      setError('Invalid username or password.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-black rounded-xl mx-auto mb-5 flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <h1 className="text-2xl font-bold text-black">Admin Login</h1>
          <p className="text-slate-400 text-sm mt-1">Sign in to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-black mb-1.5">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="admin"
              required
              autoComplete="username"
              className="w-full h-12 px-4 border-2 border-slate-200 rounded-xl text-black placeholder:text-slate-300 focus:outline-none focus:border-black transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
              className="w-full h-12 px-4 border-2 border-slate-200 rounded-xl text-black placeholder:text-slate-300 focus:outline-none focus:border-black transition-colors text-sm"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-black text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-200 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {!isAdminSubdomain && (
          <button
            onClick={() => navigate('/')}
            className="w-full mt-4 text-center text-sm text-slate-400 hover:text-black transition-colors"
          >
            ← Back to home
          </button>
        )}
      </div>
    </div>
  );
}
