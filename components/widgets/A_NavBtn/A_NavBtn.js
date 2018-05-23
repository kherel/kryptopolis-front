import React from "react";
import * as T from "prop-types";
import "./A_NavBtn.scss";
import Link from "next/link";
import { cssClassName } from "utils";
const cn = cssClassName("A_NavBtn");

const A_NavBtn = ({ children, theme, href, mix }) => (
  <Link href={href}>
    <a className={cn([mix], { theme })}>{children}</a>
  </Link>
);

export default A_NavBtn;

A_NavBtn.propTypes = {
  theme: T.oneOf(["rounded"]),
  href: T.string
};
