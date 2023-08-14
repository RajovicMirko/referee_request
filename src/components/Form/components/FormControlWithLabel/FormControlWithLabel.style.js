import { Box, FormControl, FormLabel, Typography, styled } from "@mui/material";

const styleConstants = {
  textLeft: "4px",
};

const customProps = ["disableBottomGutter"];
const shouldForwardProp = (propName) => !customProps.includes(propName);

export const FormControlStyled = styled(FormControl, {
  shouldForwardProp,
})(({ disableBottomGutter }) => {
  return {
    paddingBottom: disableBottomGutter ? "22px" : "30px",
  };
});
FormControlStyled.defaultProps = {
  fullWidth: true,
};

export const FormLabelStyled = styled(FormLabel)(() => {
  return {
    marginLeft: styleConstants.textLeft,
  };
});

export const FormControlErrorMessageWrapper = styled(Box, {
  shouldForwardProp,
})(({ disableBottomGutter }) => {
  return {
    position: "absolute",
    bottom: disableBottomGutter ? 0 : "8px",
  };
});

export const FormControlErrorMessage = styled(Typography)(() => {
  return {
    marginLeft: styleConstants.textLeft,
  };
});
FormControlErrorMessage.defaultProps = {
  color: "error",
};
