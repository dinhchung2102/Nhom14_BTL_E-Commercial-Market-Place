import { atom, selector } from "recoil";

export const fetchAPIProduct = selector({
  key: "fetchAPIProduct",
  get: async ({ get }) => {
    try {
      const response = await fetch("http://192.168.29.76:5000/api/products");
      if (!response.ok) {
        throw new Error("Failed to fetch Products");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
});

export const ProductDetail = atom({
  key:"ProductDetail",
  default:[]
})
