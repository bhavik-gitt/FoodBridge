import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  Package, 
  Search, 
  Filter, 
  Bell, 
  CheckCircle2, 
  ChevronRight,
  Navigation,
  Users,
  AlertTriangle
} from 'lucide-react';

export default function NGODashboard() {
  const [activeTab, setActiveTab] = useState('available');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hope Community Kitchen</h1>
          <p className="text-gray-500">Helping 450+ people daily in Downtown area.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline flex items-center gap-2">
            <Users className="w-5 h-5" />
            Manage Volunteers
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Navigation className="w-5 h-5" />
            Live Map View
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Meals Received', value: '4,250', color: 'bg-primary' },
          { label: 'Active Reservations', value: '12', color: 'bg-secondary' },
          { label: 'Volunteers Online', value: '24', color: 'bg-blue-500' },
          { label: 'People Fed Today', value: '380', color: 'bg-accent' },
        ].map((stat, i) => (
          <div key={i} className="card p-6">
            <p className="text-sm text-gray-500 font-medium mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            <div className={`h-1 w-12 ${stat.color} rounded-full mt-4`} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveTab('available')}
                className={`pb-2 font-bold transition-all ${activeTab === 'available' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
              >
                Available Nearby
              </button>
              <button 
                onClick={() => setActiveTab('reserved')}
                className={`pb-2 font-bold transition-all ${activeTab === 'reserved' ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
              >
                My Reservations
              </button>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg border border-gray-200">
                <Filter className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { 
                restaurant: 'The Grand Hotel', 
                type: 'Continental Breakfast Buffet', 
                qty: '40 meals', 
                expiry: '1h 20m', 
                dist: '0.8 km',
                img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=200',
                urgent: true
              },
              { 
                restaurant: 'Pasta Palace', 
                type: 'Assorted Pasta Trays', 
                qty: '25 meals', 
                expiry: '3h 45m', 
                dist: '1.5 km',
                img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=200'
              },
              { 
                restaurant: 'Fresh Greens', 
                type: 'Garden Salads & Wraps', 
                qty: '15 meals', 
                expiry: '4h 10m', 
                dist: '2.2 km',
                img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200'
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`card p-5 flex flex-col sm:flex-row gap-5 hover:shadow-md transition-all border-l-4 ${item.urgent ? 'border-l-red-500' : 'border-l-primary'}`}
              >
                <img src={item.img} alt={item.type} className="w-full sm:w-32 h-32 rounded-2xl object-cover" referrerPolicy="no-referrer" />
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{item.type}</h3>
                      <p className="text-primary font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.restaurant} • {item.dist} away
                      </p>
                    </div>
                    {item.urgent && (
                      <span className="flex items-center gap-1 text-red-600 text-xs font-bold bg-red-50 px-2 py-1 rounded-lg">
                        <AlertTriangle className="w-3 h-3" /> URGENT
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl">
                      <Package className="w-4 h-4 text-primary" /> {item.qty}
                    </span>
                    <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl">
                      <Clock className="w-4 h-4 text-secondary" /> Expiring in {item.expiry}
                    </span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 btn-primary py-2 text-sm">Claim Donation</button>
                    <button className="btn-outline py-2 text-sm px-4">View Details</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-secondary" />
              Real-time Alerts
            </h3>
            <div className="space-y-4">
              {[
                { msg: 'New donation from "Pizza Co" (5km away)', time: 'Just now' },
                { msg: 'Volunteer Mark is at "Grand Hotel"', time: '5m ago' },
                { msg: 'Donation #452 delivered successfully', time: '12m ago' },
              ].map((n, i) => (
                <div key={i} className="flex gap-3 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-800 leading-snug">{n.msg}</p>
                    <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 bg-secondary/5 border-secondary/10">
            <h3 className="font-bold text-gray-900 mb-4">Hunger Map Insights</h3>
            <p className="text-sm text-gray-600 mb-4">
              High demand detected in <strong>East District</strong>. 3 NGOs are currently offline in that area.
            </p>
            <button className="w-full btn-secondary py-2 text-sm">View Emergency Map</button>
          </div>

          <div className="card p-6">
            <h3 className="font-bold text-gray-900 mb-4">Volunteer Status</h3>
            <div className="space-y-4">
              {[
                { name: 'Alex Rivera', status: 'En Route', task: 'Grand Hotel' },
                { name: 'Sarah Smith', status: 'Idle', task: 'Available' },
                { name: 'John Doe', status: 'Delivering', task: 'Hope Shelter' },
              ].map((v, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold">
                      {v.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{v.name}</p>
                      <p className="text-xs text-gray-500">{v.task}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    v.status === 'Idle' ? 'bg-gray-100 text-gray-500' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {v.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
