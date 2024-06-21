import './App.css';
import { useState } from 'react';
import TaskList from './components/TaskList';
import CompletedList from './components/CompletedList';

function App() {
  const [content, setContent] = useState("");
  const [todoItems, setTodoItems] = useState([
    {
      content: "example task 1",
      finished: false
    },
    {
      content: "example task 2",
      finished: true
    }
  ]);

  function addTodoItem(e) {
    e.preventDefault();
    if (content.trim() === "") return;

    const newTodoItems = [...todoItems, { content: content, finished: false }];
    setTodoItems(newTodoItems);
    setContent("");
  }

  function removeTask(index) {
    const updatedItems = [...todoItems];
    updatedItems[index].finished = true;
    setTodoItems(updatedItems);
  }

  function undoTask(index) {
    const updatedItems = [...todoItems];
    updatedItems[index].finished = false;
    setTodoItems(updatedItems);
  }

  return (
    <div className="App">
      <h1>todo</h1>

      <div className="container">
        <div className="column">
          <h3>all tasks</h3>
          <TaskList todoItems={todoItems} removeTask={removeTask} />
        </div>

        <div className="column">
          <h3>completed</h3>
          <CompletedList todoItems={todoItems} undoTask={undoTask} />
        </div>
      </div>

      <div className="add-task">
        <form onSubmit={addTodoItem}>
          <input 
            type='text' 
            placeholder='enter new task'
            value={content}
            onChange={(e) => setContent(e.target.value)}  
          />
          <input type='submit' value="add" />
        </form>
      </div>
    </div>
  );
}

export default App;
