import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Quote } from "lucide-react";
import { COMPLETED_TRIPS } from "@/data/siteConfig";
import { useState } from "react";
import { ImageGallery } from "./ImageGallery";

/**
 * Completed Trips Section
 * Displays past successful trips with testimonials and photo galleries
 */
export const CompletedTrips = () => {
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);

  return (
    <section id="completed-trips" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Successful Journeys</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the happy travelers who've explored the mountains with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPLETED_TRIPS.map((trip, index) => (
            <Card
              key={trip.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={trip.coverImage}
                  alt={trip.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Completed
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {trip.dateCompleted}
                </div>
                <h3 className="text-2xl font-bold mb-3">{trip.title}</h3>
                <p className="text-muted-foreground mb-4">{trip.shortDesc}</p>
                
                {/* Testimonial */}
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <Quote className="w-5 h-5 text-primary mb-2" />
                  <p className="text-sm italic">{trip.testimonial}</p>
                </div>

                <Button
                  onClick={() => setSelectedGallery(trip.gallery)}
                  variant="outline"
                  className="w-full"
                >
                  View Gallery
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedGallery && (
        <ImageGallery
          images={selectedGallery}
          onClose={() => setSelectedGallery(null)}
        />
      )}
    </section>
  );
};
