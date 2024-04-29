import { Box, Skeleton } from "@mui/material";
import { FC } from "react";

interface JobLoadingSkeletonProps {}

export const JobsLoadingSkeleton: FC<JobLoadingSkeletonProps> = () => {
  return (
    <Box>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  );
};
