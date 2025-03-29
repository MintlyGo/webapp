import { useNavigate } from "react-router-dom";

const NextPaymentDue = () => {
  const navigate = useNavigate();

  const handleMakePayment = () => {
    navigate("/pay");
  };

  return (
    <div className="next-payment-due container rounded-lg shadow-2xl bg-white p-4 flex flex-col gap-2">
      <p className="font-medium text-base">Next Payment Due</p>
      <p className="font-medium text-2xl">Feb 3, 2025</p>
      <button 
        onClick={handleMakePayment}
        className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
      >
        Make Payment
      </button>
      <div className="text-base">
        <p>Minimum Payment Due:</p>
        <p>$35</p>
      </div>
      <div className="text-base">
        <p>Last Payment:</p>
        <p>$200 on 12/08/2024</p>
      </div>
    </div>
  );
};

export default NextPaymentDue;
