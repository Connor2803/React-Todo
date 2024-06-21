//import TaskList from './components/TaskList';
import './App.css';
import { useState } from 'react';

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

  return (
    <div className="App">
      <h1>Todo App</h1>

      {todoItems.map((task, index) => {
                return (
                    <div key={task.content} style={{ display: task.finished ? "none" : "flex", justifyContent: "center", alignItems:"center" }}>
                        <p style={{paddingRight:"10px"}}>{task.content}</p>
                        <button style={{height:"25px"}} onClick={() => removeTask(index)}>Remove</button>
                    </div>
                );
            })}

      <div style={{paddingTop:"10px"}}>
        <input 
          type='text' 
          placeholder='Enter new task'
          value={content}
          onChange={(e) => setContent(e.target.value)}  
        />
        <input type='submit' value="Add Item" onClick={addTodoItem}/>
      </div>

    </div>
  )
}

export default App;
