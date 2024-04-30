import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./language-switcher";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t("navbar.title")}
            </Typography>
            <LanguageSwitcher />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
