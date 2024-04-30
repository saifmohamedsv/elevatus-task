import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  requirements: string[];
}

export const Requirements: FC<Props> = ({ requirements }) => {
  const { t } = useTranslation();

  return (
    <Box mt={4}>
      <Typography fontSize={20}>{t("job_info.requirements")}</Typography>
      <ul>
        {requirements.map((res) => (
          <Typography component={"li"} fontSize={14} fontWeight={600}>
            {res}
          </Typography>
        ))}
      </ul>
    </Box>
  );
};
