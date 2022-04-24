import { Aside } from "../components/Aside";
import { Loader } from "../components/common/Loader/Loader";
import { Content } from "../components/Content";
import { Header } from "../components/Header";
import styles from "./MainLayout.module.css"

export const MainLayout = () => {
  let preloadValue = false;

  return (
    <div className={styles.appWrapper}>
      <Header />
      <Aside />
      {!preloadValue ? <Content /> : <Loader />}
    </div>
  );
};
