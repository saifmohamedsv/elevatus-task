import {
  Container,
  Divider,
  Paper,
} from "@mui/material";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetJobByUriQuery } from "../../features/jobs/jobSlice";
import { Job } from "../../types/job";
import {
  Description,
  Header,
  Languages,
  Requirements,
  Skills,
  Summary,
} from "./components";
import styles from "./job-information.module.css";

interface JobInformationPageProps {}

// Define static job objnect
const job: Job = {
  uuid: "ac895877-a8e9-46c4-a08d-1cc95095ab9c",
  title: "new hide test",
  company_uuid: "900a776e-a060-422e-a5e3-979ef669f16b",
  url: "https://salahat.elevatustesting.xyz/jobs/new-hide-test-1699171327",
  is_top: true,
  gpa: 0,
  years_of_experience: [],
  geolocation: {
    latitude: 0,
    longitude: 0,
  },
  willing_to_travel: false,
  willing_to_relocate: false,
  owns_a_car: false,
  visa_sponsorship: false,
  salary: {
    min: 0,
    max: 0,
  },
  gender: "male",
  description: `Position Overview: The Content Writer will be responsible for
  producing high-quality written content for various marketing
  channels, including websites, blogs, social media, email campaigns,
  and more. This role requires a passion for storytelling, a knack for
  research, and the ability to adapt content to different platforms
  and target audiences.`,
  requirements: [
    "Bachelor's degree in Accounting, Finance, or a related field.",
    "Bachelor's degree in Accounting, Finance, or a related field.",
  ],
  translations: [],
  skills: ["Problem Solving", "React.js", "Web Design", "Figma"],
  uri: "new-hide-test-1699171327",
  posted_at: "2023-11-05 08:02:07",
  score: 0,
  is_applied: false,
  applied_at: null,
  outside: false,
  has_profile: false,
  outside_key: null,
  hidden_columns: ["city"],
  job_type: [],
  degree: [],
  industry: [],
  major: [],
  nationality: [],
  career_level: [],
  languages: ["English", "Arabic"],
  location: {
    city: "test city",
    country: "amman",
  },
  category: ["ssss"],
};

const JobInformationPage: FC<JobInformationPageProps> = () => {
  const { id: uri } = useParams();
  const {
    // data: job,
    refetch,
  } = useGetJobByUriQuery(uri as string);

  useEffect(() => {
    refetch();
  }, [uri, refetch]);

  return (
    <Container className={styles.contianer} maxWidth="xl">
      {/* Side Bar */}
      <Paper elevation={0} className={styles["information-paper"]}>
        <Header title={job.title} posted_at={job.posted_at} />
        <Description description={job.description} />
        <Requirements requirements={job.requirements} />
        <Summary />
        <Skills skills={job.skills} />
        <Divider sx={{ my: 4 }} />
        <Languages languages={job.languages} />
      </Paper>
    </Container>
  );
};

export default JobInformationPage;
