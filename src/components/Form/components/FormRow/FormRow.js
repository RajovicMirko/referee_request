import { FormLabel } from "@mui/material";
import useBreakpoints from "src/hooks/useBreakpoints";
import { FormRowBody, FormRowStyled } from "./FormRow.style";

const FormRow = ({ col, label, children }) => {
  const { isSmallScreen } = useBreakpoints();

  return (
    <FormRowStyled>
      <FormLabel>{label}</FormLabel>
      <FormRowBody col={isSmallScreen ? 1 : col}>{children}</FormRowBody>
    </FormRowStyled>
  );
};

export default FormRow;
