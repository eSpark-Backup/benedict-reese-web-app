import React, { useState } from 'react'
import styles from './ProgressBar.module.scss'

const ProgressBar = ({done, data:{value , color}}) => {
    const [style, setStyle] = useState({});
  
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      }
  
      setStyle(newStyle);
    }, 200)
  
    return (
          <div className={styles.progress}>
              <div className={styles.progressDone} style={style}>
                  {value}%
                  {color}
              </div>
          </div>
      )
  }

export default ProgressBar