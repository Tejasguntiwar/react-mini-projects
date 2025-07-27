import { useEffect, useState } from "react";

// This hook is a reusable way to store state in local storage so it persists even after a page refresh.

export default function UseLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(()=> {
        let currentValue; 
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        } catch (error) {
            console.log(error);
            currentValue = defaultValue;    
        }
        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value));
    }, [key,value]);

    return [value, setValue];
}