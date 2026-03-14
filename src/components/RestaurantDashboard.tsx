import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  Clock, 
  MapPin, 
  TrendingUp, 
  Award, 
  Package,
  Camera,
  Sparkles,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { geminiService } from '../services/geminiService';

export default function RestaurantDashboard() {
  const [isDonating, setIsDonating] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [foodImage, setFoodImage] = useState<string | null>(null);
  const [foodType, setFoodType] = useState('');

  const handleGenerateImage = async () => {
    if (!foodType) return;
    setGenerating(true);
    const img = await geminiService.generateFoodImage(foodType);
    if (img) setFoodImage(img);
    setGenerating(false);
  };

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Green Bistro!</h1>
          <p className="text-gray-500">You've saved 142 meals this month. Keep it up!</p>
        </div>
        <button 
          onClick={() => setIsDonating(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Donate Surplus Food
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
            <TrendingUp className="text-primary w-7 h-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Impact</p>
            <p className="text-2xl font-bold text-gray-900">1,240 Meals</p>
          </div>
        </div>
        <div className="card p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
            <Award className="text-secondary w-7 h-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Current Rank</p>
            <p className="text-2xl font-bold text-gray-900">Food Hero 🎖️</p>
          </div>
        </div>
        <div className="card p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
            <Package className="text-accent w-7 h-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Waste Reduced</p>
            <p className="text-2xl font-bold text-gray-900">420 kg</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Donations */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Recent Donations</h2>
            <button className="text-primary font-medium hover:underline flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {[
              { type: 'Mixed Veggie Platters', qty: '15 meals', time: '2h ago', status: 'Picked Up', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=200' },
              { type: 'Fresh Baked Bread', qty: '8 loaves', time: '5h ago', status: 'Reserved', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=200' },
              { type: 'Organic Salads', qty: '10 bowls', time: '1d ago', status: 'Delivered', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=200' },
            ].map((item, i) => (
              <div key={i} className="card p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                <img src={item.img} alt={item.type} className="w-16 h-16 rounded-xl object-cover" referrerPolicy="no-referrer" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{item.type}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1"><Package className="w-3 h-3" /> {item.qty}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.time}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  item.status === 'Picked Up' ? 'bg-blue-100 text-blue-600' :
                  item.status === 'Reserved' ? 'bg-orange-100 text-orange-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights Sidebar */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">AI Waste Insights</h2>
          <div className="card bg-primary/5 border-primary/10 p-6 space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold">Smart Prediction</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Based on your donation history, you're likely to have surplus <strong>Bakery items</strong> this Friday evening. Consider adjusting production by 10%.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-xs text-gray-600">Peak surplus time: 9:30 PM - 10:30 PM</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-xs text-gray-600">Top NGO partner: Hope Community Kitchen</p>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="card p-6">
            <h3 className="font-bold text-gray-900 mb-4">Your Achievements</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: '🌱', label: 'Eco Warrior' },
                { icon: '🤝', label: 'Community' },
                { icon: '⚡', label: 'Fast Donor' },
              ].map((b, i) => (
                <div key={i} className="text-center group cursor-help">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {b.icon}
                  </div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{b.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Story Video */}
          <div className="card p-6 bg-gray-900 text-white">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-secondary" />
              AI Impact Story
            </h3>
            <p className="text-sm text-gray-400 mb-4">Animate your latest donation into a social impact story using AI.</p>
            <button 
              onClick={async () => {
                const videoUrl = await geminiService.animateImpactStory(
                  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400',
                  'A cinematic animation of food being shared in a community kitchen, warm lighting, emotional and inspiring.'
                );
                if (videoUrl) window.open(videoUrl);
              }}
              className="w-full btn-secondary py-2 text-sm flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" /> Generate Video
            </button>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {isDonating && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-primary text-white">
              <h2 className="text-xl font-bold">Donate Surplus Food</h2>
              <button onClick={() => setIsDonating(false)} className="p-2 hover:bg-white/10 rounded-lg">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Food Type</label>
                    <input 
                      type="text" 
                      value={foodType}
                      onChange={(e) => setFoodType(e.target.value)}
                      placeholder="e.g. Pasta, Sandwiches, Bread" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Quantity (Meals/KG)</label>
                    <input type="text" placeholder="e.g. 15 meals" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Expiry Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="text" placeholder="e.g. 3 hours from now" className="pl-10 w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Food Photo</label>
                  <div className="relative aspect-square rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 overflow-hidden group">
                    {foodImage ? (
                      <img src={foodImage} alt="Food preview" className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <Camera className="w-8 h-8 text-gray-400" />
                        <p className="text-xs text-gray-500 text-center px-4">Upload a photo or use AI to generate one</p>
                      </>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button className="p-2 bg-white rounded-lg text-gray-900"><Camera className="w-5 h-5" /></button>
                      <button 
                        onClick={handleGenerateImage}
                        disabled={generating}
                        className="p-2 bg-primary rounded-lg text-white flex items-center gap-2"
                      >
                        <Sparkles className="w-5 h-5" />
                        {generating ? 'Generating...' : 'AI Generate'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex gap-3">
                <AlertCircle className="text-secondary w-5 h-5 shrink-0" />
                <p className="text-sm text-orange-800">
                  Please ensure food is stored at safe temperatures until pickup. Our volunteers will arrive within the specified window.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button onClick={() => setIsDonating(false)} className="flex-1 btn-outline">Cancel</button>
                <button className="flex-1 btn-primary">Confirm Donation</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
}
