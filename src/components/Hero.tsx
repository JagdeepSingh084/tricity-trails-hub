import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/data/siteConfig";
import heroImage from "@/assets/hero-image.jpg";

interface HeroProps {
  onEnquiryClick: () => void;
}

/**
 * Hero Section
 * Full-screen hero with background image, tagline, and call-to-action
 */
export const Hero = ({ onEnquiryClick }: HeroProps) => {
  const scrollToTrips = () => {
    const element = document.getElementById("upcoming-trips");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          {SITE_CONFIG.AGENCY_TAGLINE}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
          Create memories that last a lifetime on expertly curated adventures
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToTrips}
            className="bg-primary hover:bg-primary-light text-white text-lg px-8 py-6"
          >
            View Tours
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onEnquiryClick}
            className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-white/10 backdrop-blur-sm"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
