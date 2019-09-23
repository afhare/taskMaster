import React from 'react';

class Task extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
            <li className={this.props.completed ? "complete" : "incomplete"}>This is a to-do list item stand-in!</li>
        )
    }
}

export default Task;
