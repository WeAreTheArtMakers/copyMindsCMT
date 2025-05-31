import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, TrendingDown, Award, Users, DollarSign } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { mockUser, mockCopyTrades, portfolioChartData } from "@/lib/mock-data";

export default function Portfolio() {
  const totalPnl = mockCopyTrades.reduce((sum, trade) => sum + parseFloat(trade.currentPnl), 0);
  const dailyChange = 1250.00;
  const dailyChangePercent = 5.32;

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Your Portfolio</h2>
        
        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Portfolio Performance</CardTitle>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="default" className="bg-blue-600">24H</Button>
                    <Button size="sm" variant="ghost" className="text-slate-400">7D</Button>
                    <Button size="sm" variant="ghost" className="text-slate-400">30D</Button>
                    <Button size="sm" variant="ghost" className="text-slate-400">1Y</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={portfolioChartData}>
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(30, 41, 59, 0.9)', 
                          border: '1px solid rgba(148, 163, 184, 0.2)',
                          borderRadius: '8px',
                          color: '#f8fafc'
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#22c55e"
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 6, fill: "#22c55e" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5" />
                  <span>Portfolio Balance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold profit mb-2">
                  ${parseFloat(mockUser.balance).toLocaleString()}
                </div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 profit mr-1" />
                  <span className="profit">
                    +${dailyChange.toLocaleString()} (+{dailyChangePercent}%)
                  </span>
                  <span className="text-slate-400 ml-1">today</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Active Copies</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  {mockCopyTrades.length}
                </div>
                <div className="text-sm text-slate-400">
                  Copying {mockCopyTrades.length} traders
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>CMT Rewards</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-400 mb-2">
                  {parseFloat(mockUser.cmtTokens).toLocaleString()} CMT
                </div>
                <div className="text-sm text-slate-400 mb-3">Available to claim</div>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                  Claim Rewards
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Active Copies */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Your Copy Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="text-slate-400">Trader</TableHead>
                    <TableHead className="text-slate-400">Amount Copied</TableHead>
                    <TableHead className="text-slate-400">P&L</TableHead>
                    <TableHead className="text-slate-400">ROI</TableHead>
                    <TableHead className="text-slate-400">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCopyTrades.map((trade) => (
                    <TableRow key={trade.id} className="border-slate-800">
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={trade.trader.avatar} alt={trade.trader.displayName} />
                            <AvatarFallback>
                              {trade.trader.displayName.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{trade.trader.displayName}</span>
                        </div>
                      </TableCell>
                      <TableCell>${parseFloat(trade.amount).toLocaleString()}</TableCell>
                      <TableCell>
                        <div className={`flex items-center space-x-1 ${
                          parseFloat(trade.currentPnl) >= 0 ? 'profit' : 'loss'
                        }`}>
                          {parseFloat(trade.currentPnl) >= 0 ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          <span>
                            {parseFloat(trade.currentPnl) >= 0 ? '+' : ''}
                            ${Math.abs(parseFloat(trade.currentPnl)).toFixed(2)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={parseFloat(trade.roi) >= 0 ? "default" : "destructive"}
                          className={parseFloat(trade.roi) >= 0 ? "bg-green-600" : ""}
                        >
                          {parseFloat(trade.roi) >= 0 ? '+' : ''}{trade.roi}%
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="destructive" size="sm">
                          Stop Copy
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
