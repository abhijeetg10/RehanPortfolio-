import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';
import { Button } from '../components/ui/Button';

export const AdminLogin: React.FC = () => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const { loginAdmin } = useData();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(pin)) {
      navigate('/admin');
    } else {
      setError('Invalid PIN or password. (Hint: use "admin" or "admin123")');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md p-8 rounded-2xl bg-background-elevated border border-white/10 space-y-6 shadow-2xl">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-brand-indigo/20 border border-brand-indigo/40 flex items-center justify-center text-brand-indigo mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="font-display font-bold text-2xl text-foreground">
            Admin Authentication
          </h2>
          <p className="text-xs text-foreground-muted">
            Access courses CRUD, student verification, and platform settings.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-foreground-muted">Admin Password / PIN</label>
            <input
              type="password"
              value={pin}
              onChange={e => setPin(e.target.value)}
              placeholder="Enter admin password (e.g. admin123)"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-indigo focus:outline-none text-foreground text-sm"
              autoFocus
            />
            {error && <p className="text-xs text-rose-400">{error}</p>}
          </div>

          <Button type="submit" size="lg" className="w-full" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Unlock Admin Panel
          </Button>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => { setPin('admin123'); }}
              className="text-[11px] text-brand-cyan hover:underline"
            >
              Fill Default Demo PIN (admin123)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
