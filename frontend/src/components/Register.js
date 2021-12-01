import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, clearError } from '../redux/actions/userActions'
import { msgClear } from '../redux/actions/msgActions'
import { Link } from 'react-router-dom'

import './Logreg.css'

function Register() {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { error } = useSelector(state => state.user)

    const { msgRegisterSuccess, msgRegisterFail } = useSelector(state => state.messagess)

    const [repeat, setRepeat] = useState('')



    useEffect(() => {
        return () => {
            dispatch(msgClear())
            dispatch(clearError())

        }
    }, [dispatch])

    const submit = (e) => {
        e.preventDefault()
        dispatch(registerUser(email, password, repeat))
        setTimeout(() => {
            setRepeat('')
            setEmail('')
            setPassword('')
            dispatch(msgClear())
            dispatch(clearError())
        }, 2000)

    }



    return (
        <div className="login">

            <h2 className="active" style={{ color: 'white' }}> register </h2>
            {msgRegisterSuccess && <div className='alert success'>

                <strong>{msgRegisterSuccess}</strong>

            </div>}
            {error && <div className='alert'>

                <strong>{error}</strong>

            </div>}
            <form onSubmit={submit}>



                <input type="text" className="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />


                <br />

                <input type="password" className="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />

                <br />
                <input type="password" className="text" name="repeat" value={repeat} onChange={(e) => setRepeat(e.target.value)} placeholder='Repeat Password' />


                <button className="signin">
                    Sign Up
                </button>
                <Link className='login_back' to='/' style={{ color: 'white' }}>Back to login page.</Link>
                {/*  {success && <Link to='/' style={{ color: 'white' }}>Already registred?</Link>} */}
                <hr />


            </form>

        </div>
    )
}

export default Register
