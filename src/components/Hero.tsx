
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
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
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <img src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="ml-4 text-sm text-gray-600">
                  <span className="font-semibold">2,500+</span> remote workers trust us
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-saas-purple to-saas-purple-dark p-6 text-white">
                  <h3 className="text-2xl font-bold">AlwaysActive Dashboard</h3>
                  <p>Monitor your active status across platforms</p>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-semibold text-lg">Active Time Today</h4>
                    <span className="text-green-500 font-bold">8h 12m</span>
                  </div>
                  <div className="h-24 bg-gray-100 rounded-lg mb-6 flex items-end p-2">
                    {[65, 75, 90, 85, 95, 80, 70].map((height, i) => (
                      <div
                        key={i}
                        className="w-1/7 h-full flex items-end mx-1"
                      >
                        <div 
                          className="w-full bg-gradient-to-t from-saas-purple to-saas-purple-light rounded-sm"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm">Platforms Active</p>
                      <p className="text-xl font-bold">4</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-500 text-sm">Active Since</p>
                      <p className="text-xl font-bold">8:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-saas-purple-light/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-saas-blue/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
