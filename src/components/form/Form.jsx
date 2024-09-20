import React, { useState } from 'react'
import styles from './Form.module.css'

export const Form = ({title,handleClick}) => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
  return (
    <div className={styles.form}>
        <input
        className={styles.inputForm}
         type='email'
          value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='name@mail.ru'
          />
        <input 
        className={styles.inputForm}
        type='password' 
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='Введите пароль'
        />

        <button
        className={styles.formButton}
        onClick={() => handleClick(email,pass)}>

        {title}
        </button>
    </div>
  )
}
