import { Route, Routes } from 'react-router-dom/dist';
import { routes } from './routes';

const App = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export { App };
