import React, { useState } from 'react'
import styles from './Form.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import App from '../../App'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'


export const Form = ({title,handleClick}) => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [nickname,setNickname] = useState('')
   
    const dispatch = useDispatch()

  return (
    <form className={styles.form}>
     <input
        
        className={styles.inputForm}
         type='text'
          value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder='Никнейм'
            required
          />
    

        <input
        
        className={styles.inputForm}
         type='email'
          value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='name@mail.ru'
            required
          />
        <input 
        
        className={styles.inputForm}
        type='password' 
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='Введите пароль'
        required
        />

        <button
        className={styles.formButton}
        onClick={(e) => {
          e.preventDefault()
            handleClick(email,pass,nickname)
            setEmail('')
            setPass('')
         
           }
            }>
<Link to='/Profile'>
        {title}
</Link>
        </button>
    </form>
  )
}
