import React from "react";

const TaskList = (props) => {
    const todoItems = props.todoItems;
    const removeTask = props.removeTask;

    return (
        <div>
        {todoItems.map((task, index) => {
          return (
            <div key={task.content} style={{ display: task.finished ? "none" : "flex", justifyContent: "center", alignItems:"center" }}>
                <p style={{paddingRight:"10px"}}>{task.content}</p>
                <input
                    type="radio"
                    checked={task.finished}
                    onClick={() => removeTask(index)}
                    style={{ height: "20px", width: "20px" }}
                  />
            </div>
          );
        })}
        </div>
    );
};

export default TaskList;
