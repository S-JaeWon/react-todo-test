import "./App.css";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoHead from "./components/TodoHead/TodoHead";
import TodoList from "./components/TodoList/TodoList";
import TodoTemplete from "./components/TodoTemplete/TodoTemplete";

function App() {
  return (
    <>
      <TodoTemplete>
        <TodoHead />
        <TodoList />
        <TodoAdd />
      </TodoTemplete>
    </>
  );
}

export default App;
