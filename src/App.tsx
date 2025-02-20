import { Col, Container, Row } from "react-bootstrap"
import TaskBox from "./components/TaskBox";
import { useCallback, useEffect, useReducer, useState } from "react"
import AddTask from "./components/AddTask";
import { Tasks } from "./components/TaskContext";
import { reducer } from "./components/TaskReducer";
import FilterTask from "./components/FilterTask";
export interface ITask {
  id : number;
  content : string;
  completed : boolean;
}

const defaultTasks: ITask[] = [
  {
    id: 1,
    content: "Write project documentation",
    completed: false,
  },
  {
    id: 2,
    content: "Review pull requests",
    completed: true,
  },
  {
    id: 3,
    content: "Fix bug in user authentication",
    completed: false,
  },
  {
    id: 4,
    content: "Update expense report",
    completed: true,
  },
  {
    id: 5,
    content: "Schedule team meeting",
    completed: true,
  },
];

function App() {
  
  const [tasks,dispatch] = useReducer(reducer,defaultTasks);
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>(tasks);

  useEffect(()=>{
    setFilteredTasks(tasks);
  },[tasks]);

  const handleFilter = useCallback((status : boolean | null)=>{
      if(status === null){
        setFilteredTasks(tasks);
      }
      else{
        setFilteredTasks(tasks.filter((task)=>task.completed === status));
      }
  },[tasks])

  const handleAdd = useCallback((newTask:ITask)=>{
    dispatch({type:"AddTask",newTask});
  },[])

  const handleStatusUpdate = (id:number)=>{
    dispatch({type:"TaskStatusToggle",id});
  }

  const handleDelete = useCallback((id:number)=>{
    dispatch({type:"DeleteTask",id});
  },[])

  return (
    <Container>
      <br />
      <Tasks.Provider value={filteredTasks}>
        <Row>
          <Col md={10}>
            <AddTask handleAdd={handleAdd}/>
          </Col>
          <Col md={2}>
            <FilterTask handleFilter={handleFilter}/>
          </Col>
        </Row>
          <TaskBox handleDelete={handleDelete} statusToggle={handleStatusUpdate} />

      </Tasks.Provider>
    </Container>
  )
}

export default App
