import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, btnVariant } from '../../common/Button/Button';
import { useActions } from '../../../hooks/useActions';

type Inputs = {
  trackName: string
  artist: string
  track: string
};

export const AddTracks = () => {

  const { addTrack } = useActions();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    addTrack(data.trackName, data.artist, data.track[0])    
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Track Name"
          {...register("trackName")}
        />

        <input
          type="text"
          placeholder="artist"
          {...register("artist")}
        />
        
        <input
          type="file"
          {...register("track")}
        />

        <Button type={btnVariant.blue} name="ADD TRACK" />
      </form>
    </div>
  );
};
