import { Brain, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockUser } from "@/lib/mock-data";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'traders', label: 'Discover Traders' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'token', label: 'CMT Token' }
  ];

  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold gradient-text">CopyMinds</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`nav-link px-3 py-2 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'text-blue-400 active'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 glass-card rounded-lg px-3 py-2">
            <Wallet className="w-4 h-4 text-blue-400" />
            <span className="text-sm">${mockUser.balance}</span>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
}
