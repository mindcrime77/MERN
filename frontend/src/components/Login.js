import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin, clearError } from '../redux/actions/userActions'
import { useHistory, Link } from 'react-router-dom'

import './Logreg.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const { isAuth } = useSelector(state => state.user)
    const err = useSelector(state => state.user.error)



    const reset = () => {
        setError('')
        setEmail('')
        setPassword('')

    }

    useEffect(() => {

        isAuth && history.push('/products')

        setError(err)
        return () => {
            setTimeout(() => {
                dispatch(clearError())
                setEmail('')
                setPassword('')

            }, 2000)
        }

    }, [dispatch, isAuth, err])
    const submit = async (e) => {
        e.preventDefault()
        dispatch(userLogin(email, password))

    }

    return (
        <div className="login">
            <h2 className="active" style={{ color: 'white' }}> log in </h2>
            {error && <div className='alert'>

                <strong>{error}</strong>

            </div>}
            <form onSubmit={submit}>



                <input type="text" className="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => reset()} placeholder='Email:' />

                <br />

                <input type="password" className="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password:' />


                {/* <p style={{ color: 'white' }}>{error ? error : ''}</p> */}
                <button className="signin">
                    Sign In
                </button>

                <Link to='/register'><h2 className='new'>New user</h2></Link>



            </form>

        </div>
    )
}

export default Login
