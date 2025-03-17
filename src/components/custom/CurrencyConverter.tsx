import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import USFlag from "../icons/us-flag";
import { useEffect, useRef, useState } from "react";
import { Currency } from "@/config/types";
import { Separator } from "../ui/separator";
import ToolTip from "./ToolTip";
import { Info } from "lucide-react";
import { Clock } from "lucide-react";

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("usd");
  const [toCurrency, setToCurrency] = useState<string>("eth");
  const [USDAmount, setUSDAmount] = useState<number>(1000);
  const [cryptoAmount, setCryptoAmount] = useState<number>(0);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [prices, setPrices] = useState<{ [key: string]: number }>({});
  const [conversionFee, setConversionFee] = useState(0.005 * USDAmount);
  const [totalUSD, setTotalUSD] = useState<number>(0);
  const [initialCrypto, setInitialCrypto] = useState<number>(0);
  const [timer, setTimer] = useState<number>(10);
  const [isRequoting, setIsRequoting] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);
  const EXCHANGE_API_URL = "https://api.coingecko.com/api/v3/coins/markets";

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          `${EXCHANGE_API_URL}?vs_currency=usd&order=market_cap_desc&sparkline=false`
        );
        const data = await response.json();
        setCurrencies(data);

        const priceMap: { [key: string]: number } = {};
        data.forEach((coin: Currency) => {
          priceMap[coin.symbol] = coin.current_price;
        });
        setPrices(priceMap);
      } catch (err) {
        console.error("Error fetching currencies:", err);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    if (prices[toCurrency]) {
      const rate = 1 / prices[toCurrency];
      const conversionFee = (0.5 / 100) * USDAmount;
      setConversionFee(conversionFee);
      const totalUSD = USDAmount + 0.3 + conversionFee;
      setTotalUSD(totalUSD);
      setInitialCrypto(USDAmount * rate);
      setCryptoAmount(totalUSD * rate);
    }
  }, [USDAmount, fromCurrency, toCurrency, prices]);

  useEffect(() => {
    const startTimer = () => {
      timerRef.current = window.setInterval(() => {
        setTimer((prev) => {
          if (prev > 1) return prev - 1;
          clearInterval(timerRef.current!); // Stop timer when reaching 1
          setIsRequoting(true); // Trigger "Requoting"
          setTimeout(() => {
            setTimer(10); // Reset timer to 10 seconds
            setIsRequoting(false); // Exit "Requoting" mode
            startTimer(); // Restart timer
          }, 2000); // Show "Requoting" for 2 seconds
          return prev;
        });
      }, 1000);
    };

    startTimer();
    return () => clearInterval(timerRef.current!); // Cleanup on unmount
  }, []);

  return (
    <div className="container bg-gray-800 flex flex-col gap-5 p-6 rounded-lg shadow-2xl">
      <div className="usd-curr">
        <Label
          htmlFor="usd"
          className="text-white inline-block ml-1 mb-2 text-base"
        >
          Payment Amount
        </Label>
        <div className="bg-gray-700 flex p-2 rounded-lg">
          <Input
            type="number"
            id="usd"
            className="font-medium bg-transparent text-white md:text-lg border-none rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 w-80 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield  flex-grow"
            value={USDAmount}
            onChange={(e) => {
              setUSDAmount(Number(e.target.value));
              setConversionFee((0.5 / 100) * Number(e.target.value));
            }}
          />
          <Select onValueChange={setFromCurrency} value={fromCurrency}>
            <SelectTrigger className="w-[auto] bg-gray-800 font-medium text-white border-none rounded-3xl focus:outline-none  focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">
                <span className="flex gap-2">
                  <USFlag height="20px" width="20px" />
                  USD
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="crypto-curr">
        <Label
          htmlFor="crypto"
          className="text-white inline-block ml-1 mb-2 text-base"
        >
          Equivalent Crypto
        </Label>
        <div className="bg-gray-700 flex p-2 rounded-lg">
          <Input
            type="number"
            id="crypto"
            value={cryptoAmount === 0 ? 0 : cryptoAmount?.toFixed(4)}
            readOnly
            className="font-medium bg-transparent text-white md:text-lg border-none rounded-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 w-80 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance]:textfield  flex-grow"
          />
          <Select onValueChange={setToCurrency} value={toCurrency}>
            <SelectTrigger className="w-[auto] bg-gray-800 font-medium text-white border-none rounded-3xl focus:outline-none  focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency.id} value={currency.symbol}>
                  <span className="flex gap-2">
                    <img
                      src={currency.image}
                      alt={currency.name}
                      className="w-5 h-5 inline"
                    />
                    {currency?.symbol?.toUpperCase()}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Label
        htmlFor="crypto"
        className="text-white inline-block ml-1 text-base"
      >
        Breakdown
      </Label>
      <div className="summary text-white bg-gray-700 flex flex-col items-start gap-3 p-4 rounded-lg">
        <p>
          You get{" "}
          <span className="font-medium">
            {cryptoAmount?.toFixed(4)} {toCurrency?.toUpperCase()}
          </span>{" "}
          for <span className="font-medium">${USDAmount}</span>
        </p>
        <Separator className="bg-gray-400" />
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr>
                <td className="pr-8 py-2">
                  {initialCrypto?.toFixed(4)} {toCurrency?.toUpperCase()} @ $
                  {prices[toCurrency]}
                </td>
                <td className="pr-8 py-2">${USDAmount}</td>
              </tr>
              <tr>
                <td className="pr-8 py-2 flex gap-1 items-center">
                  Network Fee{" "}
                  <ToolTip
                    data={<Info size="16px" />}
                    tip={
                      "This fee covers our costs associated with asset transfer, and may vary depending on a number of factors, such as network congestion and operational costs."
                    }
                  ></ToolTip>
                </td>
                <td className="pr-8 py-2">$0.30</td>
              </tr>
              <tr>
                <td className="pr-8 py-2 flex gap-1 items-center">
                  Conversion Fee (0.5%){" "}
                  <ToolTip
                    data={<Info size="16px" />}
                    tip={
                      "This fee covers our costs associated with asset transfer, and may vary depending on a number of factors, such as network congestion and operational costs."
                    }
                  ></ToolTip>
                </td>
                <td className="pr-8 py-2">${conversionFee}</td>
              </tr>
              <tr>
                <td className="pr-8 py-2 flex gap-1 items-center">
                  Total (USD)
                </td>
                <td className="pr-8 py-2">{totalUSD.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="pr-8 py-2 flex gap-1 items-center">
                  Total ({toCurrency?.toUpperCase()})
                </td>
                <td className="pr-8 py-2">{cryptoAmount.toFixed(4)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="quote-update flex items-center justify-center gap-2 text-primary-foreground">
        <Clock size="16px" />
        {isRequoting ? (
          <span>Requoting...</span>
        ) : (
          <span>Quote updates in {timer}s</span>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
