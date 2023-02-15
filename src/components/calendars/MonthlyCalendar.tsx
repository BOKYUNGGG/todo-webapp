import { useState } from "react"
import moment from "moment"
import styled from "styled-components"

interface IMonthlyCalendar {
    reservedDate : (number | undefined)[],
    selected : number,
    handleDate : React.Dispatch<React.SetStateAction<{
        year: number;
        month: number;
        date: number;
    }>>
}
export default function MonthlyCalendar(props : IMonthlyCalendar){
    const [monthInterval, setMonthInterval] = useState(0)
    const {lastMonth,thisMonth,nextMonth,month,year} = getCalendar(monthInterval)
    const onClick = (e : any) => {
        const {date} = e.target.dataset
        props.handleDate({date : parseInt(date), month : month, year : year})
    }
    return(
        <Wrapper>
            <div className="calendar-head">
                <p><strong>{months[month-1]}</strong> {year}</p>
                <div>
                    <svg
                        onClick={()=>{
                            setMonthInterval(prev=>prev-1)
                        }} 
                        fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                    </svg>
                    <svg
                        onClick={()=>{
                            setMonthInterval(prev=>prev+1)
                        }} 
                        fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                    </svg>
                </div>
            </div>
            <div className="days">
                {
                    days.map((day, index)=> <div key={index}>{day}</div>)
                }
                {
                    lastMonth.length === 7 ? null :
                    lastMonth.map((date,index) => 
                    <div className="otherMonth" key={index} onClick={()=>{
                        setMonthInterval(prev=>prev-1)
                    }}>{date}</div>)
                }
                {
                    thisMonth.map((date,index) => {
                        let className = 'thisMonth'
                        const isReserved = props.reservedDate.includes(date)
                        if(date === props.selected) className += ' selected'
                        return(<div className={className} key={index} data-date={date} onClick={onClick}><span>{date}</span><span className="dot">{isReserved && "."}</span></div>)
                    }
                )
                }
                {
                    nextMonth.length === 7 ? null :
                    nextMonth.map((date, index) => 
                    <div className="otherMonth" key={index} onClick={()=>{
                        setMonthInterval(prev=>prev+1)
                    }} >{date}</div>)
                }
            </div>
        </Wrapper>
    )
}
/**
 * 
 * @param interval The interval between this month and target month.
 * @returns lastMonth, thisMonth, nextMonth is array of month to make calendar
 */
const getCalendar = (interval : number)=> {
    // 29, 30, 31
    let lastMonth 
    // 1, 2, 3, ..., 28
    let thisMonth 
    // 1, 2, 3, 4
    let nextMonth
    // January
    const month = parseInt(moment().add(interval, 'month').format('MM'))
    // Year
    const year = parseInt(moment().add(interval, 'month').format('YYYY'))

    const 지난달마지막일요일날짜 = parseInt(moment().subtract(-interval+1, 'month').endOf('month').startOf('week').format('DD')) 
    const 지난달마지막날짜 = parseInt(moment().subtract(-interval+1, 'month').endOf('month').format('DD'))
    const 이번달마지막날짜 = parseInt(moment().subtract(-interval, 'month').endOf('month').format('DD'))
    const 다음달첫번째일요일날짜 = parseInt(moment().add(interval+1, 'month').startOf('month').endOf('week').format('DD'))
    
    lastMonth = Array.from({length : 지난달마지막날짜-지난달마지막일요일날짜+1}, (_,i)=> 지난달마지막일요일날짜+i)
    thisMonth = Array.from({length : 이번달마지막날짜}, (_,i)=> i+1)
    nextMonth = Array.from({length : 다음달첫번째일요일날짜}, (_,i)=>i+1)
    return {lastMonth, thisMonth, nextMonth, month, year}
}
const Wrapper = styled.section`
    .calendar-head {
        display : flex;
        justify-content : space-between;
        align-items : center;
        div svg {
            width : 2em;
        }
    }
    .thisMonth {
        display : flex;
        flex-direction : column;
        width : 4em;
        height : 4em;
        border-radius : 0.5em;
        justify-content : start;
        align-items : center;
        &:hover {
            background-color : var(--color-complementary);
        }
        .dot {
            color : var(--color-spark);
        }
    }
    .thisMonth::after{
        content : "";
        width : 80%;
        height : 100%;
        border-bottom : 0.05em solid var(--color-complementary);
    }
    .selected {
        background-color : var(--color-complementary);
    }
    .days {
        display : grid;
        grid-template-columns : repeat(7, 1fr);
        justify-items: center;
        gap : 1em;
    }
    .otherMonth {
        color : var(--color-complementary);
    }
`
const days = [
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat" 
]
const months = [
    'January','February','March','April','May',
    'June','July','August','September','October',
    'November','December',
]