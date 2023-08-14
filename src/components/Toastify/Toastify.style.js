import { Box, styled } from "@mui/material";

const classNames = {
  default: ".Toastify__toast-theme--colored.Toastify__toast--default",
  info: ".Toastify__toast-theme--colored.Toastify__toast--info",
  success: ".Toastify__toast-theme--colored.Toastify__toast--success",
  warning: ".Toastify__toast-theme--colored.Toastify__toast--warning",
  error: ".Toastify__toast-theme--colored.Toastify__toast--error",
};

export const ToastContainerWrapper = styled(Box)(({ theme }) => {
  return Object.entries(classNames).reduce((acc, [key, value]) => {
    const backgroundColor = theme.palette?.[key]?.main;
    return { ...acc, [value]: { backgroundColor } };
  }, {});
});
