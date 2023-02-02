import React, { useEffect, useState }from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';
const kBaseUrl = "https://task-list-api-c17.herokuapp.com/";

const transformResponse = (task) => {
  const {
    task_id: id,
    title,
    is_complete:isComplete
  } = task;
  return {id,title,isComplete};
};

const getAllTasks = () => {
  return axios.get(`${kBaseUrl}/tasks`)
  .then((response) => {
    return response.data.map(transformResponse);
  })
  .catch((error) => {
    console.log(error);
  });
};

const markCompletedWithId = (id) => {
  return axios
  .patch(`${kBaseUrl}/tasks/${id}/mark_complete`)
  .then((response) => {
    return transformResponse(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
};

const markIncompletedWithId = (id) => {
  return axios
  .patch(`${kBaseUrl}/tasks/${id}/mark_incomplete`)
  .then((response) => {
    return transformResponse(response.data)
  })
  .catch((error) => {
    console.log(error);
  });
};

  //const App = () => {
  // const [taskData, setTaskData] = useState([
  //   {
  //     id: 1,
  //     title: 'Mow the lawn',
  //     isComplete: false,
  //   },
  //   {
  //     id: 2,               
  //     title: 'Cook Pasta',
  //     isComplete: true,
  //   },
  // ]);
  const App = () => {
    const [taskData, setTaskData] = useState([]);
    const fetchTasks = () => {
      getAllTasks().then((tasks) => {
        setTaskData(tasks);
      });
      };
      useEffect(() =>{
        fetchTasks();
      }, []);
      
    
  
    const updateTaskData = updatedTask => {
    const tasks = taskData.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });
    setTaskData(tasks);
  };
    const deleteOneTask = (id) => {
      const allRemainingTasks = [];
      for (const task of taskData){
        if (task.id === id){
          allRemainingTasks.push(task);
        }
      }
    };
      return (
        <div className="App">
          <header className="App-header">
            <h1>Ada&apos;s Task List</h1> 
          </header>
          <main>
            <div>
              {
                <TaskList 
                tasks={taskData}
                onUpdateTask={updateTaskData}
              />
              }
            </div>
          </main>
        </div>
      );
    
  };
    export default App;