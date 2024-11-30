import { atom, selector } from "recoil";
import { categoryState } from "./CategoryAtoms";

export const fetchAPIProduct = selector({
  key: "fetchAPIProduct",
  get: async ({ get }) => {
    try {
      const response = await fetch("http://192.168.100.70:5000/api/products");

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

export const ProductFilterByCate = selector({
  key: "ProductFilterByCate",
  get: ({ get }) => {
    const products = get(fetchAPIProduct); 
    const category = get(categoryState);  
    return products.filter((item) => item.category_id === category._id);
  },
});


export const querySearchState = atom({
  key:"querySearchState",
  default:""
})

export const ProductFilterBySearchBar = selector({
  key:"ProductFilterBySearchBar",
  get:({get})=>{
    const  keyWord = get(querySearchState);
    const products = get(fetchAPIProduct);
    return products.filter((item)=> item.name.toLowerCase().includes(keyWord.toLowerCase()))
  }
})