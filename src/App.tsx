import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import DashboardLayout from './components/DashboardLayout';
import RestaurantDashboard from './components/RestaurantDashboard';
import NGODashboard from './components/NGODashboard';
import VolunteerPanel from './components/VolunteerPanel';
import AdminDashboard from './components/AdminDashboard';
import LiveMap from './components/LiveMap';
import { UserRole } from './types';

export default function App() {
  const [view, setView] = useState<'LANDING' | 'DASHBOARD'>('LANDING');
  const [role, setRole] = useState<UserRole>('RESTAURANT');
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogin = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setView('DASHBOARD');
  };

  const handleLogout = () => {
    setView('LANDING');
  };

  if (view === 'LANDING') {
    return (
      <div className="relative">
        <LandingPage onGetStarted={() => setView('DASHBOARD')} />
        
        {/* Role Selector for Demo */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur shadow-2xl rounded-2xl p-4 border border-gray-200 z-[100] flex items-center gap-4">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2">Demo Roles:</span>
          <div className="flex gap-2">
            {(['RESTAURANT', 'NGO', 'VOLUNTEER', 'ADMIN'] as UserRole[]).map((r) => (
              <button
                key={r}
                onClick={() => handleLogin(r)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  role === r ? 'bg-primary text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout 
      userRole={role} 
      userName={role === 'RESTAURANT' ? 'Green Bistro' : role === 'NGO' ? 'Hope Kitchen' : role === 'VOLUNTEER' ? 'Alex Rivera' : 'Admin User'}
      onLogout={handleLogout}
    >
      {role === 'RESTAURANT' && <RestaurantDashboard />}
      {role === 'NGO' && <NGODashboard />}
      {role === 'VOLUNTEER' && <VolunteerPanel />}
      {role === 'ADMIN' && <AdminDashboard />}
      
      {/* Shared Live Map View for Demo */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Live Impact Map</h2>
          <p className="text-sm text-gray-500">Real-time activity in your area</p>
        </div>
        <LiveMap />
      </div>
    </DashboardLayout>
  );
}
