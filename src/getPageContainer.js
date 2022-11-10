import { protectedRouts } from 'constants/routes';
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
const lazyLoadPage = path => React.lazy(() => import(`./${path}`));

const PageContainer = ({ route }) => {
  const Children = lazyLoadPage(route.component);
  return <Children />;
};

export default PageContainer;

export const getPageComponents = role => {
  const components = {};
  Object.values(protectedRouts).forEach(route => {
    components[route.key] = {
      component: route.component,
      pathname: route.pathname,
      redirectPath: route.redirectPath,
      pageTitle: route.pageTitle,
      key: route.key,
    };

    if (route.items) {
      Object.values(route.items).forEach(childRoute => {
        components[childRoute.key] = {
          component: childRoute.component,
          pathname: childRoute.pathname,
          redirectPath: route.redirectPath,
          pageTitle: route.pageTitle,
          key: route.key,
          subKey: route.subKey,
        };
      });
    }
  });

  return components;
};
