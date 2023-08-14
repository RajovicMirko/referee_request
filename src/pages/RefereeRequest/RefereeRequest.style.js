const { styled, Box, Typography, Link } = require("@mui/material");

export const RefereeRequestStyled = styled(Box)(() => ({
  width: "100%",
  maxWidth: "740px",
  margin: "0 auto",
  padding: "20px 20px 40px 20px",
}));

export const RefereeRequestTitle = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: "15px",
}));

export const RefereeRequestParagraphWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  marginTop: "20px",
}));

export const RefereeRequestParagraph = styled(Typography)(() => ({
  fontSize: "15px",
}));

export const RefereeRequestParagraphBold = styled(RefereeRequestParagraph)(
  () => ({
    fontWeight: 700,
  })
);

export const RefereeRequestLink = styled(Link)(() => ({
  cursor: "pointer",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
}));

export const RefereeRequestFormWrapper = styled(Box)(() => ({
  marginTop: "20px",
}));
