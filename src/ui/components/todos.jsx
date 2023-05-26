import { useGetTodos } from "ui/hooks";

const Todos = () => {
  const todos = useGetTodos();
  return (
    <>
      {todos?.map(({ id, title }) => (
        <div key={id}>{title}</div>
      ))}
    </>
  );
};

export default Todos;
