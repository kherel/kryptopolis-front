let _singleton = null

class SingletonComponent extends React.Component {
  constructor (data) {
    if(!_singleton) {
      super(data)
      _singleton = this
    }
    else
      return _singleton
  }

  get _props(){
    return this.props
  }

  testMethod = (obj) =>{
    console.log('test method invoke', obj)
    this.props.handleChange(obj)
  }

  render(){
    return(
      <div />
    )
  }
}

export default SingletonComponent