import { createContext } from "react";
import { ITask } from "../App";

export const Tasks = createContext<ITask[] | undefined>(undefined);