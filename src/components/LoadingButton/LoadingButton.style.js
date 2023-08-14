import { Box, Button, CircularProgress, styled } from "@mui/material";

const customProps = ["loading"];
const shouldForwardProp = (propName) => !customProps.includes(propName);

export const ButtonStyled = styled(Button, { shouldForwardProp })(
  ({ loading, theme }) => {
    const loadingStyle = loading
      ? {
          pointerEvents: "none",
          ":hover": {
            backgroundColor: theme.palette.primary.main,
          },
        }
      : {};

    return { ...loadingStyle };
  }
);

export const CircularProgressStyled = styled(CircularProgress)(({ theme }) => {
  return {
    position: "absolute",
    color: theme.palette.common.white,
  };
});
CircularProgressStyled.defaultProps = {
  size: 26,
  thickness: 5,
};

export const TextWrapper = styled(Box, { shouldForwardProp })(({ loading }) => {
  const loadingProps = loading ? { color: "transparent" } : {};

  return {
    ...loadingProps,
  };
});
