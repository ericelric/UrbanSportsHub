import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import './index.css';
import App from './App.jsx';
import DisclaimerPage from './pages/DisclaimerPage/DisclaimerPage.jsx';
import ClassesPage from './pages/ClassesPage/ClassesPage.jsx';
import CheckInPage from './pages/CheckInPage/CheckInPage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

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
        element: <DisclaimerPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/venues',
        element: <DisclaimerPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/classes',
        element: <ClassesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/check-in',
        element: <CheckInPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
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
