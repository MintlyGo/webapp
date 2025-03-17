const TransactionSummary = () => {
  return (
    <div className="transaction-summary container rounded-lg shadow-2xl bg-white p-4 flex flex-col gap-4">
      <p className="font-medium text-base">
        Transaction Summary <span>(Jan 01 - Today)</span>
      </p>
      <div className="flex flex-col gap-1">
        <p className="flex justify-between">
          Pending Transactions (0) <span>$0.00</span>
        </p>
        <p className="flex justify-between">
          Posted Transactions (10) <span>$95.00</span>
        </p>
        <p className="flex justify-between text-green-500">
          Payments and Credits (0)
          <span>-$0.00</span>
        </p>
      </div>
    </div>
  );
};

export default TransactionSummary;
