import { PathContext } from "utils/context";
import Link from "next/link";
import withRedux from "redux-store/withRedux";
import { initStore } from "redux-store/store"
import {cssClassName} from "utils/index";
const cn = cssClassName('test')
import './test.scss'
import { withRouter } from 'next/router'

const Page = props => {
  const href = '/'
  const href2 = '/admin/test'

  console.log(props)

  return <div>
    <Link href={"/"}>
      <a
        className={cn({active: href === props.router.pathname})}
      >index</a>
    </Link>
    <br />

    <Link href={href2}>
      <a
        className={cn({active: href2 === props.router.pathname})}
      >test</a>
    </Link>
  </div>
};

export default withRouter(Page)