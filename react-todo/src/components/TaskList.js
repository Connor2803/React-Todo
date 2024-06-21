// Didn't really work, will figure out later

import React, { useState } from "react";

const TaskList = (props) => {
    const todoItems = props.todoItems;
    const removeTask = props.removeTask;
    const finishedItems = props.finishedItems;

    return (
        <div>
        {todoItems.map((task, index) => {
          return (
            <div key={task.content} style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                <p style={{paddingRight:"10px"}}>{task.content}</p>
                <button style={{height:"25px"}} onClick={() => removeTask(index)}>Remove</button>
            </div>
          );
        })}
        </div>
    );
};

export default TaskList;
