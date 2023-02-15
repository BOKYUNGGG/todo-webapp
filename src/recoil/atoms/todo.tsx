import { atom } from "recoil";

export interface ITodo extends Tuple{
    year : number,
    month : number,
    date : number,
    title : string,
    content : string,
    progress : string,
}
interface Tuple {
    [key:string] : string | number
}

const persistance = JSON.parse(localStorage.getItem('todos') as any)
export const todoState = atom<ITodo[]>({
    key : "todo",
    default : [{
        year : 2023,
        month : 2,
        date : 15,
        title : "집안일",
        content : "빨래, 청소",
        progress : 'Doing'
    },
...persistance]
})
