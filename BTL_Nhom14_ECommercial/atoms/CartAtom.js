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
