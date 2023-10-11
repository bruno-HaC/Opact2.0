// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClipPathIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClipPathIcon(props: ClipPathIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M12.77 0H6.906L0 7.244v6.036L12.77 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClipPathIcon;
/* prettier-ignore-end */
