import React from "../core/React.js";

function Todos() {
  const [filter, setFilter] = React.useState("all");
  const [inputValue, setInputValue] = React.useState();
  const [displayTodos, setDisplayTodos] = React.useState([]);
  const [todos, setTodos] = React.useState([
    // {
    //   title: "吃饭",
    //   id: crypto.randomUUID(),
    //   status: "active",
    // },
    // {
    //   title: "睡觉",
    //   id: crypto.randomUUID(),
    //   status: "done",
    // },
    // {
    //   title: "打豆豆",
    //   id: crypto.randomUUID(),
    //   status: "done",
    // },
  ]);

  function handleAdd() {
    addTodo(inputValue);

    setInputValue("");
  }

  function createTodo(title) {
    return {
      title,
      id: crypto.randomUUID(),
      status: "active",
    };
  }

  function addTodo(title) {
    setTodos((todos) => [...todos, createTodo(title)]);
  }

  function removeTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  function doneTodo(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: "done",
        };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  function cancelTodo(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: "active",
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function handleSaveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  React.useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  React.useEffect(() => {
    handleSaveTodo();
    if (filter === "all") {
      setDisplayTodos(todos);
    } else if (filter === "active") {
      setDisplayTodos(todos.filter((todo) => todo.status === "active"));
    } else if (filter === "done") {
      setDisplayTodos(todos.filter((todo) => todo.status === "done"));
    }
  }, [filter, todos]);
  return (
    <div>
      <h1>TODOS</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
      <div>
        <button onClick={handleSaveTodo}>save</button>
      </div>
      <div>
        <input
          type="radio"
          name="filter"
          id="all"
          checked={filter === "all"}
          onChange={() => setFilter("all")}
        ></input>
        <label htmlFor="all">all</label>

        <input
          type="radio"
          name="filter"
          id="active"
          checked={filter === "active"}
          onChange={() => setFilter("active")}
        ></input>
        <label htmlFor="active">active</label>

        <input
          type="radio"
          name="filter"
          id="done"
          checked={filter === "done"}
          onChange={() => setFilter("done")}
        ></input>
        <label htmlFor="done">done</label>
      </div>

      <ul>
        {...displayTodos.map((todo) => {
          return (
            <li>
              {/* {todo.title}
              <button onClick={() => removeTodo(todo.id)}>remove</button>
              {todo.status === "done" ? (
                <button onClick={() => cancelTodo(todo.id)}>cancel</button>
              ) : (
                <button onClick={() => doneTodo(todo.id)}>done</button>
              )} */}

              <TodoItem
                todo={todo}
                removeTodo={removeTodo}
                doneTodo={doneTodo}
                cancelTodo={cancelTodo}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function TodoItem({ todo, removeTodo, doneTodo, cancelTodo }) {
  return (
    <div className={todo.status}>
      {todo.title}
      <button onClick={() => removeTodo(todo.id)}>remove</button>
      {todo.status === "done" ? (
        <button onClick={() => cancelTodo(todo.id)}>cancel</button>
      ) : (
        <button onClick={() => doneTodo(todo.id)}>done</button>
      )}
    </div>
  );
}

export default Todos;
