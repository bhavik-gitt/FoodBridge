import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Navigation, 
  Search, 
  Filter, 
  Layers, 
  Locate, 
  Plus, 
  Minus,
  Utensils,
  Heart,
  Users,
  Info
} from 'lucide-react';

export default function LiveMap() {
  const [selectedMarker, setSelectedMarker] = useState<any>(null);

  const markers = [
    { id: 1, type: 'RESTAURANT', name: 'Green Bistro', pos: { top: '30%', left: '40%' }, items: '15 meals' },
    { id: 2, type: 'NGO', name: 'Hope Kitchen', pos: { top: '50%', left: '60%' }, status: 'Active' },
    { id: 3, type: 'RESTAURANT', name: 'Pasta Palace', pos: { top: '20%', left: '70%' }, items: '8 meals' },
    { id: 4, type: 'VOLUNTEER', name: 'Alex R.', pos: { top: '45%', left: '45%' }, status: 'En route' },
    { id: 5, type: 'RESTAURANT', name: 'The Grand Hotel', pos: { top: '65%', left: '30%' }, items: '40 meals' },
  ];

  return (
    <div className="h-[calc(100vh-160px)] relative rounded-3xl overflow-hidden border border-gray-200 bg-gray-100">
      {/* Simulated Map Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 grayscale" />
      
      {/* Map Grid Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Map UI Controls */}
      <div className="absolute top-6 left-6 z-10 space-y-4">
        <div className="bg-white p-2 rounded-2xl shadow-xl flex items-center gap-2 border border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search area..." 
              className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button className="p-2 hover:bg-gray-50 rounded-xl border border-gray-100">
            <Filter className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {['All', 'Restaurants', 'NGOs', 'Volunteers'].map((f) => (
            <button key={f} className="bg-white px-4 py-2 rounded-xl shadow-md text-sm font-bold text-gray-700 hover:bg-primary hover:text-white transition-all border border-gray-100">
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute top-6 right-6 z-10 flex flex-col gap-2">
        <button className="bg-white p-3 rounded-xl shadow-xl hover:bg-gray-50 transition-all border border-gray-100">
          <Layers className="w-5 h-5 text-gray-700" />
        </button>
        <button className="bg-white p-3 rounded-xl shadow-xl hover:bg-gray-50 transition-all border border-gray-100">
          <Locate className="w-5 h-5 text-primary" />
        </button>
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
          <button className="p-3 hover:bg-gray-50 w-full border-b border-gray-100"><Plus className="w-5 h-5 text-gray-700" /></button>
          <button className="p-3 hover:bg-gray-50 w-full"><Minus className="w-5 h-5 text-gray-700" /></button>
        </div>
      </div>

      {/* Markers */}
      {markers.map((m) => (
        <motion.button
          key={m.id}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => setSelectedMarker(m)}
          className="absolute z-20"
          style={{ top: m.pos.top, left: m.pos.left }}
        >
          <div className={`
            p-2 rounded-full shadow-lg border-2 border-white
            ${m.type === 'RESTAURANT' ? 'bg-primary' : m.type === 'NGO' ? 'bg-secondary' : 'bg-blue-500'}
          `}>
            {m.type === 'RESTAURANT' ? <Utensils className="text-white w-4 h-4" /> : 
             m.type === 'NGO' ? <Heart className="text-white w-4 h-4" /> : 
             <Users className="text-white w-4 h-4" />}
          </div>
          {m.type === 'RESTAURANT' && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded-lg shadow-md text-[10px] font-bold whitespace-nowrap">
              {m.items}
            </div>
          )}
        </motion.button>
      ))}

      {/* Selected Marker Info */}
      {selectedMarker && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-sm px-4"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 relative">
            <button 
              onClick={() => setSelectedMarker(null)}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                selectedMarker.type === 'RESTAURANT' ? 'bg-primary/10' : 'bg-secondary/10'
              }`}>
                {selectedMarker.type === 'RESTAURANT' ? <Utensils className="text-primary w-6 h-6" /> : <Heart className="text-secondary w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{selectedMarker.name}</h3>
                <p className="text-sm text-gray-500">{selectedMarker.type}</p>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>123 Main Street, Downtown</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Info className="w-4 h-4 text-gray-400" />
                <span>{selectedMarker.items || selectedMarker.status}</span>
              </div>
            </div>
            <button className="w-full btn-primary py-2.5">
              {selectedMarker.type === 'RESTAURANT' ? 'View Donations' : 'Contact NGO'}
            </button>
          </div>
        </motion.div>
      )}

      {/* Legend */}
      <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span className="text-xs font-bold text-gray-700">Restaurants</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-secondary rounded-full" />
            <span className="text-xs font-bold text-gray-700">NGOs</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-xs font-bold text-gray-700">Volunteers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
}
