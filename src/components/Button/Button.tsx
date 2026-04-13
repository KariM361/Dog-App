import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

export function Button() {
  return(
    <div className={styles.buttonStyle}>
      <Link to="/DogPark"><button>DogPark</button></Link>
      <Link to="/Health"><button>Health</button></Link>
      <Link to="/Food"><button>Food</button></Link>
      <Link to="/FurCare"><button>FurCare</button></Link>
    </div>
  )
}