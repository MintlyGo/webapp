import { Check } from "lucide-react";
import { Button } from "../ui/button";
import AccountDetails from "./AccountDetails";
import PaymentMethods from "./PaymentMethods";
import CurrencyConverter from "./CurrencyConverter";
import { LoadingSpinner } from "./LoadingSpinner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppKit } from "@reown/appkit/react";
import { useAccount, useDisconnect } from "wagmi";

const PaymentManager = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { open, close } = useAppKit();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleConfirmPay = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/transactions", {
        state: { amountDue: 0, availableLimit: 2000 },
      }); // Navigate to home page
    }, 1000); // 1-second delay
  };

  useEffect(() => {
    if (isConnected) {
      close();
    }
  }, [isConnected]);

  return (
    <div className="payment-manager container rounded-lg shadow-2xl bg-white py-4 px-6 h-full">
      <h2 className="mb-6 font-medium text-center">Payment Methods</h2>
      <div className="flex justify-between">
        <p className="mb-4">How would you like to pay your balance ?</p>
        {!isConnected ? (
          <Button
            variant={"ghost"}
            className="text-primary"
            onClick={() => open({ view: "AllWallets" as any })}
          >
            CONNECT
          </Button>
        ) : (
          <div className="flex gap-2">
            <Check color="green" strokeWidth={"3px"} />
            <span className="font-medium text-sm">WALLET CONNECTED</span>
          </div>
        )}
      </div>
      <div className="mb-8">
        <PaymentMethods />
      </div>

      <div className="mb-8">
        <p className="mb-2">
          Pay with Bitcoin, Ethereum, or other cryptocurrencies.
        </p>
        <ul>
          <li className="text-gray-900">✔ Fast and borderless payments</li>
          <li className="text-gray-900">
            ✔ Keep your transactions secure and private
          </li>
        </ul>
      </div>

      {isConnected && (
        <>
          <h2 className="mb-6 font-medium">Account Details</h2>
          <div className="mb-8">
            <div className="flex justify-between items-start">
              <AccountDetails />
              {isConnected && (
                <Button
                  variant={"ghost"}
                  className="text-primary"
                  onClick={() => {
                    console.log("clicked");
                    disconnect();
                  }}
                >
                  DISCONNECT
                </Button>
              )}
            </div>
          </div>
          <h2 className="mb-6 font-medium">Currency Conversion</h2>
          <CurrencyConverter />
          <div className="text-center mt-6">
            <Button onClick={handleConfirmPay}>Confirm Pay</Button>
          </div>{" "}
        </>
      )}

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <LoadingSpinner width={100} height={100} />
        </div>
      )}
    </div>
  );
};

export default PaymentManager;
