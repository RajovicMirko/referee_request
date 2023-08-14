import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { LS_KEYS, lsGetItem } from "src/utils/localStorage";
import en from "./en";
import nl from "./nl";

const LANGUAGES = {
  en: "en",
  nl: "nl",
};

const FALLBACK_LANGUAGE_ID = LANGUAGES.en;

export const LANGUAGE_OPTIONS = [
  { id: LANGUAGES.en, label: "EN" },
  { id: LANGUAGES.nl, label: "NL" },
];

const resources = {
  [LANGUAGES.en]: en,
  [LANGUAGES.nl]: nl,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    ns: ["translation", "messages"],
    defaultNS: "translation",
    resources,
    lng: lsGetItem(LS_KEYS.language) ?? FALLBACK_LANGUAGE_ID,
    fallbackLng: FALLBACK_LANGUAGE_ID,

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const I18NProvider = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      {children}
    </I18nextProvider>
  );
};

export default I18NProvider;
