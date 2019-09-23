import React from 'react';
import Task from '../components/Task'
import ToDoListForm from '../components/ToDoListForm'
import TaskTable from '../containers/TaskTable'
import TaskTableReact from '../containers/TaskTableReact';

class HomeContainer extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            <ul className="toDoList">
                <Task completed={true}/>
                <Task completed={false}/>
                <Task completed={false}/>
            </ul>

            <h3>v1 of Task Table</h3>
            <TaskTable/>
            <hr/>
            <h3>v2 of Task Table</h3>
            <TaskTableReact />

            <h2>Add to your to-do list:</h2>
            <ToDoListForm />
            </div>
        )
    }
}

export default HomeContainer;
