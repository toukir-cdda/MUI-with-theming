import loadable, { LoadableComponent } from "@loadable/component";
import { IconBaseProps } from "react-icons/lib";
import React from "react";

export function CustomReactIcon({
  nameIcon,
  className,
  setIsNotMatch,
  ...rest
}) {
  const lib = nameIcon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLocaleLowerCase();

  const ElementIcon = loadable(
    () => import(`react-icons/${lib}/index.js`).catch(() => null),
    {
      resolveComponent: (module) => {
        try {
          if (module && module[nameIcon]) {
            setIsNotMatch && setIsNotMatch(false);
            return module[nameIcon];
          }
          throw new Error(`Component '${nameIcon}' not found in module.`);
        } catch (error) {
          setIsNotMatch && setIsNotMatch(true);
          return () => "Icon not found";
        }
      },
    }
  );

  return (
    // <div className={className} {...rest}>
    <ElementIcon {...rest} />
    // </div>
  );
}
