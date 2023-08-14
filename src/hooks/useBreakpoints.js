const { useMediaQuery } = require("@mui/material");

const useBreakpoints = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isBigScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return {
    isMobile,
    isTablet,
    isSmallScreen: isMobile || isTablet,
    isBigScreen,
    isLargeScreen,
  };
};

export default useBreakpoints;
