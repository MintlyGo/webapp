import { useAccount, useBalance } from "wagmi";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { config } from "@/config/wagmi";

const AccountDetails = () => {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address, config });

  return (
    <div className="flex flex-col gap-2">
      <p>
        <span className="font-medium">Wallet Address:</span> {address}
      </p>
      <div className="flex gap-3">
        <p>
          <span className="font-medium">Available Balance:</span>{" "}
          {balance?.value?.toString()} {balance?.symbol?.toUpperCase()}
        </p>
        <span className="flex items-center gap-2">
          <Switch id="usd" />
          <Label htmlFor="usd">USD</Label>
        </span>
      </div>
    </div>
  );
};

export default AccountDetails;
