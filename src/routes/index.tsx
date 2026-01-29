import { createBrowserRouter, redirect } from "react-router";
import MainLayout from "../layouts/Main.layout";
import CounterPage from "../features/counter/Counter.page";
import UserPage from "../features/user/User.page";
import { useUserStore } from "../features/user/user.store";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <div>home</div> },
      {
        path: "counter",
        element: <CounterPage />,
        loader: () => {
          const user = useUserStore.getState().user;
          if (!user) return redirect("/");
        },
      },
      { path: "user", element: <UserPage /> },
    ],
  },
]);
