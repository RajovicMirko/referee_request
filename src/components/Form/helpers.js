import i18next from "i18next";
import { get } from "react-hook-form";

export const getErrorsByName = (errors, name) => {
  const errorsObj = get(errors, name);

  if (errorsObj) {
    return i18next.t(errorsObj.message, {
      ns: "error",
    });
  }

  return "";
};
