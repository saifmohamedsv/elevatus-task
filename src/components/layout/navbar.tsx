import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LanguageSwitcher } from "./language-switcher";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              onClick={() => navigate({ pathname: "/" })}
              variant="h6"
              component="div"
              sx={{ cursor: "pointer", flexGrow: 1 }}
            >
              {t("navbar.title")}
            </Typography>
            <LanguageSwitcher />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
