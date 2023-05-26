import { RepositoryPort } from "ports";
import { Todos } from "domain/entities";

export const RepositoryAdapter = () => {
  const todos = Todos();

  const get = () => {
    return todos;
  };
  const repositoryAdapter = RepositoryPort({
    get,
  });
  return repositoryAdapter;
};
