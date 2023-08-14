import CalendarIcon from "@mui/icons-material/Event";
import { TextField } from "@mui/material";
import { DateTimeField, MobileDateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormControlWithLabel from "../FormControlWithLabel/FormControlWithLabel";

const DatePicker = ({ id, name, label, disableBottomGutter }) => {
  const { t } = useTranslation();
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

          const CustomInput = ({ onChange, onClick, value }) => (
            <DateTimeField
              onChange={onChange}
              onClick={onClick}
              value={value}
              format="DD.MM.YYYY HH:mm"
              slots={{ textField: TextField }}
              slotProps={{
                textField: {
                  inputRef: ref,
                  fullWidth: true,
                  size: "small",
                  id,
                  name,
                  inputProps: {
                    className: "date-picker-field",
                  },
                  InputProps: {
                    endAdornment: <CalendarIcon />,
                  },
                  readOnly: true,
                  onClick: onClick,
                  placeholder: t("field.selectPlaceholder.date"),
                },
              }}
            />
          );

          return (
            <MobileDateTimePicker
              id={id}
              name={name}
              ampm={false}
              disablePast
              aria-labelledby={FormControlWithLabel.getLabelId(id)}
              slots={{ field: CustomInput }}
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
