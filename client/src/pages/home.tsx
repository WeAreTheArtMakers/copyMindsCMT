import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, Brain, Zap } from "lucide-react";
import TraderCard from "@/components/trader-card";
import { mockStats, mockTopTraders } from "@/lib/mock-data";

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Copy The <span className="gradient-text">Best Traders</span><br />
            Earn Like <span className="gradient-text">Professionals</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
            Join thousands of users copying successful traders across multiple exchanges. 
            Start your copy trading journey with CopyMinds and CMT token rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 text-lg pulse-glow"
              onClick={() => onNavigate('traders')}
            >
              Start Copy Trading
            </Button>
             <Button
                as="a"
                href="https://www.youtube.com/watch?v=tw3hO1j4Hxc"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="glass border-slate-600 hover:bg-white/10 px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
                </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="glass-card floating-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">
                {mockStats.totalUsers}
              </div>
              <div className="text-slate-400">Active Users</div>
            </CardContent>
          </Card>
          <Card className="glass-card floating-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold profit mb-2">
                {mockStats.totalVolume}
              </div>
              <div className="text-slate-400">Total Volume</div>
            </CardContent>
          </Card>
          <Card className="glass-card floating-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                {mockStats.topTraders}
              </div>
              <div className="text-slate-400">Pro Traders</div>
            </CardContent>
          </Card>
          <Card className="glass-card floating-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {mockStats.avgReturn}
              </div>
              <div className="text-slate-400">Avg. Annual Return</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Traders Preview */}
        <Card className="glass-card">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Top Performing Traders</h2>
              <Button 
                variant="link" 
                className="text-blue-400 hover:text-blue-300"
                onClick={() => onNavigate('traders')}
              >
                View All →
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockTopTraders.map((trader) => (
                <TraderCard
                  key={trader.id}
                  trader={trader}
                  showChart={false}
                  onCopyClick={() => onNavigate('traders')}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card text-center floating-card">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Copy Trading</h3>
              <p className="text-slate-400">
                AI-powered algorithms automatically replicate the trades of successful traders in real-time.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center floating-card">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance Analytics</h3>
              <p className="text-slate-400">
                Detailed performance metrics and risk analysis to help you choose the best traders to copy.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center floating-card">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">CMT Rewards</h3>
              <p className="text-slate-400">
                Earn CMT tokens for every successful copy trade and unlock premium platform features.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
