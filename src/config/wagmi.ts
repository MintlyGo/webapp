import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";
import { metaMask } from "wagmi/connectors";
import { walletConnect } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    coinbaseWallet(),
    metaMask(),
    walletConnect({
      projectId: "cf2a60cef1b3f3d528faae3ca1c945b1",
      qrModalOptions: {
        themeMode: "dark",
        explorerRecommendedWalletIds: "NONE",
        // themeVariables: { "--wcm-overlay-background-color": "hsl(0 0% 96.1%)" },
      },
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
