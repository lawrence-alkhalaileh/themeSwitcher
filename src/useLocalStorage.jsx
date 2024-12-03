import { useEffect } from "react";
import { useState } from "react"

export default function useLocalStorage(key, defaultValue) {
    let currentValue;
    const [value, setValue] = useState(() => {
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue))
        } catch (err) {
            console.log(err)
            currentValue = defaultValue
        }
        return currentValue;
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue];
}
