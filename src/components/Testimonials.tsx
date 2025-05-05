
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO at TechStartup",
    comment: "SubscribePro completely transformed how we manage our subscription business. We've seen a 30% increase in customer retention since switching.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    name: "Mark Williams",
    position: "Founder at SaaSCompany",
    comment: "The analytics and insights have been game-changing for our business. We can now make data-driven decisions that directly impact our bottom line.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5
  },
  {
    name: "Jennifer Lee",
    position: "Product Manager at ScaleUp",
    comment: "The customer support is exceptional. Whenever we've had questions or needed assistance, the team has been responsive and incredibly helpful.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Growing Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -left-8 -top-8">
            <Quote className="h-16 w-16 text-saas-purple/10" />
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <div className="mb-8">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 italic">
                "{testimonials[activeIndex].comment}"
              </p>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-600 text-sm">{testimonials[activeIndex].position}</p>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-saas-purple/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-saas-purple/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full mx-1 transition-all ${index === activeIndex ? 'bg-saas-purple w-6' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {['Adobe', 'Shopify', 'Slack', 'Spotify', 'Airbnb'].map((company, index) => (
            <div key={index} className="text-gray-400 font-bold text-xl">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
