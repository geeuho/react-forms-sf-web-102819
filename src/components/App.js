import React, { Component } from 'react'
import DisplayData from './DisplayData.js'
import Form from './Form.js'


export class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    handleFirstName = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastName = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    render() {
        return (
            <div>   
                <Form 
                    handleFirstName = {this.handleFirstName}
                    handleLastName = {this.handleLastName}
                    formData = {this.state}
                />
                <DisplayData 
                firstName = {this.state.firstName}
                lastName = {this.state.lastName}
                />
            </div>
        )
    }
}

export default App
