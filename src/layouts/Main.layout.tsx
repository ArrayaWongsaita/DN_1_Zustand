import { Link, Outlet } from "react-router";
import { useCounterStore } from "../features/counter/counter.store";

export default function MainLayout() {
  const increment = useCounterStore((state) => state.increment);
  // const count = useCounterStore((state) => state.count);

  console.log("MainLayout render");
  return (
    <div>
      <header className="flex justify-between w-full bg-blue-300">
        <Link to="/">HOME</Link>
        <nav>
          <Link to="/counter">counter</Link>
        </nav>

        <button onClick={increment}>+</button>
      </header>
      <Outlet />
    </div>
  );
}
