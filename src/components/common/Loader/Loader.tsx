import preloader from "../../../assets/images/DoubleRing.svg"
import styles from "./Loader.module.css"

export const Loader = () => {
    return (
        <div className={styles.loader}>
            <img alt="loading" src={preloader}/>
        </div>
    );
};