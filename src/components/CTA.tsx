
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-saas-purple to-saas-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Never Show as "Away" Again?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of remote workers using AlwaysActive to maintain their online presence while enjoying flexibility.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-saas-purple hover:bg-gray-100 hover:text-saas-purple-dark text-lg py-6 px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/download">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                Download Desktop App
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            No credit card required. 7-day free trial. Compatible with Windows, macOS, and Linux.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
