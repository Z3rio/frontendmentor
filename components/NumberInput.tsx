import { Buttons, themeNames } from '@/utils/data';
import { Button } from '@/utils/structs';
import styles from '@styles/NumberInput.module.css'
import { Dispatch, SetStateAction } from 'react';

interface Props {
    number: string;
    setNumber: Dispatch<SetStateAction<string>>;
    cachedNumber: string;
    setCachedNumber: Dispatch<SetStateAction<string>>;
    method: undefined | "+" | "-" | "/" | "x";
    setMethod: Dispatch<SetStateAction<undefined | "+" | "-" | "/" | "x">>;
    theme: number;
}

export default function NumberInput({number, setNumber, cachedNumber, setCachedNumber, method, setMethod, theme}: Props) {
    function getClasses(classes?: string | string[]) {
        if (classes !== undefined) {
            if (typeof classes == "string") {
                return styles[classes]
            } else {
                let retVal: string = " "

                for (let i: number = 0; i < classes.length; i++) {
                    if (i > 0) {
                        retVal += " "
                    }

                    retVal += styles[classes[i]]
                }

                return retVal
            }
        } else {
            return ""
        }
    }

    return <div className={`${styles.main} ${styles[themeNames[theme]]}`}>
        {Buttons.map((btn: Button, idx: number) => {
            return <div
                key={idx} 
                onClick={() => {
                    btn.handler(number, setNumber, cachedNumber, setCachedNumber, method, setMethod);
                }}
                className={`${styles.button}${getClasses(btn.customClass)}`}
                style={btn.customStyle !== undefined ? btn.customStyle : {}}
            >
                {btn.text}
            </div>;
        })}
    </div>
}