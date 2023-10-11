// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path50Icon(props: Path50IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M4.958 20H0V0h4.958v20z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Path50Icon;
/* prettier-ignore-end */
