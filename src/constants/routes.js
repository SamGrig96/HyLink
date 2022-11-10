export const protectedRouts = {};

const routes = {
  signIn: {
    pageTitle: 'GitHub User',
    pathname: '/',
    key: 'user',
    component: 'pages/auth-pages/user.page',
  },

  thank: {
    pathname: '/thank-you',
    key: 'thank',
    component: 'pages/auth-pages/thank-you.page',
    pageTitle: 'Thank You',
  },
};

export const roleDefPaths = {
  decorselection: '/notification',
};

export default routes;
