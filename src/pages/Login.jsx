import React, { useContext, useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const { user, logIn, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    // const location = useLocation();
    // console.log(location);
    // const from = location.state?.from?.pathname || '/'
    const handleLogin = e => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const result = userCredential.user;
                form.reset();
                // navigate(from, { replace: true })
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage);
            });
    };
    const handleGoogleAuth = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                   // navigate(from, { replace: true })
                   navigate('/')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className='flex justify-center my-20'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <p className='text-2xl font-bold text-center'>Login</p>
                {
                    error && <p className='text-red-700 text-center'>{error}</p>
                }
                <form onSubmit={handleLogin} className="card-body  text-center pt-5">
                    <input type="email" name='email' placeholder="Enter your email" className="input input-bordered input-primary w-full max-w-xs" required/>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" required/>
                    <button className="btn btn-primary">Login</button>
                    <div className="card-actions">
                        <Link to='/register'>Create new account?</Link>
                    </div>
                    <button onClick={handleGoogleAuth} className="btn btn-primary"> Google</button>
                </form>
            </div>
        </div>

    );
};

export default Login;