// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconReceiveStrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconReceiveStrokeIcon(props: IconReceiveStrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.75 3.75a.75.75 0 00-1.5 0v10.564l-2.845-2.845a.75.75 0 00-1.06 1.061l4.124 4.125a.75.75 0 001.061 0l4.125-4.125a.75.75 0 10-1.06-1.06l-2.845 2.844V3.75zM4.5 16.124a.75.75 0 00-1.5 0v2.063a2.812 2.812 0 002.812 2.812h12.375a2.812 2.812 0 002.812-2.812v-2.063a.75.75 0 10-1.5 0v2.063a1.313 1.313 0 01-1.312 1.312H5.812A1.312 1.312 0 014.5 18.187v-2.063z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconReceiveStrokeIcon;
/* prettier-ignore-end */
