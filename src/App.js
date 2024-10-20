import "./App.css";
import TodoHead from "./components/TodoHead/TodoHead";
import TodoList from "./components/TodoList/TodoList";
import TodoTemplete from "./components/TodoTemplete/TodoTemplete";

function App() {
  return (
    <>
      <TodoTemplete>
        <TodoHead />
        <TodoList />
      </TodoTemplete>
    </>
  );
}

export default App;
