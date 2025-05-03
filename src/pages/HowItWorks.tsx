
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How <span className="gradient-text">AlwaysActive</span> Works
              </h1>
              <p className="text-xl text-gray-600">
                A simple solution to stay active on all your messaging platforms
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="bg-gradient-to-r from-saas-purple to-saas-blue text-white rounded-lg font-bold text-2xl flex justify-center items-center w-12 h-12 mb-4">
                      1
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Download & Install</h3>
                    <p className="text-gray-600 mb-4">
                      Download our lightweight desktop application for your operating system. The installation process takes less than a minute, and the app requires minimal system resources.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Available for Windows, macOS, and Linux</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Small footprint (less than 20MB)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>No admin rights required</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="bg-gray-100 p-6 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Download className="h-16 w-16 text-saas-purple mx-auto mb-4" />
                        <p className="text-gray-600">Download screen illustration</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="bg-gradient-to-r from-saas-purple to-saas-blue text-white rounded-lg font-bold text-2xl flex justify-center items-center w-12 h-12 mb-4">
                      2
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Connect Your Account</h3>
                    <p className="text-gray-600 mb-4">
                      Sign in with your AlwaysActive subscription credentials. Our app doesn't require access to your messaging accounts - it works independently of them.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Secure authentication</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>No access to your other accounts required</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Use on up to 3 devices with a single subscription</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="bg-gray-100 p-6 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-48 h-48 rounded-lg bg-white shadow-md p-4 mx-auto">
                          <div className="w-full h-8 bg-saas-purple/20 rounded mb-4"></div>
                          <div className="w-full h-8 bg-saas-purple/20 rounded mb-6"></div>
                          <div className="w-32 h-8 bg-saas-purple rounded mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="bg-gradient-to-r from-saas-purple to-saas-blue text-white rounded-lg font-bold text-2xl flex justify-center items-center w-12 h-12 mb-4">
                      3
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Configure Your Settings</h3>
                    <p className="text-gray-600 mb-4">
                      Set your active hours, break schedule, and activity patterns. AlwaysActive is highly customizable to suit your work style.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Set custom active hours</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Configure activity patterns and intensity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Schedule automatic breaks</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="bg-gray-100 p-6 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-48 h-48 rounded-lg bg-white shadow-md p-4 mx-auto">
                          <div className="w-full h-4 bg-saas-purple/20 rounded mb-3"></div>
                          <div className="w-full h-4 bg-saas-purple/20 rounded mb-3"></div>
                          <div className="w-full h-4 bg-saas-purple/20 rounded mb-3"></div>
                          <div className="w-full h-4 bg-saas-purple/20 rounded mb-3"></div>
                          <div className="w-full h-4 bg-saas-purple/20 rounded mb-3"></div>
                          <div className="w-32 h-8 bg-saas-purple rounded mx-auto mt-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="bg-gradient-to-r from-saas-purple to-saas-blue text-white rounded-lg font-bold text-2xl flex justify-center items-center w-12 h-12 mb-4">
                      4
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Stay Always Active</h3>
                    <p className="text-gray-600 mb-4">
                      Let AlwaysActive run in the background while you work. The app will silently maintain your active status across all platforms, giving you the freedom to step away when needed.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Runs silently in the system tray</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Minimal resource usage</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Real-time status monitoring</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="bg-gray-100 p-6 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="h-8 w-8 text-white" />
                        </div>
                        <p className="text-xl font-bold text-green-600">Always Active!</p>
                        <p className="text-gray-600 mt-2">Your status is now maintained automatically</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-16">
                <Button className="btn-gradient text-lg py-6 px-8">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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
