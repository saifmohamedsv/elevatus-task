import { Box, Chip, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface SkillsProps {
  skills: string[];
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
  const { t } = useTranslation();
  return (
    <Box mt={4}>
      <Typography mb={1} fontSize={20}>
        {t("job_info.skills")}
      </Typography>

      <Box display={"flex"} flexWrap={"wrap"} gap={4}>
        {skills.map((skill) => (
          <Chip label={skill} />
        ))}
      </Box>
    </Box>
  );
};
