import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  UserCheck, 
  Settings, 
  LogOut, 
  Globe, 
  ShieldCheck 
} from 'lucide-react';
import { useData } from '../../context/DataContext';

export const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logoutAdmin, registrations } = useData();

  const pendingCount = registrations.filter(r => r.status === 'pending').length;

  const links = [
    { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { label: 'Manage Courses', path: '/admin/courses', icon: BookOpen },
    { label: 'Registrations', path: '/admin/registrations', icon: UserCheck, badge: pendingCount > 0 ? pendingCount : null },
    { label: 'Payment & Settings', path: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  return (
    <aside className="w-64 bg-[#08090F] border-r border-white/10 flex flex-col justify-between p-5 min-h-screen">
      <div className="space-y-6">
        {/* Brand */}
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-cyan flex items-center justify-center font-display font-bold text-white shadow-md">
            RC
          </div>
          <div>
            <h2 className="font-display font-bold text-sm text-foreground">Admin Portal</h2>
            <p className="text-[11px] text-brand-cyan">Rehan's Portfolio</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-indigo text-white shadow-md shadow-brand-indigo/30'
                    : 'text-foreground-muted hover:text-foreground hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </div>
                {link.badge !== null && link.badge !== undefined && (
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-amber-400 text-black font-bold">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer controls */}
      <div className="space-y-2 pt-6 border-t border-white/5">
        <Link
          to="/"
          className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs text-foreground-muted hover:text-foreground hover:bg-white/5 transition-colors"
        >
          <Globe className="w-4 h-4 text-brand-cyan" />
          <span>View Public Site</span>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
