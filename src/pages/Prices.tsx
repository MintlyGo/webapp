import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Search, ChevronUp, ChevronDown, Sparkles, TrendingUp, LineChart, ArrowUpRight, Wallet, BarChart3, CandlestickChart, Gem, CircleDollarSign } from 'lucide-react';
import "../styles/animations.css";

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  price_change_24h: number;
  market_cap: number;
  image: string;
  total_volume: number;
  tags: string[];
  price: number;  // Alias for current_price for sorting
}

interface TrendingCrypto {
  item: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    current_price: number;
    price_change_percentage_24h: number;
  }
}

type FilterCategory = 'all' | 'top-movers' | 'top-traded' | 'recently-launched' | 'meme' | 'metaverse' | 'defi' | 'stablecoins';

const FILTER_OPTIONS: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Top movers', value: 'top-movers' },
  { label: 'Top traded', value: 'top-traded' },
  { label: 'Recently launched', value: 'recently-launched' },
  { label: 'Meme', value: 'meme' },
  { label: 'Metaverse', value: 'metaverse' },
  { label: 'DeFi', value: 'defi' },
  { label: 'Stablecoins', value: 'stablecoins' },
];

// Color palette constants
const colors = {
  50: '#f0fdfa',
  100: '#ccfbf1',
  200: '#99f6e4',
  300: '#5eead4',
  400: '#2dd4bf',
  500: '#14b8a6',
  600: '#0d9488',
  700: '#0f766e',
  800: '#115e59',
  900: '#134e4a',
  950: '#042f2e',
};

// Add a helper function to format market cap
const formatMarketCap = (value: number): string => {
  if (value >= 1e12) {
    return `$${(value / 1e12).toFixed(3)}T`;
  } else if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(1)}B`;
  } else if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(1)}M`;
  } else {
    return `$${value.toLocaleString()}`;
  }
};

type SortField = 'price' | 'price_change_24h' | 'price_change_percentage_24h' | 'market_cap';
type SortDirection = 'asc' | 'desc';

interface SortConfig {
  field: SortField | null;
  direction: SortDirection;
}

export default function Prices() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [filteredData, setFilteredData] = useState<CryptoData[]>([]);
  const [trendingCryptos, setTrendingCryptos] = useState<CryptoData[]>([]);
  const [topMovers, setTopMovers] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'market_cap',
    direction: 'desc'
  });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Fetch main crypto data
        const mainResponse = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 100,
              page: 1,
              sparkline: false,
              price_change_percentage: '24h',
              include_24hr_change: true
            }
          }
        );

        // Fetch trending cryptos
        const trendingResponse = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );

        const mainData = mainResponse.data.map((coin: any) => ({
          ...coin,
          price: coin.current_price,
          price_change_24h: Math.abs(coin.current_price - (coin.current_price / (1 + coin.price_change_percentage_24h / 100)))
        }));
        setCryptoData(mainData);
        setFilteredData(mainData);

        // Get trending crypto details
        const trendingIds = trendingResponse.data.coins.map((coin: TrendingCrypto) => coin.item.id).join(',');
        const trendingDetailsResponse = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              ids: trendingIds,
              order: 'market_cap_desc',
              sparkline: false
            }
          }
        );
        setTrendingCryptos(trendingDetailsResponse.data.slice(0, 3));

        // Calculate top movers (highest positive and negative % changes)
        const sortedByChange = [...mainData].sort((a, b) => 
          Math.abs(b.price_change_percentage_24h) - Math.abs(a.price_change_percentage_24h)
        );
        setTopMovers(sortedByChange.slice(0, 3));

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch cryptocurrency data. Please try again later.');
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const handleSort = (field: SortField) => {
    setSortConfig(prevConfig => ({
      field,
      direction: prevConfig.field === field && prevConfig.direction === 'desc' ? 'asc' : 'desc'
    }));
  };

  useEffect(() => {
    let filtered = [...cryptoData];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(crypto => 
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    switch (activeFilter) {
      case 'top-movers':
        filtered = filtered.sort((a, b) => 
          Math.abs(b.price_change_percentage_24h) - Math.abs(a.price_change_percentage_24h)
        ).slice(0, 20);
        break;
      case 'top-traded':
        filtered = filtered.sort((a, b) => b.total_volume - a.total_volume).slice(0, 20);
        break;
      case 'recently-launched':
        // This would ideally use a launch date field, but for now we'll just show newer listings
        filtered = filtered.slice(0, 20);
        break;
      case 'meme':
        filtered = filtered.filter(crypto => crypto.tags?.includes('meme'));
        break;
      case 'metaverse':
        filtered = filtered.filter(crypto => crypto.tags?.includes('metaverse'));
        break;
      case 'defi':
        filtered = filtered.filter(crypto => crypto.tags?.includes('defi'));
        break;
      case 'stablecoins':
        filtered = filtered.filter(crypto => crypto.tags?.includes('stablecoin'));
        break;
      default:
        // 'all' - no additional filtering needed
        break;
    }

    // Apply sorting
    if (sortConfig.field) {
      filtered.sort((a, b) => {
        let aValue = a[sortConfig.field!];
        let bValue = b[sortConfig.field!];
        
        // Handle special case for price change where we want to sort by absolute value
        if (sortConfig.field === 'price_change_24h') {
          aValue = Math.abs(a.price_change_24h);
          bValue = Math.abs(b.price_change_24h);
        }

        if (sortConfig.direction === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }

    setFilteredData(filtered);
  }, [searchQuery, activeFilter, cryptoData, sortConfig]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  const SortableHeader = ({ field, children }: { field: SortField; children: React.ReactNode }) => {
    const isActive = sortConfig.field === field;
    return (
      <TableHead 
        className={`text-teal-700 cursor-pointer hover:text-teal-900 transition-colors whitespace-nowrap
          ${isActive ? 'text-teal-900 font-semibold' : ''}`}
        onClick={() => handleSort(field)}
      >
        <div className="flex items-center gap-1">
          {children}
          <div className="flex flex-col">
            {isActive && (
              sortConfig.direction === 'desc' ? 
                <ChevronDown className="h-4 w-4" /> : 
                <ChevronUp className="h-4 w-4" />
            )}
          </div>
        </div>
      </TableHead>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-fit animate-fade-in">
                <CandlestickChart className="h-5 w-5 text-[#00ffff]" />
                <span className="text-white/90">Real-Time Market Data</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Live Cryptocurrency
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"> Market Prices</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl animate-fade-in-up delay-100">
              Track real-time cryptocurrency prices, market caps, and trading volumes. Stay informed with live updates and market trends.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { icon: <CircleDollarSign className="h-5 w-5" />, label: "Total Market Cap", value: "$2.1T" },
              { icon: <BarChart3 className="h-5 w-5" />, label: "24h Volume", value: "$98.5B" },
              { icon: <Gem className="h-5 w-5" />, label: "Active Coins", value: "2,547" },
              { icon: <TrendingUp className="h-5 w-5" />, label: "Markets", value: "12,875" }
            ].map((stat, index) => (
              <div key={index} 
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 
                  transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg text-cyan-300">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                    <p className="text-xl font-semibold text-white">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-8 -mt-8 relative z-20 space-y-8">
        {/* Market Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trending Cryptos */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl hover:bg-white/90 transition-all duration-300">
            <CardHeader className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-50 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Trending Cryptos</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {trendingCryptos.map((crypto) => (
                  <div key={crypto.id} 
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary-100 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                        <img src={crypto.image} alt={crypto.name} className="w-10 h-10 relative z-10" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{crypto.name}</div>
                        <div className="text-sm text-gray-500 uppercase">{crypto.symbol}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">${crypto.current_price.toLocaleString()}</div>
                      <div className={`flex items-center gap-1 ${crypto.price_change_percentage_24h >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                        {crypto.price_change_percentage_24h >= 0 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Movers */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl hover:bg-white/90 transition-all duration-300">
            <CardHeader className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <LineChart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Top Movers</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {topMovers.map((crypto) => (
                  <div key={crypto.id} 
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-100 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                        <img src={crypto.image} alt={crypto.name} className="w-10 h-10 relative z-10" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{crypto.name}</div>
                        <div className="text-sm text-gray-500 uppercase">{crypto.symbol}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">${crypto.current_price.toLocaleString()}</div>
                      <div className={`flex items-center gap-1 ${crypto.price_change_percentage_24h >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                        {crypto.price_change_percentage_24h >= 0 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Crypto Table */}
        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-xl hover:bg-white/90 transition-all duration-300">
          <CardHeader className="border-b border-gray-100">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <Wallet className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">All Cryptocurrencies</CardTitle>
                </div>
                <div className="relative w-full md:w-[300px] group">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for assets"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-gray-50/50 placeholder-gray-500 transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {FILTER_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setActiveFilter(option.value)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                      ${activeFilter === option.value
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-100 scale-105'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:scale-105'
                      }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-100">
                    <TableHead className="text-gray-600 font-medium">Asset</TableHead>
                    <TableHead className="text-gray-600 font-medium">Symbol</TableHead>
                    <SortableHeader field="price">Price</SortableHeader>
                    <SortableHeader field="price_change_24h">24hr Change</SortableHeader>
                    <SortableHeader field="price_change_percentage_24h">% Change</SortableHeader>
                    <SortableHeader field="market_cap">Market Cap</SortableHeader>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((crypto) => (
                    <TableRow key={crypto.id} 
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-all duration-300 group cursor-pointer">
                      <TableCell className="flex items-center gap-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gray-100 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                          <img src={crypto.image} alt={crypto.name} className="w-8 h-8 relative z-10" />
                        </div>
                        <span className="font-medium text-gray-900">{crypto.name}</span>
                      </TableCell>
                      <TableCell className="uppercase text-gray-500 font-medium">{crypto.symbol}</TableCell>
                      <TableCell className="font-medium text-gray-900">${crypto.current_price.toLocaleString()}</TableCell>
                      <TableCell className={crypto.price_change_24h >= 0 ? 'text-emerald-500 font-medium' : 'text-red-500 font-medium'}>
                        ${Math.abs(crypto.price_change_24h).toLocaleString()}
                      </TableCell>
                      <TableCell className={`flex items-center gap-1 ${crypto.price_change_percentage_24h >= 0 ? 'text-emerald-500' : 'text-red-500'} font-medium`}>
                        {crypto.price_change_percentage_24h >= 0 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                      </TableCell>
                      <TableCell className="font-medium text-gray-900">
                        {formatMarketCap(crypto.market_cap)}
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