import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner';
import { AuthContext } from '../../Context/UserContext';
import useTitle from '../../UseTitle/useTitle';

const Register = () => {
    useTitle("Register")
    const { registerHandler, updateProfileHandler, setLoading } = useContext(AuthContext);
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()

    const signHandler = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.userName.value
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password, name)
        setSuccess(false)
        setError('')
        setLoader(true)
        registerHandler(email, password)
            .then(result => {
                const user = result.user
                updateProfileHandler(name)
                // console.log(user)
                setSuccess(true)
                navigate('/')
                setLoader(false)
                // ..userContext..
                setLoading(false)
                form.reset()
            })
            .catch(error => {
                const errorMessage = error.message
                setError(errorMessage)
                setLoader(false)
                // console.error(error)
            })
    }
    if (loader) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (

        <div className="hero  hero-content  bg-white-200">
            <div>
                <h1 className="text-3xl text-center font-semibold mb-2">Register now!</h1>
                <form onSubmit={signHandler} className="card flex-shrink-0 w-96  max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='userName' type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
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
                                <Link to='/login' className="label-text-alt link link-hover">Already have an Account? Login</Link>

                            </label>
                        </div>
                        <div>
                            <p className='text-red-500'>{error}</p>
                            {
                                success ? <div className='text-green-500'>Succesfully Register</div> : undefined
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary">Register</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default Register;