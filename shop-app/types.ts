export type Product = {
  id: string;
  name: string;
  type: {
    name: string;
  };
  storage: number;
};

export type ProductType = {
  id: string
  name: string
}