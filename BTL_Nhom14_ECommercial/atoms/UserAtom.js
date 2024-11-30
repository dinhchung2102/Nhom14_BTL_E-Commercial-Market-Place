import { atom, selector } from "recoil";
import { categoryState } from "./CategoryAtoms";

export const accountIdState = atom({
    key:"accountIdState",
    default:""
})
export const fetchAccountById = selector({
  key: "fetchAccountById",
  
  get: async ({ get }) => {
    const accountId = get(accountIdState);
    try {
      const response = await fetch(`http://192.168.100.70:5000/api/accounts/${accountId}`);

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