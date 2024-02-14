import { createBrowserRouter} from "react-router-dom";
import Home from "./pages/home/Home";
import ContactForm from "./components/contact_forms/ContactForm";
//import Sphere from "./components/sphere/Sphere";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      //   {
      //     path: "team",
      //     element: <Team />,
      //     loader: teamLoader,
      //   },
    ],
  },
  {
    path:'/se',
    element:<ContactForm/>
  }
]);

export default router;
