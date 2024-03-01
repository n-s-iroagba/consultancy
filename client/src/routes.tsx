import { createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Event from './pages/Event'
import WalletAddress from "./pages/WalletAddress";
import About from "./pages/About";
import Logo from "./components/Logo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact-us",
    element: <Contact/>,
  },
  {
    path: "/events",
    element: <Event/>,
  },
  {
    path: "/pay",
    element: <WalletAddress/>,
  },
  {
    path: "/about-us",
    element: <About/>,
  },
  {
    path: "/a",
    element: <Logo/>,
  },
]);

export default router;
