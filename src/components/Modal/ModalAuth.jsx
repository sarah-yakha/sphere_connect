import React, { useState } from 'react'
import styles from '../Modal/ModalAuth.module.css'
import { Login } from '../../pages/Login/Login'


export const ModalAuth = ({active,setActive}) => {

  return (
    <div className={active ? 'modal active ': 'modal'} onClick={() => setActive(false)}>
        <div onClick={e => e.stopPropagation()}>
        <Login />
        </div>
    </div>
  )
}
