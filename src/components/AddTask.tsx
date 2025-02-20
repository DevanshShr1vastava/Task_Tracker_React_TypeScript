import { useContext, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { ITask } from "../App";
import { Tasks } from "./TaskContext";
import React from "react";

interface IHandleAdd {
  handleAdd : (task:ITask)=>void;
}

const AddTask = React.memo(({handleAdd}:IHandleAdd) => {
  const tasks = useContext(Tasks);
  const newId:number = tasks!.length + 1;
  const [newTask,setNewTask] = useState<ITask>({
    id:newId,
    content : "",
    completed:false
  })
  const handleClick = ()=>{
    handleAdd(newTask);
    setNewTask({
      ...newTask,
      content : ''
    })
  }
  return (
  <>
    <InputGroup className="mb-3">
      <Form.Control placeholder="Enter Task" onChange={(e)=>{
        setNewTask({...newTask,content : e.target.value})
        }} value={newTask?.content} type="text" />
      <Button variant='outline-light' onClick={handleClick}>Add</Button>
    </InputGroup>
  </>);
});

export default AddTask;
