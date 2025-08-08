import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";
import { themeStyles } from "./assets/styles/Theme";
import { useTheme } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  const theme = useTheme();
  const styles = themeStyles(theme);

  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;
