import { createHashRouter } from "react-router-dom";
import AppLayout from "./components/custom/AppLayout";
import Home from "./pages/Home";
import Payments from "./pages/Payments";
import Prices from "./pages/Prices";
import About from "./pages/About";
import Team from "./pages/Team";
import SecurityHub from "./pages/SecurityHub";
import LearningHub from "./pages/LearningHub";
import NewsAndMediaHub from "./pages/NewsAndMediaHub";
import Support from "./pages/Support";
import Wallet from "./pages/Wallet";
import GuestHome from "./pages/GuestHome";

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/credit-card", element: <GuestHome /> },
        { path: "/pay", element: <Payments /> },
        { path: "/prices", element: <Prices /> },
        { path: "/about", element: <About /> },
        { path: "/team", element: <Team /> },
        { path: "/security-hub", element: <SecurityHub /> },
        { path: "/learn", element: <LearningHub /> },
        { path: "/news", element: <NewsAndMediaHub /> },
        { path: "/support", element: <Support /> },
        { path: "/wallet", element: <Wallet /> },
      ],
    },
  ],
  { future: { v7_fetcherPersist: true } }
);
