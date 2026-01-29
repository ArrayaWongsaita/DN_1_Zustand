import { Link, Outlet } from "react-router";
import { useCounterStore } from "../features/counter/counter.store";
import { useUserStore } from "../features/user/user.store";

export default function MainLayout() {
  const increment = useCounterStore((state) => state.increment);
  // const count = useCounterStore((state) => state.count);

  // const { user } = useUserStore();
  const user = useUserStore((state) => state.user);

  console.log("MainLayout render");
  return (
    <div>
      <header className="flex justify-between w-full bg-blue-300">
        <Link to="/">HOME</Link>
        <nav className="space-x-4">
          <Link to="/counter">counter</Link>
          <Link to="/user">user</Link>
        </nav>

        <button onClick={increment}>+</button>

        {user ? (
          <div className="bg-gray-100 rounded-full h-10 w-10">user</div>
        ) : (
          <div>login</div>
        )}
      </header>
      <Outlet />
    </div>
  );
}
