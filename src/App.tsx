import { Box } from "@mui/material";
import { JobsFilter, JobsList } from "./components/common";

function App() {
  return (
    <Box sx={{ minHeight: "200vh" }}>
      <JobsFilter />
      <JobsList />
    </Box>
  );
}

export default App;
