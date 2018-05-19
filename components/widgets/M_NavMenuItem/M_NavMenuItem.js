// import * as T from "prop-types";
import Link from "next/link";
import { PathContext } from "utils/context";

import { cssClassName } from "utils";
const cn = cssClassName("M_NavMenuItem");
import "./M_NavMenuItem.scss";
import { withRouter } from 'next/router'

const M_NavMenuItem = ({ children, href, router }) => {
  return (
    <Link href={href}>
      <a className={cn({ active: href === router.pathname })}>{children}</a>
    </Link>
  );
};

M_NavMenuItem.propTypes = {};

M_NavMenuItem.defaultProps = {
  router: {}
};

export default withRouter(M_NavMenuItem);
