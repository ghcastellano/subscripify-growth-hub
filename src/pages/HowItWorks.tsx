
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Activity, Clock, Shield, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
                How <span className="gradient-text">AlwaysActive</span> Works
              </h1>
              
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-12">
                <p className="text-xl text-gray-700 mb-8 text-center">
                  Our simple web-based solution keeps you active on all your enterprise messaging platforms
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="bg-saas-purple/10 rounded-full p-6 inline-flex mb-4">
                      <Monitor className="h-12 w-12 text-saas-purple" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Simple Browser Tab</h3>
                    <p className="text-gray-600">
                      Just keep our tab open in your browser to maintain your active status
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-saas-purple/10 rounded-full p-6 inline-flex mb-4">
                      <Clock className="h-12 w-12 text-saas-purple" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Run in Background</h3>
                    <p className="text-gray-600">
                      Minimize the browser and continue with your day while staying active
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-saas-purple/10 rounded-full p-6 inline-flex mb-4">
                      <Shield className="h-12 w-12 text-saas-purple" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Privacy Focused</h3>
                    <p className="text-gray-600">
                      We never access your messages or data - we only simulate activity
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-12">
                <h2 className="text-2xl font-bold mb-6">How It Keeps You Active</h2>
                
                <ol className="list-decimal list-inside space-y-6 pl-4">
                  <li className="text-lg">
                    <span className="font-medium">Open the AlwaysActive tab</span>
                    <p className="mt-2 text-gray-600">
                      Simply open our Stay Active page in your web browser. It works on Chrome, Firefox, Edge, and Safari.
                    </p>
                  </li>
                  
                  <li className="text-lg">
                    <span className="font-medium">Click "Start Active Status"</span>
                    <p className="mt-2 text-gray-600">
                      Press the button to start keeping your status active. This will prevent sleep mode and simulate activity.
                    </p>
                  </li>
                  
                  <li className="text-lg">
                    <span className="font-medium">Keep the tab open</span>
                    <p className="mt-2 text-gray-600">
                      The tab must remain open, but you can minimize your browser and continue with your work.
                    </p>
                  </li>
                  
                  <li className="text-lg">
                    <span className="font-medium">Enjoy flexibility</span>
                    <p className="mt-2 text-gray-600">
                      Step away from your desk while maintaining an active presence on all messaging platforms.
                    </p>
                  </li>
                </ol>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Compatible Platforms</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-medium">Microsoft Teams</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-medium">Slack</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-medium">Gmail Chat</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-medium">Discord</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-medium">Zoom Chat</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-medium">And more...</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/stay-active">
                    <Button className="btn-gradient text-lg py-6 px-8">
                      Start Staying Active Now
                      <Activity className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
