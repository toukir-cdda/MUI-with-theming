// import { CustomReactIcon } from "./IconComponent";
"use client";
import React, { useState, useEffect } from "react";
import { CustomReactIcon } from "./IconComponent";
import {
  Box,
  CircularProgress,
  InputBase,
  InputLabel,
  List,
  Stack,
  alpha,
} from "@mui/material";
import { BiSearch } from "react-icons/bi";
import MuiIconWrapper from "./MuiIconWrapper";

const IconSearch = ({ label, selectedIcon, setSelectedIcon }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIcons, setFilteredIcons] = useState([]);
  const [loading, setLoading] = useState(false);

  // const HomeIcon = createSvgIcon(<CustomReactIcon nameIcon={selectedIcon} />, selectedIcon);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchFilteredIcons = async () => {
      try {
        if (searchQuery.length >= 3) {
          setLoading(true);
          const response = await fetch(
            `/api/icons?query=${encodeURIComponent(searchQuery)}`
          );
          const data = await response.json();
          setFilteredIcons(data.icons);
          setLoading(false);
        } else {
          setLoading(false);
          setFilteredIcons([]);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    // Debounce the search query
    const debounceTimeout = setTimeout(fetchFilteredIcons, 300);
    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  // Handle search change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setSelectedIcon(null);
    setIsDropdownOpen(true);
  };

  // Handle icon click
  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    setSearchQuery(icon);
    setIsDropdownOpen(false);
  };

  return (
    <Box
      component={"div"}
      sx={{
        position: "relative",
        margin: "auto",
      }}
    >
      {/* <div className="m-auto relative"> */}
      <InputLabel
        sx={{
          display: "block",
          fontSize: "0.875rem",
          color: "rgba(0, 0, 0, 0.54)",
          fontWeight: 500,
          lineHeight: "1.75",
          marginBottom: "0.5rem",
        }}
      >
        {label ? label : "Select"}
      </InputLabel>
      <Box
        component={"div"}
        sx={{
          position: "relative",
          width: "100%",
          padding: "0.5rem",
          border: "1px solid #ccc",
          borderRadius: `${
            filteredIcons.length > 0 && isDropdownOpen
              ? "0.375rem 0.375rem  0 0"
              : "0.375rem"
          } `,
          paddingLeft: "2.5rem",
        }}
      >
        <InputBase
          type="text"
          placeholder="Search icons..."
          value={selectedIcon ? selectedIcon : searchQuery}
          onChange={handleSearchChange}
          onClick={() => setIsDropdownOpen(true)}
          sx={{
            width: "100%",
            fontSize: "1rem",
            color: (theme) =>
              theme.palette.mode === "light"
                ? alpha(theme.palette.title.light, 0.9)
                : alpha(theme.palette.title.dark, 0.9),
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "0.5rem",
            transform: "translateY(-50%)",
          }}
        >
          {selectedIcon ? (
            <MuiIconWrapper
              sx={{
                mt: "0.36rem",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? alpha(theme.palette.title.light, 0.9)
                    : alpha(theme.palette.title.dark, 0.9),
              }}
            >
              {selectedIcon}
            </MuiIconWrapper>
          ) : (
            <MuiIconWrapper
              sx={{
                mt: "0.40rem",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? alpha(theme.palette.title.light, 0.9)
                    : alpha(theme.palette.title.dark, 0.9),
              }}
            >
              <BiSearch />
            </MuiIconWrapper>
          )}
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)",
          }}
        >
          {loading && (
            <CircularProgress
              size={20}
              sx={{
                mt: "0.40rem",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? alpha(theme.palette.primary.light, 0.9)
                    : alpha(theme.palette.primary.dark, 0.9),
              }}
            />
          )}
        </Box>
      </Box>

      {/* DROPDOWN */}
      {isDropdownOpen &&
        filteredIcons.length > 0 &&
        searchQuery.length >= 3 && (
          <Box
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              maxHeight: "500px",
              overflowY: "auto",
              borderTop: "none",
              borderLeft: "1px solid #ccc",
              borderRight: "1px solid #ccc",
              borderBottom: "1px solid #ccc",
              borderRadius: "0 0 0.375rem 0.375rem",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
              color: (theme) =>
                theme.palette.mode === "light"
                  ? alpha(theme.palette.title.light, 0.9)
                  : alpha(theme.palette.title.dark, 0.9),
            }}
          >
            <Stack>
              {filteredIcons.map((icon, index) => {
                return (
                  <IconListItem
                    key={index}
                    handleIconClick={handleIconClick}
                    icon={icon}
                  />
                );
              })}
            </Stack>
          </Box>
        )}

      {/* SELECTED ICO */}
      {/* {selectedIcon && (
        <div className="mt-2 flex items-center gap-2 text-lg font-semibold bg-green-700 text-white p-2 rounded-md">
          <p className="w-64">{selectedIcon}</p>
          <div>
            <CustomReactIcon nameIcon={selectedIcon} />
          </div>
        </div>
      )} */}
    </Box>
  );
};

export default IconSearch;

const IconListItem = ({ handleIconClick, icon }) => {
  const [isNotMatch, setIsNotMatch] = useState(false);
  return (
    <List
      onClick={() => handleIconClick(icon)}
      sx={{
        display: !isNotMatch ? "flex" : "none",
        cursor: "pointer",
        fontSize: "1rem",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem",
        "&:hover": {
          bgcolor: "#e0e0e053",
        },
      }}
    >
      {!isNotMatch && (
        <>
          <CustomReactIcon setIsNotMatch={setIsNotMatch} nameIcon={icon} />
          {icon}
        </>
      )}
    </List>
  );
};
