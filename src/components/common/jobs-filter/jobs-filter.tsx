import { Search } from "@mui/icons-material";
import { Button, Container, TextField } from "@mui/material";
import { FC, useState } from "react";
import { updateSearchTerm } from "../../../features/search/searchSlice";
import { useAppDispatch } from "../../../features/store";
import styles from "./jobs-filter.module.css";
interface JobsFilterProps {}

export const JobsFilter: FC<JobsFilterProps> = ({}) => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => dispatch(updateSearchTerm(searchTerm));

  return (
    <Container maxWidth="xl" sx={{ position: "sticky", top: 0 }}>
      <div className={styles.jobsfilter}>
        <TextField
          sx={{ flex: 1, width: "100%" }}
          id="outlined-basic"
          label="Job Title"
          placeholder="eg: React Developer"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="contained"
          startIcon={<Search />}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </Container>
  );
};
