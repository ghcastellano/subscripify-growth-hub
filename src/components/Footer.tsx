import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="text-2xl font-bold gradient-text">Always Available</Link>
            <p className="mt-4 text-gray-600 max-w-xs">Everything you need to maintain an available presence while working remotely</p>
            
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-saas-purple transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-saas-purple transition-colors">Pricing</a></li>
              
              
            </ul>
          </div>
          
          
          
          
        </div>
        
        
      </div>
    </footer>;
};
export default Footer;