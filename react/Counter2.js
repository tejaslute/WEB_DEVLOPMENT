import React, { useState } from 'react'

function Counter2() {
    const initialCounter = 0;
    const [count, setCount] = useState(initialCounter);
    return (
        <div>
            count:{count}
            <button onClick={() => setCount(initialCounter)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter2
