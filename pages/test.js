import { PathContext } from "utils/context";
import Link from "next/link";
import withRedux from "../redux-store/withRedux";
import { initStore } from "redux-store/store"
import {cssClassName} from "utils";
const cn = cssClassName('test')
import './test.scss'

const Page = props => {
  const href = '/'
  const href2 = '/test'

  return <div>
      <PathContext.Consumer>
        {
          context =>(
            <div>
              <Link href={"/"}>
                <a className={cn({active: href === context.pathName})}>index</a>
              </Link>
              <br />

              <Link href={"/test"}>
                <a className={cn({active: href2 === context.pathName})}>test</a>
              </Link>
            </div>
          )
        }

      </PathContext.Consumer>

  </div>
};

export default withRedux(initStore)(Page)