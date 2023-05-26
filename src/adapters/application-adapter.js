import { ApplicationPort } from "ports";
import { Todo } from "domain/entities";

export const ApplicationAdapter = (repositoryAdapter) => {
  const getAllTodos = () => {
    const todos = repositoryAdapter.get();
    return todos.getAll();
  };
  const addTodo = ({ title }) => {
    const todos = repositoryAdapter.get();
    todos.add({ todo: Todo({ title }) });
  };
  const applicationAdapter = ApplicationPort({ getAllTodos, addTodo });
  return applicationAdapter;
};
