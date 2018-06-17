import React from 'react'
import {shallow, mount, render} from 'enzyme'

const hoc = Component => class A extends React.Component {

  state = {
    n: 1
  }

  test(){
    this.setState({n:2})
    console.log('hello')
  }


  render(){
    return (
      <Component hocProps = 'hoc' />
    )
  }
};



class B extends React.Component {
  state ={
    b: 2
  }

  render(){
    console.log(this.props.hocProps)
    return (
      <div>hello</div>
    )
  }
};

describe('test hoc', () => {
  it.only('test', ()=>{
    const Test = hoc(B)
    const Hoc = shallow(<Test />)
    const instanceHoc = Hoc.instance()

    instanceHoc.test()
    console.log(Hoc.state())
  })
})