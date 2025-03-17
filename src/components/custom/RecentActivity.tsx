import { ChevronDown, Plus } from "lucide-react";
import { transactions } from "@/config/data";
import { Button } from "@/components/ui/button";

const RecentActivity = () => {
  return (
    <div className="recent-activity container rounded-lg shadow-2xl bg-white truncate">
      <div className="header p-4 flex justify-between bg-primary font-medium text-primary-foreground">
        <p>Recent Activity (January 01, 2025 - Today)</p>
        <p>
          Sort by: Date (Descending)
          <span>
            <ChevronDown className="inline cursor-pointer" />
          </span>
        </p>
      </div>
      <div className="activity grid grid-rows-auto mb-4">
        {transactions.map((transaction) => (
          <div
            className=" hover:bg-primary-foreground p-3 grid grid-cols-[50px_80px_1fr_80px] gap-7"
            key={transaction.id}
          >
            <div className="expand-btn grid justify-center content-center">
              <Plus className="hover:text-primary cursor-pointer" />
            </div>
            <div>
              <p>{transaction.transactionDay}</p>
              <p>{transaction.transactionDate}</p>
            </div>
            <div className="truncate">
              <p className="truncate">{transaction.transactionMerchant}</p>
              <p>{transaction.category}</p>
            </div>
            <div>
              <p>${transaction.transactionAmount}</p>
              <p>${transaction.currentBalance}</p>
            </div>
          </div>
        ))}
        <div className="mt-4 flex flex-col items-center">
          <Button
            variant="outline"
            className="mb-2 text-primary hover:bg-primary hover:text-primary-foreground border"
          >
            Go to Previous Statement
          </Button>
          <a className="flex justify-between text-cyan-950 hover:text-primary text-sm">
            All Activity & Statements
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
