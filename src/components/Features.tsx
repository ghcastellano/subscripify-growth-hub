
import { CheckCircle2, Activity, MessageCircle, Clock, Zap, Shield } from "lucide-react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
    <div className="rounded-full bg-saas-purple/10 p-3 inline-flex mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Activity className="h-6 w-6 text-saas-purple" />,
      title: "Always Active Status",
      description: "Maintain an active status on all your messaging platforms, even when you're away from your desk."
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-saas-purple" />,
      title: "Multi-Platform Support",
      description: "Works with Slack, Microsoft Teams, Gmail Chat, Discord, and most enterprise messaging platforms."
    },
    {
      icon: <Clock className="h-6 w-6 text-saas-purple" />,
      title: "Custom Schedules",
      description: "Set your active hours and let AlwaysActive handle the rest, with automatic breaks when needed."
    },
    {
      icon: <Zap className="h-6 w-6 text-saas-purple" />,
      title: "Lightweight Client",
      description: "Our desktop app runs silently in the background with minimal CPU and memory usage."
    },
    {
      icon: <Shield className="h-6 w-6 text-saas-purple" />,
      title: "Privacy Focused",
      description: "We never access your messages or personal data - we only simulate mouse movements and keyboard activity."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-saas-purple" />,
      title: "Easy Setup",
      description: "Install in minutes with our simple setup wizard. No technical knowledge required."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected with <span className="gradient-text">AlwaysActive</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to maintain an active presence while working remotely
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#pricing" className="inline-flex items-center text-saas-purple hover:text-saas-purple-dark font-medium transition-colors">
            View pricing plans
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
