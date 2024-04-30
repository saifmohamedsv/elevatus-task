import { Box, Chip, Typography } from "@mui/material";
import { FC } from "react";

interface SkillsProps {
  skills: string[];
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <Box mt={4}>
      <Typography mb={1} fontSize={20}>
        Required Skills
      </Typography>

      <Box display={"flex"} flexWrap={"wrap"} gap={4}>
        {skills.map((skill) => (
          <Chip label={skill} />
        ))}
      </Box>
    </Box>
  );
};
