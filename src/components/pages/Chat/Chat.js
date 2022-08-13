import { useEffect, useRef, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { getUserName } from "../../../store/selectors/profileSelectors";
import styles from "./Chat.module.css";
import { DialogWindow } from "./DialogWindow/DialogWindow";
import { EnterMsg } from "./EnterMsg/EnterMsg";
import { UserList } from "./UserList/UserList";

export const Chat = () => {
  const socket = useRef();
  const [inputVal, setInputVal] = useState("");
  const [msgArr, setMsgArr] = useState([]);
  const [userArrState, setUserArr] = useState([]);
  const [connected, setConnected] = useState(false);
  const {getProfileThunk} = useActions()
//коннектимся
  useEffect(() => {
    getProfileThunk()
    if (!connected) {
      connect();
    }
  },[]);
  const userName = useTypedSelector(getUserName);
//закрываем коннект при анмаунте компонента
  useEffect(()=>{
    return () => {
      socket.current.close(1000)
    }
  },[])

  function connect() {
    //socket.current = new WebSocket("ws://localhost:5000");
    socket.current = new WebSocket("ws://45.147.178.191:5000");
    socket.current.onopen = () => {
      console.log("socket connected");
      setConnected(true);
      const message = {
        event: "connection",
        userName: userName,
      };
      socket.current.send(JSON.stringify(message));
    };
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if(message.event !== "users"){
        setMsgArr(prev => [...prev, message]);
      }
      if(message.event === "users"){
        setUserArr(message.users)
      }
    };
    socket.current.onclose = () => {
      console.log("Socket closed");
    };
    socket.current.onerror = () => {
      console.log("Error");
    };
  }

  const sendMsg = async () => {
    const message = {
        event: "message",
        id: new Date(),
        userName: userName,
        message: inputVal
    };
    socket.current.send(JSON.stringify(message));
    setInputVal("");
  };

  return (
    <div className={styles.chatWrapper}>
      <DialogWindow msgArr={msgArr} />
      <EnterMsg
        inputVal={inputVal}
        setInputVal={setInputVal}
        sendMsg={sendMsg}
      />
      <UserList userList={userArrState} />
    </div>
  );
};
