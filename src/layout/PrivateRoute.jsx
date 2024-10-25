import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ user, children }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!user) {
      setRedirect(true);
    }
  }, [user]);

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;

