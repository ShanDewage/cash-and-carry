import { Box, Typography, Button, useTheme } from "@mui/material";
import { themeStyles } from "../assets/styles/Theme";

export default function HeroSection() {
  const theme = useTheme();
  const styles = themeStyles(theme);

  return (
    <Box
      sx={{
        ...styles.heroRoot,
        backgroundImage: `url('./images/home.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Box sx={styles.heroContainer}>
        <Typography variant="h3" sx={styles.heroSubtitle}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="h1" sx={styles.heroTitle}>
          Sit sunt consequatur nam facilis odit est nobis galisum.
        </Typography>
        <Typography variant="body1" sx={styles.heroDescription}>
          Lorem ipsum dolor sit amet. Est nesciunt unde et rerum obcaecati a
          rerum voluptatem 33 exercitationem adipisci est Quis recusandae ad
          iste quisquam eum voluptate fugiat! Ea molestiae magnam est laudantium
          neque et laborum tempore ut sint rerum aut odit eligendi.
        </Typography>
        <Button variant="contained" color="primary" sx={styles.shopButton}>
          Shop
        </Button>
      </Box>
    </Box>
  );
}
