import { FC } from "react";
import { useParams } from "react-router-dom";

interface JobInformationPageProps {}

const JobInformationPage: FC<JobInformationPageProps> = () => {
  const { id } = useParams();
  return <div> {id} </div>;
};

export default JobInformationPage;
