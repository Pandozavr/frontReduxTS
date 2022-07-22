import iconVolume from "../../../../assets/images/volume.svg";
import { FC } from "react";
import styles from "../TraclItem.module.css";

interface VolumeBarType {
  volume: number;
  changeVolume: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const VolumeBar: FC<VolumeBarType> = ({ volume, changeVolume }) => {
  return (
    <div className={styles.VolumeBar}>
      <input onChange={changeVolume} value={volume} type="range" />
      <img alt="volume" src={iconVolume} />
    </div>
  );
};
