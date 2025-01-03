import { atom, selector } from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: [], 
});
export const cartQuantity = selector({
  key: 'cartQuantity',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.quantity, 0);  
  },
});

export const selectedProductsState = atom({
  key:"selectedProductsState",
  default:[]
})

export const totalMoneyState = atom({
  key:"totalMoneyState",
  default: 0
})