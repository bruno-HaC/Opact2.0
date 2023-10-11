// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconAddStrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconAddStrokeIcon(props: IconAddStrokeIconProps) {
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
          "M3.67 8.576A8.954 8.954 0 003 12.037c0 4.736 3.757 8.945 8.982 8.963 5.077.017 8.974-4.036 9.018-8.9a8.954 8.954 0 00-2.58-6.416A9.002 9.002 0 0012.032 3a9.023 9.023 0 00-6.407 2.64A8.974 8.974 0 003.67 8.576zm8.256 11.32c-4.652-.108-7.897-3.871-7.81-8.042a7.87 7.87 0 012.39-5.468 7.914 7.914 0 015.549-2.23c4.689.104 7.907 3.879 7.828 8-.082 4.329-3.574 7.74-7.957 7.74zm-.656-7.313h.173l.008.002v2.878a.511.511 0 00.397.466.542.542 0 00.695-.412 1.2 1.2 0 00.013-.216v-2.555l.003-.071a1.38 1.38 0 00.004-.092h2.696c.064.001.129-.002.193-.01a.506.506 0 00.46-.402.53.53 0 00-.418-.677.966.966 0 00-.216-.02h-2.725V8.623a.5.5 0 00-.418-.5.535.535 0 00-.663.39.946.946 0 00-.023.24v2.568l-.003.072c-.001.027-.003.055-.003.086H8.736a1.242 1.242 0 00-.142 0c-.21.026-.388.098-.478.314-.127.297.004.648.297.744.1.031.204.047.31.046h2.547z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconAddStrokeIcon;
/* prettier-ignore-end */
