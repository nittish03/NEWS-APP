import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { themeSettings } from "./theme";
import Navbar from "./components/Navbar";
import News from "./components/News"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<News                pageSize={5}
                apiKey={apiKey}
                key="general0"
                country="in"
                category="general" />} />
          <Route path="/register" element={<Register />} />
          <Route
            exact
            path="/technology"
            element={
              <News
                pageSize={5}
                apiKey={apiKey}
                key="technology"
                country="in"
                category="technology"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                pageSize={5}
                apiKey={apiKey}
                key="business"
                country="in"
                category="business"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                pageSize={5}
                apiKey={apiKey}
                country="in"
                key="entertainment"
                category="entertainment"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                pageSize={5}
                apiKey={apiKey}
                country="in"
                key="sports"
                category="sports"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                pageSize={5}
                apiKey={apiKey}
                country="in"
                key="science"
                category="science"
              ></News>
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                pageSize={5}
                apiKey={apiKey}
                key="health"
                country="in"
                category="health"
              ></News>
            }
          ></Route>
        </Routes>
        <Footer></Footer>

      </ThemeProvider>
    </>
  );
}

export default App;