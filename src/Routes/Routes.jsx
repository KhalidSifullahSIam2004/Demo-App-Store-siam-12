import { createBrowserRouter } from "react-router";
import Root from "../Components/AlwaysShow/Root/Root";
import NotFoundPage from "../Components/DynamicShow/NotFoundPage/NotFoundPage";
import AllApps from "../Components/DynamicShow/AllApps/AllApps";
import InstalledApps from "../Components/DynamicShow/InstalledApps/InstalledApps";
import HomePage from "../Components/DynamicShow/HomePage/HomePage";
import SingleAppDetails from "../Components/DynamicShow/SingleAppDetails/SingleAppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/allapps",
        element: <AllApps />,
      },
      {
        path: '/appdetails/:id',
        element: <SingleAppDetails/>
      },
      {
        path: "/installedapps",
        element: <InstalledApps />,
      },
    ],
  },
]);

export default router;
