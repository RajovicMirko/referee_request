import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useEffect } from "react";
import useFetcher from "src/hooks/useFetcher";
import { getClubs } from "src/services/club";
import { getClubTeams } from "src/services/team";
import DatePicker from "../components/DatePicker/DatePicker";
import Form from "../components/Form/Form";
import FormControlWithLabel from "../components/FormControlWithLabel/FormControlWithLabel";
import FormRow from "../components/FormRow/FormRow";
import Input from "../components/Input/Input";
import Radio from "../components/Radio/Radio";
import Select from "../components/Select/Select";
import { refereeRequestFormSchemaResolver } from "./refereeRequestForm.config";

const formDefaultValues = {
  referee: { count: 1 },
  team: { type: "gentlemen" },
};

const RefereeRequestForm = () => {
  const { t } = useTranslation();

  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    delayError: 1300,
    defaultValues: formDefaultValues,
    resolver: refereeRequestFormSchemaResolver,
  });

  const selectedClub = methods.watch("team.club.id");

  const { data: clubOptions } = useFetcher({
    fn: getClubs,
  });

  const { data: teamOptions } = useFetcher({
    fn: getClubTeams,
    fnProps: { clubId: selectedClub },
    skip: !selectedClub,
  });

  useEffect(() => {
    methods.resetField("team.id");
  }, [methods, teamOptions]);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const refereeCountOptions = [
    {
      value: "1",
      label: t("field.referee.plural_counter", { count: 1 }),
    },
    {
      value: "2",
      label: t("field.referee.plural_counter", { count: 2 }),
    },
  ];

  const teamTypeOptions = [
    {
      value: "gentlemen",
      label: t("field.gentlemen.main"),
    },
    {
      value: "ladies",
      label: t("field.ladies.main"),
    },
  ];

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Select
        id="club"
        name="club.id"
        label={t("field.club")}
        placeholder={t("field.selectPlaceholder.makeAChoice")}
        options={clubOptions}
      />

      <Input id="field" name="field" label={t("field.field.main")} />

      <Radio
        row
        id="refereeCount"
        name="referee.count"
        label={t("field.referee.numberOfWhistlers")}
        options={refereeCountOptions}
        defaultValue={formDefaultValues.referee.count}
      />

      <FormControlWithLabel id="price-label" label={t("field.price.main")}>
        <Typography aria-labelledby="price-label" fontWeight="bold">
          {t("field.price.text", {
            sign: "€",
            netPrice: "37.19",
            grossPrice: "45.00",
          })}
        </Typography>
      </FormControlWithLabel>

      <DatePicker
        id="gameDate"
        name="game.date"
        label={t("field.match.dateAndTime")}
      />

      <Radio
        row
        id="teamType"
        name="team.type"
        label={t("field.team")}
        options={teamTypeOptions}
        defaultValue={formDefaultValues.team.type}
      />

      <Input
        id="whistleRules"
        name="rules"
        label={t("field.whistleRules.main")}
      />

      <FormRow col={2} label={t("field.clubAndTeam.main")}>
        <Select
          id="club"
          name="team.club.id"
          placeholder={t("field.selectPlaceholder.club")}
          options={clubOptions}
        />

        <Select
          id="team"
          name="team.id"
          placeholder={t("field.selectPlaceholder.team")}
          options={teamOptions}
          disabled={!selectedClub}
        />
      </FormRow>

      <Input id="firstName" name="firstName" label={t("field.name.first")} />

      <Input id="lastName" name="lastName" label={t("field.name.last")} />

      <Input id="email" name="email" label={t("field.email")} />

      <Input id="mobileNumber" name="mobileNumber" label={t("field.mobile")} />

      <Input id="comments" name="comments" label={t("field.comments")} />

      <Form.ActionsWrapper>
        <Button type="submit" variant="contained">
          {t("actions.submit")}
        </Button>
      </Form.ActionsWrapper>
    </Form>
  );
};

export default RefereeRequestForm;
