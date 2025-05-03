import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const plans = [{
    name: "Starter",
    monthlyPrice: 2,
    annualPrice: 20,
    description: "Perfect for small businesses just getting started",
    features: ["Up to 500 subscribers", "Basic analytics", "Email support", "1 team member", "Standard reports"],
    buttonText: "Start Free Trial",
    popular: false
  }, {
    name: "Remote Worker Always Active",
    monthlyPrice: 3,
    annualPrice: 2,
    description: "For remote workers that want to stay ALWAYS ACTIVE",
    features: ["Keep your status Always Active on Slack, Teams, Gmail Chat, and other platforms"],
    buttonText: "Start Now",
    popular: true
  }, {
    name: "Enterprise",
    monthlyPrice: 199,
    annualPrice: 149,
    description: "For large organizations with complex needs",
    features: ["Unlimited subscribers", "Premium analytics", "24/7 phone & email support", "Unlimited team members", "Custom reports & dashboards", "Advanced API access", "Dedicated account manager", "Custom integrations", "SSO authentication"],
    buttonText: "Contact Sales",
    popular: false
  }];
  return <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that works best for your needs
          </p>
          
          <div className="inline-flex items-center bg-gray-100 p-1 rounded-lg">
            <button onClick={() => setIsAnnual(true)} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${isAnnual ? 'bg-white shadow-sm text-saas-purple' : 'text-gray-500'}`}>
              Annual (Save 20%)
            </button>
            <button onClick={() => setIsAnnual(false)} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${!isAnnual ? 'bg-white shadow-sm text-saas-purple' : 'text-gray-500'}`}>
              Monthly
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => <div key={index} className="">
              {plan.popular && <div className="bg-gradient-to-r from-saas-purple to-saas-blue text-white text-center text-sm font-medium py-1">
                  Most Popular
                </div>}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-600">/month</span>
                  {isAnnual && <span className="block text-sm text-green-600 mt-1">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </span>}
                </div>
                
                <Button className={plan.popular ? "btn-gradient w-full" : "bg-gray-800 hover:bg-gray-700 text-white w-full"}>
                  {plan.buttonText}
                </Button>
                
                <div className="mt-6 space-y-4">
                  {plan.features.map((feature, i) => <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-saas-purple shrink-0 mr-3" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>)}
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="mt-16 text-center">
          
          <a href="#faq" className="text-saas-purple hover:text-saas-purple-dark font-medium">
            Have questions? Check our FAQ
          </a>
        </div>
      </div>
    </section>;
};
export default Pricing;