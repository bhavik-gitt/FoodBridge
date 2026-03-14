import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  Utensils, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck,
  Globe,
  Star
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-bottom border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Utensils className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">FoodBridge</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium">How it Works</a>
            <a href="#impact" className="text-gray-600 hover:text-primary font-medium">Our Impact</a>
            <button 
              onClick={onGetStarted}
              className="btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Join the movement to end food waste
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
              Reduce Food Waste, <span className="text-primary">Feed the Hungry.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              FoodBridge connects surplus food from restaurants and hotels to local NGOs and volunteers, ensuring no good meal goes to waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onGetStarted} className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4">
                Donate Food <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={onGetStarted} className="btn-outline flex items-center justify-center gap-2 text-lg px-8 py-4">
                Find Donations
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200" 
                alt="Community food sharing" 
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <Heart className="text-secondary w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">1.2M+</p>
                <p className="text-sm text-gray-500">Meals Shared</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Meals Saved', value: '1.2M+', icon: Utensils },
              { label: 'NGO Partners', value: '450+', icon: ShieldCheck },
              { label: 'Active Volunteers', value: '12K+', icon: Users },
              { label: 'Cities Covered', value: '85+', icon: Globe },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary w-6 h-6" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How FoodBridge Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple steps to make a massive impact in your community.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'List Surplus Food',
                desc: 'Restaurants and hotels post available surplus meals with pickup details.',
                icon: Utensils,
                color: 'bg-primary'
              },
              {
                title: 'NGOs Claim & Match',
                desc: 'Local NGOs receive alerts and claim donations based on their community needs.',
                icon: ShieldCheck,
                color: 'bg-secondary'
              },
              {
                title: 'Volunteers Deliver',
                desc: 'Nearby volunteers pick up the food and deliver it to the distribution centers.',
                icon: Users,
                color: 'bg-accent'
              }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <step.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px border-t-2 border-dashed border-gray-200 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Voices of Impact</h2>
            <p className="text-primary-foreground/80 text-xl">Real stories from our community partners.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sarah Jenkins',
                role: 'Manager, Green Bistro',
                quote: 'FoodBridge transformed how we handle surplus. Instead of waste, we see smiles. The platform is seamless and rewarding.',
                img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
              },
              {
                name: 'David Chen',
                role: 'Director, Hope Shelter',
                quote: 'The real-time alerts are a lifesaver. We can now provide fresh, high-quality meals to our residents every single day.',
                img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
              }
            ].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/30" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-lg">{t.name}</p>
                    <p className="text-white/70 text-sm">{t.role}</p>
                  </div>
                </div>
                <p className="text-xl italic leading-relaxed">"{t.quote}"</p>
                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Utensils className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">FoodBridge</span>
            </div>
            <p className="text-gray-400 text-lg max-w-sm mb-8">
              Building a sustainable future where no meal is wasted and no one goes hungry. Join our community today.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Donate Food</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Find Food</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NGO Verification</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Impact Report</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-12 mt-12 border-t border-white/10 text-center text-gray-500">
          <p>© 2026 FoodBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
