import { get } from "@/services/httpService";

export const getPizzaList = async () => {
    return await get('/data/pizza-list.json');
}
export const getPizzaSizeList = async () => {
    return await get('/data/size-list.json');
}
export const getPizzaToppingList = async () => {
    return await get('/data/topping-list.json');
}