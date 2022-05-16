import { FC } from "react"
import styles from "./Error.module.css"

interface errorType{
  textError: string
}

export const Error: FC<errorType> = ({textError}) => {
  return (
    <div className={styles.wrapper}>{textError}</div>
  )
}
