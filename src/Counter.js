import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0)
    //return array = [state, setState]
    function handleAddCounter() {
        console.log('Add counter')
        setCounter(counter + 1)
    }
    function handleSubtractCounter() {
        console.log('Subtract counter')
        setCounter(counter - 1)
    }
    function handleResetCounter() {
        console.log('Reset counter')
        setCounter(counter - counter)
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleAddCounter}>Add</button>
            <button onClick={handleSubtractCounter} >Subtract</button>
            <button onClick={handleResetCounter}>Reset</button>
        </div>
    );
}
export default Counter