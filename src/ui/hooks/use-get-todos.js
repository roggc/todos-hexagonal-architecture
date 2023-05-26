import { useEffect } from "react";
import { useGetApplicationAdapter } from "./use-get-application-adapter";
import { useTodos } from "./use-todos";

export const useGetTodos = () => {
  const [todos, setTodos] = useTodos();
  const { getAllTodos } = useGetApplicationAdapter();

  useEffect(() => {
    setTodos(getAllTodos?.());
  }, [getAllTodos, setTodos]);
  return todos;
};
