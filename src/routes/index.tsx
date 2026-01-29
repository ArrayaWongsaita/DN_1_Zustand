import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Main.layout";
import CounterPage from "../features/counter/Counter.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <div>home</div> },
      { path: "counter", element: <CounterPage /> },
    ],
  },
]);
