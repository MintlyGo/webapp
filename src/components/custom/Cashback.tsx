import { useEffect, useState } from "react";

const EXCHANGE_API_URL = "https://api.coingecko.com/api/v3/coins/markets";

const Cashback = () => {
  const [cashback, setCashback] = useState<number>();
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          `${EXCHANGE_API_URL}?vs_currency=usd&order=market_cap_desc&sparkline=false`
        );
        const data = await response.json();

        data.forEach((coin: any) => {
          if (coin.symbol === "eth") {
            const currentPrice = coin.current_price;
            console.log(currentPrice);
            setCashback(currentPrice * 0.015);
          }
        });
      } catch (err) {
        console.error("Error fetching currencies:", err);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <div className="cashback container rounded-lg shadow-2xl bg-white p-4 flex flex-col gap-4">
      <p className="font-medium text-base">Cashback</p>
      <div className="flex flex-col gap-1">
        <p className="flex justify-between">
          Your Cashback <span className="font-medium">0.015 ETH</span>
        </p>
        <p className="flex justify-between">
          USD<span className="font-medium">${cashback?.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default Cashback;
