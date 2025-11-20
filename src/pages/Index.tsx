import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CompletedTrips } from "@/components/CompletedTrips";
import { UpcomingTrips } from "@/components/UpcomingTrips";
import { Itineraries } from "@/components/Itineraries";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { EnquiryModal } from "@/components/EnquiryModal";

/**
 * Main Index Page
 * Travel Buddies - Chandigarh Tricity Trips & Touring Agency
 * 
 * This is the main landing page that orchestrates all sections
 */
const Index = () => {
  const [bookingModal, setBookingModal] = useState<{
    isOpen: boolean;
    tripId: string;
    tripName: string;
  }>({
    isOpen: false,
    tripId: "",
    tripName: "",
  });
  
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const handleBookNow = (tripId: string, tripName: string) => {
    setBookingModal({ isOpen: true, tripId, tripName });
  };

  const handleCloseBookingModal = () => {
    setBookingModal({ isOpen: false, tripId: "", tripName: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Header - Fixed navigation */}
      <Header onEnquiryClick={() => setIsEnquiryModalOpen(true)} />

      {/* Hero Section */}
      <Hero onEnquiryClick={() => setIsEnquiryModalOpen(true)} />

      {/* Main Content */}
      <main>
        {/* Completed Trips Section */}
        <CompletedTrips />

        {/* Upcoming Trips Section */}
        <UpcomingTrips onBookNow={handleBookNow} />

        {/* Itineraries Section */}
        <Itineraries />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={handleCloseBookingModal}
        tripId={bookingModal.tripId}
        tripName={bookingModal.tripName}
      />
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
};

export default Index;
