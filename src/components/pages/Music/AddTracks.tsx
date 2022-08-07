import { useForm, SubmitHandler } from "react-hook-form";
import { Button, btnVariant } from "../../common/Button/Button";
import { useActions } from "../../../hooks/useActions";
import "../../common/Input/Input.css";
import styles from "./AddTracks.module.css";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getAddTrackMsgType, getAddTrackMsgText } from '../../../store/selectors/musicSelectors';
import { Error } from "../../common/Error/Error";
import { BaseSyntheticEvent, useState } from 'react';

type Inputs = {
  trackName: string;
  artist: string;
  track: string;
};

export const AddTracks = () => {
  const { addTrack } = useActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const msgType = useTypedSelector(getAddTrackMsgType)
  const msgText = useTypedSelector(getAddTrackMsgText)
  const [fileName, setFileName] = useState("")

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addTrack(data.trackName, data.artist, data.track[0]);
  };

  const handleChange = (e:BaseSyntheticEvent) => {
    console.log(e.target.files[0].name)
    setFileName(e.target.files[0].name)
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Track Name"
          {...register("trackName")}
        />

        <input type="text" placeholder="Artist" {...register("artist")} />

        <label onChange={handleChange} className="inputFileUpl">
          {`Select Track: ${fileName}`}
          <input
            style={{ display: "none" }}
            type="file"
            {...register("track")}
          />
        </label>

        <Button type={btnVariant.blue} name="ADD TRACK" />
      </form>

      {msgText && <Error msgText={msgText} msgType={msgType} />}
    </div>
  );
};