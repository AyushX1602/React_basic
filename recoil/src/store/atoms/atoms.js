import { atom, selector } from 'recoil';

export const countState = atom({
    key: "counter",
    default: 0,
});
export const evenSelector = selector ({
    key : "isEvenSelector",
    get: function ({get}){
        const currentCount = get (countState);
        return currentCount % 2 == 0;
        
    }
});