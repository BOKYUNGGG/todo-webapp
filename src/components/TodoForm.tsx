import {FieldErrors, useForm} from 'react-hook-form'
import { useRecoilValue,useSetRecoilState } from 'recoil'
import { todoState } from '../recoil/atoms/todo'
import styled from 'styled-components'
import { ITodo } from '../recoil/atoms/todo'

export default function TodoForm(){
    const { register, handleSubmit, formState: { errors }, setError } = useForm<ITodo>();
    const setTodo = useSetRecoilState(todoState)
    const todos = useRecoilValue(todoState)
    const onValid = (data : ITodo) => {
        const input = {
            year : parseInt(data.year),
            month : parseInt(data.month),
            date : parseInt(data.date),
            title : data.title,
            content : data.content,
            progress : data.progress,    
            [`${data.key}`] : data.value
        }
        setTodo(prev => [
            input,
            ...prev
        ])
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    const onInVaild =(errors : FieldErrors<ITodo>)=>{
        
    }
    return(
    <div>
        <h1>Todo Form</h1>
        <Form onSubmit={handleSubmit(onValid, onInVaild)}>
            <input 
                {...register('title', {required:true})}
                placeholder='Enter the title'
                type='text'
            />
            <textarea 
                {...register('content', {required:true})}
                placeholder='Enter the content'
            />
            <select {...register('progress')}>
                <option value='Doing'>Doing</option>
                <option value='Done'>Done</option>
            </select>
            <input
                {...register('year', {required:true})}
                type='text'
                placeholder='Year'
            />
            <input
                {...register('month', {required:true})}
                type='text'
                placeholder='Month'
            />
            <input
                {...register('date', {required:true})}
                type='text'
                placeholder='Date'
            />
            <input
                {...register('key', {required:true})}
                type='text'
                placeholder='Key'
            />
            <input
                {...register('value', {required:true})}
                type='text'
                placeholder='Value'
            />
            <input
                type='submit'
                value="추가하기"
            />
        </Form>

    </div>
    )
}
const Form = styled.form`
    display : flex;
    flex-direction : column;
`
