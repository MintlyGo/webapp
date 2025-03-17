import { useLocation } from "react-router-dom";
import { Slider } from "../ui/slider";

const CurrentBalance = () => {
  const location = useLocation();
  const userData = location.state || {};
  console.log(userData);
  return (
    <div className="current-balance container rounded-lg shadow-2xl bg-white p-4 flex flex-col gap-2">
      <p className="font-medium text-base">Current Balance</p>
      <p className="font-medium text-2xl">$ {userData?.amountDue ?? "1000"}</p>
      <Slider
        defaultValue={[userData?.amountDue ? userData.amountDue : 1000]}
        max={2000}
        disabled={true}
        className="my-4"
      />
      <div className="text-base">
        <p>
          Available Credit: $
          {userData?.availableLimit ? userData.availableLimit : 1000}
        </p>
        <p>Total Credit Line: $2000</p>
      </div>
      <div className="text-base mb-2">
        <p>Last Statement Balance:</p>
        <p>$200 on 12/08/2024</p>
      </div>
      <a className="text-cyan-950 hover:text-primary">
        View Billing Statement PDF
      </a>
      <a className="text-cyan-950 hover:text-primary">
        View Activity & Statements
      </a>
    </div>
  );
};

export default CurrentBalance;
