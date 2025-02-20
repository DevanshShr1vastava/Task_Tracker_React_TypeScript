import { ITask } from "../App";

interface ITaskAddAction {
    type : "AddTask";
    newTask : ITask;
}

interface ITaskDeleteAction {
    type : "DeleteTask";
    id : number;
}

interface ITaskStatusAction {
    type: "TaskStatusToggle";
    id : number;
}


type ActionType = ITaskAddAction | ITaskDeleteAction | ITaskStatusAction;

export const reducer = (state : ITask[], action : ActionType):ITask[] =>{
    switch(action.type){
        case "AddTask":
            return [...state, action.newTask];
        case "DeleteTask":
            return state.filter((task)=>task.id !== action.id)
        case "TaskStatusToggle":
            return state.map((task)=>(task.id === action.id) ? {...task,completed:(!task.completed)} : task);
        
        default:
            return state;
    }
}

