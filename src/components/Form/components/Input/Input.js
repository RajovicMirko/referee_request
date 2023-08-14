import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import FormControlWithLabel from "../FormControlWithLabel/FormControlWithLabel";

const Input = ({ id, name, label, disableBottomGutter = false }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControlWithLabel
      id={id}
      name={name}
      label={label}
      errors={errors}
      disableBottomGutter={disableBottomGutter}
    >
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value = "", ref } }) => {
          return (
            <TextField
              size="small"
              inputRef={ref}
              id={id}
              value={value}
              aria-labelledby={FormControlWithLabel.getLabelId(id)}
              onChange={onChange}
              onBlur={onBlur}
            />
          );
        }}
      />
    </FormControlWithLabel>
  );
};

export default Input;
