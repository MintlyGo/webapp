import { CreditCard } from "lucide-react";
import { Search } from "lucide-react";
import ToolTip from "./ToolTip";

const PaymentSummary = () => {
  return (
    <div className="payment-summary container rounded-lg shadow-2xl bg-white p-6">
      <p className="font-medium text-base mb-4">Your Outstanding Balance</p>
      <div className="flex flex-col gap-8">
        <div className="amount-due grid grid-cols-[30px_auto] gap-4">
          <CreditCard />
          <div className="flex flex-col gap-1">
            <p className="flex gap-3">
              Amount Due:
              <span className="font-medium text-primary">$1000</span>
            </p>
            <p className="flex gap-3">
              As of:
              <span className="font-medium">
                01/27/2025
                <ToolTip
                  data={"⚠️"}
                  tip={
                    "Your payment is overdue. A late fee will apply if payment is not received by due date"
                  }
                ></ToolTip>
              </span>
            </p>
            <p className="flex gap-3">
              Due By: <span className="font-medium">02/03/2025</span>
            </p>
          </div>
        </div>
        <div className="statement grid grid-cols-[30px_auto] gap-4">
          <Search />
          <div>
            <a className="relative hover:text-primary">
              View Full Statement →
              <span className="absolute bottom-0 left-0 w-full border-b-2 border-primary bottom-[-3px]"></span>
            </a>
          </div>
        </div>
        <div>
          <p className="font-medium mb-4">Breakdown of Charges</p>
          <div>
            <table className="w-[90%] md:w-full">
              <tbody>
                <tr>
                  <td>Purchases</td>
                  <td>$1000</td>
                </tr>
                <tr>
                  <td>Interest</td>
                  <td>$0.00</td>
                </tr>
                <tr>
                  <td>Late Fees</td>
                  <td>$0.00</td>
                </tr>
                <tr className="font-medium">
                  <td>Total Balance</td>
                  <td>$1000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
