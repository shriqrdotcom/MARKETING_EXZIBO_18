import { useNavigate } from 'react-router-dom';

export default function EntryScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center mb-16">
        <div className="w-12 h-12 bg-black rounded-xl mx-auto mb-6 flex items-center justify-center">
          <span className="text-white font-bold text-lg">E</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-black tracking-tight mb-3">EXZIBO</h1>
        <p className="text-slate-400 text-base font-medium">Choose where to go</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-md">
        <button
          onClick={() => navigate('/admin')}
          className="flex-1 h-14 bg-black text-white font-semibold text-base rounded-xl shadow-lg hover:bg-slate-800 transition-all duration-200 active:scale-95"
        >
          Admin Panel
        </button>
        <button
          onClick={() => navigate('/home')}
          className="flex-1 h-14 bg-white text-black font-semibold text-base rounded-xl shadow-sm border-2 border-black hover:bg-slate-50 transition-all duration-200 active:scale-95"
        >
          Marketing Website
        </button>
      </div>

      <p className="mt-12 text-xs text-slate-300">EXZIBO Platform v2.0</p>
    </div>
  );
}
