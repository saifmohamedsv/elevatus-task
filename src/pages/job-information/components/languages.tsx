import { Box, Chip, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  languages: string[];
}

export const Languages: FC<Props> = ({ languages }) => {
  const {t} = useTranslation();

  return (
    <Box>
      <Typography mb={1} fontSize={20}>
        {t("job_info.languages")}
      </Typography>

      <Box display={"flex"} flexWrap={"wrap"} gap={4}>
        {languages.map((language) => (
          <Chip label={language} />
        ))}
      </Box>
    </Box>
  );
};
