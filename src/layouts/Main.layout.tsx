import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <header className="flex justify-between w-full bg-blue-300">
        <Link to="/">HOME</Link>
        <nav>
          <Link to="/counter">counter</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
