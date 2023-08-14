const components = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const containedStyle = getConditionStyle(
          ownerState?.variant === "contained",
          {
            fontWeight: 600,
            fontSize: "15px",
            borderRadius: "5px",
            border: "2px solid transparent",
            boxShadow: "none",
            ":hover": {
              backgroundColor: theme.palette.common.white,
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              boxShadow: "none",
            },
          }
        );

        return {
          ...containedStyle,
        };
      },
    },
  },

  MuiInputBase: {
    styleOverrides: {
      root: ({ ownerState }) => {
        const datePickerFieldStyle = getConditionStyle(
          ownerState?.inputProps?.className?.includes("date-picker-field"),
          {
            cursor: "pointer",
            "*": {
              cursor: "inherit",
            },
          }
        );

        return {
          ...datePickerFieldStyle,
          input: { lineHeight: 1 },
        };
      },
    },
  },

  MuiFormControl: {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const disabledStyle = getConditionStyle(ownerState?.disabled, {
          "*": {
            cursor: "not-allowed !important",
          },
        });

        const errorStyle = getConditionStyle(ownerState?.error, {
          "& .MuiInputBase-root, fieldset": {
            borderColor: `${theme.palette.error.main} !important`,
            color: `${theme.palette.error.main} !important`,
            button: {
              color: "inherit !important",
            },
          },
        });

        return { ...disabledStyle, ...errorStyle };
      },
    },
  },
};

export default components;

const getConditionStyle = (condition, style) => {
  return condition ? style : {};
};
