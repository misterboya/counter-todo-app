import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA from 9-10",
    completed: true
  }, {
    title: "Study Math",
    description: "Study Math from 10-11",
    completed: true
  }]);

  function addTodo() {
    setTodos([...todos, {
      title: "new Todo",
      description: "description of new to do"
    }])
  }

  return (
    //best way
    <div>
      <button onClick={addTodo}>Add a random to do</button>
      {
        todos.map(function(todo) {
          return <Todo title={todo.title} description={todo.description} />
        })
      }
    </div>
    /**ugly way
    <div>
      <Todo title={todos[0].title} description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} />
    </div>
    **/
  )

  /**
   * this count app
   *   const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count + 1} setCount={setCount}></CustomButton>
      <CustomButton count={count - 1} setCount={setCount}></CustomButton>
      <CustomButton count={count * 20} setCount={setCount}></CustomButton>
    </div>
  )
    
   * 
   */
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
