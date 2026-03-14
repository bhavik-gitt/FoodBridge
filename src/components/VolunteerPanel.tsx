import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Navigation, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Package, 
  TrendingUp, 
  Award, 
  History,
  ChevronRight,
  Phone,
  ExternalLink
} from 'lucide-react';

export default function VolunteerPanel() {
  const [activeTask, setActiveTask] = useState<any>({
    id: 'T-1024',
    restaurant: 'Green Bistro',
    pickup: '123 Eco Lane, Downtown',
    delivery: 'Hope Community Kitchen, 456 Care St',
    items: '15 Mixed Veggie Platters',
    status: 'IN_TRANSIT'
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Hello, Alex!</h1>
          <p className="text-gray-500">You've delivered 42 meals this week. You're in the top 5%!</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline flex items-center gap-2">
            <History className="w-5 h-5" />
            My History
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Navigation className="w-5 h-5" />
            Find New Tasks
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
            <TrendingUp className="text-blue-600 w-7 h-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Deliveries</p>
            <p className="text-2xl font-bold text-gray-900">156</p>
          </div>
        </div>
        <div className="card p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
            <Award className="text-primary w-7 h-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Impact Points</p>
            <p className="text-2xl font-bold text-gray-900">2,450</p>
          </div>
        </div>
        <div className="card p-6 flex items-center gap-4">
          <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
            <Clock className="text-secondary w-7 h-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Hours Donated</p>
            <p className="text-2xl font-bold text-gray-900">84h</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Task */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Active Task</h2>
          {activeTask ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card overflow-hidden"
            >
              <div className="bg-blue-600 p-4 text-white flex items-center justify-between">
                <span className="font-bold flex items-center gap-2">
                  <Navigation className="w-4 h-4" /> In Progress
                </span>
                <span className="text-sm opacity-80">Task ID: {activeTask.id}</span>
              </div>
              <div className="p-6 space-y-8">
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-3.5 top-8 bottom-8 w-0.5 bg-gray-200 border-dashed border-l-2" />
                  
                  <div className="flex gap-6 relative">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 z-10">
                      <MapPin className="text-white w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Pickup From</p>
                      <h3 className="text-lg font-bold text-gray-900">{activeTask.restaurant}</h3>
                      <p className="text-gray-500">{activeTask.pickup}</p>
                      <button className="mt-2 text-blue-600 text-sm font-bold flex items-center gap-1">
                        <Phone className="w-3 h-3" /> Call Restaurant
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-6 mt-12 relative">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 z-10">
                      <Navigation className="text-white w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Deliver To</p>
                      <h3 className="text-lg font-bold text-gray-900">Hope Community Kitchen</h3>
                      <p className="text-gray-500">{activeTask.delivery}</p>
                      <button className="mt-2 text-blue-600 text-sm font-bold flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" /> Open in Maps
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Package className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{activeTask.items}</p>
                      <p className="text-xs text-gray-500">Fragile • Keep Upright</p>
                    </div>
                  </div>
                  <button className="btn-primary py-2 px-6 text-sm">Confirm Pickup</button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="card p-12 text-center space-y-4">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                <Package className="text-gray-300 w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">No Active Tasks</h3>
                <p className="text-gray-500">Check the map for available donations nearby.</p>
              </div>
              <button className="btn-primary">Find Tasks</button>
            </div>
          )}
        </div>

        {/* Leaderboard */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Weekly Leaderboard</h2>
          <div className="card p-6 space-y-6">
            {[
              { name: 'Maria G.', score: '2,840', rank: 1, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100' },
              { name: 'Alex Rivera', score: '2,450', rank: 2, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100' },
              { name: 'Sam Wilson', score: '2,100', rank: 3, img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100' },
              { name: 'Elena P.', score: '1,950', rank: 4, img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100' },
            ].map((user, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={user.img} alt={user.name} className="w-10 h-10 rounded-xl object-cover" referrerPolicy="no-referrer" />
                    {user.rank <= 3 && (
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-secondary rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white">
                        {user.rank}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.score} pts</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300" />
              </div>
            ))}
            <button className="w-full text-primary text-sm font-bold pt-2">View Full Leaderboard</button>
          </div>

          {/* Achievement */}
          <div className="card p-6 bg-primary text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold">Next Milestone</h3>
            </div>
            <p className="text-sm text-white/80 mb-4">Deliver 4 more meals to unlock the "Silver Courier" badge.</p>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white w-3/4" />
            </div>
            <p className="text-[10px] text-right mt-2 font-bold uppercase tracking-wider">75% Complete</p>
          </div>
        </div>
      </div>
    </div>
  );
}
