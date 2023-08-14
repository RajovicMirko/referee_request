import { Breadcrumbs, Link, styled } from "@mui/material";

const customProps = ["isActive"];
const shouldForwardProp = (name) => !customProps.includes(name);

export const BreadcrumbsStyled = styled(Breadcrumbs)(() => ({}));

export const BreadcrumbsLinkStyled = styled(Link, { shouldForwardProp })(
  ({ theme, isActive }) => ({
    cursor: isActive ? "not-allowed" : "pointer",
    color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
    textDecoration: "none",
    ":hover": {
      textDecoration: isActive ? "none" : "underline",
    },
  })
);
