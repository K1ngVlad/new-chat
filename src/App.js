import { Route, Routes } from 'react-router-dom/dist';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { routes } from './routes';
import { GlobalContext } from './context';
import { setUser } from './store/slices/userSlice';

const App = () => {
  const { auth } = useContext(GlobalContext);
  const dispath = useDispatch();

  onAuthStateChanged(auth, (user) => {
    dispath(
      setUser({
        name: user?.displayName,
        email: user?.email,
        id: user?.uid,
        avatar: user?.photoURL,
      })
    );
  });

  return (
    <Routes>
      {routes.map(({ path, Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export { App };
