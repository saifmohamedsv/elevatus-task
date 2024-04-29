import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Job } from "../../../types/job";
import styles from "./job-card.module.css";

interface JobCardProps extends Job {}

const JobCard: FC<JobCardProps> = ({ title, location, career_level }) => {
  const city = location.city || "No city to show";

  return (
    <Card className={styles.card} elevation={0} sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          {title}
        </Typography>

        <Box my={4}>
          <Typography sx={{ fontSize: 14 }} variant="h6">
            {city}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography sx={{ fontSize: 14 }} variant="h6">
            {career_level.length ? career_level : "No career level specified"}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
