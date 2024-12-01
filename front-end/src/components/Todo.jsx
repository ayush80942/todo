import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { retrieveTodoForId } from '../api/TodoApiService';
import { useAuth } from '../security/AuthContext';

const Todo = () => {

    const { id } = useParams()
    const authContext = useAuth()
    const username = authContext.username

    const [description, setDescription] = useState('')

    useEffect(() => {
        retrieveTodo();
    }, [id]);

    function retrieveTodo() {
        retrieveTodoForId(username, id)
            .then(response => {
                    console.log(response.data)
                    setDescription(response.data.description)
                }
            )
            .catch(error => console.log(error))
    }

    return (
        <div className='max-h-screen flex flex-col items-center justify-center py-20'>
            <h1 className='text-2xl font-bold mb-12'>Enter Todo Details</h1>
            <div>
                description: {description}
            </div>
        </div>
    );
}
 
export default Todo;