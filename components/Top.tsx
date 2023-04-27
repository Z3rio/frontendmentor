import { themeNames } from "@/utils/data";
import styles from "@styles/Top.module.css"
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
    theme: number;
    setTheme: Dispatch<SetStateAction<number>>;
}

export default function Top({theme, setTheme}: Props) {
    return <div className={`${styles.top} ${styles[themeNames[theme]]}`}>
        <h1 className={styles.calc}>calc</h1>
        <span className={styles.theme}>theme</span>

        <div className={styles.selectorHolder}>
            <div className={styles.selectorTexts}>
                {[...Array(3)].map((x, i) =>
                    <span 
                        key={i} 
                        className={styles.selectorText} 
                        onClick={() => {
                            setTheme(i);
                            localStorage.setItem("theme", i.toString());
                        }}
                    >
                        {i + 1}
                    </span>
                )}
            </div>

            <div className={styles.selector}>
                {[...Array(3)].map((x, i) =>
                    <div
                        key={i}
                        className={`${styles.circle} ${i == theme ? " " + styles.active : ""}`}
                        onClick={() => {
                            setTheme(i);
                            localStorage.setItem("theme", i.toString());
                        }}
                    />
                )}
            </div>
        </div>
    </div>;
}