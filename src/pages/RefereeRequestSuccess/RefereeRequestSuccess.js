import { useTranslation } from "react-i18next";

const RefereeRequestSuccess = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "refereeRequestSuccess",
  });

  return <div>{t("test")}</div>;
};

export default RefereeRequestSuccess;
