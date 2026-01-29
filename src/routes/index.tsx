import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  { path: "/", children: [{ index: true, element: <div>home</div> }] },
]);
