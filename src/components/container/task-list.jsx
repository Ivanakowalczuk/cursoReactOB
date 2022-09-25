import React from 'react';
import PropTypes from 'prop-types';

import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    const defaultTask = new Task('Primera Tarea', 'Esta es la primera tarea', false, LEVELS.normal);
    return (
        <div>
            <div>
                Your Tasks:
            </div>
            {/*Hacer for/map para renderizar la lista de tareas   */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};



export default TaskListComponent;
