
import { CheckCircle2, BarChart3, RefreshCw, CreditCard, Users, ShieldCheck } from "lucide-react";

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
      icon: <CreditCard className="h-6 w-6 text-saas-purple" />,
      title: "Smart Billing Tools",
      description: "Automate recurring billing with customizable subscription plans and flexible payment options."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-saas-purple" />,
      title: "Revenue Analytics",
      description: "Get actionable insights on your recurring revenue with detailed analytics and reporting."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-saas-purple" />,
      title: "Reduce Churn",
      description: "Smart retention features that help identify at-risk customers and reduce subscription cancellations."
    },
    {
      icon: <Users className="h-6 w-6 text-saas-purple" />,
      title: "Customer Management",
      description: "Manage all your subscribers in one place with detailed profiles and subscription history."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-saas-purple" />,
      title: "Secure Payments",
      description: "PCI-compliant payment processing with advanced fraud protection for your peace of mind."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-saas-purple" />,
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing systems through our developer-friendly API."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="gradient-text">Subscription Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to launch, manage, and scale your subscription business
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
