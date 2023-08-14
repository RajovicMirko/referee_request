import { Autocomplete, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import FormControlWithLabel from "../FormControlWithLabel/FormControlWithLabel";

const Select = ({
  options = [],
  id,
  name,
  disabled,
  label,
  placeholder,
  disableBottomGutter,
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
        onChange={(_, selectedOption) => selectedOption}
        render={({ field: { onChange, onBlur, value = "", ref } }) => {
          const handleChange = (_, selectedOption) => {
            onChange?.(selectedOption?.id);
          };

          return (
            <Autocomplete
              aria-labelledby={FormControlWithLabel.getLabelId(id)}
              size="small"
              fullWidth
              disablePortal
              disableClearable
              id={id}
              options={options || []}
              disabled={disabled}
              onChange={handleChange}
              value={value || null}
              renderInput={(params) => {
                return (
                  <TextField
                    inputRef={ref}
                    {...params}
                    placeholder={placeholder}
                  />
                );
              }}
              getOptionLabel={(option) => {
                let tmpOption = option;

                if (["string", "number"].includes(typeof tmpOption)) {
                  tmpOption = options?.find((opt) => opt.id === option);
                }

                return tmpOption?.name ?? "";
              }}
              isOptionEqualToValue={(option, value) => {
                return option.id === value;
              }}
              onBlur={onBlur}
            />
          );
        }}
      />
    </FormControlWithLabel>
  );
};

export default Select;
