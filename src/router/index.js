import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import RefereeRequest from "src/pages/RefereeRequest/RefereeRequest";
import RefereeRequestSuccess from "src/pages/RefereeRequestSuccess/RefereeRequestSuccess";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RefereeRequest />} />
          <Route path="success" element={<RefereeRequestSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
