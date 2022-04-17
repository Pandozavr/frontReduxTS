import React from 'react';
// @ts-ignore
import preloader from "../../../assets/images/DoubleRing.svg";
// @ts-ignore
import styles from "./Loader.module.css"

export const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={preloader}/>
        </div>
    );
};