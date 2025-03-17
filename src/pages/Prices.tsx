import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Search, ChevronUp, ChevronDown } from 'lucide-react';

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
    <div className="container mx-auto py-8 space-y-6">
      {/* Quick Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trending Cryptos */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-white">
          <CardHeader className="border-b border-teal-100">
            <CardTitle className="text-xl font-bold text-teal-900">Trending Cryptos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trendingCryptos.map((crypto) => (
                <div key={crypto.id} 
                  className="flex items-center justify-between p-2 hover:bg-teal-50/50 rounded-lg transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <img src={crypto.image} alt={crypto.name} className="w-8 h-8" />
                    <div>
                      <div className="font-medium text-teal-900">{crypto.name}</div>
                      <div className="text-sm text-teal-600 uppercase">{crypto.symbol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-teal-800">${crypto.current_price.toLocaleString()}</div>
                    <div className={crypto.price_change_percentage_24h >= 0 ? 'text-emerald-500' : 'text-red-500'}>
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Movers */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-white">
          <CardHeader className="border-b border-teal-100">
            <CardTitle className="text-xl font-bold text-teal-900">Top Movers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topMovers.map((crypto) => (
                <div key={crypto.id} 
                  className="flex items-center justify-between p-2 hover:bg-teal-50/50 rounded-lg transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <img src={crypto.image} alt={crypto.name} className="w-8 h-8" />
                    <div>
                      <div className="font-medium text-teal-900">{crypto.name}</div>
                      <div className="text-sm text-teal-600 uppercase">{crypto.symbol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-teal-800">${crypto.current_price.toLocaleString()}</div>
                    <div className={crypto.price_change_percentage_24h >= 0 ? 'text-emerald-500' : 'text-red-500'}>
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Crypto Table */}
      <Card className="border-0 shadow-lg bg-white">
        <CardHeader className="border-b border-teal-100">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle className="text-2xl font-bold text-teal-900">All Cryptocurrencies</CardTitle>
              <div className="relative w-full md:w-[300px]">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-teal-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for assets"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-teal-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-teal-50/50 placeholder-teal-900"
                />
              </div>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {FILTER_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${activeFilter === option.value
                      ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md shadow-teal-200'
                      : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                    }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-b border-teal-100">
                <TableHead className="text-teal-700">Asset</TableHead>
                <TableHead className="text-teal-700">Symbol</TableHead>
                <SortableHeader field="price">Price</SortableHeader>
                <SortableHeader field="price_change_24h">24hr Change</SortableHeader>
                <SortableHeader field="price_change_percentage_24h">% Change</SortableHeader>
                <SortableHeader field="market_cap">Market Cap</SortableHeader>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((crypto) => (
                <TableRow key={crypto.id} className="border-b border-teal-50 hover:bg-teal-50/30 transition-colors duration-200">
                  <TableCell className="flex items-center gap-2 text-teal-900">
                    <img src={crypto.image} alt={crypto.name} className="w-6 h-6" />
                    {crypto.name}
                  </TableCell>
                  <TableCell className="uppercase text-teal-600">{crypto.symbol}</TableCell>
                  <TableCell className="text-teal-800">${crypto.current_price.toLocaleString()}</TableCell>
                  <TableCell className={crypto.price_change_24h >= 0 ? 'text-emerald-500' : 'text-red-500'}>
                    ${Math.abs(crypto.price_change_24h).toLocaleString()}
                  </TableCell>
                  <TableCell className={crypto.price_change_percentage_24h >= 0 ? 'text-emerald-500' : 'text-red-500'}>
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </TableCell>
                  <TableCell className="text-teal-800">
                    {formatMarketCap(crypto.market_cap)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
} 