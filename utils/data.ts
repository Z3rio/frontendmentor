import { Button } from "./structs";

export const Buttons: Button[] = [
    {
        text: "7",
        handler: () => {}
    },
    {
        text: "8",
        handler: () => {}
    },
    {
        text: "9",
        handler: () => {}
    },
    {
        text: "DEL",
        handler: () => {},
        customClass: "action",
        customStyle: {
            fontSize: "28px"
        }
    },
    
    {
        text: "4",
        handler: () => {}
    },
    {
        text: "5",
        handler: () => {}
    },
    {
        text: "6",
        handler: () => {}
    },
    {
        text: "+",
        handler: () => {}
    },

    {
        text: "1",
        handler: () => {}
    },
    {
        text: "2",
        handler: () => {}
    },
    {
        text: "3",
        handler: () => {}
    },
    {
        text: "-",
        handler: () => {}
    },
    
    {
        text: ".",
        handler: () => {}
    },
    {
        text: "0",
        handler: () => {}
    },
    {
        text: "/",
        handler: () => {}
    },
    {
        text: "x",
        handler: () => {}
    },

    {
        text: "RESET",
        handler: () => {},
        customStyle: {
            width: "calc(50% - 12px)",
            fontSize: "28px"
        },
        customClass: "action"
    },
    {
        text: "=",
        handler: () => {},
        customStyle: {
            width: "calc(50% - 12px)",
            fontSize: "28px"
        },
        customClass: "red"
    },
]