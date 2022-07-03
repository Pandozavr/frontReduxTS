import styles from "./EnterMsg.module.css";
import { btnVariant, Button } from "../../../common/Button/Button";
import { FC } from "react";

interface inputType {
  inputVal: string;
  setInputVal: (param: string) => void;
  sendMsg: () => void;
}

export const EnterMsg: FC<inputType> = ({ inputVal, sendMsg, setInputVal }) => {
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      sendMsg()
    }
  };

  return (
    <div className={styles.enterText}>
      <input
        onKeyDown={onKeyDown}
        value={inputVal}
        onChange={(event) => setInputVal(event.target.value)}
        type="text"
      />
      <Button name="Send" click={sendMsg} type={btnVariant.blue} />
    </div>
  );
};
