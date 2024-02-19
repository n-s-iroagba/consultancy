import { createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";

//import Sphere from "./components/sphere/Sphere";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
