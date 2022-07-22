import { FC } from "react";
import btnPlay from "../../../../assets/images/play.svg";
import btnPause from "../../../../assets/images/pause.svg";

interface BtnPlayType {
  isPlay: boolean
  onClick: ()=>void
}

export const BtnPlayPause: FC<BtnPlayType> = ({ isPlay, onClick }) => {
  return (
    <div onClick={onClick}>
      {!isPlay ? (
        <img alt="play" src={btnPlay} />
      ) : (
        <img alt="pause" src={btnPause} />
      )}
    </div>
  );
};
