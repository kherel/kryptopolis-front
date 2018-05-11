// import * as T from "prop-types";
import Link from "next/link";
import { PathContext } from "utils/context";

import { cssClassName } from "utils";
const cn = cssClassName("M_NavMenuItem");
import "./M_NavMenuItem.scss";

const M_NavMenuItem = ({ children, href }) => {
  return (
    <PathContext.Consumer>
      {context => (
        <Link href={href}>
          <a className={cn({ active: href === context.pathName })}>{children}</a>
        </Link>
      )}
    </PathContext.Consumer>
  );
};

M_NavMenuItem.propTypes = {};

M_NavMenuItem.defaultProps = {};
export default M_NavMenuItem;
