import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App";
import { Navbar } from "./components/layout";
import { store } from "./features/store";
import "./i18n/config.ts";
import "./index.css";
import JobInformationPage from "./pages/job-information";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);



root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
