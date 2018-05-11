// import * as T from "prop-types";
import './A_Link.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Link')
import Link from "next/link";

const A_Link = ({children, type, href}) =>{

  switch (type){
    case 'email':
      return <a href={`mailto:${href}?subject=kriptopolis.com`} target="_blank" className={cn()}>{children}</a>
    case 'external':
      return <a href={`mailto:${href}?subject=kriptopolis.com`} target="_blank" className={cn()}>{children}</a>
  }
  return(
    <Link href={href}>
      <a className={cn()}>{children}</a>
    </Link>
  )
}

A_Link.propTypes = {
};

A_Link.defaultProps = {
}
export default A_Link