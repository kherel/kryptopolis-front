import * as T from 'prop-types'
import './A_Link.scss';
import {cssClassName} from 'utils'
import Link from 'next/link'
const cn = cssClassName('A_Link')

const A_Link = ({mix, children, type, href}) =>{

  switch (type){
    case 'email':
      return <a href={`mailto:${href}?subject=kriptopolis.com`} target="_blank" className={cn()}>{children}</a>
    case 'external':
      return <a href={`mailto:${href}?subject=kriptopolis.com`} target="_blank" className={cn()}>{children}</a>
    case 'markup':
      return (
        <Link href={href}>
          <a className={cn([mix])} dangerouslySetInnerHTML={{__html: children}} />
        </Link>
      )
  }
  return(
    <Link href={href}>
      <a className={cn([mix])}>{children}</a>
    </Link>
  )
}

A_Link.propTypes = {
  href: T.string.isRequired,
  children: T.node.isRequired,
  mix: T.string,
  type: T.oneOf(['email', 'external', 'markup']),
}

A_Link.defaultProps = {
}

export default A_Link