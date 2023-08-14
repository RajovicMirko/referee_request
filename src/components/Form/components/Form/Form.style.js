import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FormStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
}));

export const ActionsWrapper = styled(Box)(() => ({
  width: "100%",
  marginTop: "20px",
}));
