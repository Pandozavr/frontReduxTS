import "./components/common/Input/Input.css";
import { Routes, Route } from "react-router-dom";
import { Chat } from "./components/pages/Chat/Chat";
import { Login } from "./components/pages/Login/Login";
import { Music } from "./components/pages/Music/Music";
import { Profile } from "./components/pages/Profile/Profile";
import { Register } from "./components/pages/Register/Register";
import { Users } from "./components/pages/Users/Users";
import { MainLayout } from "./routes/MainLayout";
import { NotFound } from "./components/pages/Error/NotFound";
import { AuthRequire } from "./routes/AuthRequire";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { getIsAuthValue } from "./store/selectors/authSelectors";

const App = () => {
  const isAuth = useTypedSelector(getIsAuthValue);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          <Route element={<AuthRequire isAuth={isAuth} />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<Users />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/music" element={<Music />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
