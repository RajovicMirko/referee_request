import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainerWrapper } from "./Toastify.style";

const Toastify = () => {
  return (
    <ToastContainerWrapper>
      <ToastContainer
        theme="colored"
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        pauseOnHover
        limit={3}
        closeButton={false}
      />
      ;
    </ToastContainerWrapper>
  );
};

export default Toastify;
