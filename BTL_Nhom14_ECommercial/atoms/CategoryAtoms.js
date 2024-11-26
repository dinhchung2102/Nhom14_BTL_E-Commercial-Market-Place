import {atom, selector} from 'recoil'

export const categorySelector = selector({
    key:"categorySelector",
    get: async({get}) =>{
        try {
            const response = await fetch('http://192.168.1.21:5000/api/categories');
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

export const categoryState = atom({
    key:"categoryState",
    default:{
        _id: "",
        name:"",
        description:"",
        image:""
    }
})