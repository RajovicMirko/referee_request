import { AppBar, styled } from "@mui/material";

export const AppBarStyled = styled(AppBar)(({ theme }) => {
  return {
    boxShadow: theme.shadows[0],
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    backgroundColor: theme.palette.common.white,
  };
});
AppBarStyled.defaultProps = {
  position: "sticky",
};
