import { Dispatch, SetStateAction } from "react";

export interface Button {
    text: string;
    handler: (
        currentNum: number, 
        updateCurrentNum: Dispatch<SetStateAction<number>>,
        cachedNum: number, 
        updateCachedNum: Dispatch<SetStateAction<number>>,
    ) => void;
    customStyle?: Record<string, string>;
    customClass?: string;
}