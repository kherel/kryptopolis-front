import React, { Component } from 'react'
import * as T from 'prop-types'
import A_H from 'widgets/A_H/A_H'
import {cssClassName} from 'utils/index'
import './O_Video.scss'
import Link from 'next/link'

const cn = cssClassName('O_Video')

class O_Video extends Component {

  render() {
    const { mix, ids, entities } = this.props
    return (
      <div className={cn([mix])}>
        <A_H mix={cn('title')} type='section'>Video</A_H>

        <div className={cn('items-grid')}>
          {
            ids.slice(0, 3).map(id => {
              const {video, title} = entities[id];
              return(
                <Link href={`/video?id=${id}`} key={id}>
                  <div className={cn('item')}>
                    <div className={cn('item-img')}>
                      <img src={`https://img.youtube.com/vi/${entities[id].video}/sddefault.jpg`} />
                    </div>

                      <A_H mix={cn('item-title')} type='widget-sm'>
                        {title}
                      </A_H>
                  </div>
                </Link>

              )
            })
          }
        </div>

      </div>
    );
  }
}

O_Video.propTypes = {
  mix: T.string
}

export default O_Video
