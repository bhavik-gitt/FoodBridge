export type UserRole = 'RESTAURANT' | 'NGO' | 'VOLUNTEER' | 'ADMIN';

export interface FoodDonation {
  id: string;
  restaurantId: string;
  restaurantName: string;
  foodType: string;
  quantity: string;
  expiryTime: string;
  pickupWindow: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  imageUrl?: string;
  status: 'AVAILABLE' | 'RESERVED' | 'PICKED_UP' | 'DELIVERED';
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  avatar?: string;
  stats: {
    mealsSaved: number;
    impactScore: number;
    badges: string[];
  };
}

export interface Task {
  id: string;
  donationId: string;
  volunteerId?: string;
  status: 'PENDING' | 'IN_TRANSIT' | 'COMPLETED';
  pickupLocation: string;
  deliveryLocation: string;
}
