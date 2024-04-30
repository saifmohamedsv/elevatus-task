import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FC } from "react";

interface Props {}

// Creating a custom MUI paper
const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "1px solid var(--border)",
  borderRadius: "8px",
}));

export const Summary: FC<Props> = () => (
  <Box mt={4}>
    <Typography mb={1} fontSize={20}>
      Summary
    </Typography>
    <CustomPaper elevation={0}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">Salary Range: 500 - 400</Typography>
          <Typography variant="body1">
            Industry: Hospital & health care
          </Typography>
          <Typography variant="body1">
            Experience Required: 1 year(s) minimum
          </Typography>
        </Grid>

        <Grid item xs={12} md={1}>
          <Divider orientation="vertical" />
        </Grid>

        <Grid item xs={12} md={5}>
          <Typography variant="body1">Major: Accounting</Typography>
          <Typography variant="body1">Career Level: Junior</Typography>
          <Typography variant="body1">Minimum GPA: 80</Typography>
        </Grid>
      </Grid>
    </CustomPaper>
  </Box>
);
