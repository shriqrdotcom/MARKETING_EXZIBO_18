import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Home, Layers, DollarSign, Users, Info,
  MonitorPlay, Phone, Settings, LogOut, Eye, Save,
  CheckCircle, AlertCircle, Menu, X
} from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import { isAuthenticated, logout } from './auth';
import HeroEditor from './sections/HeroEditor';
import FeaturesEditor from './sections/FeaturesEditor';
import PricingEditor from './sections/PricingEditor';
import TestimonialsEditor from './sections/TestimonialsEditor';
import ContactEditor from './sections/ContactEditor';
import GeneralEditor from './sections/GeneralEditor';

type Section = 'dashboard' | 'home' | 'features' | 'pricing' | 'customers' | 'contact' | 'general';

const NAV_ITEMS: { id: Section; label: string; icon: any }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'home', label: 'Home / Hero', icon: Home },
  { id: 'features', label: 'Features', icon: Layers },
  { id: 'pricing', label: 'Pricing', icon: DollarSign },
  { id: 'customers', label: 'Testimonials', icon: Users },
  { id: 'contact', label: 'Contact & Footer', icon: Phone },
  { id: 'general', label: 'General Settings', icon: Settings },
];

export default function AdminPanel() {
  const navigate = useNavigate();
  const { data, updateData, saveData, resetData, isDirty } = useCMS();
  const [activeSection, setActiveSection] = useState<Section>('dashboard');
  const [localData, setLocalData] = useState(data);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/admin');
    }
  }, [navigate]);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const handleChange = (newData: typeof data) => {
    setLocalData(newData);
    updateData(newData);
  };

  const handleSave = async () => {
    setSaveStatus('saving');
    await new Promise(r => setTimeout(r, 500));
    try {
      saveData(localData);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleReset = () => {
    if (confirm('Reset all content to defaults? This cannot be undone.')) {
      resetData();
      setSaveStatus('idle');
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard': return <Dashboard data={localData} onNavigate={setActiveSection} />;
      case 'home': return <HeroEditor data={localData} onChange={handleChange} />;
      case 'features': return <FeaturesEditor data={localData} onChange={handleChange} />;
      case 'pricing': return <PricingEditor data={localData} onChange={handleChange} />;
      case 'customers': return <TestimonialsEditor data={localData} onChange={handleChange} />;
      case 'contact': return <ContactEditor data={localData} onChange={handleChange} />;
      case 'general': return <GeneralEditor data={localData} onChange={handleChange} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-100 flex flex-col transform transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-16 flex items-center px-6 border-b border-slate-100 shrink-0">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <div>
            <p className="font-bold text-black text-sm leading-tight">EXZIBO</p>
            <p className="text-xs text-slate-400 leading-tight">Admin Panel</p>
          </div>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest px-3 mb-3">Content</p>
          <ul className="space-y-1">
            {NAV_ITEMS.map(item => {
              const Icon = item.icon;
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${active ? 'bg-black text-white' : 'text-slate-500 hover:bg-slate-50 hover:text-black'}`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-2">
          <button
            onClick={handleReset}
            className="w-full text-xs text-slate-400 hover:text-red-500 transition-colors py-2 text-center font-medium"
          >
            Reset to defaults
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 h-10 text-sm font-semibold text-slate-500 hover:text-black border border-slate-200 rounded-xl hover:bg-slate-50 transition-all"
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-50 text-slate-500 transition-colors"
            >
              <Menu size={20} />
            </button>
            <div>
              <h1 className="font-bold text-black text-sm lg:text-base">
                {NAV_ITEMS.find(n => n.id === activeSection)?.label ?? 'Dashboard'}
              </h1>
              {isDirty && <p className="text-[10px] text-amber-500 font-semibold">Unsaved changes</p>}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.open('/home', '_blank')}
              className="hidden sm:flex items-center space-x-2 h-9 px-4 text-sm font-semibold text-black border-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-all"
            >
              <Eye size={14} />
              <span>Preview Site</span>
            </button>

            <button
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
              className={`flex items-center space-x-2 h-9 px-4 text-sm font-semibold rounded-xl transition-all active:scale-95 disabled:opacity-60 ${saveStatus === 'saved' ? 'bg-green-500 text-white' : saveStatus === 'error' ? 'bg-red-500 text-white' : 'bg-black text-white hover:bg-slate-800'}`}
            >
              {saveStatus === 'saving' ? (
                <><div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /><span>Saving...</span></>
              ) : saveStatus === 'saved' ? (
                <><CheckCircle size={14} /><span>Saved!</span></>
              ) : saveStatus === 'error' ? (
                <><AlertCircle size={14} /><span>Error</span></>
              ) : (
                <><Save size={14} /><span>Save</span></>
              )}
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-4xl mx-auto">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
}

function Dashboard({ data, onNavigate }: { data: any; onNavigate: (s: Section) => void }) {
  const stats = [
    { label: 'Features', count: data.features.length, section: 'features' as Section },
    { label: 'Pricing Plans', count: data.pricing.length, section: 'pricing' as Section },
    { label: 'Testimonials', count: data.testimonials.length, section: 'customers' as Section },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-black mb-1">Welcome back 👋</h2>
        <p className="text-slate-400 text-sm">Manage your website content from here. Changes are saved to local storage and reflected instantly on the site.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map(s => (
          <button
            key={s.label}
            onClick={() => onNavigate(s.section)}
            className="bg-white border border-slate-200 rounded-xl p-5 text-left hover:border-black transition-all group"
          >
            <p className="text-3xl font-bold text-black mb-1">{s.count}</p>
            <p className="text-sm text-slate-400 font-medium group-hover:text-black transition-colors">{s.label}</p>
          </button>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Quick Edit</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {NAV_ITEMS.filter(n => n.id !== 'dashboard').map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex items-center space-x-3 bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-600 hover:border-black hover:text-black transition-all group"
              >
                <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Icon size={15} />
                </div>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6">
        <p className="font-bold mb-1">How it works</p>
        <p className="text-sm text-slate-400 leading-relaxed">
          Edit any section using the sidebar, then click <strong className="text-white">Save</strong> in the top bar. 
          Click <strong className="text-white">Preview Site</strong> to see your changes live at <code className="text-slate-300">/home</code>.
        </p>
      </div>
    </div>
  );
}
