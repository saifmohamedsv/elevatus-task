import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  requirements: string[];
}

export const Requirements: FC<Props> = ({ requirements }) => (
  <Box mt={4}>
    <Typography fontSize={20}>Requirements</Typography>
    <ul>
      {requirements.map((res) => (
        <Typography component={"li"} fontSize={14} fontWeight={600}>
          {res}
        </Typography>
      ))}
    </ul>
  </Box>
);
