import { FC, useState } from "react";
import { useGetJobsQuery } from "../../features/jobs/jobsSlice";

interface Props {}

export const JobsList: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading, isError } = useGetJobsQuery({ page: 0, limit: 10 });

  const totalPages = data?.results.pages; // Assuming total pages from API response

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const jobs = data?.results.jobs;

  return <div>{JSON.stringify(jobs)}</div>;
};
