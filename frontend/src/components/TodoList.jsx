import ListGroup from "react-bootstrap/ListGroup";

export default function TodoList({todos = []}) {
  const renderListGroupItem = (todo) => {
    
  }
    return <ListGroup>
      {todos.map( todo => {
        return <ListGroup.Item key={todo.id}>
          {todo.name}
        </ListGroup.Item>
      })}
  </ListGroup>
}
