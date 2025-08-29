import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import BasketPage from './pages/BasketPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import ComplexCurrentWeekPage from './pages/ComplexCurrentWeekPage.jsx'
import ComplexNextWeekPage from './pages/ComplexNextWeekPage.jsx'
import ComplexNextWeekChoicesPage from './pages/ComplexNextWeekChoicesPage.jsx'
import ComplexPage from './pages/ComplexPage.jsx'
import ChangePasswordPage from './pages/ChangePasswordPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'
import HelpPage from './pages/HelpPage.jsx'
import QuestionsPage from './pages/QuestionsPage.jsx'
import InterestingPage from './pages/InterestingPage.jsx'
import InterestingArticlePage from './pages/InterestingArticlePage.jsx'
import ComplexThisWeekPage from './pages/ComplexThisWeekPage.jsx'
import ComplexNextWeekStaticPage from './pages/ComplexNextWeekStaticPage.jsx'

const router = createBrowserRouter([
  { path: '/auth/sign-in', element: <SignInPage /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <App />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'orders', element: <OrdersPage /> },
          { path: 'help', element: <HelpPage /> },
          { path: 'questions', element: <QuestionsPage /> },
          { path: 'interesting', element: <InterestingPage /> },
          { path: 'interesting/1', element: <InterestingArticlePage /> },
          { path: 'menu', element: <MenuPage /> },
          { path: 'basket', element: <BasketPage /> },
          { path: 'settings', element: <SettingsPage /> },
          { path: 'settings/change-password', element: <ChangePasswordPage /> },
          { path: 'complex', element: <ComplexPage /> },
          { path: 'complex/current-week', element: <ComplexCurrentWeekPage /> },
          { path: 'complex/next-week', element: <ComplexNextWeekPage /> },
          { path: 'complex/next-week/choices', element: <ComplexNextWeekChoicesPage /> },
          { path: 'complex/static/current', element: <ComplexThisWeekPage /> },
          { path: 'complex/static/next', element: <ComplexNextWeekStaticPage /> },
        ],
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
