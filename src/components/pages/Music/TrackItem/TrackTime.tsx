import { FC, useState, useEffect } from 'react';


interface TrackTimeType{
  durTime: number
  curTime: number
}

export const TrackTime: FC<TrackTimeType> = ({durTime, curTime}) => {

  const [newFormatCurTime, setNewFormatCurTime] = useState("")

  const normFormatTime = (dur:number) => {
    let min = Math.trunc(dur / 60) //получаем к-во полных минут
    let sec = dur % 60 //получаем остаток секунд
    if(sec.toString().length === 1){
      return "0" + min + " : " + "0" + sec;
    } else {
      return "0" + min + " : " + sec;
    }
  } //Отображаем общее время трека воспроизведения в формате 00:00
  const time = normFormatTime(durTime)
  useEffect(()=>{
    setNewFormatCurTime(normFormatTime(curTime))
  },[curTime])

  return (
    <div>
      {newFormatCurTime} / {time}
    </div>
  )
}
