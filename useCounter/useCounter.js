import { useState } from "react"

export default function useCounter(initialValue) {
    const [counter, setCounter] = useState(initialValue || 10);

    const increment = (value = 1) => {
        setCounter(counter + value)
    }

    const decrement = (value = 1) => {
        if (counter === 0 || counter < 0) return;
        setCounter(counter - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}
