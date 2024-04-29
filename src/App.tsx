import { useEffect } from "react";
import "./App.css";
import { useGetJobsQuery } from "./features/jobs/jobsSlice";

function App() {
  const {
    data: jobs,
    isLoading,
    isError,
  } = useGetJobsQuery({ page: 0, limit: 10 });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  console.log(jobs);

  return <div className="App"></div>;
}

export default App;
