import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PaymentMethods = () => {
  return (
    <RadioGroup defaultValue="crypto">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="crypto" id="crypto" />
        <Label htmlFor="crypto">Crypto</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="debit" id="debit" />
        <Label htmlFor="debit">Debit Card</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="ach" id="ach" />
        <Label htmlFor="ach">Bank Account(ACH Transfer)</Label>
      </div>
    </RadioGroup>
  );
};

export default PaymentMethods;
