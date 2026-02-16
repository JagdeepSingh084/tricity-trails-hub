/**
 * TRAVEL BUDDIES - SITE CONFIGURATION
 * 
 * This file contains all editable data for the website.
 * Update these values to customize your travel agency site.
 * 
 * INSTRUCTIONS FOR BEGINNERS:
 * 1. Replace AGENCY_EMAIL with your actual email
 * 2. Update SOCIAL_LINKS with your social media URLs
 * 3. Add your own trip data to COMPLETED_TRIPS and FUTURE_TRIPS
 * 4. Replace image URLs with your own high-resolution photos
 * 5. Customize itineraries with your actual tour details
 * 
 * IMAGE REQUIREMENTS:
 * - Hero images: 1920x1080px (landscape)
 * - Trip cards: 1600x900px (landscape)
 * - Gallery images: 800x600px
 * - Formats: JPG, PNG, WebP
 */

import shimlaManaliImg from "@/assets/shimla-manali.jpg";
import amritsarImg from "@/assets/amritsar.jpg";
import dharamshalaImg from "@/assets/dharamshala.jpg";
import kasauliImg from "@/assets/kasauli.jpg";
import kufriImg from "@/assets/kufri.jpg";
import heroImg from "@/assets/hero-image.jpg";

export const SITE_CONFIG = {
  // ============================================
  // AGENCY INFORMATION
  // ============================================
  AGENCY_NAME: "Travel Buddies",
  AGENCY_TAGLINE: "Adventure Is Calling",
  AGENCY_EMAIL: "bookings@travelbuddies.com", // CHANGE THIS to your real email
  AGENCY_PHONE: "+91 98765 43210", // CHANGE THIS to your real phone
  
  // ============================================
  // SOCIAL MEDIA LINKS
  // ============================================
  SOCIAL_LINKS: {
    facebook: "https://facebook.com/travelbuddies", // CHANGE THIS
    instagram: "https://instagram.com/travelbuddies", // CHANGE THIS
    twitter: "https://twitter.com/travelbuddies", // CHANGE THIS
    youtube: "https://youtube.com/@travelbuddies", // CHANGE THIS
  },

  // ============================================
  // BRAND COLORS (HSL format)
  // ============================================
  BRAND_COLORS: {
    primary: "204 80% 48%", // Sky blue
    secondary: "28 90% 55%", // Sunset orange
    accent: "145 65% 45%", // Mountain green
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  FONT_FAMILY: "Inter, system-ui, sans-serif",
};

// ============================================
// COMPLETED TRIPS
// Add your past successful trips here
// ============================================
export const COMPLETED_TRIPS = [
  {
    id: "shimla-manali-2024",
    title: "Shimla - Manali Weekend Getaway",
    shortDesc: "A magical 3-day journey through the colonial charm of Shimla and adventure capital Manali",
    dateCompleted: "March 2024",
    coverImage: shimlaManaliImg,
    gallery: [
      shimlaManaliImg,
      heroImg,
    ],
    testimonial: "Best trip ever! The arrangements were perfect and guides were knowledgeable. - Priya S."
  },
  {
    id: "amritsar-dharamshala-2024",
    title: "Amritsar - Dharamshala Cultural Tour",
    shortDesc: "Experience spirituality at Golden Temple and Tibetan culture in the Himalayas",
    dateCompleted: "February 2024",
    coverImage: amritsarImg,
    gallery: [
      amritsarImg,
      dharamshalaImg,
    ],
    testimonial: "Deeply moving experience. The spiritual journey was exactly what I needed. - Rajesh K."
  },
  {
    id: "kasauli-kufri-2024",
    title: "Kasauli - Kufri Day Trip",
    shortDesc: "Perfect day escape to colonial hill stations near Chandigarh",
    dateCompleted: "January 2024",
    coverImage: kasauliImg,
    gallery: [
      kasauliImg,
      kufriImg,
    ],
    testimonial: "Great for families! Kids loved Kufri and we enjoyed Kasauli's peace. - Sharma Family"
  },
];

// ============================================
// UPCOMING/FUTURE TRIPS
// Add your available tour packages here
// ============================================
export const FUTURE_TRIPS = [
  {
    id: "shimla-manali-june",
    title: "Shimla - Manali Summer Special",
    shortDesc: "3 Days / 2 Nights - Colonial architecture, apple orchards, and snow-capped mountains",
    startDate: "2024-06-15",
    endDate: "2024-06-17",
    pricePerPerson: 12999,
    seatsLeft: 8,
    coverImage: shimlaManaliImg,
    itineraryId: "shimla-manali-3day",
  },
  {
    id: "amritsar-dharamshala-july",
    title: "Amritsar - Dharamshala Spiritual Journey",
    shortDesc: "4 Days / 3 Nights - Golden Temple, Wagah Border, and Tibetan monasteries",
    startDate: "2024-07-01",
    endDate: "2024-07-04",
    pricePerPerson: 15999,
    seatsLeft: 12,
    coverImage: amritsarImg,
    itineraryId: "amritsar-dharamshala-4day",
  },
  {
    id: "kasauli-kufri-weekend",
    title: "Kasauli - Kufri Weekend Escape",
    shortDesc: "1 Day Trip - Perfect for families, colonial charm and adventure activities",
    startDate: "2024-06-22",
    endDate: "2024-06-22",
    pricePerPerson: 3999,
    seatsLeft: 20,
    coverImage: kasauliImg,
    itineraryId: "kasauli-kufri-day",
  },
];

// ============================================
// DETAILED ITINERARIES
// Full day-by-day schedules for each tour
// ============================================
export const ITINERARIES = [
  {
    id: "shimla-manali-3day",
    title: "Shimla - Manali Weekend Getaway",
    duration: "3 Days / 2 Nights",
    groupSize: "4-15 persons",
    difficulty: "Easy",
    schedule: [
      {
        day: 1,
        title: "Chandigarh to Shimla",
        activities: [
          "Depart from Chandigarh at 7:00 AM",
          "Scenic drive through Kalka-Shimla highway (110 km, 3.5 hours)",
          "Check-in at hotel & lunch",
          "Visit Mall Road, Christ Church, and Ridge",
          "Evening at Scandal Point and Lakkar Bazaar",
          "Dinner at hotel"
        ],
        meals: "Lunch, Dinner",
        accommodation: "3-star hotel in Shimla"
      },
      {
        day: 2,
        title: "Shimla to Manali",
        activities: [
          "Breakfast at hotel & checkout",
          "Drive to Manali (250 km, 7-8 hours) with scenic stops",
          "Lunch en route at Kullu",
          "Visit Kullu Shawl factories",
          "Arrive Manali, check-in at hotel",
          "Evening free for rest",
          "Dinner at hotel"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "3-star hotel in Manali"
      },
      {
        day: 3,
        title: "Manali Sightseeing & Return",
        activities: [
          "Early breakfast at 7:00 AM",
          "Visit Hadimba Temple (Deodar forest)",
          "Vashisht Hot Springs & Temple",
          "Old Manali village walk",
          "Lunch at Manali",
          "Depart for Chandigarh at 2:00 PM",
          "Arrive Chandigarh by 10:00 PM"
        ],
        meals: "Breakfast, Lunch",
        accommodation: "N/A"
      }
    ],
    inclusions: [
      "AC transportation (Innova/Tempo Traveller)",
      "2 nights accommodation (twin sharing)",
      "Daily breakfast and dinner",
      "All sightseeing as per itinerary",
      "Driver allowances and fuel",
      "Parking and toll charges"
    ],
    exclusions: [
      "Lunch on all days",
      "Entry tickets to monuments",
      "Personal expenses",
      "Adventure activities (paragliding, rafting)",
      "Travel insurance",
      "GST 5%"
    ],
    packingList: [
      "Comfortable walking shoes",
      "Light woolens (even in summer)",
      "Sunscreen and sunglasses",
      "Camera and chargers",
      "Personal medications",
      "Valid ID proof"
    ]
  },
  {
    id: "amritsar-dharamshala-4day",
    title: "Amritsar - Dharamshala Spiritual Journey",
    duration: "4 Days / 3 Nights",
    groupSize: "6-20 persons",
    difficulty: "Easy to Moderate",
    schedule: [
      {
        day: 1,
        title: "Chandigarh to Amritsar",
        activities: [
          "Depart Chandigarh at 8:00 AM",
          "Drive to Amritsar (230 km, 4.5 hours)",
          "Check-in at hotel & lunch",
          "Visit Golden Temple (Harmandir Sahib)",
          "Witness evening Palki Sahib ceremony",
          "Dinner at hotel"
        ],
        meals: "Lunch, Dinner",
        accommodation: "3-star hotel near Golden Temple"
      },
      {
        day: 2,
        title: "Amritsar Local Sightseeing",
        activities: [
          "Early morning visit to Golden Temple (quieter)",
          "Breakfast at Langar (community kitchen)",
          "Visit Jallianwala Bagh memorial",
          "Partition Museum",
          "Lunch break",
          "Wagah Border ceremony (4:00 PM)",
          "Return to hotel, dinner"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Same hotel in Amritsar"
      },
      {
        day: 3,
        title: "Amritsar to Dharamshala",
        activities: [
          "Checkout after breakfast",
          "Drive to Dharamshala (200 km, 5 hours)",
          "Lunch en route",
          "Check-in at McLeod Ganj hotel",
          "Evening walk at McLeod Ganj market",
          "Visit Dalai Lama Temple complex",
          "Dinner at Tibetan restaurant"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Hotel in McLeod Ganj"
      },
      {
        day: 4,
        title: "Dharamshala & Return to Chandigarh",
        activities: [
          "Breakfast at hotel",
          "Visit Namgyal Monastery",
          "Tibetan Museum & Library",
          "Bhagsu Waterfall trek (optional, 30 min walk)",
          "Lunch at McLeod Ganj",
          "Depart for Chandigarh at 2:00 PM (240 km, 5.5 hours)",
          "Arrive Chandigarh by 8:00 PM"
        ],
        meals: "Breakfast, Lunch",
        accommodation: "N/A"
      }
    ],
    inclusions: [
      "AC transportation throughout",
      "3 nights accommodation (twin sharing)",
      "Daily breakfast and dinner",
      "All sightseeing as per itinerary",
      "Wagah Border ceremony seats",
      "Driver allowances"
    ],
    exclusions: [
      "Lunches (except Day 1)",
      "Entry fees to museums",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
      "GST 5%"
    ],
    packingList: [
      "Comfortable clothes (modest for temples)",
      "Head covering/scarf for Golden Temple",
      "Walking shoes for trekking",
      "Light jacket for evenings",
      "Camera and power bank",
      "Valid photo ID"
    ]
  },
  {
    id: "kasauli-kufri-day",
    title: "Kasauli - Kufri Day Trip",
    duration: "1 Day (12 hours)",
    groupSize: "4-30 persons",
    difficulty: "Easy (Family friendly)",
    schedule: [
      {
        day: 1,
        title: "Full Day Excursion",
        activities: [
          "Pickup from Chandigarh at 6:00 AM",
          "Drive to Kasauli (65 km, 2 hours)",
          "Visit Christ Church (colonial architecture)",
          "Walk on Mall Road Kasauli",
          "Monkey Point (highest point) - panoramic views",
          "Breakfast/brunch at local cafe",
          "Drive to Kufri (40 km, 1.5 hours)",
          "Visit Himalayan Nature Park",
          "Horse riding & yak rides (at own cost)",
          "Mahasu Peak visit (cable car optional)",
          "Lunch at Kufri",
          "Shopping at local market",
          "Depart for Chandigarh at 4:00 PM",
          "Arrive back by 6:30 PM"
        ],
        meals: "Breakfast, Lunch",
        accommodation: "N/A (Day Trip)"
      }
    ],
    inclusions: [
      "AC transportation (pick & drop)",
      "Breakfast and lunch",
      "Driver allowances",
      "Parking charges",
      "Nature park entry"
    ],
    exclusions: [
      "Horse/yak rides (₹300-500 per person)",
      "Cable car tickets (₹400)",
      "Personal shopping",
      "Evening snacks",
      "Tips",
      "GST 5%"
    ],
    packingList: [
      "Comfortable shoes",
      "Light jacket/sweater",
      "Sunglasses and cap",
      "Camera",
      "Snacks for kids",
      "Water bottle"
    ]
  }
];
