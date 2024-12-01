import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '/Users/ayushaggarwal/Desktop/Spring Boot/todo-app/src/security/AuthContext.jsx'

const Header = () => {

    // const authContext = useContext(AuthContext)
    const authContext = useAuth()
    const Authenticated = authContext.isAuthenticated

    function logout () {
        authContext.logout()
    };

    console.log(authContext)

    return (
        <div>
            <div className='flex items-center justify-between px-20 py-6 shadow-lg'>
                <div className='flex items-center justify-center space-x-8'>
                    <Link to='/' className='text-2xl font-bold'>SpringBoot</Link>
                    {Authenticated && <Link to='/welcome/Ayush'>Home</Link>}
                    {Authenticated && <Link to='/todos'>Todos</Link>}
                </div>
                <div className='space-x-8'>
                    {!Authenticated && <Link to='/login'>Login</Link>}
                    {Authenticated && <Link to='/logout' onClick={logout}>Logout</Link>}
                </div>

            </div>
        </div>
    );
}

export default Header;