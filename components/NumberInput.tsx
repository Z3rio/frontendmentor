import { Buttons } from '@/utils/data';
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
}

export default function NumberInput({number, setNumber, cachedNumber, setCachedNumber, method, setMethod}: Props) {
    return <div className={styles.main}>
        {Buttons.map((btn: Button, idx: number) => {
            return <div 
                key={idx} 
                onClick={() => {
                    btn.handler(number, setNumber, cachedNumber, setCachedNumber, method, setMethod);
                }}
                className={`${styles.button}${btn.customClass !== undefined ? " " + styles[btn.customClass] : ""}`}
                style={btn.customStyle !== undefined ? btn.customStyle : {}}
            >
                {btn.text}
            </div>;
        })}
    </div>
}