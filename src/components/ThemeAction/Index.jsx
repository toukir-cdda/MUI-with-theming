"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Fab,
  Grid,
  Menu,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsIcon from "@mui/icons-material/Settings";
import { CSFThemeContext, csfThemeOptions, shadows } from "../../theme/Theme";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ThemeAction() {
  const [open, setOpen] = React.useState(false);
  const { csfTheme, setTheme, setThemeMode } =
    React.useContext(CSFThemeContext);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{ width: 250, px: 2, zIndex: 999 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* <Toolbar /> */}
      <Typography
        variant="h5"
        textAlign={"center"}
        fontWeight={"bold"}
        sx={{
          fontSize: 20,
          mb: 2,
          color: "text.primary",
          letterSpacing: 1,
          textTransform: "uppercase",
          borderBottom: 1,
          borderColor: "divider",
        }}
        component="div"
        gutterBottom
      >
        Theme Options
      </Typography>

      <Stack>
        <Typography
          sx={{
            m: 1,
            p: 1,
            bgcolor: "text.secondary",
            color: "background.paper",
          }}
        >
          Choose a Mode:
        </Typography>
        <Box>
          <ToggleButtonGroup
            size="small"
            value={csfTheme?.theme?.palette.mode}
            sx={{ ml: 3, bgcolor: "background.paper" }}
          >
            <ToggleButton value="light" onClick={() => setThemeMode("light")}>
              <LightModeIcon />
            </ToggleButton>
            <ToggleButton value="dark" onClick={() => setThemeMode("dark")}>
              <DarkModeIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Typography
          sx={{
            m: 1,
            p: 1,
            bgcolor: "text.secondary",
            color: "background.paper",
          }}
        >
          Choose a theme:
        </Typography>
        <Grid
          container
          gap={2}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ flexGrow: 1, px: 1, py: 2 }}
        >
          {csfThemeOptions.map((csfOption, index) => (
            <Grid
              // xs={1}
              // color={csfTheme.name === csfOption.name ? 'secondary' : 'inherit'}
              key={index}
            >
              <Item
                onClick={() => setTheme(csfOption)}
                sx={{
                  color:
                    csfTheme.name === csfOption.name
                      ? "primary.contrastText()"
                      : "primary.text",
                  backgroundColor: csfOption.palette.primary.main,
                  p: 1.3,
                  "&:hover": {
                    cursor: "pointer",
                  },
                  boxShadow:
                    csfTheme.name === csfOption.name
                      ? `0 0 0px 3px ${csfOption.palette.secondary.main}`
                      : `0 0 0px 1px ${csfOption.palette.primary.main}`,
                }}
              />
              {/* {csfOption.name} */}
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );

  return (
    <Box>
      <ToggleButtonGroup size="small">
        <Fab
          size="small"
          onClick={toggleDrawer(true)}
          color="inherit"
          sx={{
            position: "absolute",
            right: 40,
            bottom: 40,
            boxShadow: shadows[1],
            bgcolor: (theme) =>
              theme.palette.mode === "light"
                ? alpha(theme.palette.common.black, 0.05)
                : alpha(theme.palette.common.white, 0.05),
            color: (theme) =>
              theme.palette.mode === "light"
                ? alpha(theme.palette.primary.light, 0.9)
                : alpha(theme.palette.primary.dark, 0.9),
            "&:hover": {
              bgcolor: (theme) => alpha(theme.palette.common.black, 0.1),
            },
            transform: {
              rotate: 360,
            },
            animation: "spin 1.7s linear infinite",
            "@keyframes spin": {
              from: {
                transform: "rotate(0deg)",
              },
              to: {
                transform: "rotate(360deg)",
              },
            },
          }}
        >
          <SettingsIcon />
        </Fab>
      </ToggleButtonGroup>

      <Menu
        open={open}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              bgcolor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.card.main
                  : theme.palette.card.dark,

              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: -10,
              "& .MuiAvatar-root": {
                // width: 32,
                // height: 32,
                // ml: -0.5,
                // mr: 1,
                // paddingTop: 0
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                bottom: -10,
                right: 40,
                width: 10,
                height: 10,

                bgcolor: (theme) =>
                  theme.palette.mode === "light"
                    ? theme.palette.card.main
                    : theme.palette.card.dark,
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
              "& .MuiList-padding": {
                // paddingTop: 0
              },
            },
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {DrawerList}
      </Menu>
    </Box>
  );
}
