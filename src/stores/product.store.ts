import { create } from "zustand";
import { TProduct, TProductStore } from "../types";

export default create<TProductStore>((set) => ({
  products: [
    {
      id: String(Math.random() * 5),
      name: "",
      price: 0,
      desc: "",
      stock: 0,
    },
  ],
  addProduct: (newProduct: TProduct) => {
    set((state) => ({
      products: [...state.products, newProduct],
    }));
  },
  deleteProduct: (id: string) => {
    set((state) => ({
      products: state.products.filter((item) => item.id !== id),
    }));
  },
}));
