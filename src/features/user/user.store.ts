import { create, type StateCreator } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
};

interface UserState {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const userStoreCreator: StateCreator<UserState> = (set) => ({
  // state
  user: null,
  token: null,
  // action
  login(user, token) {
    set({ user: user, token: token });
  },
  logout() {
    set({ user: null, token: null });
  },
});

export const useUserStore = create<UserState>()(userStoreCreator);
