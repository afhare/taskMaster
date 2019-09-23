import React from 'react';
import Task from '../components/Task'

class ToDoListForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form>
                <p><label for='task-name'>Task: </label>
                <input name='task-name' type='text'></input></p>
                
                <p><label for='task-time-estimate'>Estimated Time Needed: </label>
                <input name='task-time-estimate' type='number'></input>
                <select name='task-time-estimate-marker'>
                    <option>second(s)</option>
                    <option>minute(s)</option>
                    <option>hour(s)</option>
                    <option>day(s)</option>
                </select></p>
                
                <p><label for='task-urgency'>Urgency: </label>
                <select name='task-urgency'>
                    <option>None</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Vital</option>
                </select></p>
                
                <p><label for='task-enthusiasm'>Enthusiasm: </label>
                <select name='task-enthusiasm'>
                    <option>UGH NO</option>
                    <option>Nah</option>
                    <option>Fine</option>
                    <option>Whatever</option>
                    <option>Ok</option>
                    <option>Yes</option>
                    <option>Heck yeah!</option>
                </select></p>
            </form>
        )
    }
}

export default ToDoListForm;
