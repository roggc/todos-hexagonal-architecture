import App from "ui/components/app";
import AppProvider from "ui/slices";

const Root = ({ applicationAdapter }) => {
  return (
    <AppProvider>
      <App applicationAdapter={applicationAdapter} />
    </AppProvider>
  );
};

export default Root;
