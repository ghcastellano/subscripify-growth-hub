import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { PlayCircle, PauseCircle, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StayActive = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeTime, setActiveTime] = useState(0);
  const [wakeLock, setWakeLock] = useState<any>(null);

  // Request wake lock to keep screen on
  const requestWakeLock = async () => {
    try {
      if ('wakeLock' in navigator) {
        const lock = await (navigator as any).wakeLock.request('screen');
        setWakeLock(lock);
        
        lock.addEventListener('release', () => {
          setIsActive(false);
          setWakeLock(null);
        });
        
        return true;
      } else {
        console.warn('Wake Lock API not supported in this browser');
        return false;
      }
    } catch (err) {
      console.error(`Failed to get wake lock: ${err}`);
      return false;
    }
  };

  // Release wake lock
  const releaseWakeLock = () => {
    if (wakeLock) {
      wakeLock.release();
      setWakeLock(null);
    }
  };
  
  // Toggle active state
  const toggleActive = async () => {
    if (!isActive) {
      const success = await requestWakeLock();
      if (success) {
        setIsActive(true);
        setActiveTime(0);
      }
    } else {
      releaseWakeLock();
      setIsActive(false);
    }
  };
  
  // Update the timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isActive) {
      interval = setInterval(() => {
        setActiveTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);
  
  // Format time as HH:MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      secs.toString().padStart(2, '0')
    ].join(':');
  };

  // Simulate activity by moving cursor
  useEffect(() => {
    let activityInterval: ReturnType<typeof setInterval>;
    
    if (isActive) {
      // Create activity simulation
      activityInterval = setInterval(() => {
        // Simulate mouse movement
        const event = new MouseEvent('mousemove', {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        document.dispatchEvent(event);
      }, 30000); // Every 30 seconds
    }
    
    return () => {
      if (activityInterval) clearInterval(activityInterval);
    };
  }, [isActive]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-r from-saas-purple/10 to-saas-blue/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Link to="/" className="inline-flex items-center text-saas-purple hover:text-saas-purple-dark mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Stay <span className="gradient-text">Active</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10">
                Keep your status active on Teams, Slack, Gmail, and other enterprise messaging apps
              </p>
              
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-12">
                <div className="flex flex-col items-center">
                  <div className={`text-6xl font-bold mb-8 ${isActive ? 'text-green-500' : 'text-gray-400'}`}>
                    {formatTime(activeTime)}
                  </div>
                  
                  <Button 
                    onClick={toggleActive}
                    size="lg"
                    className={`text-lg py-6 px-10 ${isActive ? 'bg-red-500 hover:bg-red-600' : 'btn-gradient'}`}
                  >
                    {isActive ? (
                      <>
                        <PauseCircle className="mr-2 h-6 w-6" />
                        Stop Active Status
                      </>
                    ) : (
                      <>
                        <PlayCircle className="mr-2 h-6 w-6" />
                        Start Active Status
                      </>
                    )}
                  </Button>
                  
                  {isActive && (
                    <p className="text-green-500 font-medium mt-4">
                      Your status is active! Keep this tab open.
                    </p>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 text-left">
                <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li className="pl-2">
                    <span className="font-medium">Click "Start Active Status"</span>
                    <p className="mt-1 text-gray-600 pl-6">This will keep your screen on and simulate activity to maintain your online status.</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Keep this browser tab open</span>
                    <p className="mt-1 text-gray-600 pl-6">The tab must remain open, but you can minimize your browser and use other applications.</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Your status stays active</span>
                    <p className="mt-1 text-gray-600 pl-6">Teams, Slack, Gmail Chat, and other platforms will show you as active as long as this tab is running.</p>
                  </li>
                </ol>
                
                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-md">
                  <h4 className="font-medium text-amber-800 mb-2">Important Notes:</h4>
                  <ul className="list-disc list-inside space-y-2 text-amber-700">
                    <li>This works best in Chrome, Edge, or Safari browsers</li>
                    <li>Keep your device plugged in as this will prevent sleep mode</li>
                    <li>Some company policies may override this functionality</li>
                    <li>For mobile devices, keep the browser tab in the foreground</li>
                  </ul>
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

export default StayActive;
