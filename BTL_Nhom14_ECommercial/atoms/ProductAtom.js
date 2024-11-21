import { atom, selector } from "recoil";

export const fetchAPIProduct = selector({
  key: "fetchAPIProduct",
  get: async ({ get }) => {
    try {
      const response = await fetch("http://192.168.1.21:5000/api/products");

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
  default:{
    _id:"",
    product_id:"",
    type:"",
    name:"",
    image:"",
    price:"",
    stars:"",
    description:""
  }
})

export const ProductType = atom({
  key:"ProductType",
  default:ProductDetail.type
})
