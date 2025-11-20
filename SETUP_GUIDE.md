# Travel Buddies - Setup & Customization Guide

Welcome! This guide will help you customize your Travel Buddies website. No technical knowledge required!

## 📋 Quick Start - What to Edit

All the content you need to edit is in **ONE FILE**: `src/data/siteConfig.ts`

This file contains:
- Agency name and contact details
- Social media links
- Trip information (completed & upcoming)
- Detailed itineraries
- Everything else you need to customize

## 🎯 Step-by-Step Customization

### 1. Update Your Contact Information

Open `src/data/siteConfig.ts` and find the "AGENCY INFORMATION" section:

```typescript
AGENCY_NAME: "Travel Buddies",           // Change to your agency name
AGENCY_EMAIL: "bookings@travelbuddies.com",  // ⚠️ CHANGE THIS to your real email
AGENCY_PHONE: "+91 98765 43210",         // ⚠️ CHANGE THIS to your phone
```

### 2. Update Social Media Links

Find the "SOCIAL MEDIA LINKS" section:

```typescript
SOCIAL_LINKS: {
  facebook: "https://facebook.com/travelbuddies",  // ⚠️ CHANGE THIS
  instagram: "https://instagram.com/travelbuddies", // ⚠️ CHANGE THIS
  twitter: "https://twitter.com/travelbuddies",    // ⚠️ CHANGE THIS
  youtube: "https://youtube.com/@travelbuddies",   // ⚠️ CHANGE THIS
}
```

### 3. Replace Images

**Option A: Use your own images**
1. Place your images in the `src/assets/` folder
2. Update the image paths in `siteConfig.ts`

```typescript
coverImage: "/src/assets/your-image-name.jpg"
```

**Option B: Generate new images**
- Ask the AI to generate new images for specific destinations
- Images will be automatically saved to `src/assets/`

**Recommended Image Sizes:**
- Hero image: 1920x1080px (landscape)
- Trip cover images: 1600x900px (landscape)
- Gallery images: 800x600px
- Formats: JPG, PNG, WebP

### 4. Add Your Own Trips

#### Completed Trips
Find `COMPLETED_TRIPS` array and add your trips:

```typescript
{
  id: "unique-trip-id",                    // Make this unique
  title: "Your Trip Name",
  shortDesc: "Brief description",
  dateCompleted: "Month Year",
  coverImage: "/src/assets/your-image.jpg",
  gallery: [                              // Array of images
    "/src/assets/gallery1.jpg",
    "/src/assets/gallery2.jpg",
  ],
  testimonial: "Customer review here"
}
```

#### Upcoming Trips
Find `FUTURE_TRIPS` array:

```typescript
{
  id: "unique-trip-id",
  title: "Trip Name",
  shortDesc: "Description",
  startDate: "2024-06-15",               // Format: YYYY-MM-DD
  endDate: "2024-06-17",                 // Format: YYYY-MM-DD
  pricePerPerson: 12999,                 // Price in INR
  seatsLeft: 8,                          // Available seats
  coverImage: "/src/assets/image.jpg",
  itineraryId: "matching-itinerary-id",  // Must match an itinerary
}
```

### 5. Customize Itineraries

Find `ITINERARIES` array and add detailed day-by-day plans:

```typescript
{
  id: "unique-itinerary-id",             // Must match trip's itineraryId
  title: "Itinerary Name",
  duration: "3 Days / 2 Nights",
  groupSize: "4-15 persons",
  difficulty: "Easy",
  schedule: [
    {
      day: 1,
      title: "Day 1 Title",
      activities: [
        "Activity 1",
        "Activity 2",
        // Add more activities
      ],
      meals: "Breakfast, Lunch, Dinner",
      accommodation: "Hotel name/type"
    },
    // Add more days
  ],
  inclusions: ["Item 1", "Item 2"],      // What's included
  exclusions: ["Item 1", "Item 2"],      // What's not included
  packingList: ["Item 1", "Item 2"]      // What to bring
}
```

## 🎨 Customize Colors & Branding

In `siteConfig.ts`, find BRAND_COLORS section:

```typescript
BRAND_COLORS: {
  primary: "204 80% 48%",    // Sky blue - change HSL values
  secondary: "28 90% 55%",   // Sunset orange
  accent: "145 65% 45%",     // Mountain green
}
```

**HSL Color Format:**
- First number: Hue (0-360)
- Second number: Saturation (0-100%)
- Third number: Lightness (0-100%)

**Example:** To change primary to red: `0 80% 50%`

## 📧 How Booking Works

When customers submit a booking:

1. **Immediate**: Opens their email client with pre-filled details
2. **Automatic**: Tries to send via backend API (if you set one up later)
3. **Email sent to**: The AGENCY_EMAIL you specified

**Important:** Make sure AGENCY_EMAIL is correct!

## 🚀 Making the Site Live

### Option 1: Using Lovable (Easiest)
1. Click "Share" → "Publish" in Lovable
2. Your site goes live instantly
3. Get a free lovable.app subdomain
4. Can connect your own domain later

### Option 2: GitHub Pages (Free)
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select main branch
4. Your site will be at: `yourusername.github.io/repo-name`

### Option 3: Netlify (Free)
1. Create account at netlify.com
2. Connect your GitHub repository
3. Click "Deploy"
4. Get a free netlify.app subdomain

## 🔧 Advanced: Adding Backend

To enable server-side booking (not required, but nice to have):

1. Create a backend API endpoint at `/api/send-booking`
2. It should accept POST requests with booking data
3. The site will automatically try to use it
4. If it fails, falls back to mailto

Example backend endpoint structure:
```
POST /api/send-booking
Content-Type: application/json

{
  "tripId": "...",
  "tripName": "...",
  "fullName": "...",
  "email": "...",
  "phone": "...",
  "travelers": "...",
  "preferredDate": "...",
  "message": "..."
}
```

## 📱 Features Your Site Has

✅ **Responsive Design** - Works on mobile, tablet, desktop
✅ **Smooth Animations** - Professional fade-ins and transitions
✅ **Search & Filter** - Customers can search trips and itineraries
✅ **Photo Gallery** - Lightbox viewer for trip photos
✅ **Booking System** - Email-based booking forms
✅ **SEO Optimized** - Good for Google search rankings
✅ **Fast Loading** - Optimized images and code

## 🆘 Need Help?

**Common Issues:**

1. **Images not showing?**
   - Check file path is correct
   - Make sure image is in `src/assets/` folder
   - Verify filename matches exactly (case-sensitive)

2. **Booking emails not working?**
   - Check AGENCY_EMAIL is correct
   - Make sure it's a valid email format
   - Test with your own email first

3. **Colors look wrong?**
   - HSL format must have 3 numbers with spaces
   - Example: `"204 80% 48%"` not `"204, 80%, 48%"`

## 📝 Checklist Before Going Live

- [ ] Changed AGENCY_EMAIL to your real email
- [ ] Changed AGENCY_PHONE to your real phone
- [ ] Updated all social media links
- [ ] Replaced sample images with your own
- [ ] Added your actual trip data
- [ ] Created detailed itineraries
- [ ] Tested booking form with your email
- [ ] Checked site on mobile phone
- [ ] Read through all text content
- [ ] Customized colors to match your brand

---

**Built with React, TypeScript, and Tailwind CSS**
**Powered by Lovable - The AI-powered web development platform**

For more features or help, ask the AI assistant!
