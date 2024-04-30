import { Box } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { JobsFilter, JobsList } from "./components/common";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  return (
    <Box>
      <JobsFilter />
      <JobsList />
    </Box>
  );
}

export default App;
