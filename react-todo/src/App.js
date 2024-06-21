//import TaskList from './components/TaskList';
import './App.css';
import { useState } from 'react';
import TaskList from './components/TaskList';
import CompletedList from './components/CompletedList';

function App() {
  const [content, setContent] = useState("");
  const [todoItems, setTodoItems] = useState([
    {
    content: "Example Task",
    finished: false
    }
  ]);


  function addTodoItem() {
    const newTodoItems = [...todoItems, { content: content, finished: false }];
    setTodoItems(newTodoItems);
    setContent("");
  }

  function removeTask(index){
    const updatedItems = [...todoItems];

    updatedItems[index].finished = true;
    setTodoItems(updatedItems);
  }

  function undoTask(index){
    const updatedItems = [...todoItems];
    updatedItems[index].finished = false;
    setTodoItems(updatedItems);
  }

  return (
    <div className="App">
      <h1>todo</h1>

      <h3> all tasks </h3>
      <TaskList todoItems={todoItems} removeTask={removeTask}/>

      <div style={{paddingTop:"10px"}}>
        <input 
          type='text' 
          placeholder='Enter new task'
          value={content}
          onChange={(e) => setContent(e.target.value)}  
        />
        <input type='submit' value="Add Item" onClick={addTodoItem}/>
      </div>

      <h3> completed </h3>
      <CompletedList todoItems={todoItems} undoTask={undoTask}/>

    </div>
  )
}

export default App;
