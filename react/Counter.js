import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    changeCounter = () => {
        this.setState((state) => ({
            count: state.count + 1
        }))
    }
    render() {
        return (
            <div>

                <button onClick={this.changeCounter}>Button is Clicked {this.state.count}</button>
            </div>
        )
    }
}

export default Counter
