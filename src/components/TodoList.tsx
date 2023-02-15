import { useRecoilValue } from 'recoil';
import { todoState } from '../recoil/atoms/todo';
import styled from 'styled-components';

export default function TodoList(){
    const todos = useRecoilValue(todoState)
    return(
        <Wrapper>
            <h1>Todo List</h1>

            
                {
                    todos.map((todo, index)=> {
                        const {date, title, content, state} = todo
                        let sign
                        if(state === "DONE") sign = "🟢"
                        else if(state === "INPROGRESS") sign='🟠'
                        else sign = "🔴"

                        return(
                            <div className='todo' key={index}>
                                <p className='date'>{date}</p>
                                <h3 className='title'>{title}</h3>
                                <p className='content'>{content}</p>
                                <div className='state'>{sign}</div>
                            </div>
                        )
                    })
                }
            

            <div className='add'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            </div>

        </Wrapper>
    )
}
const Wrapper = styled.div`
    .todo {
        border : 0.1em black solid;
        .date {
            color : var(--color-spark);
        }

    }

    .add {
        display : flex;
        align-items : center;
        justify-content : center;
        border : 0.1em black solid;
        border-radius : 0.5em;
        
        svg {
            width : 2em;
        }
    }
    .add:hover {
        background-color : gray;
    }

`