import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TrendingUp, Users, Clock, Award } from "lucide-react";
import { Trader } from "@shared/schema";
import PerformanceChart from "./performance-chart";

interface TraderCardProps {
  trader: Trader;
  onCopyClick?: (trader: Trader) => void;
  showChart?: boolean;
}

export default function TraderCard({ trader, onCopyClick, showChart = true }: TraderCardProps) {
  const formatNumber = (num: string | null) => {
    if (!num) return "0";
    const n = parseFloat(num);
    if (n >= 1000) {
      return `${(n / 1000).toFixed(1)}K`;
    }
    return n.toString();
  };

  const formatPercentage = (num: string | null) => {
    if (!num) return "0%";
    return `${parseFloat(num).toFixed(1)}%`;
  };

  return (
    <Card className="glass-card floating-card cursor-pointer group">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={trader.avatar || ""} alt={trader.displayName} />
              <AvatarFallback>{trader.displayName.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold">{trader.displayName}</h3>
                {trader.verified && (
                  <Award className="w-4 h-4 text-blue-400" />
                )}
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Clock className="w-3 h-3" />
                <span>{trader.experience} years experience</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold profit">
              +{formatPercentage(trader.totalReturn)}
            </div>
            <div className="text-xs text-slate-400">Total Return</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-semibold profit">
              {formatPercentage(trader.winRate)}
            </div>
            <div className="text-xs text-slate-400">Win Rate</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-400">
              {formatNumber(trader.followers?.toString() || "0")}
            </div>
            <div className="text-xs text-slate-400">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-amber-400">
              {trader.riskScore}
            </div>
            <div className="text-xs text-slate-400">Risk Score</div>
          </div>
        </div>

        {showChart && (
          <div className="mb-4 h-24">
            <PerformanceChart />
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-xs">
              +{formatPercentage(trader.monthlyReturn)} this month
            </Badge>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => onCopyClick?.(trader)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Copy Trader
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
