import { NavLink } from 'react-router-dom'
import styles from "./TwoTabRoute.module.css"
import { FC } from 'react'
import "./active.css"

interface TwoTabRouteType {
  pathTo_1: string
  pathTo_2: string
  name_1: string
  name_2: string
}

export const TwoTabRoute: FC<TwoTabRouteType> = ({name_1, name_2, pathTo_1, pathTo_2}) => {
  return (
    <div className={styles.twoTabRouteWrapper}>
    <div>
      <NavLink to={pathTo_1}>{name_1}</NavLink>
    </div>
    <div>
      <NavLink to={pathTo_2}>{name_2}</NavLink>
    </div>
  </div>
  )
}
