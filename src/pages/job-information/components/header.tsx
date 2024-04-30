import { Star } from "@mui/icons-material";
import { Box, Chip, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  title: string;
  posted_at: string;
}

export const Header: FC<Props> = ({ title, posted_at }) => (
  <Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography fontSize={20}>{title}</Typography>
      <Star color="warning" />
      <Chip label={"Full Time"} />
    </Box>
    <Typography fontSize={14}>
      Posted on: {new Date(posted_at).toLocaleString()}
    </Typography>
  </Box>
);
