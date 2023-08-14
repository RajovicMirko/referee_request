import { FormControlLabel, Radio as MuiRadio, RadioGroup } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import FormControlWithLabel from "../FormControlWithLabel/FormControlWithLabel";

const Radio = ({
  row,
  id,
  name,
  label,
  options,
  defaultValue = "",
  disableBottomGutter = false,
}) => {
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
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => {
          return (
            <RadioGroup
              row={row}
              aria-labelledby={FormControlWithLabel.getLabelId(id)}
              value={value}
              onChange={onChange}
            >
              {options?.map(({ value, label }) => {
                return (
                  <FormControlLabel
                    key={value}
                    value={value}
                    label={label}
                    control={<MuiRadio />}
                  />
                );
              })}
            </RadioGroup>
          );
        }}
      />
    </FormControlWithLabel>
  );
};

export default Radio;
