import { useContext } from "react";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Tasks } from "./TaskContext";
import React from "react";

interface ITaskTools {
  statusToggle : (id:number)=>void;
  handleDelete : (id:number)=>void;
};




const TaskBox = React.memo(({handleDelete,statusToggle}:ITaskTools) => {
  const tasks = useContext(Tasks);
   
  return (
    <Container>
      <Row className="row-cols-2">
        {tasks?.map((task)=>(
          <Col key={task.id}>
            <Card bg={task.completed?"success":"danger"} className="mb-3">
              <Card.Header className="d-flex justify-content-between">
                  <Button 
                    onClick={()=>{
                        statusToggle(task.id);                      
                    }}
                    variant={task.completed?"primary":"warning"}>
                      {task.completed?"Complete":"Incomplete"}
                  </Button>
                  
                  <Button variant='light' onClick={() => handleDelete(task.id)}>🗑️</Button>
              </Card.Header>
              <Card.Body>
                <h5 className="text-center">{task.content}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
});

export default TaskBox;
