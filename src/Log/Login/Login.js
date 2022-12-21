import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../UseTitle/useTitle';
import LoadingSpinner from '../../components/LoadingSpinner';

const Login = () => {
    useTitle("Login")
    const { loginHandler, googlePopUpSignin } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const loginEventHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        setError('')
        setSuccess(false)
        setLoader(true)
        loginHandler(email, password)
            .then(result => {
                const user = result.user
                // console.log(user)
                setSuccess(true)
                setLoader(false)
                form.reset()
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message
                // console.error(error);
                setError(errorMessage)
                setLoader(false)
            })
    }
    const googlePopupHandler = () => {
        setError('')
        setSuccess(false)
        // setLoader(true)
        googlePopUpSignin()
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess(true)
                // setLoader(false)
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message
                // console.error(error);
                setError(errorMessage)
                // setLoader(false)
            })
    }
    if (loader) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className="hero  hero-content bg-white-200">
            <div>
                <h1 className="text-3xl text-center font-semibold mb-2">Login now!</h1>
                <form onSubmit={loginEventHandler} className="card flex-shrink-0 w-96  max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                <Link to='/register' className="label-text-alt link link-hover">No Account? Register</Link>
                            </label>
                        </div>
                        <div>
                            <p className='text-red-500'>{error}</p>
                            {
                                success ? <div className='text-green-500'>Succesfully Login</div> : undefined
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Login</button>
                        </div>
                        <div className='text-center mt-5 mb-5'>
                            <p>Or Login via</p>
                            <div className='mt-5'>

                                <button onClick={googlePopupHandler} className="btn btn-wide btn-outline text-red-400"><FaGoogle className=' mr-2' /> Google</button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;