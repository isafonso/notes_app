export type TRootLayout = {
  children: React.ReactNode;
};

export type TUser = {
  name: string;
  email: string;
};

export type TUserStore = {
  user: TUser;
  addUser: (newUser: TUser) => void;
  deleteUser: () => void;
};

export type TProduct = {
  id: string;
  name: string;
  price: number;
  desc: string;
  stock: number;
};

export type TProductStore = {
  products: Array<TProduct>;
  addProduct: (newProduct: TProduct) => void;
  deleteProduct: (id: string) => void;
};
