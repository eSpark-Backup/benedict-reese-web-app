import React from 'react'
import styles from './StandardCard.module.scss'
const StandardCard = ({children}) => {
  return (
    <div className={styles.card}>
        {children}
    </div>
  )
}

export default StandardCard