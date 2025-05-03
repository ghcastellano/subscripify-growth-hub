
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Windows, Apple, Terminal } from "lucide-react";

const Download = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-saas-purple/10 to-saas-blue/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Download <span className="gradient-text">AlwaysActive</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Get our lightweight desktop application and stay active on all your messaging platforms
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <Windows className="w-16 h-16 text-saas-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Windows</h3>
                  <p className="text-gray-600 mb-4">Compatible with Windows 10 and 11</p>
                  <Button className="w-full btn-gradient">
                    <Download className="mr-2 h-4 w-4" />
                    Download for Windows
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <Apple className="w-16 h-16 text-saas-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">macOS</h3>
                  <p className="text-gray-600 mb-4">Compatible with macOS 10.14 and newer</p>
                  <Button className="w-full btn-gradient">
                    <Download className="mr-2 h-4 w-4" />
                    Download for macOS
                  </Button>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    <Terminal className="w-16 h-16 text-saas-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Linux</h3>
                  <p className="text-gray-600 mb-4">Compatible with major distributions</p>
                  <Button className="w-full btn-gradient">
                    <Download className="mr-2 h-4 w-4" />
                    Download for Linux
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Installation Instructions</h3>
                <div className="text-left space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Windows</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      <li>Download the Windows installer (.exe)</li>
                      <li>Run the installer and follow the on-screen instructions</li>
                      <li>Launch AlwaysActive from your Start menu</li>
                      <li>Log in with your subscription credentials</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-2">macOS</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      <li>Download the macOS disk image (.dmg)</li>
                      <li>Open the disk image and drag AlwaysActive to your Applications folder</li>
                      <li>Launch AlwaysActive from your Applications folder</li>
                      <li>Log in with your subscription credentials</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Linux</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      <li>Download the appropriate package for your distribution (.deb, .rpm, or .AppImage)</li>
                      <li>Install using your distribution's package manager or by making the AppImage executable</li>
                      <li>Launch AlwaysActive from your applications menu</li>
                      <li>Log in with your subscription credentials</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="text-gray-600 mb-4">Need help with installation?</p>
                <a href="#" className="text-saas-purple hover:text-saas-purple-dark font-medium inline-flex items-center">
                  Contact our support team for assistance
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Download;
