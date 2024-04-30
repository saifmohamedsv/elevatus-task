import { Container } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";

interface JobInformationPageProps {}

const JobInformationPage: FC<JobInformationPageProps> = () => {
  const { id } = useParams();
  return <Container maxWidth="xl"> {id} </Container>;
};

export default JobInformationPage;
