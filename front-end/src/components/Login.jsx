import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

const LogIn = () => {
    const [username, setUsername] = useState('in28minutes')
    const [password, setPassword] = useState('')
    const [showFailedMessage, setShowFailedMessage] = useState(false)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const navigate = useNavigate();
    const authContext = useAuth();

    const handleSubmit = () => {
        if(authContext.login(username, password)) {
            navigate(`/welcome/${username}`);
        } else {
            setShowFailedMessage(true);
        }
    }
    
    return (
        <div className='flex flex-col py-20 items-center justify-center'>
            {showFailedMessage && <div>Authentication Failed. Please check credentials!</div>}
            <div>
                <label htmlFor="">User Name </label>
                <input type="text" name="username" className='border m-2 px-2 py-1' value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label htmlFor="">Password </label>
                <input type="password" name="password" className='border m-2 px-2 py-1' value={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <button type="button" name="login" className='border my-2 px-2 py-1' onClick={handleSubmit}> LogIn </button>
            </div>
        </div>
    );
}

export default LogIn;
