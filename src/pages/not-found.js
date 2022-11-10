import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { roleDefPaths } from '../constants/routes';
import { getUserRole } from '../app/services/selectorHelpers';

const NotFoundPage = () => {
  const { pathname } = useLocation();
  const role = useSelector(getUserRole);

  const defPath = role ? roleDefPaths[role] : '/sign-in';

  if (pathname === '/') {
    return <Navigate to={defPath} />;
  }
  return (
    <div>
      not found
      <Link to={defPath}>Go to main page</Link>
    </div>
  );
};

export default NotFoundPage;
