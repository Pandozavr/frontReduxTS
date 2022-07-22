import { useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { TrackItem } from './TrackItem';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getAllTracks } from '../../../store/selectors/musicSelectors';

export const Music = () => {

  const {getMusichunk} = useActions()
  const music = useTypedSelector(getAllTracks)

  useEffect(()=>{
    getMusichunk()
  }, [])

  return (
    <div>
       {music.map(track => <TrackItem
                key={track.track_id}
                artist={track.artist}
                trackName={track.track_name}
                fileName={track.file_name}
            />)
            }
    </div>
  )
}
