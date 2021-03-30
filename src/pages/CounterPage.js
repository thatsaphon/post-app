import Counter from "../components/Counter"
import ExtraCounter from "../components/ExtraCounter"
import { useState } from 'react'

function CounterPage() {
    const [toggle, setToggle] = useState(true)
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>Counter page</h1>
            <button onClick={() => setToggle(!toggle)}>toggle</button>
            {/* {toggle && <ExtraCounter />} */}
            {toggle && <Counter
                counter={counter}
                setCounter={setCounter}
            />}
            <h1>ShowCounter: {counter}</h1>
        </div>
    )
}

export default CounterPage