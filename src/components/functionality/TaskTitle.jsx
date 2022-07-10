import React, { useState } from "react";

const TaskTitle = (props) => {
  return (
    <div>
      <span className={props.className}>{props.title}</span>
    </div>
  );
};

export default TaskTitle;

/*Edit functionality
1. create a 'isEditing' boolean variable
2. when edit icon is clicked, isEditing->true, content of text changes from props.title -> a text input field
3. When user input is submitted, new task title gets lifted up and edits the original object which gets rendered.

*/
