import { FormProvider } from "react-hook-form";
import { ActionsWrapper, FormStyled } from "./Form.style";

const Form = ({ methods, children, onSubmit, ...rest }) => {
  return (
    <FormProvider {...methods}>
      <FormStyled
        {...rest}
        onSubmit={methods.handleSubmit(onSubmit)}
        component="form"
      >
        {children}
      </FormStyled>
    </FormProvider>
  );
};

Form.ActionsWrapper = ActionsWrapper;

export default Form;
