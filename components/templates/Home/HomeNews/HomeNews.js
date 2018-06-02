// import * as T from "prop-types";
import './HomeNews.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeNews')

const HomeNews = ({mix, ...props}) =>{
  return(
    <div className={cn()}>{children}</div>
  )
}

HomeNews.propTypes = {
};

HomeNews.defaultProps = {
}
export default HomeNews