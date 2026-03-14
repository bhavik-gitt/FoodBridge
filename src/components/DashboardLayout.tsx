import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  PlusCircle, 
  History, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Map as MapIcon,
  Users,
  ShieldCheck,
  Menu,
  X,
  User as UserIcon
} from 'lucide-react';
import { UserRole } from '../types';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: UserRole;
  userName: string;
  onLogout: () => void;
}

export default function DashboardLayout({ children, userRole, userName, onLogout }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = {
    RESTAURANT: [
      { icon: LayoutDashboard, label: 'Overview', id: 'overview' },
      { icon: PlusCircle, label: 'Donate Food', id: 'donate' },
      { icon: History, label: 'History', id: 'history' },
      { icon: Settings, label: 'Settings', id: 'settings' },
    ],
    NGO: [
      { icon: LayoutDashboard, label: 'Available Food', id: 'available' },
      { icon: MapIcon, label: 'Live Map', id: 'map' },
      { icon: History, label: 'Reservations', id: 'reservations' },
      { icon: Users, label: 'Volunteers', id: 'volunteers' },
    ],
    VOLUNTEER: [
      { icon: LayoutDashboard, label: 'My Tasks', id: 'tasks' },
      { icon: MapIcon, label: 'Navigation', id: 'nav' },
      { icon: History, label: 'Completed', id: 'completed' },
    ],
    ADMIN: [
      { icon: LayoutDashboard, label: 'Analytics', id: 'admin-overview' },
      { icon: ShieldCheck, label: 'Verifications', id: 'verify' },
      { icon: Users, label: 'User Management', id: 'users' },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0
      `}>
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <LayoutDashboard className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-gray-900">FoodBridge</span>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <nav className="flex-1 px-4 space-y-1">
            {menuItems[userRole].map((item) => (
              <button
                key={item.id}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-primary rounded-xl transition-colors font-medium"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-100">
            <button 
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="w-6 h-6 text-gray-500" />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search donations, NGOs..." 
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-xl relative">
              <Bell className="w-6 h-6 text-gray-500" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-white" />
            </button>
            <div className="h-10 w-px bg-gray-200 mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">{userName}</p>
                <p className="text-xs text-gray-500 capitalize">{userRole.toLowerCase()}</p>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                <UserIcon className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
