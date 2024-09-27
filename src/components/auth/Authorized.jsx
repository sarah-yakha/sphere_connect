import { AuthCredential, getAuth } from 'firebase/auth'
import React from 'react'
import { Login } from '../form/Login'
import { Routing } from '../../routes'
import { auth } from '../../firebase'
import { SignUp } from '../form/SignUp'

export const Authorized = () => {
  return (
    <div>

   <Login/>
   <SignUp/>
    </div>
  )
}
