import { Box } from "@mui/material";
import { JobsFilter, JobsList } from "./components/common";

function App() {
  return (
    <Box>
      <JobsFilter />
      <JobsList />
    </Box>
  );
}

export default App;
