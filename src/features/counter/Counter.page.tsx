import { useCounterStore } from "./counter.store";

export default function CounterPage() {
  const { count, decrement, increment, reset } = useCounterStore();
  return (
    <div>
      <div>count : {count}</div>
      <div onClick={increment}>+</div>
      <div onClick={decrement}>-</div>
      <div onClick={reset}>reset</div>

      {/* // lab */}
      <div>incrementByTwo</div>
      <div>multiplySelf</div>
    </div>
  );
}
