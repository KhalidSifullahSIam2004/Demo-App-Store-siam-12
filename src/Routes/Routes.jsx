import { createBrowserRouter } from "react-router";
import Root from "../Components/AlwaysShow/Root/Root";
import NotFoundPage from "../Components/DynamicShow/NotFoundPage/NotFoundPage";
import AllApps from "../Components/DynamicShow/AllApps/AllApps";
import InstalledApps from "../Components/DynamicShow/InstalledApps/InstalledApps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <h1>Siam</h1>,
      },
      {
        path: "/allapps",
        element: <AllApps />,
      },
      {
        path: "/installedapps",
        element: <InstalledApps />,
      },
    ],
  },
]);

export default router;
