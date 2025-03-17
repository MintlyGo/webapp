import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useLoginDialog } from "@/hooks/useDialog";
import { LoginDialog } from "./Dialog";

const AppLayout = () => {
  const { isOpen, openDialog, closeDialog } = useLoginDialog();

  return (
    <>
      <Header openDialog={openDialog} />
      <LoginDialog isOpen={isOpen} closeDialog={closeDialog} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
