import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Save, QrCode, CheckCircle2 } from 'lucide-react';
import { AdminSidebar } from '../components/layout/AdminSidebar';
import { useData } from '../context/DataContext';
import { Button } from '../components/ui/Button';

export const AdminSettings: React.FC = () => {
  const { isAdmin, adminSettings, updateAdminSettings } = useData();
  const [formData, setFormData] = useState({
    payment_qr_code_url: adminSettings.payment_qr_code_url,
    upi_id: adminSettings.upi_id,
    payment_instructions: adminSettings.payment_instructions,
  });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateAdminSettings(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div>
            <h1 className="font-display font-bold text-3xl text-foreground">
              Payment & Platform Settings
            </h1>
            <p className="text-xs sm:text-sm text-foreground-muted mt-1">
              Configure student payment QR code, UPI ID, and admission instructions.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#0F111A] border border-white/10 space-y-6 shadow-xl">
            {savedSuccess && (
              <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-2.5 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Settings successfully saved and synchronized.</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground-muted">Merchant UPI ID</label>
              <input
                type="text"
                required
                value={formData.upi_id}
                onChange={e => setFormData({ ...formData, upi_id: e.target.value })}
                placeholder="e.g. 7588171372@ybl"
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-indigo focus:outline-none text-foreground text-sm font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground-muted">Payment QR Code Image URL</label>
              <input
                type="text"
                required
                value={formData.payment_qr_code_url}
                onChange={e => setFormData({ ...formData, payment_qr_code_url: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-indigo focus:outline-none text-foreground text-sm"
              />
            </div>

            {/* Live QR Preview */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-5">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <img
                  src={formData.payment_qr_code_url}
                  alt="QR Preview"
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="space-y-1 text-xs">
                <p className="font-semibold text-white">Live QR Code Preview</p>
                <p className="text-foreground-muted">This QR will be displayed to students during registration step 2.</p>
                <p className="text-brand-cyan font-mono">{formData.upi_id}</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-foreground-muted">Payment Instructions for Candidates</label>
              <textarea
                rows={4}
                required
                value={formData.payment_instructions}
                onChange={e => setFormData({ ...formData, payment_instructions: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-indigo focus:outline-none text-foreground text-sm resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <Button type="submit" size="md" icon={<Save className="w-4 h-4" />}>
                Save Settings
              </Button>
            </div>
          </form>

        </div>
      </main>
    </div>
  );
};
