import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

// const studentComponents = props.students.map((student) => {
//   return (
//       <li >
//           <Student 
//           id = {student.id}
//           name={student.nameData} 
//           email={student.emailData}>
//           isPresent = {student.isPresentData}
//           onUpdate = {props.onUpdateStudent}
//           </Student>
//           </li>

const TaskList = (props) => {
  const getTaskList = props.tasks.map((task) => {
    return (
      <li key={task.id}>
        <Task
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          onUpdate = {props.onUpdateTask}
          onDelete = {props.onDeleteTask}
        />
      </li>
    );
  });
  return(<ul className="tasks__list no-bullet">{getTaskList}</ul>);
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    }) ),
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;