import { useRef, useState, FC, useCallback } from "react";
import { FILE_URL } from "../../../API/API";
import styles from "./TraclItem.module.css";
import { BtnPlayPause } from "./TrackItem/BtnPlayPause";
import { ProgressBar } from "./TrackItem/ProgressBar";
import { VolumeBar } from "./TrackItem/VolumeBar";
import { TrackTime } from "./TrackItem/TrackTime";

interface TrackItem {
  artist: string;
  trackName: string;
  fileName: string;
}

export const TrackItem: FC<TrackItem> = ({ artist, fileName, trackName }) => {
  const songRef = useRef<HTMLAudioElement>(null);

  const [isPlay, setIsPlay] = useState(false);
  const [volume, setVolume] = useState(100);
  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);

  const play = () => {
    if (null !== songRef.current) {
      if (!isPlay) {
        setIsPlay(true);
        songRef.current.play();
      } else {
        setIsPlay(false);
        songRef.current.pause();
      }
    }
  }; //плэй/пауза
  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (null !== songRef.current) {
      songRef.current.volume = Number(e.target.value) / 100;
      setVolume(Number(e.target.value));
    }
  }; //громкость
  const getDuration = () => {
    if (null !== songRef.current) {
      setDuration(Math.ceil(songRef.current.duration));
    }
  }; //получаем общую длительность трека в секундах
  const TimeUpd = () => {
    if (null !== songRef.current) {
      setCurTime(Math.ceil(songRef.current.currentTime));
      if(curTime === duration){
        setIsPlay(false)
      }
    }
  }; //получаем текущее время трека в секундах(т.е. при проигрывании срабатывает каждую секунду)
  const changeTimeProgressBarOnClick = (e: React.MouseEvent<HTMLElement>) => {
    let timeInProc = Math.ceil(((e.clientX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth) * 100);    
    let timeInSec = Math.ceil((timeInProc / 100) * duration);
    if (null !== songRef.current) {
      songRef.current.currentTime = timeInSec;
    }
  }; //(перемотка по клику)
  //расчитываем процент куда кликнул пользователь на прогресс баре, переводим в секунды и меняем текущее время на аудиодорожке

  return (
    <div className={styles.trackWrapper}>
      <div>
        <b>{`${artist} - ${trackName}`}</b>
      </div>
      <audio
        onLoadedMetadata={getDuration}
        onTimeUpdate={TimeUpd}
        src={FILE_URL + fileName}
        ref={songRef}
      ></audio>
      <BtnPlayPause isPlay={isPlay} onClick={play}/>
      <ProgressBar curTime={curTime} duration={duration} changeTimeProgressBarOnClick={changeTimeProgressBarOnClick} />
      <TrackTime durTime={duration} curTime={curTime} />
      <VolumeBar changeVolume={changeVolume} volume={volume} />
    </div>
  );
};
