import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
const testimonials = [{
  name: "Sarah Johnson",
  position: "CEO at TechStartup",
  comment: "SubscribePro completely transformed how we manage our subscription business. We've seen a 30% increase in customer retention since switching.",
  avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  rating: 5
}, {
  name: "Mark Williams",
  position: "Founder at SaaSCompany",
  comment: "The analytics and insights have been game-changing for our business. We can now make data-driven decisions that directly impact our bottom line.",
  avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  rating: 5
}, {
  name: "Jennifer Lee",
  position: "Product Manager at ScaleUp",
  comment: "The customer support is exceptional. Whenever we've had questions or needed assistance, the team has been responsive and incredibly helpful.",
  avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  rating: 4
}];
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextTestimonial = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  return;
};
export default Testimonials;