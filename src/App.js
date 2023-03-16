import { useEffect, useState } from "react";
import { Credits } from "./components/Credits";
import LifeExpectancyCounter from "./components/LifeExpectancyCounter/LifeExpectancyCounter";
import { Title } from "./components/Title/Title";
import { TodoInput } from "./components/Todoinput";
import { Todolist } from "./components/Todolist/Todolist";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Resolver el problema de la escasez del agua",
      completed: false,
    },
    {
      id: 2,
      title: "Inspirar otras personas a ser la mejor version de si mismos.",
      completed: false,
    },
    {
      id: 3,
      title: "Hacer sentir a mi mama orgullosa de mi",
      completed: false,
    },
    {
      id: 4,
      title: "Ser un nomada digital",
      completed: false,
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFiteredTodos] = useState(todos);
  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;
    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };
    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

  const handleSetComplete = (id) => {
    const updateList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updateList);
  };

  const handleDelete = (id) => {
    const updateList = todos.filter((todo) => todo.id !== id);
    setTodos(updateList);
  };
  const handleClearComplete = () => {
    const updatedList = todos.filter((todo) => !todo.completed);
    setTodos(updatedList);
  };
  const showAllTodos = () => {
    setActiveFilter("all");
  };

  const showActiveTodos = () => {
    setActiveFilter("active");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };
  useEffect(() => {
    if (activeFilter === "all") {
      setFiteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => todo.completed === false);
      setFiteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      setFiteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);
  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5 ">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <LifeExpectancyCounter />
        <TodoInput addTodo={addTodo} />
        <Todolist
          activeFilter={activeFilter}
          todos={filteredTodos}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          handleClearComplete={handleClearComplete}
        />
        <Credits />
      </div>
    </div>
  );
}

export default App;
