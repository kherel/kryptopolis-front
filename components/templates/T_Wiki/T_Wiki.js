import { Component } from 'react'
import A_Container from 'widgets/A_Container/A_Container'
import A_H from 'widgets/A_H/A_H'
import A_InputText from 'widgets/A_InputText/A_InputText'
import './T_Wiki.scss'
import {cssClassName} from 'utils'
const cn = cssClassName('T_Wiki')

class T_Wiki extends Component {

  render() {

    return (
      <A_Container mix={cn()} padding='wide'>
        <A_H mix={cn('title')} type='section'>Wiki</A_H>
        <div className={cn('controls')}>
          <ul className={cn('menu')}>
            {menu.map(item => {
              const isActive = item === activeItem
              return(
                <li
                  key={item}
                  className={cn('menu-item', {active: isActive})}
                >
                  {item}
                </li>
              )
            })}
          </ul>
          <div className={cn('search')}>
            <div className={cn('search-icon')} />
            <A_InputText
              mix={cn('search-input')}
              placeholder='Find by name'
              handleChange={() => (null)}
            />
          </div>
        </div>

        <article className={cn('article')}>
          <A_H mix={cn('article-title')} type='widget'>Header 1</A_H>
          <p className={cn('article-text')}>
            Ostatni hardfork SiaCoin miał miejsce 6 grudnia. Podczas gdy poprawka usprawniła wiele aspektów platformy Sia, a mianowicie wydajność alokacji pieniędzy, wydłużyła ona również czas oczekiwania na transakcje nawet do 30 minut. Tymczasem zaktualizowana wersja 1.3.1 ma na celu skrócenie czasu transakcji od bloku nr 139,000. Według raportu kolejny hardfork będzie prawdopodobnie miał miejsce w pierwszej połowie 2018 roku.
          </p>
          <h4 className={cn('article-subtitle')}>Header 2</h4>
          <p className={cn('article-text')}>
            Ostatni hardfork SiaCoin miał miejsce 6 grudnia. Podczas gdy poprawka usprawniła wiele aspektów platformy Sia, a mianowicie wydajność alokacji pieniędzy, wydłużyła ona również czas oczekiwania na transakcje nawet do 30 minut. Tymczasem zaktualizowana wersja 1.3.1 ma na celu skrócenie czasu transakcji od bloku nr 139,000. Według raportu kolejny hardfork będzie prawdopodobnie miał miejsce w pierwszej połowie 2018 roku.
          </p>
        </article>
      </A_Container>
    )
  }
}

export default T_Wiki

const menu = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z']

const activeItem = 'e'