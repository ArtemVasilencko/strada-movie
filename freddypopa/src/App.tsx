import { FilmApp } from "./pages/FilmAppPage/FilmApp";
import { FilmAboutPageContainer } from "./containers/filmAboutPageContainer/FilmAboutPageContainer";
import { NotFoundPage } from "./pages/NotFoundPage/NotFound";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App(): React.ReactNode {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<FilmApp />} />
        <Route path="/filmAbout/:id" element={<FilmAboutPageContainer />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}
