import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section className="pt-32 pb-20 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="animate-fade-up" style={{
            animationDelay: '0.1s'
          }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stay <span className="gradient-text">Always Active</span> In Your Remote Workspace
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:pr-12">
                Keep your status active on Slack, Teams, Gmail Chat, and other platforms. Never appear idle, even when you step away from your desk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-gradient text-lg py-6 px-8">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-saas-purple text-saas-purple hover:bg-saas-purple hover:text-white text-lg py-6 px-8">
                  How It Works
                </Button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <img src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`} alt="User" className="w-full h-full object-cover" />
                    </div>)}
                </div>
                <p className="ml-4 text-sm text-gray-600">
                  <span className="font-semibold">2,500+</span> remote workers trust us
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                
                
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-saas-purple-light/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-saas-blue/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;