export const Todo = (() => {
  let id = 1;
  return ({ title }) => ({
    id: id++,
    title,
    completed: false,
  });
})();
