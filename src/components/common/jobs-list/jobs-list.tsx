import { Container, Pagination } from "@mui/material";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useGetJobsQuery } from "../../../features/jobs/jobsSlice";
import { RootState } from "../../../features/store";

interface Props {}

export const JobsList: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading, isError } = useGetJobsQuery({
    page: currentPage,
    limit: 10,
    itemQuery: useSelector((state: RootState) => state.search.term),
  });

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page - 1);
    console.log(e, page);
  };

  const totalPages = data?.results?.pages; // Assuming total pages from API response
  const jobs = data?.results?.jobs;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  if (!jobs?.length) return <div>Sorry, we did not found any jobs for you</div>;

  return (
    <Container maxWidth="xl">
      {JSON.stringify(jobs)}
      <Pagination
        sx={{ placeContent: "center", my: 4 }}
        count={totalPages}
        color="primary"
        page={currentPage + 1}
        onChange={handlePageChange}
      />
    </Container>
  );
};
