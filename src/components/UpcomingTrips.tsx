import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, IndianRupee, Users, MapPin } from "lucide-react";
import { FUTURE_TRIPS } from "@/data/siteConfig";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface UpcomingTripsProps {
  onBookNow: (tripId: string, tripTitle: string) => void;
}

/**
 * Upcoming Trips Section
 * Displays available tour packages with filtering and sorting
 */
export const UpcomingTrips = ({ onBookNow }: UpcomingTripsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  // Filter trips by search term
  const filteredTrips = FUTURE_TRIPS.filter((trip) =>
    trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort trips
  const sortedTrips = [...filteredTrips].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    } else if (sortBy === "price-low") {
      return a.pricePerPerson - b.pricePerPerson;
    } else if (sortBy === "price-high") {
      return b.pricePerPerson - a.pricePerPerson;
    }
    return 0;
  });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section id="upcoming-trips" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Tours</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your next adventure with exclusive packages
          </p>
        </div>

        {/* Filter and Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <Input
            placeholder="Search trips..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Sort by Date</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTrips.map((trip, index) => (
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
                {trip.seatsLeft <= 5 && (
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    Only {trip.seatsLeft} seats left!
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{trip.title}</h3>
                <p className="text-muted-foreground mb-4">{trip.shortDesc}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>
                      {formatDate(trip.startDate)}
                      {trip.startDate !== trip.endDate && ` - ${formatDate(trip.endDate)}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <IndianRupee className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-lg">
                      ₹{trip.pricePerPerson.toLocaleString("en-IN")} per person
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{trip.seatsLeft} seats available</span>
                  </div>
                </div>

                <Button
                  onClick={() => onBookNow(trip.id, trip.title)}
                  className="w-full bg-gradient-hero hover:opacity-90"
                  size="lg"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedTrips.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">No trips found matching your search</p>
          </div>
        )}
      </div>
    </section>
  );
};
