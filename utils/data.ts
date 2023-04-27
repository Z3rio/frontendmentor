import { Button } from "./structs";
import bigDecimal from 'js-big-decimal';

export const Buttons: Button[] = [
    {
        text: "7",
        handler: (curr, setCurr) => {
            setCurr(curr + "7")
        }
    },
    {
        text: "8",
        handler: (curr, setCurr) => {
            setCurr(curr + "8")
        }
    },
    {
        text: "9",
        handler: (curr, setCurr) => {
            setCurr(curr + "9")
        }
    },
    {
        text: "DEL",
        handler: (curr, setCurr, cached, setCached) => {
            setCurr("");
        },
        customClass: ["action", "small"]
    },
    
    {
        text: "4",
        handler: (curr, setCurr) => {
            setCurr(curr + "4")
        }
    },
    {
        text: "5",
        handler: (curr, setCurr) => {
            setCurr(curr + "5")
        }
    },
    {
        text: "6",
        handler: (curr, setCurr) => {
            setCurr(curr + "6")
        }
    },
    {
        text: "+",
        handler: (curr, setCurr, cached, setCached, method, setMethod) => {
            if (curr.trim().length !== 0) {
                setCurr("");
                setCached(curr);
                setMethod("+");
            }
        }
    },

    {
        text: "1",
        handler: (curr, setCurr) => {
            setCurr(curr + "1")
        }
    },
    {
        text: "2",
        handler: (curr, setCurr) => {
            setCurr(curr + "2")
        }
    },
    {
        text: "3",
        handler: (curr, setCurr) => {
            setCurr(curr + "3")
        }
    },
    {
        text: "-",
        handler: (curr, setCurr, cached, setCached, method, setMethod) => {
            if (curr.trim().length !== 0) {
                setCurr("");
                setCached(curr);
                setMethod("-");
            }
        }
    },
    
    {
        text: ".",
        handler: (curr, setCurr) => {
            if (curr.trim().length !== 0 && curr.toString().indexOf(".") == -1) {
                setCurr(curr + ".")
            }
        }
    },
    {
        text: "0",
        handler: (curr, setCurr) => {
            if (curr !== "0") {
                setCurr(curr + "0")
            }
        }
    },
    {
        text: "/",
        handler: (curr, setCurr, cached, setCached, method, setMethod) => {
            if (curr.trim().length !== 0) {
                setCurr("");
                setCached(curr);
                setMethod("/");
            }
        }
    },
    {
        text: "x",
        handler: (curr, setCurr, cached, setCached, method, setMethod) => {
            if (curr.trim().length !== 0) {
                setCurr("");
                setCached(curr);
                setMethod("x");
            }
        }
    },

    {
        text: "RESET",
        handler: (curr, setCurr, cached, setCached) => {
            setCurr("");
            setCached("");
        },
        customClass: ["action", "small", "half"]
    },
    {
        text: "=",
        handler: (curr, setCurr, cached, setCached, method, setMethod) => {
            if (method !== undefined && curr.trim().length !== 0 && cached.trim().length !== 0) {
                let newNumber: bigDecimal;

                switch (method) {
                    case "+":
                        newNumber = new bigDecimal(curr).add(new bigDecimal(cached));
                        break;
                    case "-":
                        newNumber = new bigDecimal(curr).subtract(new bigDecimal(cached));
                        break;
                    case "x":
                        newNumber = new bigDecimal(curr).multiply(new bigDecimal(cached));
                        break;
                    case "/":
                        newNumber = new bigDecimal(curr).divide(new bigDecimal(cached), 8);
                        break;
                }

                setCurr(newNumber.getValue())
                setCached("")
                setMethod(undefined)
            }
        },
        customClass: ["red", "small", "half"]
    },
]

export const themeNames: string[] = ["blue", "white", "purple"];