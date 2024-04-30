import { Box, Grid } from "@mui/material";
import { FC } from "react";
import JobCard from "../../../components/common/job-card/job-card";
import { Job } from "../../../types/job";

interface SidebarProps {
  job: Job;
}

export const Sidebar: FC<SidebarProps> = ({ job }) => {
  return (
    <>
      <Box
        sx={{ display: { md: "flex", xs: "none" }, overflowY: "scroll" }}
        top={12}
        position={"sticky"}
        display={"flex"}
        flexDirection={"column"}
        height={720}
        gap={2}
        flex={1}
      >
        <JobCard small {...job} />
        <JobCard small {...job} />
        <JobCard small {...job} />
        <JobCard small {...job} />
        <JobCard small {...job} />
        <JobCard small {...job} />
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <JobCard {...job} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <JobCard {...job} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <JobCard {...job} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

