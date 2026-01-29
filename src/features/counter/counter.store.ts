import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;

  //   lab
  incrementByTwo: () => void;
  multiplySelf: () => void; // count * count
}

export const useCounterStore = create<CounterState>((set, get) => ({
  count: 5,
  //------------ increment ------------
  increment() {
    const count = get().count;
    set({ count: count + 1 });
  },
  decrement() {
    set((state) => ({ count: state.count - 1 }));
  },
  reset() {
    set({ count: 0 });
  },
  incrementByTwo() {
    // + count ที่ ละ 2
  },
  multiplySelf() {},
}));
