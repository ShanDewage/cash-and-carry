import { Link } from "react-router-dom";
import { Navbar as NextNavbar } from "@nextui-org/react";
import {
  Box,
  useTheme,
  IconButton,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect, useContext, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { themeStyles } from "../assets/styles/Theme";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

export default function Navbar() {
  const theme = useTheme();
  const styles = themeStyles(theme);
  const [click, setClick] = useState(false);
  const { mode, toggleMode } = useContext(ThemeContext);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Promotions", to: "#" },
    { label: "Delivery Saver", to: "#" },
    { label: "Recipes", to: "#" },
    { label: "Stores", to: "#" },
    { label: "News", to: "#" },
    { label: "About", to: "/about" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, sm: 4 },
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            style={{
              fontWeight: "bold",
              fontSize: "1.25rem",
              textDecoration: "none",
              color: theme.palette.text.primary,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <i className="fa-sharp fa-solid fa-feather-pointed" />
            Cash & Carry
          </Link>

          {/* Desktop Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              alignItems: "center",
            }}
          >
            {navLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={closeMobileMenu}
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                {label}
              </Link>
            ))}
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.mode === "dark" ? "#000" : "#fff",
                borderRadius: "6px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Sign up
            </Button>
            <IconButton
              onClick={() => toggleMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? (
                <WbSunnyIcon sx={styles.hamburgerButtonIcon} />
              ) : (
                <NightlightRoundIcon sx={styles.hamburgerButtonIcon} />
              )}
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton
              onClick={() => toggleMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? (
                <WbSunnyIcon sx={styles.hamburgerButtonIcon} />
              ) : (
                <NightlightRoundIcon sx={styles.hamburgerButtonIcon} />
              )}
            </IconButton>
            <IconButton onClick={handleClick}>
              {click ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      {click && (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            px: 2,
            py: 3,
            gap: 2,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[4],
            position: "absolute",
            top: "64px",
            width: "100%",
            zIndex: 1100,
          }}
        >
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={closeMobileMenu}
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
                fontWeight: 500,
              }}
            >
              {label}
            </Link>
          ))}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.mode === "dark" ? "#000" : "#fff",
              textTransform: "none",
              fontWeight: 600,
              mt: 1,
            }}
          >
            Sign up
          </Button>
        </Box>
      )}
    </>
  );
}
