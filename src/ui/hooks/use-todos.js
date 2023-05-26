import { useValues, useActions, todos } from "ui/slices";

export const useTodos = () => {
  const {
    [todos]: { set: setTodosValue },
  } = useActions();
  const { value: todosValue } = useValues(todos);
  return [todosValue, setTodosValue];
};
