import {atom, selector} from 'recoil'

export const categorySelector = selector({
    key:"categorySelector",
    get: async({get}) =>{
        try {
            const response = await fetch('http://192.168.100.70:5000/api/categories');
            if(!response.ok){
                throw new Error("Faild to categories")
            }
            const data = await response.json();
            return data
        } catch (error) {
            console.log(error.message)
            return [];
        }
    }
})
