import {useState} from 'react'
import moment from "moment"
import styled from "styled-components"
const getCalendar = (interval : number)=> {    
    // 0, 1, 2, ... , 52
    const weekOfYear = parseInt(moment().add(interval, 'week').format('W'))
    // 2023
    const year = moment().add(interval, 'week').format('YYYY')
    // January, February, ...
    const month = moment().add(interval, 'week').format('MMMM')

    const sunDate = moment().add(interval, 'week').startOf('week').add(0,'day').format('DD')
    const monDate = moment().add(interval, 'week').startOf('week').add(1,'day').format('DD')
    const tueDate = moment().add(interval, 'week').startOf('week').add(2,'day').format('DD')
    const wedDate = moment().add(interval, 'week').startOf('week').add(3,'day').format('DD')
    const thuDate = moment().add(interval, 'week').startOf('week').add(4,'day').format('DD')
    const friDate = moment().add(interval, 'week').startOf('week').add(5,'day').format('DD')
    const satDate = moment().add(interval, 'week').startOf('week').add(6,'day').format('DD')

    const weekDate = [sunDate, monDate, tueDate, wedDate, thuDate, friDate, satDate]
    return {weekDate, weekOfYear, year, month}
}
const getOrdinal = (n :number) => {
    let ord = 'th';
  
    if (n % 10 == 1)
    {
      ord = 'st';
    }
    else if (n % 10 == 2)
    {
      ord = 'nd';
    }
    else if (n % 10 == 3)
    {
      ord = 'rd';
    }
  
    return ord;
  }

export default function WeeklyCalendar(){
    const [weekInteval, setWeekInterval] = useState(0)
    const {weekDate, weekOfYear, year, month} = getCalendar(weekInteval)
    const ord = getOrdinal(weekOfYear)

    return(
        <Wrapper>
            <div className='calendar-head'>
                <div>
                    <span>{month}</span> <span>{year}</span>
                </div>
                <div>
                    <span><strong>{weekOfYear}</strong>{ord}</span>
                </div>
                <div>
                    <svg
                        onClick={()=>setWeekInterval(prev=>prev-1)} 
                        fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                    </svg>
                    <svg
                        onClick={()=>setWeekInterval(prev=>prev+1)} 
                        fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                    </svg>
                </div>
            </div>
            <div className='week'>
                {
                    days.map((day, index)=><div key={index}>{day}</div>)
                }
                {
                    weekDate.map((date,index)=>{
                        return(<div key={index}>{date}</div>)
                    })
                }
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    padding : 4em;
    .calendar-head{
        display : flex;
        justify-content : space-between;
        svg {
            width : 2em;
        }
    }
    .week{
        display : grid;
        grid-template-columns : repeat(7, 1fr);
    }
`
const days = [
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat" 
]