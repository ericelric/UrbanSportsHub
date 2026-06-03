import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import '@fontsource/hanken-grotesk/100.css';
import '@fontsource/hanken-grotesk/200.css';
import '@fontsource/hanken-grotesk/300.css';
import '@fontsource/hanken-grotesk/400.css';
import '@fontsource/hanken-grotesk/500.css';
import '@fontsource/hanken-grotesk/600.css';
import '@fontsource/hanken-grotesk/700.css';
import './index.css';
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

const lazyPage = (importPage) => async () => {
  const { default: Component } = await importPage();

  return { Component };
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/disclaimer" replace />,
      },
      {
        path: '/disclaimer',
        lazy: lazyPage(() =>
          import('./pages/DisclaimerPage/DisclaimerPage.jsx')
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '/venues',
        lazy: lazyPage(() =>
          import('./pages/DisclaimerPage/DisclaimerPage.jsx')
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: '/classes',
        lazy: lazyPage(() => import('./pages/ClassesPage/ClassesPage.jsx')),
        errorElement: <ErrorPage />,
      },
      {
        path: '/check-in',
        lazy: lazyPage(() => import('./pages/CheckInPage/CheckInPage.jsx')),
        errorElement: <ErrorPage />,
      },
      {
        path: '/profile',
        lazy: lazyPage(() => import('./pages/ProfilePage/ProfilePage.jsx')),
        errorElement: <ErrorPage />,
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
