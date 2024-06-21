// Didn't really work, will figure out later

import React, { useState } from "react";

const TaskList = (props) => {
    const initialTodoItems = props.todoItems;
    const [todoItems, setTodoItems] = useState(initialTodoItems);
    
    function removeTask(index){
        const updatedItems = [...todoItems];
        updatedItems[index].finished = true;
        setTodoItems(updatedItems);
    }
    
    return (
        <div>
            {todoItems.map((task, index) => {
                return (
                    <div key={task.content} style={{ display: task.finished ? "none" : "flex", justifyContent: "center" }}>
                        <p style={{paddingRight:"10px"}}>{task.content}</p>
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;
