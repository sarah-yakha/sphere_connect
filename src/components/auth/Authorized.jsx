import { AuthCredential, getAuth } from 'firebase/auth'
import React from 'react'
import { Login } from '../form/Login'
import { Routing } from '../../routes'
import { auth } from '../../firebase'

export const Authorized = () => {
  return (
    { auth == null ? <Login/> : <Routing />}
  )
}
