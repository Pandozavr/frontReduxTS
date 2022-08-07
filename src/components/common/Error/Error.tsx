import { FC } from "react"
import "./Error.css"


interface errorType{
  msgText: string | null
  msgType: string | null
}

export const Error: FC<errorType> = ({msgText, msgType}) => {

  const msgClasses = ['wrapper', msgType];

  return (
    <div className={msgClasses.join(' ')}>{msgText}</div>
  )
}
