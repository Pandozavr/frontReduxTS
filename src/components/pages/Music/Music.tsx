import { useEffect, useState } from 'react';
import { useActions } from '../../../hooks/useActions';
import styles from './Music.module.css';
import { AddTracks } from './AddTracks';
import { AllTracks } from './AllTracks';

export const Music = () => {

  const {getMusichunk} = useActions()
  
  const [isAdd, setIsAdd] = useState(false)

  const activeAddTab = () => {
    setIsAdd(true)
  }
  const activeAllTrackTab = () => {
    setIsAdd(false)
  }

  useEffect(()=>{
    getMusichunk()
  }, [])

  return (
    <div>
      <div className={styles.btnMenuTracks}>
        <div onClick={activeAllTrackTab}>All Tracks</div>
        <div onClick={activeAddTab}>Add Tracks</div>
      </div>
      {isAdd ? <AddTracks /> : <AllTracks />}
    </div>
  )
}
