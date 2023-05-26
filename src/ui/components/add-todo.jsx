import { useEffect, useReducer, useState } from "react";
import { useGetApplicationAdapter, useTodos } from "ui/hooks";

const AddTodo = () => {
  const { addTodo, getAllTodos } = useGetApplicationAdapter();
  const [title, setTitle] = useState("");
  const [isRefetch, refetch] = useReducer((state) => !state, false);
  const [, setTodos] = useTodos();

  useEffect(() => {
    setTodos(getAllTodos?.());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefetch]);

  return (
    <>
      <input
        value={title}
        onChange={({ target: { value } }) => setTitle(value)}
      />
      <button
        onClick={() => {
          addTodo({ title });
          refetch();
        }}
      >
        add
      </button>
    </>
  );
};

export default AddTodo;
