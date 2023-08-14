import { Box, styled } from "@mui/material";

const customProps = ["col"];
const shouldForwardProp = (name) => !customProps.includes(name);

export const FormRowStyled = styled(Box)(() => {
  return {
    width: "100%",
  };
});

export const FormRowBody = styled(Box, { shouldForwardProp })(({ col }) => {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${col}, 1fr)`,
    columnGap: "20px",
  };
});
