import { Component } from 'react'
// import * as T from "prop-types"
import A_H from 'widgets/A_H/A_H'
import A_P from 'widgets/A_P/A_P'
import A_LabelTitle from 'widgets/A_LabelTitle/A_LabelTitle'
import A_Container from 'widgets/A_Container/A_Container'
import './NewsItem.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('NewsItem')

class NewsItem extends Component {

  render() {

    return (
      <A_Container mix={cn()} padding='wide'>
        <section className={cn('content')}>
          <A_H type='article' mix={cn('title')}>WARSZTAT „KRYPTOKSIĘGOWOŚĆ”, 15 LUTEGO W WARSZAWIE</A_H>
          <div className={cn('credentials')}>
            <A_LabelTitle size='lg' mix={cn('label')}>WIADOMOŚCI</A_LabelTitle>
            <span className={cn('author')}>Marek Marecki</span>
            <span className={cn('date')}>13 godz. ago</span>
          </div>
          <img className={cn('image')} src="/static/img/hot.jpg" />
          <A_P mix={cn('text')} type='article'>
            Warsztat „KryptoKsięgowość”, 15 lutego w WarszawiePodczas jednodniowych, intensywnych warsztatów będzie można dowiedzieć się jak rozliczyć przychody w obszarze kryptowalut m.in. mining (wydobywanie / kopanie kryptowalut), trading (gra na giełdzie), składanie i sprzedaż serwerów obliczeniowych (kryptokoparek). Obliczenia będą dokonywane na praktycznych przykładach, a rozliczenia zostaną „rozłożone” na czynniki pierwsze. Przekazane zostaną również informacje na temat prawidłowego rozliczenia dochodów w PIT. Warsztaty przeznaczone są głównie dla: właścicieli / pracowników biur rachunkowych, doradców podatkowych, samodzielnych księgowych, przedsiębiorców rozliczających się samodzielnie.
          </A_P>
          <div className={cn('share')}>Share:</div>
          <A_LabelTitle size='md' mix={cn('label')} hasBorder>WIĘCEJ</A_LabelTitle>
        </section>
        <aside className={cn('sidebar')}>

        </aside>
      </A_Container>
    )
  }
}

NewsItem.propTypes = {
}

NewsItem.defaultProps = {
}

export default NewsItem