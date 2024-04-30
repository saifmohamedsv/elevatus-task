import { Box } from "@mui/material";
import { FC } from "react";
import { JobsFilter, JobsList } from "../components/common";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <Box>
      <JobsFilter />
      <JobsList />
    </Box>
  );
};

export default HomePage;
