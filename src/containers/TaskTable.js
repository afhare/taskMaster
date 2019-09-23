import React from 'react';

class TaskTable extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <table>
                <tr>
                    <th>Task</th>
                    <th>Urgency</th> 
                    <th>Estimated Time Needed</th>
                    <th>Enthusiasm Level</th>
                </tr>
                <tr>
                    <td>Laundry</td>
                    <td>Medium</td> 
                    <td>2 hours</td>
                    <td>Ok</td>
                </tr>
                <tr>
                    <td>Take Out Trash</td>
                    <td>High</td> 
                    <td>15 minutes</td>
                    <td>Whatever</td>
                </tr>
                <tr>
                    <td>Check Mail</td>
                    <td>Low</td> 
                    <td>5 minutes</td>
                    <td>Whatever</td>
                </tr>
                <tr>
                    <td>Clean Bathroom</td>
                    <td>Medium</td> 
                    <td>20 minutes</td>
                    <td>Ok</td>
                </tr>
            </table>
        )
    }
}

export default TaskTable;
