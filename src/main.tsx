import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Home } from './pages/Home/Home.tsx';
import { Country } from './pages/Country/Country.tsx';
import { NotFound } from './pages/NotFound/NotFound.tsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '*',
        element: <NotFound/>,
      },
      {
        path: "/?",
        element: <Home/>
      },
      {
        path: "/country/:countryId",
        element: <Country/>
      }
    ],
  }
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
