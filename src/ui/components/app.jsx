import { useSetApplicationAdapter } from "ui/hooks";
import Todos from "ui/components/todos";
import AddTodo from "ui/components/add-todo";

const App = ({ applicationAdapter }) => {
  useSetApplicationAdapter(applicationAdapter);
  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
};

export default App;
