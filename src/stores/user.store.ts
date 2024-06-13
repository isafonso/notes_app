import { create } from "zustand";
import { TUserStore } from "../types";

export default create<TUserStore>((set) => ({
  user: {
    name: "",
    email: "",
  },
  addUser: (newUser) => {
    set((state) => ({
      user: { ...state.user, ...newUser },
    }));
  },
  deleteUser: () => {
    set((state) => ({
      user: {
        name: "",
        email: "",
      },
    }));
  },
}));
