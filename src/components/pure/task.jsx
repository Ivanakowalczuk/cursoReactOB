import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';


const TaskComponent = ({ task }) => {
    return (
        <div>
            <h3>
                Name: { task.name }
            </h3>
            <h3>
                Description: { task.description }
            </h3>
            <h3>
                Level: { task.level }
            </h3>
            <h5>
                This task is: { task.completed ? 'Completed' : 'Pending'}
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
 task: PropTypes.instanceOf(Task),
};


export default TaskComponent;
