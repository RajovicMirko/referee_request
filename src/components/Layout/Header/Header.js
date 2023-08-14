import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Logo from "src/assets/images/logos/logo.jpeg";
import LogoHorizontal from "src/assets/images/logos/logo_horizontal.png";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs";
import useBreakpoints from "src/hooks/useBreakpoints";
import { LANGUAGE_OPTIONS } from "src/i18n";
import { LS_KEYS, lsSetItem } from "src/utils/localStorage";
import { AppBarStyled } from "./Header.style";

const Header = () => {
  const { isSmallScreen } = useBreakpoints();
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const handleClick = (option) => {
    changeLanguage(option.id);
    lsSetItem(LS_KEYS.language, option.id);
  };

  const tmpLogo = useMemo(
    () => (isSmallScreen ? Logo : LogoHorizontal),
    [isSmallScreen]
  );

  return (
    <AppBarStyled>
      <img alt="goe-logo" src={tmpLogo} />

      <Breadcrumbs
        options={LANGUAGE_OPTIONS}
        onClick={handleClick}
        activeId={language}
      />
    </AppBarStyled>
  );
};

export default Header;
