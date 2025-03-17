import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Payments from "./pages/Payments";
import Prices from "./pages/Prices";
import About from "./pages/About";
import Team from "./pages/Team";
import TrustCenter from "./pages/TrustCenter";
import Cryptopedia from "./pages/Cryptopedia";
import Newsroom from "./pages/Newsroom";
import Support from "./pages/Support";
import AppLayout from "./components/custom/AppLayout";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/pay", element: <Payments /> },
        { path: "/prices", element: <Prices /> },
        { path: "/about", element: <About /> },
        { path: "/team", element: <Team /> },
        { path: "/trust-center", element: <TrustCenter /> },
        { path: "/cryptopedia", element: <Cryptopedia /> },
        { path: "/newsroom", element: <Newsroom /> },
        { path: "/support", element: <Support /> },
      ],
    },
  ],
  { future: { v7_fetcherPersist: true } }
);
