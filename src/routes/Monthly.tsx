import {useState} from 'react'
import moment from 'moment';
import MonthlyCalendar from "../components/calendars/MonthlyCalendar";
import { useRecoilValue } from 'recoil';
import { todoState } from '../recoil/atoms/todo';

export default function Monthly(){
    const todos = useRecoilValue(todoState)
    const [selectedDate, setSelectedDate] = useState({
        // 2023
        year : parseInt(moment().format('YYYY')),
        // 02
        month : parseInt(moment().format('D')),
        // 15
        date : parseInt(moment().format('DD'))
    })
    console.log(selectedDate)
    const reservedDate = todos.map((todo) => {
        if(todo.year !== selectedDate.year) return  
        if(todo.month !== selectedDate.month) return 
        return todo.date
    })
    return(
        <div>
            <MonthlyCalendar reservedDate={reservedDate} selected={selectedDate.date} handleDate={setSelectedDate}></MonthlyCalendar>
            {
                todos.map((todo, index)=>{
                    if(todo.year !== selectedDate.year) return null
                    if(todo.month !== selectedDate.month) return null
                    if(todo.date !== selectedDate.date) return null
                    return (
                        <div key={index}>
                            <h3>{todo.title}</h3>
                            <p>{todo.year}/{todo.month}/{todo.date}</p>
                            <p>{todo.progress}</p>
                            <p>{todo.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}