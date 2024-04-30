import { Box, Chip, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  languages: string[];
}

export const Languages: FC<Props> = ({ languages }) => (
  <Box>
    <Typography mb={1} fontSize={20}>
      Languages
    </Typography>

    <Box display={"flex"} flexWrap={"wrap"} gap={4}>
      {languages.map((language) => (
        <Chip label={language} />
      ))}
    </Box>
  </Box>
);
