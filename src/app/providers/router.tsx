import { ReactNode } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { HomePage } from '@src/pages/home-page'
import { ProfilePage } from '@src/pages/profile-page'

import { AppLayout } from '../layout/app-layout'

const isUserLogged = false

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  return isUserLogged ? children : <Navigate to="/login" replace />
}

const PublicRoute = ({ children }: { children: ReactNode }) => {
  return !isUserLogged ? children : <Navigate to="/" replace />
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      // public
      {
        path: '/',
        element: (
          <PublicRoute>
            <HomePage />
          </PublicRoute>
        ),
      },
      // private
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export const AppRouter = () => <RouterProvider router={router} />
