import styles from "@styles/Top.module.css"
import { useState } from "react";

export default function Top() {
    const [theme, setTheme] = useState<number>(0);

    return <div className={styles.top}>
        <span className={styles.calc}>calc</span>
        <span className={styles.theme}>theme</span>

        <div className={styles.selectorHolder}>
            <div className={styles.selectorTexts}>
                {[...Array(3)].map((x, i) =>
                    <span 
                        key={i} 
                        className={styles.selectorText} 
                            onClick={() => {
                            setTheme(i);
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
                        }}
                    />
                )}
            </div>
        </div>
    </div>;
}