import { Button, Container, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { updateSearchTerm } from "../../../features/search/searchSlice";
import { useAppDispatch } from "../../../features/store";
import styles from "./jobs-filter.module.css";
interface JobsFilterProps {}

export const JobsFilter: FC<JobsFilterProps> = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();
  const handleSearch = () => dispatch(updateSearchTerm(searchTerm));

  return (
    <Container maxWidth="xl" sx={{ position: "sticky", top: 0 }}>
      <div className={styles.jobsfilter}>
        <TextField
          sx={{ flex: 1, width: "100%" }}
          id="outlined-basic"
          placeholder={t("job_filter.placeholder")}
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          {t("job_filter.button-text")}
        </Button>
      </div>
    </Container>
  );
};
