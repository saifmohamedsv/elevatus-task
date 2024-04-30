import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/layout";
import HomePage from "./pages/home";
import JobInformationPage from "./pages/job-information/job-information";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  const HeaderLayout = () => (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );

  const router = createBrowserRouter([
    {
      element: <HeaderLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "job/:id",
          element: <JobInformationPage />,
        },
      ],
    },
  ]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#051274",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
