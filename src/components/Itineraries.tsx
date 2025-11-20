import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, TrendingUp, CheckCircle, XCircle, Backpack, Download } from "lucide-react";
import { ITINERARIES } from "@/data/siteConfig";
import { useState } from "react";
import { Input } from "@/components/ui/input";

/**
 * Itineraries Section
 * Detailed day-by-day schedules for each tour package
 * Features: Search, accordion view, downloadable itinerary
 */
export const Itineraries = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItineraries = ITINERARIES.filter((itinerary) =>
    itinerary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    itinerary.schedule.some((day) =>
      day.activities.some((activity) =>
        activity.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  );

  const handleDownloadItinerary = (itinerary: typeof ITINERARIES[0]) => {
    // Open printable view in new window
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${itinerary.title} - Itinerary</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; }
          h1 { color: #1a73e8; border-bottom: 3px solid #1a73e8; padding-bottom: 10px; }
          h2 { color: #333; margin-top: 20px; }
          .info { background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0; }
          .day { margin: 20px 0; border-left: 4px solid #1a73e8; padding-left: 15px; }
          ul { line-height: 1.8; }
          @media print { body { margin: 20px; } }
        </style>
      </head>
      <body>
        <h1>${itinerary.title}</h1>
        <div class="info">
          <p><strong>Duration:</strong> ${itinerary.duration}</p>
          <p><strong>Group Size:</strong> ${itinerary.groupSize}</p>
          <p><strong>Difficulty:</strong> ${itinerary.difficulty}</p>
        </div>
        <h2>Day-by-Day Schedule</h2>
        ${itinerary.schedule.map((day) => `
          <div class="day">
            <h3>Day ${day.day}: ${day.title}</h3>
            <ul>${day.activities.map((activity) => `<li>${activity}</li>`).join("")}</ul>
            <p><em>Meals: ${day.meals} | Accommodation: ${day.accommodation}</em></p>
          </div>
        `).join("")}
        <h2>Inclusions</h2>
        <ul>${itinerary.inclusions.map((item) => `<li>${item}</li>`).join("")}</ul>
        <h2>Exclusions</h2>
        <ul>${itinerary.exclusions.map((item) => `<li>${item}</li>`).join("")}</ul>
        <h2>Packing List</h2>
        <ul>${itinerary.packingList.map((item) => `<li>${item}</li>`).join("")}</ul>
        <script>window.print();</script>
      </body>
      </html>
    `;
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <section id="itineraries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Detailed Itineraries</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive day-by-day travel plans
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <Input
            placeholder="Search itineraries by destination or activity..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Itineraries */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {filteredItineraries.map((itinerary, index) => (
            <Card
              key={itinerary.id}
              className="overflow-hidden animate-fade-in shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="bg-gradient-hero text-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <CardTitle className="text-3xl">{itinerary.title}</CardTitle>
                  <Button
                    onClick={() => handleDownloadItinerary(itinerary)}
                    variant="secondary"
                    size="sm"
                    className="gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {itinerary.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {itinerary.groupSize}
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    {itinerary.difficulty}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* Day-by-Day Schedule */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4">Day-by-Day Schedule</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {itinerary.schedule.map((day) => (
                      <AccordionItem key={day.day} value={`day-${day.day}`}>
                        <AccordionTrigger className="text-left">
                          <span className="font-semibold">
                            Day {day.day}: {day.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 ml-4">
                            {day.activities.map((activity, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 p-3 bg-muted rounded-lg">
                            <p className="text-sm">
                              <strong>Meals:</strong> {day.meals}
                            </p>
                            <p className="text-sm">
                              <strong>Accommodation:</strong> {day.accommodation}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      Inclusions
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {itinerary.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-destructive" />
                      Exclusions
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {itinerary.exclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-destructive">✗</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Packing List */}
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Backpack className="w-5 h-5 text-primary" />
                    Recommended Packing List
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {itinerary.packingList.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItineraries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No itineraries found matching your search</p>
          </div>
        )}
      </div>
    </section>
  );
};
