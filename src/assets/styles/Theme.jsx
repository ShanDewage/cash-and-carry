// Theme.js
export const themeStyles = (theme) => ({
  heroRoot: {
    width: "100%",
    height: "100vh",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
  },
  heroContainer: {
    maxWidth: "800px",
    mx: "auto",
    textAlign: "left",
  },
  heroSubtitle: {
    fontSize: "1.25rem",
    color: theme.palette.text.secondary,
    mb: 2,
  },
  heroTitle: {
    ...theme.typography.worksTitle,
    color: theme.palette.text.titleMain,
    mb: 3,
  },
  heroDescription: {
    ...theme.typography.contentPara,
    color: theme.palette.text.primary,
    mb: 4,
  },
  shopButton: {
    fontSize: "1rem",
    fontWeight: 600,
    px: 4,
    py: 1.5,
    borderRadius: "8px",
    textTransform: "uppercase",
  },
});
