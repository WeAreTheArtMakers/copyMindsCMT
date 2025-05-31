import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import TraderCard from "@/components/trader-card";
import { mockAllTraders } from "@/lib/mock-data";
import { Trader } from "@shared/schema";

export default function Traders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("performance");
  const [riskLevel, setRiskLevel] = useState("all");
  const [minWinRate, setMinWinRate] = useState([80]);
  const [filteredTraders, setFilteredTraders] = useState(mockAllTraders);

  const handleCopyTrader = (trader: Trader) => {
    console.log("Copying trader:", trader.displayName);
    // Here you would implement the copy trading logic
  };

  const filterTraders = () => {
    let filtered = mockAllTraders.filter(trader => 
      trader.displayName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filter by win rate
    filtered = filtered.filter(trader => 
      parseFloat(trader.winRate || "0") >= minWinRate[0]
    );

    // Filter by risk level
    if (riskLevel !== "all") {
      const riskScore = parseFloat(trader.riskScore || "0");
      switch (riskLevel) {
        case "low":
          filtered = filtered.filter(trader => parseFloat(trader.riskScore || "0") <= 4);
          break;
        case "medium":
          filtered = filtered.filter(trader => {
            const score = parseFloat(trader.riskScore || "0");
            return score > 4 && score <= 7;
          });
          break;
        case "high":
          filtered = filtered.filter(trader => parseFloat(trader.riskScore || "0") > 7);
          break;
      }
    }

    // Sort traders
    switch (sortBy) {
      case "performance":
        filtered.sort((a, b) => parseFloat(b.totalReturn || "0") - parseFloat(a.totalReturn || "0"));
        break;
      case "followers":
        filtered.sort((a, b) => (b.followers || 0) - (a.followers || 0));
        break;
      case "winrate":
        filtered.sort((a, b) => parseFloat(b.winRate || "0") - parseFloat(a.winRate || "0"));
        break;
    }

    setFilteredTraders(filtered);
  };

  // Filter traders whenever dependencies change
  useState(() => {
    filterTraders();
  });

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="glass-card sticky top-24">
              <CardHeader>
                <CardTitle>Filter Traders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm text-slate-400 mb-2 block">Performance Period</Label>
                  <Select defaultValue="all-time">
                    <SelectTrigger className="bg-slate-800 border-slate-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-time">All Time High</SelectItem>
                      <SelectItem value="30-days">Last 30 Days</SelectItem>
                      <SelectItem value="7-days">Last 7 Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm text-slate-400 mb-2 block">Risk Level</Label>
                  <Select value={riskLevel} onValueChange={setRiskLevel}>
                    <SelectTrigger className="bg-slate-800 border-slate-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Risk Levels</SelectItem>
                      <SelectItem value="low">Low Risk (1-4)</SelectItem>
                      <SelectItem value="medium">Medium Risk (4-7)</SelectItem>
                      <SelectItem value="high">High Risk (7+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm text-slate-400 mb-2 block">
                    Min Win Rate: {minWinRate[0]}%
                  </Label>
                  <Slider
                    value={minWinRate}
                    onValueChange={setMinWinRate}
                    min={0}
                    max={100}
                    step={5}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Traders Grid */}
          <div className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold">Discover Traders</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search traders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64 bg-slate-800 border-slate-700"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-slate-800 border-slate-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="performance">Sort by Performance</SelectItem>
                    <SelectItem value="followers">Sort by Followers</SelectItem>
                    <SelectItem value="winrate">Sort by Win Rate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTraders.map((trader) => (
                <TraderCard
                  key={trader.id}
                  trader={trader}
                  onCopyClick={handleCopyTrader}
                />
              ))}
            </div>

            {filteredTraders.length === 0 && (
              <Card className="glass-card text-center">
                <CardContent className="p-12">
                  <p className="text-slate-400 text-lg">No traders found matching your criteria.</p>
                  <p className="text-slate-500 mt-2">Try adjusting your filters to see more results.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
