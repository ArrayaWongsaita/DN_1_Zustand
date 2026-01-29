import { useUserStore } from "./user.store";

export default function UserPage() {
  const { login, logout } = useUserStore();

  const user = {
    id: crypto.randomUUID(),
    name: "non",
    email: "a@mail.com",
  };
  const token = crypto.randomUUID();
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-4">
      <button onClick={() => login(user, token)}>login</button>
      <button onClick={logout}>logout</button>
    </div>
  );
}
