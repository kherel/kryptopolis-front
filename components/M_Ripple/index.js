import React, { PureComponent } from 'react'
import * as T from 'prop-types';

const wrapStyleDefault = {
  position: 'relative',
  display: 'inline-block',
  overflow: 'hidden',
}

class M_Ripple extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      rippleStyle: {
        position: 'absolute',
        borderRadius: '50%',
        opacity: 0,
        width: 35,
        height: 35,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        backgroundColor: props.color,
      },
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  handleClick = (ev) => {
    console.log('ev', ev)
    if (ev.stopPropagation) {
      ev.stopPropagation()
    }

    const { onClick, during } = this.props
    const {
      pageX,
      pageY,
      currentTarget: { offsetLeft, offsetTop, offsetWidth, offsetHeight },
    } = ev

    console.log('pageX', pageX)
    console.log('pageY', pageY)
    console.log('ev.clientY', ev.clientX)
    console.log('ev.clientX', ev.clientY)
    console.log('currentTarget', ev.currentTarget)
    console.log('currentTarget.offsetLeft', ev.currentTarget.offsetLeft)
    console.log('currentTarget.offsetTop', ev.currentTarget.offsetTop)
    console.log('currentTarget.offsetWidth', ev.currentTarget.offsetWidth)
    console.log('currentTarget.offsetHeight', ev.currentTarget.offsetHeight)

    const left = pageX - offsetLeft
    const top = pageY - offsetTop
    const size = Math.max(offsetWidth, offsetHeight)

    console.log('left', left)
    console.log('top', top)
    console.log('size', size)


    this.setState({
      rippleStyle: {
        ...this.state.rippleStyle,
        top,
        left,
        opacity: 1,
        transform: 'translate(-50%, -50%)',
        transition: 'initial',
      },
    })

    this.timer = setTimeout(() => {
      this.setState({
        rippleStyle: {
          ...this.state.rippleStyle,
          opacity: 1,
          transform: `scale(${size / 9})`,
          transition: `all ${during}ms`,
        },
      })
    })

    if (typeof onClick === 'function') {
      onClick(ev)
    }
  }

  render() {
    const { children, style, ...props } = this.props

    const { state, handleClick } = this

    const wrapStyle = {
      ...style,
      ...wrapStyleDefault,
    }

    return (
      <div {...props} style={wrapStyle} onClick={handleClick}>
        {children}
        <s style={state.rippleStyle} />
      </div>
    )
  }
}

M_Ripple.propTypes = {
  during: T.number,
  color: T.string,
  onClick: T.func,
}

M_Ripple.defaultProps = {
  during: 600,
  color: 'rgba(0, 0, 0, .8)',
  onClick: () => {},
}

export default M_Ripple