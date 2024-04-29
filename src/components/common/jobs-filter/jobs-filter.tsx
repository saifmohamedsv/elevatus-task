import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { Container } from "../../layout";
import styles from "./jobs-filter.module.css";

interface JobsFilterProps {}

// const CustomSearch = styled(Button)`
//   background-color: ${(props) => (props.primary ? "blue" : "green")};
//   color: white;
//   border-radius: 8px;
//   padding: 10px 20px;
//   &:hover {
//     background-color: ${(props) => (props.primary ? "darkblue" : "darkgreen")};
//   }
// `;

export const JobsFilter: FC<JobsFilterProps> = ({}) => {
  return (
    <Container style={{ position: "sticky", top: 0 }}>
      <div className={styles.jobsfilter}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">Contained</Button>
      </div>
    </Container>
  );
};
