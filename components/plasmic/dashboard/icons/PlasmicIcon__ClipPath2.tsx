// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClipPath2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClipPath2Icon(props: ClipPath2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M11.464 11.99L3.315 0 0 3.45l5.709 8.54h5.755z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClipPath2Icon;
/* prettier-ignore-end */
