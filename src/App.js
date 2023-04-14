import { Route, Routes } from 'react-router-dom/dist';
import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { routes } from './routes';
import { GlobalContext, PopupProvider } from './context';
import { setUser } from './store/slices/userSlice';
import { PopUp } from './components';

const App = () => {
  const [popup, setPopup] = useState(null);
  const [popupValue, setpopupValue] = useState('');
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
    <PopupProvider value={{ popup, setPopup, popupValue, setpopupValue }}>
      <Routes>
        {routes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
      {popup && <PopUp />}
    </PopupProvider>
  );
};

export { App };
