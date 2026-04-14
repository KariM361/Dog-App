import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

export function Button() {
  return(
    
    <div className={styles.buttonStyle}>
      <Link to="/DogPark"><button>DogPark</button></Link>
      <Link to="/Temperament"><button>Temperament</button></Link>
       <Link to="/Descriptions"><button>Descriptions</button></Link>
      <Link to="/history"><button>History</button></Link>
    </div>
  )
}