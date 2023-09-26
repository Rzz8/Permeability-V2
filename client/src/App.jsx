import {
  HomeLayout,
  Login,
  Register,
  DashboardLayout,
  AddJob,
  AllJobs,
  Landing,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { action as LoginAction } from "./pages/Login";
import { action as RegisterAction } from "./pages/Register";
import { action as AddJobAction } from "./pages/Addjob";
import { loader as allJobsLoader } from "./pages/AllJobs";
import { loader as DashboardLoader } from "./pages/DashboardLayout";
import { action as DeleteJobAction } from "./pages/DeleteJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: RegisterAction,
      },
      {
        path: "login",
        element: <Login />,
        action: LoginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: DashboardLoader,
        children: [
          { index: true, element: <AddJob />, action: AddJobAction },
          { path: "all-jobs", element: <AllJobs />, loader: allJobsLoader },
          { path: "delete-job/:id", action: DeleteJobAction },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
