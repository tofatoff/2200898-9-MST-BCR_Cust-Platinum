import { useRoutes } from "react-router";
import Routes from "./Routes/Routes.jsx";

const App = () => {
  const appRoutes = useRoutes(Routes());

  return appRoutes;
};

export default App;
