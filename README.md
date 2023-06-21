# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

This is the main App component of a Todo List application built using React.

The main component imports and their uses are as follows:

A CSS file that styles the application.

The TodoList:
This is a React component that displays a list of todos passed as props and allows the user to edit and mark them as done. It also uses a context to display a greeting message using the name entered by the user in the parent component.

The component imports required hooks and components, including Stack, Divider, NameContext (imported from the parent component), TaskAltIcon, BorderColorIcon, Card, TextField.

useState
hook is used to keep track of the currently displayed todos and the new task being added.
useEffect
hook is used to update the displayed todos whenever the prop todos is updated.
useContext
hook is used to access the name entered by the user in the parent component.
The component defines three functions:
handleDone
: This function updates the status of the clicked task to done.
handleEdit
: This function enables editing mode of a task by setting its edit property to true.
handleBlur
: This function saves the edited task on blur of input field.

The component renders each todo as a Card with text and icons for done and edit modes. If the todo is in edit mode, it displays an input field instead of plain text.
A greeting message is displayed at the top of the list using the user's name obtained through the useContext hook.

The todos array:
imported from a separate file, which contains some initial todo items.
In the render method, the component returns a div containing two child components:

The TodoForm component:
This is a React component that displays a list of todos passed as props and allows the user to edit and mark them as done. It also uses a context to display a greeting message using the name entered by the user in the parent component.

The component imports required hooks and components, including Stack, Divider, NameContext (imported from the parent component), TaskAltIcon, BorderColorIcon, Card, TextField.

useState
hook is used to keep track of the currently displayed todos and the new task being added.
useEffect
hook is used to update the displayed todos whenever the prop todos is updated.
useContext
hook is used to access the name entered by the user in the parent component.
The component defines three functions:
handleDone
: This function updates the status of the clicked task to done.
handleEdit
: This function enables editing mode of a task by setting its edit property to true.
handleBlur
: This function saves the edited task on blur of input field.
The component renders each todo as a Card with text and icons for done and edit modes. If the todo is in edit mode, it displays an input field instead of plain text.
A greeting message is displayed at the top of the list using the user's name obtained through the useContext hook.
