import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { createAppKit } from "@reown/appkit/react";

import { WagmiProvider } from "wagmi";
import { AppKitNetwork, arbitrum, mainnet } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();
  const projectId = "cf2a60cef1b3f3d528faae3ca1c945b1";
  const networks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, arbitrum] as [
    AppKitNetwork,
    ...AppKitNetwork[]
  ];

  const wagmiAdapter = new WagmiAdapter({
    networks,
    projectId,
    ssr: true,
  });

  createAppKit({
    adapters: [wagmiAdapter],
    networks,
    projectId,
    features: {
      analytics: true, // Optional - defaults to your Cloud configuration
    },
  });
  return (
    <AuthProvider>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </WagmiProvider>
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </AuthProvider>
  );
}

export default App;
