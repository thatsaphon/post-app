//เขียน state แบบ class

import React from 'react'

class ExtraCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        };
        // this.setState = this.setState.bind(this)
    }

    componentDidMount() {
        console.log('Mounting')
    }

    componentDidUpdate() {
        console.log('Component is updated')
    }

    componentWillUnmount() {
        console.log('Component is about to die')
    }

    handleAddCounter = () => {
        // console.log('Add counter')
        this.setState(function (state) {
            return { counter: state.counter + 1 }
        })
    }

    handledSubtractCounter = () => {
        // console.log('Subtract counter')
        this.setState(function (state) {
            return { counter: state.counter - 1 }
        })
    }

    handledResetCounter = () => {
        // console.log('Reset counter')
        this.setState(function (state) {
            return { counter: 0 }
        })
    }

    render() {
        return (
            <div>
                <h1>Extra Counter: {this.state.counter}</h1>
                <button onClick={this.handleAddCounter}>add</button>
                <button onClick={this.handledSubtractCounter}>subtract</button>
                <button onClick={this.handledResetCounter}>reset</button>
            </div>
        )
    }
}

export default ExtraCounter