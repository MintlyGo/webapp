import PaymentGreeting from "@/components/custom/PaymentGreeting";
import PaymentManager from "@/components/custom/PaymentManager";
import PaymentSummary from "@/components/custom/PaymentSummary";

const Payments = () => {
  return (
    <div className="payments bg-[#e5e7eb] min-h-screen">
      <PaymentGreeting />
      <section className="hero mt-4 container mx-auto p-6">
        <div className="grid grid-cols-3 gap-4 items-stretch">
          <div className="col-span-1 space-y-4">
            <PaymentSummary />
          </div>
          <div className="col-span-2 space-y-4">
            <PaymentManager />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payments;
