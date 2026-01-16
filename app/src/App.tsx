import Header from "./core/layout/Header";
import AppRouter from "./providers/RouterProvider";

const App = () => {
  return (
    <div>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
