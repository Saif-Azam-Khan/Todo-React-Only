import { useState, useEffect, useContext } from "react"; // import required hooks and components
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import { NameContext } from "../NameContext"; // import the context from parent component
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Card from "@mui/material/Card";
import { TextField } from "@mui/material";

// This component receives the todos as a prop and displays them in a list.
function TodoList({ todos, setNewtodos }) {
  // Use state to keep track of the currently displayed todos.
  const [newTodo, setNewTodo] = useState([todos]); // newTodo state array with initial value as the todos array passed as props
  const [newTask, setNewTask] = useState(""); // newTask state with initial empty string

  // Use context to access the name entered by the user in the parent component.
  const name = useContext(NameContext);

  // Update the displayed todos whenever the prop todos is updated using useEffect hook.
  useEffect(() => {
    setNewTodo(todos);
  }, [todos]);

  // handleDone function to update the status of the clicked task to done
  const handleDone = (event) => {
    const id = event.currentTarget.id; // get the id of the clicked icon
    // find the corresponding task by id and update its status
    const updatedTodos = newTodo.map((item) =>
      item.id == id ? { ...item, status: "done" } : item
    );
    setNewtodos(updatedTodos); // update the state with the modified todos
  };

  // handleBlur function to save the edited task on blur of input field
  const handleBlur = (event, id) => {
    const updatedTodos = newTodo.map((item) =>
      item.id == id ? { ...item, edit: false, task: newTask } : item
    );
    setNewTask(""); // reset the newTask state to empty string
    setNewtodos(updatedTodos); // update the state with the modified todos
  };

  // handleEdit function to enable editing mode of a task by setting its edit property to true
  const handleEdit = (id) => {
    const updateBlur = newTodo.map((item) =>
      item.id == id ? { ...item, edit: true } : item
    );
    setNewtodos(updateBlur); // update the state array with the modified todos
  };

  return (
    <div>
      {/* Display a greeting message using the user's name. */}
      <h2>Here are your todos, {name}</h2>

      {/* Display the todos as a stack with dividers. */}
      <Stack divider={<Divider orientation="horizontal" />}>
        {newTodo.map((item) =>
          item.edit ? ( // if edit property is true then render input field for editing mode
            <>
              <TextField
                label="Enter Todo"
                color="secondary"
                focused
                value={newTask === "" ? item.task : newTask} // display the edited task in the input field
                onFocus={() => setNewTask(item.task)} // on focus set the newTask state to the current task value
                onBlur={(event) => handleBlur(event, item.id)} // on blur save the edited task
                onChange={(e) =>
                  e.target.value === ""
                    ? setNewTask(item.task)
                    : setNewTask(e.target.value)
                }
              />
              <br></br>
            </>
          ) : ( // else render the task with icons for done and edit mode
            <>
              <Card variant="outlined">
                <p
                  key={item.id}
                  style={
                    item.status === "done"
                      ? { textDecoration: "line-through" }
                      : null
                  }
                >
                  {item.task}
                  <div style={{ float: "right", padding: "2px" }}>
                    <TaskAltIcon
                      id={item.id}
                      style={{ verticalAlign: "text-top", marginRight: "4px" }}
                      onClick={handleDone}
                    />
                    <BorderColorIcon
                      id={item.id}
                      style={{ verticalAlign: "text-top" }}
                      onClick={() => handleEdit(item.id)}
                    />
                  </div>
                </p>
              </Card>
              <br></br>
            </>
          )
        )}
      </Stack>
    </div>
  );
}

export default TodoList;

// commented out TextField component that was previously used in the code before refactoring.