import React from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class TaskTableReact extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const data=[{
            task: 'clean fridge',
            urgency: 'high',
            estimatedTime: '20 minutes',
            enthusiasm: 'ok'},{
            task: 'take out trash',
            urgency: 'low',
            estimatedTime: '10 minutes',
            enthusiasm: 'whatever'},{
            task: 'dust fan',
            urgency: 'high',
            estimatedTime: '2 hours',
            enthusiasm: 'UGH No'}
        ]
        
        const columns = [{
            Header: 'Task',
            accessor: 'task'
        },{
            Header: 'Urgency',
            accessor: 'urgency'
        },{
            Header: 'Estimated Time Needed',
            accessor: 'estimatedTime'
        },{
            Header: 'Enthusiasm',
            accessor: 'enthusiasm'
            
        }]

        return(
            <ReactTable 
            data={data}
            columns={columns}
            />
        )
    }
}

export default TaskTableReact;
