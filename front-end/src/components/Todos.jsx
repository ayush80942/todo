import React, { useEffect, useState } from 'react';
import { deleteTodoForId, retrieveAllTodosForUsername } from '../api/TodoApiService';
import { useAuth } from '../security/AuthContext';
import { useNavigate } from 'react-router-dom';


const Todos = () => {
    const today = new Date()
    const targetDate =  new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const authContext = useAuth()
    const username = authContext.username
    const navigate = useNavigate()
    
    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    
    useEffect(() => {
        refreshTodos();
    }, []);
    
    function refreshTodos(){   
        retrieveAllTodosForUsername(username)
        .then(response => {
            console.log(response.data)
            setTodos(response.data)
        }
    )
        .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        deleteTodoForId(username, id)
        .then(
            () => {
                setMessage(`Seccessfully deleted todo of id = ${id}`)
                refreshTodos()

        }
    )
        .catch(error => console.log(error))
    }

    function updateTodo(id) {
        console.log('clicked' + id)
        navigate(`/todo/${id}`)
    }
    
    // const todos = [
        //     {
            //         id: 1,
    //         description: 'Learn SpringBoot',
    //         done: false,
    //         targetDate: targetDate
    //     },
    //     {
    //         id: 2,
    //         description: 'Learn AWS',
    //         done: false,
    //         targetDate: targetDate
    //     },
    //     {
    //         id: 3,
    //         description: 'Learn Full Stack Dev',
    //         done: false,
    //         targetDate: targetDate
    //     },
    //     {
    //         id: 4,
    //         description: 'Learn DevOps',
    //         done: false,
    //         targetDate: targetDate
    //     }
    // ]
    return (
        <div className='max-h-screen flex flex-col items-center justify-center py-20'>
            <h1 className='text-2xl font-bold mb-12'>Things You Want To Do!</h1>
            <div className='mb-4 text-orange-500 opacity-60'>{message}</div>
            <table>
                <thead>
                    <tr className='font-bold'>
                        <th className='px-6 py-1 border'>Description</th>
                        <th className='px-6 py-1 border'>Is Done?</th>
                        <th className='px-6 py-1 border'>Target Date</th>
                        <th className='px-6 py-1 border'>Delete</th>
                        <th className='px-6 py-1 border'>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td className='px-6 py-1 border'>{todo.description}</td>
                                    <td className='px-6 py-1 border'>{todo.done.toString()}</td>
                                    <td className='px-6 py-1 border'>{new Date(todo.targetDate).toDateString()}</td>
                                    <td className='px-4 py-1 border'> <button className='px-2 py-0.5 bg-yellow-500 rounded' onClick={() => deleteTodo(todo.id)}> Delete </button> </td>
                                    <td className='px-4 py-1 border'> <button className='px-2 py-0.5 bg-green-500 rounded' onClick={() => updateTodo(todo.id)}> Update </button> </td>
                                </tr>
                            )
                        )
                    }

                </tbody>
            </table>
        </div>
    );
}

export default Todos;