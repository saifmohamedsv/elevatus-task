import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useGetJobsQuery } from "../../features/jobs/jobsSlice";
import { RootState } from "../../features/store";

interface Props {}

export const JobsList: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading, isError } = useGetJobsQuery({
    page: 0,
    limit: 10,
    itemQuery: useSelector((state: RootState) => state.search.term),
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = data?.results?.pages; // Assuming total pages from API response
  const jobs = data?.results?.jobs;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  if (!jobs?.length) return <div>Sorry, we did not found any jobs for you</div>;

  return <div>{JSON.stringify(jobs)}</div>;
};
