import CalendarIcon from "@mui/icons-material/Event";
import { TextField } from "@mui/material";
import { DateTimeField, MobileDateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";
import FormControlWithLabel from "../FormControlWithLabel/FormControlWithLabel";

const CustomDatePickerInput = ({ placeholder, onClick, inputRef, ...rest }) => {
  return (
    <DateTimeField
      {...rest}
      format="DD.MM.YYYY HH:mm"
      slots={{ textField: TextField }}
      slotProps={{
        textField: {
          fullWidth: true,
          size: "small",
          inputProps: {
            className: "date-picker-field",
          },
          InputProps: {
            endAdornment: <CalendarIcon />,
          },
          readOnly: true,
          onClick: onClick,
          placeholder,
          inputRef,
        },
      }}
    />
  );
};

const DatePicker = ({ id, name, label, placeholder, disableBottomGutter }) => {
  const {
    control,
    formState: { errors },
    trigger,
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
        render={({ field: { onChange, value, ref } }) => {
          const handleChange = (obj) => {
            trigger(name);
            onChange?.(obj.$d);
          };

          return (
            <MobileDateTimePicker
              id={id}
              name={name}
              ampm={false}
              disablePast
              aria-labelledby={FormControlWithLabel.getLabelId(id)}
              inputRef={ref}
              slots={{ field: CustomDatePickerInput }}
              slotProps={{
                field: {
                  placeholder,
                },
              }}
              value={value ? dayjs(value) : null}
              onChange={handleChange}
            />
          );
        }}
      />
    </FormControlWithLabel>
  );
};

export default DatePicker;
