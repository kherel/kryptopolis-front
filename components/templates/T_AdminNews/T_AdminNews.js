import { Component } from 'react';
import A_Container from "widgets/A_Container/A_Container";
import A_H from "widgets/A_H/A_H";
import A_Btn from "widgets/A_Btn/A_Btn";
import A_InputText from "widgets/A_InputText/A_InputText";
import O_AdminNewsItem from "./O_AdminNewsItem/O_AdminNewsItem";
// import * as T from "prop-types";
import './T_AdminNews.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('T_AdminNews')

class T_Admin_News extends Component {

  state = {}

  render() {

 //   const {} = this.props
 //   const {} = this.state

    return (
      <A_Container mix={cn()} padding='wide'>
        <A_H mix={cn('title')} type='article'>WIADOMOŚCI</A_H>

        <div className={cn('controls')}>
          <A_Btn size='md' theme='filled' color='yellow'>CREAT NEW</A_Btn>
          <div className={cn('search')}>
            <div className={cn('search-icon')} />
            <A_InputText
              mix={cn('search-input')}
              value=''
              placeholder='Find by name'
              handleChange={() => null}
            />
          </div>
        </div>

        <ul className={cn('items-list')}>
          {
            news.map(({id, date, title}) => (
              <O_AdminNewsItem
                key={id}
                mix={'item'}
                date={date}
                title={title}
              />
            ))
          }
        </ul>
      </A_Container>
    )
  }
}

T_Admin_News.propTypes = {
};

T_Admin_News.defaultProps = {
}

export default T_Admin_News

const news = [
  {
    id: 1,
    date: '2018-05-23T11:12:27Z',
    title: 'Tajemniczy okręt podwodny na Bałtyku? Z powodu działań Rosji w Szwedach budzi się duch Wikingów…'
  },
  {
    id: 2,
    date: '2018-05-23T11:12:27Z',
    title: 'Tajemniczy okręt podwodny na Bałtyku? Z powodu działań Rosji w Szwedach budzi się duch Wikingów…'
  },
  {
    id: 3,
    date: '2018-05-23T11:12:27Z',
    title: 'Tajemniczy okręt podwodny na Bałtyku? Z powodu działań Rosji w Szwedach budzi się duch Wikingów…'
  },
]