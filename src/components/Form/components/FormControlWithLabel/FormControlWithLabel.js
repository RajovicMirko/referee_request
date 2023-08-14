import { getErrorsByName } from "../../helpers";
import {
  FormControlErrorMessage,
  FormControlErrorMessageWrapper,
  FormControlStyled,
  FormLabelStyled,
} from "./FormControlWithLabel.style";

const generateLabelId = (id) => id + "-label";

const FormControlWithLabel = ({
  id = "",
  name,
  label,
  errors,
  children,
  disableBottomGutter = false,
}) => {
  const errorMessage = getErrorsByName(errors, name);

  return (
    <FormControlStyled
      error={!!errorMessage}
      disableBottomGutter={disableBottomGutter}
    >
      <FormLabelStyled id={generateLabelId(id)}>{label}</FormLabelStyled>

      {children}

      <FormControlErrorMessageWrapper disableBottomGutter={disableBottomGutter}>
        <FormControlErrorMessage>{errorMessage}</FormControlErrorMessage>
      </FormControlErrorMessageWrapper>
    </FormControlStyled>
  );
};

FormControlWithLabel.getLabelId = generateLabelId;

export default FormControlWithLabel;
