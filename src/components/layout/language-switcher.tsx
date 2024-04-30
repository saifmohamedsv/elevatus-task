import { useTranslation } from "react-i18next";

import { Button } from "@mui/material";
import { FC } from "react";

interface LanguageSwitcherProps {}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = () => {
  const { i18n } = useTranslation();

  return (
    <Button
      onClick={(e) =>
        i18n.changeLanguage(i18n.resolvedLanguage === "ar" ? "en" : "ar")
      }
      color="inherit"
    >
      {i18n.resolvedLanguage === "ar" ? "en" : "ar"}
    </Button>
  );
};
