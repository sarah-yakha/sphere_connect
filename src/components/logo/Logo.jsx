import React from 'react'
import styles from './Logo.module.css'

export const Logo = () => {
  return (
    <div className={styles.contain}>
        <div className={styles.logo}></div>
        <h1>Sphere</h1>
    </div>
  )
}
