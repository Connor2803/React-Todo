//import TaskList from './components/TaskList';
import './App.css';
import { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [content, setContent] = useState("");
  const [todoItems, setTodoItems] = useState([
    {
    content: "Example Task",
    finished: false
    }
  ]);
  const [finishedItems, setFinishedItems] = useState([{
    content: "Example Finished",
    finished: true
    }]);

  function addTodoItem() {
    const newTodoItems = [...todoItems, { content: content, finished: false }];
    setTodoItems(newTodoItems);
    setContent("");
  }

  function removeTask(index){
    const updatedItems = [...todoItems];
    const updatedFinished = [...finishedItems];

    updatedItems[index].finished = true;
    updatedFinished.push(updatedItems[index]);
    updatedItems.splice(index,1);

    setTodoItems(updatedItems);
    setFinishedItems(updatedFinished);
  }

  function undoTask(index){
    const updatedItems = [...todoItems];
    const updatedFinished = [...finishedItems];


    updatedFinished[index].finished = false;
    updatedItems.push(updatedFinished[index]);
    updatedFinished.splice(index,1);


    setTodoItems(updatedItems);
    setFinishedItems(updatedFinished);

  }

  return (
    <div className="App">
      <h1>Todo App</h1>

      <TaskList todoItems={todoItems} finishedItems={finishedItems} removeTask={removeTask}/>

      <div style={{paddingTop:"10px"}}>
        <input 
          type='text' 
          placeholder='Enter new task'
          value={content}
          onChange={(e) => setContent(e.target.value)}  
        />
        <input type='submit' value="Add Item" onClick={addTodoItem}/>
      </div>

      {finishedItems.map((task, index) => {
          return (
            <div key={task.content} style={{ display:"flex", justifyContent: "center", alignItems:"center" }}>
                <p style={{paddingRight:"10px"}}>{task.content}</p>
                <button style={{height:"25px"}} onClick={() => undoTask(index)}>Undo</button>
            </div>
          );
        })}

    </div>
  )
}

export default App;
