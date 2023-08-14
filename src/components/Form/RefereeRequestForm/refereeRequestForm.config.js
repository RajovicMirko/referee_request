import { yupResolver } from "@hookform/resolvers/yup";
import { yupLocaleConfig } from "src/yup/localeConfig";
import { date, number, object, setLocale, string } from "yup";

setLocale(yupLocaleConfig);

export const FORM_DEFAULT_VALUES = {
  matchup: {
    gameTime: new Date(),
    home: {
      team: {
        club: {
          id: 146,
        },
      },
    },
    away: {
      team: {
        club: {
          id: 147,
        },
      },
    },
    field: "test field name",
    comment: "test some comment",
    numberOfReferees: 1,
  },
  personalData: {
    discountCode: null,
    info: {
      name: "Mirko",
      email: "test@gmail.com",
      phoneNumber: "123321",
      team: {
        club: {
          id: 145,
        },
      },
    },
  },
};

const teamSchema = object().shape({
  id: number().required(),
  club: object().shape({
    id: number().required(),
  }),
});

const teamParentSchema = object().shape({
  team: teamSchema,
});

const schema = object().shape({
  matchup: object().shape({
    gameTime: date().required(),
    home: teamParentSchema,
    away: teamParentSchema,
    field: string().required(),
    numberOfReferees: number().required(),
    comment: string().required(),
  }),
  personalData: object().shape({
    discountCode: string().optional().nullable(),
    info: object().shape({
      email: string().email().required(),
      name: string().required(),
      phoneNumber: string().required(),
      team: teamSchema,
    }),
  }),
});

export const refereeRequestFormSchemaResolver = yupResolver(schema);
