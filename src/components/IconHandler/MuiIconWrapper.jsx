import { createSvgIcon } from "@mui/material";
import React from "react";
import { CustomReactIcon } from "./IconComponent";

const MuiIconWrapper = ({ children, ...rest }) => {
  let ETIcon = <></>;

  if (typeof children === "string") {
    const svgIcon = createSvgIcon(
      <CustomReactIcon nameIcon={children} />,
      children
    );
    ETIcon = React.createElement(svgIcon.type, { ...svgIcon.props, ...rest });
  }

  if (typeof children === "object") {
    const svgIcon = createSvgIcon(children, "icon");
    ETIcon = React.createElement(svgIcon.type, { ...svgIcon.props, ...rest });
  }

  return <>{ETIcon}</>;
};

export default MuiIconWrapper;
