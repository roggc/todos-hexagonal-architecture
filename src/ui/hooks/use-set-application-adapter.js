import { useEffect } from "react";
import {
  useActions,
  applicationAdapter as applicationAdapterSlice,
} from "ui/slices";

export const useSetApplicationAdapter = (applicationAdapter) => {
  const {
    [applicationAdapterSlice]: { set: setApplicationAdapterValue },
  } = useActions();
  useEffect(() => {
    setApplicationAdapterValue(applicationAdapter);
  }, [applicationAdapter, setApplicationAdapterValue]);
};
