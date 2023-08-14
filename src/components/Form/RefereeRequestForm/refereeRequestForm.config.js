import { yupResolver } from "@hookform/resolvers/yup";
import { yupLocaleConfig } from "src/yup/localeConfig";
import { date, number, object, setLocale, string } from "yup";

setLocale(yupLocaleConfig);

const schema = object().shape({
  club: object().shape({
    id: number().required(),
  }),
  field: string().required(),
  referee: object().shape({
    count: number().required(),
  }),
  game: object().shape({
    date: date().required(),
  }),
  team: object().shape({
    id: number().required(),
    type: string().required(),
    club: object().shape({
      id: number().required(),
    }),
  }),
  rules: string().required(),
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required(),
  mobileNumber: string().required(),
  comments: string().optional(),
});

export const refereeRequestFormSchemaResolver = yupResolver(schema);
