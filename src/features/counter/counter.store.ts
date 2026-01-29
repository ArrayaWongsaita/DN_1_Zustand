import { create, type StateCreator } from "zustand";
import type { DevtoolsOptions } from "zustand/middleware";
import { devtools, persist, type PersistOptions } from "zustand/middleware";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;

  //   lab
  incrementByTwo: () => void;
  multiplySelf: () => void; // count * count
}

const counterStoreCreate: StateCreator<CounterState> = (set, get) => ({
  count: 5,
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
    // วิธีที่ 1
    // const count = get().count;
    // set({ count: count + 2 });
    //// วิธีที่ 2
    // set((state) => ({ count: state.count + 2 })); // state === get()
    // set(({ count }) => ({ count: count + 2 }));
  },
  multiplySelf() {
    // // วิธีที่ 1
    // const count = get().count;
    // set({ count: count * count });
    //// วิธีที่ 2
    set((state) => ({ count: state.count * state.count })); // state === get()
    // set(({ count }) => ({ count: count * count }));
  },
});

// เก็บ data to local storage
const persistOptions: PersistOptions<CounterState> = {
  name: "Counter Store", // ชื่ออะไรก็ได้
};

const devtoolsOptions: DevtoolsOptions = {
  name: "Counter Store devtools", // ชื่ออะไรก็ได้
};

export const useCounterStore = create<CounterState>()(
  devtools(persist(counterStoreCreate, persistOptions), devtoolsOptions),
);
