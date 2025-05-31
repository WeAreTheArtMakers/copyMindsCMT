import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Percent, Gift, Crown, FileText, Coins } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { mockCmtToken, cmtChartData } from "@/lib/mock-data";

export default function CmtToken() {
  const formatMarketCap = (value: string) => {
    const num = parseFloat(value);
    return `$${(num / 1000000).toFixed(0)}M`;
  };

  const formatSupply = (value: string) => {
    const num = parseFloat(value);
    return `${(num / 1000000).toFixed(0)}M CMT`;
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">CMT Token</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            The native utility token of CopyMinds platform. Earn rewards, get discounts, and access premium features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Token Stats */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Coins className="w-6 h-6" />
                <span>Token Statistics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Current Price</span>
                <span className="text-xl font-bold profit">
                  ${parseFloat(mockCmtToken.price).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">24h Change</span>
                <span className="profit">
                  +{parseFloat(mockCmtToken.change24h).toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Market Cap</span>
                <span className="font-semibold">
                  {formatMarketCap(mockCmtToken.marketCap)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Total Supply</span>
                <span className="font-semibold">
                  {formatSupply(mockCmtToken.totalSupply)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Circulating Supply</span>
                <span className="font-semibold">
                  {formatSupply(mockCmtToken.circulatingSupply)}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Token Chart */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6" />
                <span>Price Chart</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={cmtChartData}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: '#94a3b8' }} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: '#94a3b8' }}
                      domain={['dataMin - 0.1', 'dataMax + 0.1']}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                        border: '1px solid rgba(148, 163, 184, 0.2)',
                        borderRadius: '8px',
                        color: '#f8fafc'
                      }}
                      formatter={(value) => [`$${value}`, 'Price']}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#f59e0b"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6, fill: "#f59e0b" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Token Utilities */}
        <Card className="glass-card mb-16">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Token Utilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Reduced Fees</h4>
                <p className="text-slate-400">
                  Pay trading fees with CMT tokens and get up to 50% discount on all platform fees.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Staking Rewards</h4>
                <p className="text-slate-400">
                  Stake your CMT tokens and earn up to 12% APY plus additional platform benefits.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Premium Access</h4>
                <p className="text-slate-400">
                  Access exclusive traders, advanced analytics, and premium copy trading features.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Token Actions */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 text-lg">
              Buy CMT Token
            </Button>
            <Button className="glass border-slate-600 hover:bg-white/10 px-8 py-3 text-lg">
              Stake CMT
            </Button>
            <Button variant="outline" className="border-slate-600 hover:bg-slate-800 px-8 py-3 text-lg">
              <FileText className="w-5 h-5 mr-2" />
              View Whitepaper
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
