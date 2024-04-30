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
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Job } from "../../../types/job";
import styles from "./job-card.module.css";

interface JobCardProps extends Job {
  small?: boolean;
}

const JobCard: FC<JobCardProps> = ({
  small = false,
  title,
  location,
  career_level,
  uri,
}) => {
  const city = location.city || "No city to show";
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate({ pathname: `/job/${uri}` })}
      className={styles.card}
      sx={{ minHeight: small ? "240px" : "320px" }}
      elevation={0}
    >
      <CardContent>
        <Typography fontSize={18} color="text.primary">
          {title}
        </Typography>
        <Box my={small ? 1 : 4}>
          <Typography fontSize={14} variant="h6">
            {city}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography fontSize={14} variant="h6">
            {career_level.length ? career_level : "No career level specified"}
          </Typography>
        </Box>
      </CardContent>
      {!small && (
        <CardActions>
          <Button
            onClick={() => navigate({ pathname: `/job/${uri}` })}
            variant="outlined"
            size="medium"
          >
            {t("job_list.action-button-text")}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default JobCard;
