import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "./RegisterForm";

type LoginDialogProps = {
  isOpen: boolean;
  closeDialog: () => void;
};

export const LoginDialog: React.FC<LoginDialogProps> = ({
  isOpen,
  closeDialog,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader></DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm onClose={closeDialog} />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm onClose={closeDialog} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
