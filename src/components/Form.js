import React from 'react';

class Form extends React.Component {
 
  render() {
    return (
      <form>
        <input type="text" onChange={event => this.props.handleFirstName(event)}/>
        <input type="text" onChange={event => this.props.handleLastName(event)}/>
        <input type= "submit"/>
      </form>
    )
  }
}

export default Form;