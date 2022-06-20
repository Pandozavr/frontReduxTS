import styles from '../Chat.module.css'
import { btnVariant, Button } from '../../../common/Button/Button';

export const EnterMsg = () => {
  return (
    <div className={styles.enterText}>
      <input type="text" />
      <Button name='Send' type={btnVariant.blue}/>
    </div>
  )
}
