import { NavLink } from 'react-router-dom'
import Styles from './header-styles.scss'

import React from 'react'

interface Props {
  currentRoute: string
}

const Header: React.FC<Props> = ({ currentRoute }) => {
  const isLinkDisabled = (route: string): boolean => {
    return currentRoute === route
  }

  return (
    <div className={Styles.headerWrap}>
      <NavLink
        to='/lotofacil'
        className={`${Styles.lotofacilLink} ${
          isLinkDisabled('/lotofacil') ? Styles.disabledLink : ''
        }`}
      >
        Lotofácil
      </NavLink>
      <NavLink
        to='/megasena'
        className={`${Styles.megasenaLink} ${
          isLinkDisabled('/megasena') ? Styles.disabledLink : ''
        }`}
      >
        Megasena
      </NavLink>
      <NavLink
        to='/quina'
        className={`${Styles.quinaLink} ${
          isLinkDisabled('/quina') ? Styles.disabledLink : ''
        }`}
      >
        Quina
      </NavLink>
    </div>
  )
}

export default Header
