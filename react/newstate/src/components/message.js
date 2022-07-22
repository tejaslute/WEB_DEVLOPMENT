import { React, Component } from 'react'

class Message1 extends Component {
    constructor() {
        super()
        this.state = {
            message: "hello mike "
        }
    }
    changemessage() {
        this.setState(
            {
                message: "Thanks for suscribe "
            }
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changemessage()}>Suscribe</button>

            </div>
        )
    }
}