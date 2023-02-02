import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

// const onAttendanceButtonClick = () => {
//   const updatedStudent = {
//       id: props.id,
//       nameData: props.name,
//       emailData: props.email,
//       isPresentData: !props.isPresent
//   };

//   props.onUpdate(updatedStudent);
// };

// const nameColor = props.isPresent ? 'green' : 'red';

const Task = (props) => {
  const OnClickOnTask = () => {
    const updatedTask ={
      id: props.id,
      title: props.title,
      isComplete: !props.isComplete,
    };
    props.onUpdate(updatedTask);
    
  };

  const deleteSelectedTask = () => {
    console.log('Deleting task with id=', props.id);
    props.onDelete(props.id);
    
  };
  
  const buttonClass = props.isComplete ? '--completed': '';

  return (
    <li className="tasks__item">
      <button className={`tasks__item__toggle${buttonClass}`} onClick={OnClickOnTask}>{props.title}</button>
      <button className="tasks__item__remove button"
        onClick={deleteSelectedTask(props.id)}
      >x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;