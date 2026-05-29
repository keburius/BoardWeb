/**
 * App.tsx — centralised route tree for TanStack Router (manual mode, no codegen).
 * All createRoute calls live here to avoid cross-file type-inference issues.
 */
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
  redirect,
  Outlet,
} from '@tanstack/react-router'
import { LandingPage } from './routes/landing'
import { LoginPage } from './routes/login'
import { SignupPage } from './routes/signup'
import { BoardMeetingPage } from './routes/_layout/board-meeting'

function getAuthToken(): string | null {
  try {
    return (
      localStorage.getItem('sb_token') ??
      sessionStorage.getItem('sb_token') ??
      null
    )
  } catch {
    return null
  }
}

/* ─── Route tree ─────────────────────────────────────────────────────── */
const rootRoute = createRootRoute({ component: Outlet })

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad() {
    if (getAuthToken()) throw redirect({ to: '/board-meeting' })
  },
  component: LandingPage,
})

// Pathless authenticated layout — uses `id` instead of `path`
const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'authenticated',
  beforeLoad() {
    if (!getAuthToken()) throw redirect({ to: '/login' })
  },
  component: function AuthLayout() {
    return (
      <div style={{ minHeight: '100svh', background: '#0A0A0A' }}>
        <Outlet />
      </div>
    )
  },
})

const boardMeetingRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/board-meeting',
  component: BoardMeetingPage,
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
})

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: SignupPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  layoutRoute.addChildren([boardMeetingRoute]),
  loginRoute,
  signupRoute,
])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

/* ─── Root component ─────────────────────────────────────────────────── */
export default function App() {
  return <RouterProvider router={router} />
}
