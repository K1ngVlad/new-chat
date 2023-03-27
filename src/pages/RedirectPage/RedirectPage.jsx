import { Navigate } from 'react-router-dom/dist';

import { chat_path } from '../../routes';

const RedirectPage = () => {
  return <Navigate to={chat_path} />;
};

export { RedirectPage };
