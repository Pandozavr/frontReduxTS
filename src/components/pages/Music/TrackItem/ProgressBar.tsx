import { FC, useState, useEffect } from 'react';
import styles from "../TraclItem.module.css";

interface ProgressBarType {
  changeTimeProgressBarOnClick: (e: React.MouseEvent<HTMLElement>) => void
  duration: number
  curTime: number
}

export const ProgressBar: FC<ProgressBarType> = ({changeTimeProgressBarOnClick, duration, curTime}) => {

  const [curTimeProcent, setCurTimeProcent] = useState(0);

  const curTimeInProcent = (sec: number): number => {
    let procent = Math.ceil((sec / duration) * 100);
    return procent;
  }; //получаем текущее время в процентах от общего времени трека
  useEffect(() => {
    setCurTimeProcent(curTimeInProcent(curTime));
  }, [curTime]); //в юзЭффекте вызываем предыдущую функцию с зависимостью на текущее время трека (нужно чтобы прогрессбар двигался)

  return (
    <div className={styles.progress} onClick={changeTimeProgressBarOnClick}>
      <div
        style={{
          backgroundColor: "rgba(91, 167, 254, 0.795)",
          width: curTimeProcent + "%",
          height: "30px",
        }}
      ></div>
    </div>
  );
};
