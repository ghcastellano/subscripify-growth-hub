import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

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
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
