import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { toast } from "sonner";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tripId: string;
  tripName: string;
}

/**
 * Booking Modal Component
 * Form for booking a specific trip
 * Sends booking request via mailto and optionally POSTs to backend
 */
export const BookingModal = ({ isOpen, onClose, tripId, tripName }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: "1",
    preferredDate: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      toast.error("Please enter a valid 10-digit Indian phone number");
      setIsSubmitting(false);
      return;
    }

    // Prepare email content
    const subject = `Booking Request: ${tripName}`;
    const body = `
Booking Request Details
-----------------------
Trip: ${tripName}
Trip ID: ${tripId}

Customer Information:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Number of Travelers: ${formData.travelers}
Preferred Start Date: ${formData.preferredDate || "Flexible"}

Message:
${formData.message || "No additional message"}

---
This booking request was submitted via ${SITE_CONFIG.AGENCY_NAME} website.
    `.trim();

    // Try to POST to backend (if available)
    try {
      const response = await fetch("/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tripId,
          tripName,
          ...formData,
        }),
      });
      
      if (response.ok) {
        toast.success("Booking request sent successfully!");
        setIsSubmitting(false);
        onClose();
        return;
      }
    } catch (error) {
      // Backend not available, fallback to mailto
      console.log("Backend not available, using mailto fallback");
    }

    // Fallback: mailto link
    const mailtoLink = `mailto:${SITE_CONFIG.AGENCY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    toast.success("Opening your email client...");
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Trip</DialogTitle>
          <p className="text-sm text-muted-foreground">{tripName}</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="98765 43210"
              required
            />
          </div>

          <div>
            <Label htmlFor="travelers">Number of Travelers *</Label>
            <Input
              id="travelers"
              type="number"
              min="1"
              max="20"
              value={formData.travelers}
              onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="preferredDate">Preferred Start Date (Optional)</Label>
            <Input
              id="preferredDate"
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Any special requirements or questions..."
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Sending..." : "Submit Booking"}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Your booking request will be sent to our team. We'll contact you within 24 hours.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
