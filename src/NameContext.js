// This file exports a context object that can be used to share data across the component tree.
// In this case, it exports a context object named "NameContext"

import { createContext } from "react";

export const NameContext=  createContext({}); // Creating a new context object using createContext() function and exporting it. 
// The initial value of the context object is an empty object passed as an argument to createContext() function.