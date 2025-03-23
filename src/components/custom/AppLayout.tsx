import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useLoginDialog } from "@/hooks/useDialog";
import { LoginDialog } from "./Dialog";

const AppLayout = () => {
  const { isOpen, openDialog, closeDialog } = useLoginDialog();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <LoginDialog isOpen={isOpen} closeDialog={closeDialog} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
