import { createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Event from './pages/Event'
import WalletAddress from "./pages/WalletAddress";
import About from "./pages/About";


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
    path: "/event",
    element: <Event/>,
  },
  {
    path: "/pay",
    element: <WalletAddress/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

export default router;
