import { Dispatch, SetStateAction } from "react";

export interface Button {
    text: string;
    handler: (
        currentNum: string, 
        updateCurrentNum: Dispatch<SetStateAction<string>>,
        cachedNum: string, 
        updateCachedNum: Dispatch<SetStateAction<string>>,
        method: undefined | "+" | "-" | "/" | "x",
        updateMethod: Dispatch<SetStateAction<undefined | "+" | "-" | "/" | "x">>
    ) => void;
    customStyle?: Record<string, string>;
    customClass?: string | string[];
}