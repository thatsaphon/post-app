import { useState, useEffect } from 'react'

function Counter(props) {
    useEffect(() => {
        console.log('Effect is running')
        return () => {
            //clean up function
            console.log('clean up function')
        }
    }, [])
    // console.log('out of effect')
    return (
        <div>
            <h1>Counter: {props.counter}</h1>
            <button onClick={() => { props.setCounter(props.counter + 1) }}>add</button>
            <button onClick={() => { props.setCounter(props.counter - 1) }}>subtract</button>
            <button onClick={() => { props.setCounter(0) }}>reset</button>
        </div>
    )
}

export default Counter