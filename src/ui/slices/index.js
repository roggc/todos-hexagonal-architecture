import { composeProviders } from "react-context-slices";
import {
  useValues as useApplicationAdapterValues,
  useActions as useApplicationAdapterActions,
  Provider as ApplicationAdapterProvider,
} from "./application-adapter";
import {
  useValues as useTodosValues,
  useActions as useTodosActions,
  Provider as TodosProvider,
} from "./todos";

export { name as applicationAdapter } from "./application-adapter";
export { name as todos } from "./todos";

export const useValues = (slice) => ({
  ...useApplicationAdapterValues(slice),
  ...useTodosValues(slice),
});

export const useActions = () => ({
  ...useApplicationAdapterActions(),
  ...useTodosActions(),
});

export default composeProviders([ApplicationAdapterProvider, TodosProvider]);
