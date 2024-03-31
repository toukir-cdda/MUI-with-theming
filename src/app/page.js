"use client";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  alpha,
} from "@mui/material";
import React, { useContext, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import TopNav from "../components/Navigation/TopNav";
import { CSFThemeContext, csfThemeOptions } from "../theme/Theme";
import ThemeAction from "../components/ThemeAction/Index";
import MuiIconWrapper from "../components/IconHandler/MuiIconWrapper";
import IconSearch from "../components/IconHandler/IconSearch";

export default function Home() {
  const { csfTheme, setTheme, setThemeMode } = useContext(CSFThemeContext);
  const [selectedIcon, setSelectedIcon] = useState("");
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <TopNav />
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
            value={csfTheme.theme.palette.mode}
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
        <Stack spacing={1} sx={{ pl: 3 }}>
          {csfThemeOptions.map((csfOption, index) => (
            <Button
              variant={"contained"}
              color={csfTheme.name === csfOption.name ? "secondary" : "inherit"}
              key={index}
              onClick={() => setTheme(csfOption)}
              sx={{
                color:
                  csfTheme.name === csfOption.name
                    ? "primary.contrastText()"
                    : "primary.text",
              }}
            >
              {csfOption.name}
            </Button>
          ))}
        </Stack>
      </Stack>
      {selectedIcon && (
        <MuiIconWrapper
          sx={{
            color: (theme) =>
              theme.palette.mode === "light"
                ? alpha(theme.palette.title.light, 0.9)
                : alpha(theme.palette.title.dark, 0.9),
          }}
        >
          {selectedIcon}
        </MuiIconWrapper>
      )}
      <Box>
        <IconSearch
          label="Select Icon"
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />
      </Box>
      <ThemeAction />
    </Box>
  );
}
