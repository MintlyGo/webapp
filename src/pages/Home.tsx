import Greeting from "@/components/custom/Greeting";
import CurrentBalance from "@/components/custom/CurrentBalance";
import NextPaymentDue from "@/components/custom/NextPaymentDue";
import RecentActivity from "@/components/custom/RecentActivity";
import TransactionSummary from "@/components/custom/TransactionSummary";
import YourShortcuts from "@/components/custom/YourShortcuts";
import { useAuth } from "@/contexts/AuthContext";
import GuestHome from "./GuestHome";
import Cashback from "@/components/custom/Cashback";

const Home = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated ? (
        <div className="home bg-[#e5e7eb] min-h-screen">
          <Greeting />
          <section className="hero mt-4 container mx-auto p-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 space-y-4">
                <CurrentBalance />
                <NextPaymentDue />
              </div>
              <div className="col-span-2">
                <RecentActivity />
              </div>
              <div className="col-span-1 space-y-4">
                <TransactionSummary />
                <Cashback />
                <YourShortcuts />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <GuestHome />
      )}
    </>
  );
};

export default Home;
