import React from "react";

const CompletedList = (props) => {
    const todoItems = props.todoItems;
    const undoTask = props.undoTask;

    return (
        <div>
        {todoItems.map((task, index) => {
          return (
            <div key={task.content} style={{ display: !task.finished ? "none" : "flex", justifyContent: "center", alignItems:"center" }}>
                <p style={{paddingRight:"10px"}}>{task.content}</p>
                  <input
                    type="radio"
                    checked={task.finished}
                    onClick={() => undoTask(index)}
                    style={{ height: "20px", width: "20px" }}
                  />
            </div>
          );
        })}
        </div>
    );
};

export default CompletedList;
