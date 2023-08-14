import { useMemo } from "react";
import { Trans, useTranslation } from "react-i18next";
import RefereeRequestForm from "src/components/Form/RefereeRequestForm/RefereeRequestForm";
import {
  RefereeRequestFormWrapper,
  RefereeRequestLink,
  RefereeRequestParagraph,
  RefereeRequestParagraphBold,
  RefereeRequestParagraphWrapper,
  RefereeRequestStyled,
  RefereeRequestTitle,
} from "./RefereeRequest.style";

const RefereeRequest = () => {
  const { t } = useTranslation("translation", { keyPrefix: "refereeRequest" });

  const QuoteAnchor = useMemo(
    () => (
      <RefereeRequestLink
        href="https://www.iklaatfluiten.nl/offerte/"
        target="_blank"
      />
    ),
    []
  );

  const FaqAnchor = useMemo(
    () => (
      <RefereeRequestLink
        href="https://www.iklaatfluiten.nl/faq/"
        target="_blank"
      />
    ),
    []
  );

  return (
    <RefereeRequestStyled>
      <RefereeRequestTitle>{t("title")}</RefereeRequestTitle>

      <RefereeRequestParagraphWrapper>
        <RefereeRequestParagraph>{t("paragraph1")}</RefereeRequestParagraph>
        <RefereeRequestParagraphBold>
          {t("paragraph2")}
        </RefereeRequestParagraphBold>
        <RefereeRequestParagraph>{t("paragraph3")}</RefereeRequestParagraph>
        <RefereeRequestParagraph>
          <Trans
            i18nKey="refereeRequest.paragraph4"
            components={{
              quote_anchor: QuoteAnchor,
              faq_anchor: FaqAnchor,
            }}
          />
        </RefereeRequestParagraph>
        <RefereeRequestParagraph>{t("paragraph5")}</RefereeRequestParagraph>
      </RefereeRequestParagraphWrapper>

      <RefereeRequestFormWrapper>
        <RefereeRequestForm />
      </RefereeRequestFormWrapper>
    </RefereeRequestStyled>
  );
};

export default RefereeRequest;
