import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  description: string;
}

export const Description: FC<Props> = ({ description }) => {
  const { t } = useTranslation();

  return (
    <Box mt={4}>
      <Typography fontSize={20}>{t("job_info.description")}</Typography>
      <Typography fontSize={16}>{description}</Typography>

      <Typography mt={4} mb={2} fontSize={16}>
        Key Responsibilities:
      </Typography>
      <ol>
        {Array.from(new Array(10)).map((res, idx) => (
          <Typography component={"li"} fontSize={14} mb={2} fontWeight={600}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            eligendi, quasi
          </Typography>
        ))}
      </ol>
    </Box>
  );
};
