import {
  RouterProvider as RRDRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import RefereeRequest from "src/pages/RefereeRequest/RefereeRequest";
import RefereeRequestSuccess from "src/pages/RefereeRequestSuccess/RefereeRequestSuccess";

export const ROUTES = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RefereeRequest />,
      },
      {
        path: "success",
        element: <RefereeRequestSuccess />,
      },
    ],
  },
];

const RouterProvider = () => {
  return (
    <RRDRouterProvider
      router={createBrowserRouter(ROUTES)}
      fallbackElement={<div>Loading app....</div>}
    />
  );
};

export default RouterProvider;
