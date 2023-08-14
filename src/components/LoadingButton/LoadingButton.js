import {
  ButtonStyled,
  CircularProgressStyled,
  TextWrapper,
} from "./LoadingButton.style";

const LoadingButton = ({
  type,
  loading = false,
  children,
  variant = "contained",
  ...rest
}) => {
  return (
    <ButtonStyled type={type} variant={variant} loading={loading} {...rest}>
      {loading && <CircularProgressStyled />}
      <TextWrapper loading={loading}>{children}</TextWrapper>
    </ButtonStyled>
  );
};

export default LoadingButton;
