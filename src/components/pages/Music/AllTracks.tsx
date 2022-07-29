import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getAllTracks } from "../../../store/selectors/musicSelectors";
import { TrackItem } from './TrackItem';

export const AllTracks = () => {
  const music = useTypedSelector(getAllTracks);

  return (
    <>
      {music.map((track) => (
        <TrackItem
          key={track.track_id}
          artist={track.artist}
          trackName={track.track_name}
          fileName={track.file_name}
        />
      ))}
    </>
  );
};
