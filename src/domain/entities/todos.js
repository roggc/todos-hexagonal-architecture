export const Todos = (() => {
  let id = 1;

  return ({ todos: todos_ } = { todos: [] }) => {
    let todos = todos_;
    const getAll = () => {
      return todos;
    };
    const add = ({ todo }) => {
      todos = [...todos, todo];
    };
    const removeById = ({ id }) => {
      todos = todos.filter(({ id: id_ }) => id_ !== id);
    };
    return { id: id++, getAll, add, removeById };
  };
})();
