const YourShortcuts = () => {
  return (
    <div className="your-shortcuts container p-4 rounded-lg shadow-2xl bg-white flex flex-col gap-4">
      <p className="font-medium text-base">Your Shortcuts</p>
      <div className="flex flex-col gap-1">
        <a className="text-cyan-950 hover:text-primary">
          Freeze/Unfreeze Account
        </a>
        <a className="text-cyan-950 hover:text-primary">Refer a Friend</a>
        <a className="text-cyan-950 hover:text-primary">
          Help Keep your Identity Safe
        </a>
        <a className="text-cyan-950 hover:text-primary">
          Add an Authorized User
        </a>
        <a className="text-cyan-950 hover:text-primary">
          Transfer Balances: See Your Offers
        </a>
        <a className="text-cyan-950 hover:text-primary">
          Activate your Free SSN Alerts
        </a>
      </div>
    </div>
  );
};

export default YourShortcuts;
