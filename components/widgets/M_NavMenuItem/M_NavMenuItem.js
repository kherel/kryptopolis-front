import Link from "next/link";
import { PathContext } from "utils/context";

import { cssClassName } from "utils";
const cn = cssClassName("M_NavMenuItem");
import "./M_NavMenuItem.scss";
import { withRouter } from 'next/router'
import * as T from "prop-types";

const M_NavMenuItem = ({ children, href, router, type = 'normal'}) => {
  return (
    <Link href={href}>
      <a className={cn({type, active: href === router.pathname})}>{children}</a>
    </Link>
  );
};

M_NavMenuItem.propTypes = {

  children: T.node,
  type: T.oneOf([
    'normal',
    'admin'
  ]),
  href: T.string,
  router: T.object
};

M_NavMenuItem.defaultProps = {
  router: {}
};

export default withRouter(M_NavMenuItem);
