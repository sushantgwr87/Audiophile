import { useState } from 'react'

const CounterButton = ({ handleCallback }) => {

    const [count, setCount] = useState(1);

    const handleDecrement = () => {
        if (count === 0)
            return;
        setCount(count - 1);
        handleCallback && handleCallback(count - 1)
    }
    const handleIncrement = () => {
        setCount(count + 1);
        handleCallback && handleCallback(count + 1)
    }

    return (
        <div className="counter_button">
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default CounterButton