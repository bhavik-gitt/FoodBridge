import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  XCircle,
  Search,
  Filter,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Platform Overview</h1>
          <p className="text-gray-500">System status: All services operational.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline">Download Report</button>
          <button className="btn-primary">System Settings</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Users', value: '24,502', trend: '+12%', up: true },
          { label: 'Food Saved (Tons)', value: '1,240', trend: '+8%', up: true },
          { label: 'Active NGOs', value: '842', trend: '+5%', up: true },
          { label: 'Pending Verifications', value: '24', trend: '-2%', up: false },
        ].map((stat, i) => (
          <div key={i} className="card p-6">
            <p className="text-sm text-gray-500 font-medium mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <span className={`flex items-center text-xs font-bold ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pending Verifications */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Pending Verifications</h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search..." className="pl-9 pr-4 py-1.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>
          </div>

          <div className="card overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Entity</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'City Harvest NGO', type: 'NGO', date: 'Mar 12, 2026', status: 'Pending' },
                  { name: 'The Ritz Carlton', type: 'Restaurant', date: 'Mar 11, 2026', status: 'In Review' },
                  { name: 'Global Relief', type: 'NGO', date: 'Mar 11, 2026', status: 'Pending' },
                  { name: 'Skyline Events', type: 'Event Venue', date: 'Mar 10, 2026', status: 'Pending' },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-bold">
                          {item.name[0]}
                        </div>
                        <span className="font-bold text-gray-900">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                        item.status === 'Pending' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg"><CheckCircle2 className="w-4 h-4" /></button>
                        <button className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"><XCircle className="w-4 h-4" /></button>
                        <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg"><MoreVertical className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Health */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">System Health</h2>
          <div className="card p-6 space-y-6">
            <div className="space-y-4">
              {[
                { label: 'API Response Time', value: '124ms', status: 'Healthy' },
                { label: 'Database Load', value: '14%', status: 'Healthy' },
                { label: 'Matching Engine', value: 'Active', status: 'Healthy' },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-900">{s.label}</p>
                    <p className="text-xs text-gray-500">{s.value}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-green-600 text-xs font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                    {s.status}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Recent Alerts</h3>
              <div className="space-y-3">
                <div className="flex gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
                  <AlertCircle className="text-red-600 w-5 h-5 shrink-0" />
                  <p className="text-xs text-red-800">
                    High demand spike in <strong>Zone B</strong>. Matching delays expected.
                  </p>
                </div>
                <div className="flex gap-3 p-3 bg-orange-50 rounded-xl border border-orange-100">
                  <AlertCircle className="text-orange-600 w-5 h-5 shrink-0" />
                  <p className="text-xs text-orange-800">
                    Scheduled maintenance on Mar 15, 02:00 UTC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
