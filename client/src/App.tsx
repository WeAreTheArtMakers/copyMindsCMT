import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Home from "@/pages/home";
import Traders from "@/pages/traders";
import Portfolio from "@/pages/portfolio";
import CmtToken from "@/pages/cmt-token";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home onNavigate={setActiveSection} />;
      case "traders":
        return <Traders />;
      case "portfolio":
        return <Portfolio />;
      case "token":
        return <CmtToken />;
      default:
        return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          {renderSection()}
          
          {/* Footer */}
          <footer className="bg-slate-900/50 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">C</span>
                    </div>
                    <h3 className="text-xl font-bold gradient-text">CopyMinds</h3>
                  </div>
                  <p className="text-slate-400 mb-4">
                    The future of copy trading. Connect, copy, and earn with the best traders worldwide.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      Discord
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      Telegram
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Platform</h4>
                  <ul className="space-y-2 text-slate-400">
                    <li>
                      <button onClick={() => setActiveSection("traders")} className="hover:text-white transition-colors">
                        Discover Traders
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setActiveSection("portfolio")} className="hover:text-white transition-colors">
                        Portfolio
                      </button>
                    </li>
                    <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">CMT Token</h4>
                  <ul className="space-y-2 text-slate-400">
                    <li>
                      <button onClick={() => setActiveSection("token")} className="hover:text-white transition-colors">
                        Token Info
                      </button>
                    </li>
                    <li><a href="#" className="hover:text-white transition-colors">Buy CMT</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Staking</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Support</h4>
                  <ul className="space-y-2 text-slate-400">
                    <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                <p>&copy; 2024 CopyMinds. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
