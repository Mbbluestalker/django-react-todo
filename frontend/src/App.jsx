import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import axios from 'axios'


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:8000/api/todos/')
    .then((res) =>{
      setTodos(res.data)
    }).catch(() =>{
      alert("something went wrong")
    })
  }, [])



  return (
    <div>
      <Navbar bg="light" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="#">Todo App</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <TodoForm />
        <TodoList todos={todos}/>
      </Container>

  
    </div>
  );
}

export default App;
