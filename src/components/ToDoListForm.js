import React from 'react';
import Task from '../components/Task'

class ToDoListForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <form>
                <p><label for='task-title'>Task: </label>
                <input name='task-title' type='text'></input></p>
                
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
                    <option value='none'>None</option>
                    <option value='low'>Low</option>
                    <option value='medium'>Medium</option>
                    <option value='high'>High</option>
                    <option value='vital'>Vital</option>
                </select></p>
                
                <p><label for='task-enthusiasm'>Enthusiasm: </label>
                <select name='task-enthusiasm'>
                    <option value='active-avoid'>Actively Avoiding</option>
                    <option value='not-interested'>Not Interested</option>
                    <option value='tolerate-negative'>Tolerate (negative)</option>
                    <option value='neutral'>Neutral</option>
                    <option value='tolerate-positive'>Tolerate (positive)</option>
                    <option value='accept'>Accept</option>
                    <option value='eager'>Eager</option>
                </select></p>

                <p><label for='task-category'>Category: </label>
                <select multiple>
                    <option value='work'>Work</option>
                    <option value='personal'>Personal</option>
                    <option value='other'>Other</option>
                    <option value='routine'>Routine</option>
                    <option value='project'>Project</option>
                    <option value='random'>Random</option>
                    <option value='essential'>Essential</option>
                </select></p>

                <input type='submit'/>
            </form>
        )
    }
}

export default ToDoListForm;
