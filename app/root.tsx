import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "react-router";
import stylesheet from "./app.css?url";
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav";

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-screen">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-800">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <BottomNav />
    </>
  );
}

// ... ErrorBoundary() function remains the same