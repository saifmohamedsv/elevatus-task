import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useGetJobsQuery } from "../../../features/jobs/jobsSlice";
import { RootState } from "../../../features/store";
import JobCard from "../job-card/job-card";
import { JobsLoadingSkeleton } from "../jobs-loading-skeleton";
import styles from "./jobs-list.module.css";

interface Props {}

export const JobsList: FC<Props> = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  const searchTerm = useSelector((state: RootState) => state.search.term);

  const { data, isLoading, isError } = useGetJobsQuery({
    page: currentPage,
    limit: 10,
    itemQuery: searchTerm,
  });

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) =>
    setCurrentPage(page - 1);

  const totalPages = data?.results?.pages;
  const jobs = data?.results?.jobs || [];

  if (isError) return <div>Error Happened</div>;

  return (
    <Container maxWidth="xl">
      <Typography mb={4} mt={2} fontWeight={600} sx={{ fontSize: 28 }}>
        {t("job_list.title")}
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {(isLoading ? Array.from(new Array(20)) : jobs).map((job, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              {job && <JobCard {...job} />}
              {!job && <JobsLoadingSkeleton />}
            </Grid>
          ))}
        </Grid>
      </Box>

      <Pagination
        className={styles.pagination}
        count={totalPages}
        color="primary"
        page={currentPage + 1}
        onChange={handlePageChange}
      />
    </Container>
  );
};
