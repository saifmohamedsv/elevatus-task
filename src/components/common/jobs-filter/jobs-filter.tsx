import { Box, Button, Container, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { updateSearchTerm } from "../../../features/search/searchSlice";
import { useAppDispatch } from "../../../features/store";

interface JobsFilterProps {}

export const JobsFilter: FC<JobsFilterProps> = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();
  const handleSearch = () => dispatch(updateSearchTerm(searchTerm));

  return (
    <Container maxWidth="xl" sx={{ position: "sticky", top: 0 }}>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={4}
        bgcolor={"white"}
        p={4}
        border={1}
        borderColor={"darkgray"}
        sx={{
          borderRadius: "0 0 1rem 1rem",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
        }}
      >
        <TextField
          sx={{ flex: 1, width: "100%" }}
          id="outlined-basic"
          placeholder={t("job_filter.placeholder")}
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          sx={{ borderRadius: "0.5rem", padding: "10px 20px" }}
          variant="contained"
          onClick={handleSearch}
        >
          {t("job_filter.button-text")}
        </Button>
      </Box>
    </Container>
  );
};
