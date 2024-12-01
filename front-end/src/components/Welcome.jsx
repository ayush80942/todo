import React, { useState } from 'react';
import { useParams , Link } from 'react-router-dom';
import { retrieveHelloWorldBean, retrieveHelloWorldPathVariable } from '../api/HelloWorldApiServices';

const Welcome = () => {
    
    const { username } = useParams();

    const [message, setMessage] = useState(null);

    function callHelloWorldRestApi() {
        console.log('called')
        // retrieveHelloWorldBean()
        //     .then( (response) => successfulResponse(response) )
        //     .catch( (error) => errorResponse(error))
        //     .finally( () => console.log('clean up'))

        retrieveHelloWorldPathVariable('Ayush')
            .then( (response) => successfulResponse(response) )
            .catch( (error) => errorResponse(error))
            .finally( () => console.log('clean up'))
    }

    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return(
        <div className='py-20 flex flex-col items-center justify-center'>
            <div className='text-xl font-bold'>Welcome {username}!</div>
            <div>
                Manage your todos - <Link to="/todos" className='text-blue-500'>Click here</Link>
            </div>
            <div className='py-4'>
                <button className='px-3 py-1 border rounded bg-green-700 text-white hover:bg-green-800' onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
            </div>
            <div className='mt-8'>
                {message}
            </div>
        </div>
    );
}

export default Welcome;