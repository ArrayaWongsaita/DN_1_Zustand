// import { Navigate } from "react-router";
// import { useUserStore } from "../user/user.store";
import { useCounterStore } from "./counter.store";

export default function CounterPage() {
  const { count, decrement, increment, reset, incrementByTwo, multiplySelf } =
    useCounterStore();

  // const user = useUserStore((state) => state.user);

  // if (!user) {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <div>
      <div>count : {count}</div>
      <div onClick={increment}>+</div>
      <div onClick={decrement}>-</div>
      <div onClick={reset}>reset</div>

      {/* // lab */}
      <div onClick={incrementByTwo}>incrementByTwo</div>
      <div onClick={multiplySelf}>multiplySelf</div>
    </div>
  );
}
