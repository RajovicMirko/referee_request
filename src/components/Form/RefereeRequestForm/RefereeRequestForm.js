import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useEffect } from "react";
import { toast } from "react-toastify";
import LoadingButton from "src/components/LoadingButton/LoadingButton";
import useFetcher from "src/hooks/useFetcher";
import useMutation from "src/hooks/useMutations";
import { getClubs } from "src/services/club";
import { setPreorder } from "src/services/order";
import { getClubTeams } from "src/services/team";
import DatePicker from "../components/DatePicker/DatePicker";
import Form from "../components/Form/Form";
import FormControlWithLabel from "../components/FormControlWithLabel/FormControlWithLabel";
import FormRow from "../components/FormRow/FormRow";
import Input from "../components/Input/Input";
import Radio from "../components/Radio/Radio";
import Select from "../components/Select/Select";
import { getRefereePrices } from "./constants";
import {
  FORM_DEFAULT_VALUES,
  refereeRequestFormSchemaResolver,
} from "./refereeRequestForm.config";

const RefereeRequestForm = () => {
  const { t } = useTranslation();

  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    delayError: 1300,
    defaultValues: FORM_DEFAULT_VALUES,
    resolver: refereeRequestFormSchemaResolver,
  });

  const { mutation: handleSubmitPreorder, isLoading: isLoadingPreorder } =
    useMutation(setPreorder);

  const watchNumberOfReferees = methods.watch("matchup.numberOfReferees");

  const { data: clubOptions } = useFetcher({
    fn: getClubs,
  });

  // your club
  const yourClubFieldPath = "personalData.info.team.club.id";
  const selectedYourClub = methods.watch(yourClubFieldPath);
  const { data: yourTeamOptions } = useFetcher({
    fn: getClubTeams,
    fnProps: { clubId: selectedYourClub },
    skip: !selectedYourClub,
  });
  useEffect(() => {
    methods.resetField(yourClubFieldPath.replace(".club", ""));
  }, [methods, yourTeamOptions]);

  // home club
  const homeClubFieldPath = "matchup.home.team.club.id";
  const selectedHomeClub = methods.watch(homeClubFieldPath);
  const { data: homeTeamOptions } = useFetcher({
    fn: getClubTeams,
    fnProps: { clubId: selectedHomeClub },
    skip: !selectedHomeClub,
  });
  useEffect(() => {
    methods.resetField(homeClubFieldPath.replace(".club", ""));
  }, [methods, homeTeamOptions]);

  // away club
  const awayClubFieldPath = "matchup.away.team.club.id";
  const selectedAwayClub = methods.watch("matchup.away.team.club.id");
  const { data: awayTeamOptions } = useFetcher({
    fn: getClubTeams,
    fnProps: { clubId: selectedAwayClub },
    skip: !selectedAwayClub,
  });
  useEffect(() => {
    methods.resetField(awayClubFieldPath.replace(".club", ""));
  }, [methods, awayTeamOptions]);

  // submit
  const onSubmit = async (formData) => {
    const onSuccess = (response) => {
      if (response?.paymentUrl) {
        window.location.href = response?.paymentUrl;
      }
    };

    const onError = (error) => {
      toast.error(t(`messages:error.api.${error.status}`));
    };

    await handleSubmitPreorder({
      payload: formData,
      onSuccess,
      onError,
    });
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

  const SectionTitle = ({ title }) => {
    return (
      <Typography variant="h5" mb="6px">
        {title}
      </Typography>
    );
  };

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <SectionTitle title={t("global.personalData")} />
      <Input
        id="fullName"
        name="personalData.info.name"
        label={t("field.name.full")}
      />

      <Input
        id="email"
        name="personalData.info.email"
        label={t("field.email.main")}
      />

      <Input
        id="phoneNumber"
        name="personalData.info.phoneNumber"
        label={t("field.phone.main")}
      />

      <FormRow col={2} label={t("field.clubAndTeam.your")}>
        <Select
          id="yourClub"
          name="personalData.info.team.club.id"
          placeholder={t("field.placeholder.club")}
          options={clubOptions}
        />

        <Select
          id="yourTeam"
          name="personalData.info.team.id"
          placeholder={t("field.placeholder.team")}
          options={yourTeamOptions}
          disabled={!selectedYourClub}
        />
      </FormRow>

      <SectionTitle title={t("global.matchData")} />
      <DatePicker
        id="gameTime"
        name="matchup.gameTime"
        label={t("field.date.match.start")}
        placeholder={t("field.placeholder.date.selectDateTime")}
      />

      <FormRow col={2} label={t("field.clubAndTeam.home")}>
        <Select
          id="homeClub"
          name="matchup.home.team.club.id"
          placeholder={t("field.placeholder.club")}
          options={clubOptions}
        />

        <Select
          id="homeTeam"
          name="matchup.home.team.id"
          placeholder={t("field.placeholder.team")}
          options={homeTeamOptions}
          disabled={!selectedHomeClub}
        />
      </FormRow>

      <FormRow col={2} label={t("field.clubAndTeam.away")}>
        <Select
          id="awayClub"
          name="matchup.away.team.club.id"
          placeholder={t("field.placeholder.club")}
          options={clubOptions}
        />

        <Select
          id="awayTeam"
          name="matchup.away.team.id"
          placeholder={t("field.placeholder.team")}
          options={awayTeamOptions}
          disabled={!selectedAwayClub}
        />
      </FormRow>

      <Input id="field" name="matchup.field" label={t("field.field.main")} />

      <Radio
        row
        id="numberOfReferees"
        name="matchup.numberOfReferees"
        label={t("field.referee.numberOfReferees")}
        options={refereeCountOptions}
        disableBottomGutter
      />

      <FormControlWithLabel
        id="price-label"
        label={t("global.price.main")}
        disableBottomGutter
      >
        <Typography aria-labelledby="price-label" fontWeight="bold">
          {t("global.price.text", {
            sign: "€",
            ...getRefereePrices(watchNumberOfReferees),
          })}
        </Typography>
      </FormControlWithLabel>

      <Input id="comment" name="matchup.comment" label={t("field.comments")} />

      <Form.ActionsWrapper>
        <LoadingButton type="submit" loading={isLoadingPreorder}>
          {t("actions.submit")}
        </LoadingButton>
      </Form.ActionsWrapper>
    </Form>
  );
};

export default RefereeRequestForm;
