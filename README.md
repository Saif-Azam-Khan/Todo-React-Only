# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

The main component imports and their uses are as follows:

### The TodoList:
This is a React component that displays a list of todos passed as props and allows the user to edit and mark them as done. It also uses a context to display a greeting message using the name entered by the user in the parent component.

The component imports required hooks and components, including Stack, Divider, NameContext (imported from the parent component), TaskAltIcon, BorderColorIcon, Card, and TextField.

`useState`
hook is used to keep track of the currently displayed todos and the new task is added.
`useEffect`
hook is used to update the displayed todos whenever the prop todos are updated.
`useContext`
hook is used to access the name entered by the user in the parent component.
The component defines three functions:
`handleDone`
: This function updates the status of the clicked task to done.
`handleEdit`
: This function enables the editing mode of a task by setting its edit property to true.
`handleBlur`
: This function saves the edited task in the blur of the input field.

The component renders each todo as a Card with text and icons for done and edit modes. If the todo is in edit mode, it displays an input field instead of plain text.
A greeting message is displayed at the top of the list using the user's name obtained through the useContext hook.

### The todos array:
imported from a separate file, which contains some initial todo items.
In the render method, the component returns a div containing two child components:

### The TodoForm component:
This is a React component that displays a list of todos passed as props and allows the user to edit and mark them as done. It also uses a context to display a greeting message using the name entered by the user in the parent component.

The component imports required hooks and components, including Stack, Divider, NameContext (imported from the parent component), TaskAltIcon, BorderColorIcon, Card, TextField.

`useState`
the hook is used to keep track of the currently displayed todos and the new task is added.
`useEffect`
the hook is used to update the displayed todos whenever the prop todos are updated.
`useContext`
hook is used to access the name entered by the user in the parent component.
The component defines three functions:
`handleDone`
: This function updates the status of the clicked task to done.
`handleEdit`
: This function enables the editing mode of a task by setting its edit property to true.
`handleBlur`
: This function saves the edited task in the blur of the input field.
The component renders each todo as a Card with text and icons for done and edit modes. If the todo is in edit mode, it displays an input field instead of plain text.
A greeting message is displayed at the top of the list using the user's name obtained through the useContext hook.


React app that renders TodoForm and TodoList components, managing state for the list of todos with useState hook. The App component passes the setNewtodo function and newtodo state down to its child components as props. Default exports the App component. ENVIRONMENT: React.js, Context, Props, Dynamically editing specific values in array of obj