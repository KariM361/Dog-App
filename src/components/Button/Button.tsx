import styles from './Button.module.scss'


export function Button() {
  return(
  <div className={styles.buttonStyle}>
         <button>Hudeskov</button>
         <button>Helbred</button>
         <button>Foder</button>
         <button>Pels</button>
     </div>

     )
    }