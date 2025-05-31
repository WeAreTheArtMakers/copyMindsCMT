import { Trader, CmtToken } from "@shared/schema";

export interface MockUser {
  id: number;
  username: string;
  balance: string;
  cmtTokens: string;
}

export interface MockCopyTrade {
  id: number;
  trader: {
    id: number;
    displayName: string;
    avatar: string;
  };
  amount: string;
  currentPnl: string;
  roi: string;
}

export interface MockStats {
  totalUsers: string;
  totalVolume: string;
  topTraders: string;
  avgReturn: string;
}

export interface ChartData {
  name: string;
  value: number;
  profit?: number;
}

export const mockUser: MockUser = {
  id: 1,
  username: "CryptoInvestor",
  balance: "24750.00",
  cmtTokens: "1847.50"
};

export const mockStats: MockStats = {
  totalUsers: "50,000+",
  totalVolume: "$2.5B+",
  topTraders: "1,200+",
  avgReturn: "+87%"
};

export const mockTopTraders: Trader[] = [
  {
    id: 1,
    userId: 1,
    displayName: "CryptoKing_23",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Professional crypto trader with 5+ years experience",
    winRate: "94.00",
    totalReturn: "245.00",
    monthlyReturn: "156.00",
    followers: 2300,
    riskScore: "6.5",
    experience: 5,
    verified: true,
    createdAt: new Date()
  },
  {
    id: 2,
    userId: 2,
    displayName: "QuantumTrader",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    bio: "Algorithmic trading specialist",
    winRate: "89.00",
    totalReturn: "189.00",
    monthlyReturn: "134.00",
    followers: 1800,
    riskScore: "4.2",
    experience: 4,
    verified: true,
    createdAt: new Date()
  },
  {
    id: 3,
    userId: 3,
    displayName: "DeFi_Master",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "DeFi and yield farming expert",
    winRate: "91.00",
    totalReturn: "312.00",
    monthlyReturn: "187.00",
    followers: 3100,
    riskScore: "7.1",
    experience: 3,
    verified: true,
    createdAt: new Date()
  }
];

export const mockAllTraders: Trader[] = [
  ...mockTopTraders,
  {
    id: 4,
    userId: 4,
    displayName: "AlgoTrader_Pro",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    bio: "Systematic trading strategies",
    winRate: "92.00",
    totalReturn: "245.00",
    monthlyReturn: "98.00",
    followers: 1500,
    riskScore: "6.2",
    experience: 3,
    verified: true,
    createdAt: new Date()
  },
  {
    id: 5,
    userId: 5,
    displayName: "CryptoQueen_88",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    bio: "Long-term investment strategies",
    winRate: "88.00",
    totalReturn: "189.00",
    monthlyReturn: "76.00",
    followers: 2800,
    riskScore: "4.5",
    experience: 5,
    verified: true,
    createdAt: new Date()
  },
  {
    id: 6,
    userId: 6,
    displayName: "TechAnalyst_01",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    bio: "Technical analysis specialist",
    winRate: "95.00",
    totalReturn: "167.00",
    monthlyReturn: "112.00",
    followers: 987,
    riskScore: "7.1",
    experience: 2,
    verified: false,
    createdAt: new Date()
  },
  {
    id: 7,
    userId: 7,
    displayName: "BitcoinVeteran",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
    bio: "Bitcoin maximalist since 2013",
    winRate: "85.00",
    totalReturn: "412.00",
    monthlyReturn: "45.00",
    followers: 5200,
    riskScore: "5.8",
    experience: 7,
    verified: true,
    createdAt: new Date()
  }
];

export const mockCopyTrades: MockCopyTrade[] = [
  {
    id: 1,
    trader: mockTopTraders[0],
    amount: "5000.00",
    currentPnl: "750.00",
    roi: "15.0"
  },
  {
    id: 2,
    trader: mockTopTraders[1],
    amount: "3500.00",
    currentPnl: "425.00",
    roi: "12.1"
  },
  {
    id: 3,
    trader: mockTopTraders[2],
    amount: "2000.00",
    currentPnl: "-50.00",
    roi: "-2.5"
  }
];

export const mockCmtToken: CmtToken = {
  id: 1,
  price: "2.45",
  marketCap: "245000000.00",
  change24h: "8.7",
  totalSupply: "100000000",
  circulatingSupply: "75000000",
  updatedAt: new Date()
};

export const portfolioChartData: ChartData[] = [
  { name: '6h ago', value: 23500 },
  { name: '5h ago', value: 24100 },
  { name: '4h ago', value: 23800 },
  { name: '3h ago', value: 24300 },
  { name: '2h ago', value: 24750 },
  { name: '1h ago', value: 24600 },
  { name: 'Now', value: 24750 }
];

export const cmtChartData: ChartData[] = [
  { name: '7D', value: 2.20 },
  { name: '6D', value: 2.35 },
  { name: '5D', value: 2.15 },
  { name: '4D', value: 2.25 },
  { name: '3D', value: 2.40 },
  { name: '2D', value: 2.38 },
  { name: '1D', value: 2.45 }
];

export const traderPerformanceData: ChartData[] = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 120 },
  { name: 'Mar', value: 115 },
  { name: 'Apr', value: 134 },
  { name: 'May', value: 168 },
  { name: 'Jun', value: 180 }
];
