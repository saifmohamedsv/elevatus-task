import { Container, Pagination, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useGetJobsQuery } from "../../../features/jobs/jobsSlice";
import { RootState } from "../../../features/store";
import styles from "./jobs-list.module.css";

interface Props {}

export const JobsList: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading, isError } = useGetJobsQuery({
    page: currentPage,
    limit: 10,
    itemQuery: useSelector((state: RootState) => state.search.term),
  });

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) =>
    setCurrentPage(page - 1);

  const totalPages = data?.results?.pages;
  const jobs = data?.results?.jobs;

  if (isLoading) return "Loading...";

  if (isError) return "Error Happened";

  if (!jobs?.length) return "Sorry, we can't find any jobs for you";

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" my={4} fontWeight={900}>
        Recent Openings
      </Typography>
      {JSON.stringify(jobs)}
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
