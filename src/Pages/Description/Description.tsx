import { useEffect, useState } from "react"
import styles from './Description.module.scss'
import paw from './../../assets/icons/paw.svg'
import house from './../../assets/icons/house.svg'
import { Link } from "react-router-dom"


export function Description() {
const [description, setdescription] = useState()
 

useEffect(() => {
 async function getData(){
let res = await fetch('https://api.thedogapi.com/v1/description', {headers:{'x-api-key':'live_SsExewILeD36kbmNARjzR0hHzYE6P8hpBI5QkMMNosIHPVPYi6vWUX2AVXY3QYY6'}})
let data = await res.json()
setdescription(data)

}    
getData()

}, [])

 console.log(description)
  return (
    <>
    <Link to="/"><img className={styles.houseButton} src={house} alt="house" /></Link>
    <header className={styles.headerStyle}>
        <h1>PawGuide</h1>
     <img src={paw} alt="paw" />
     </header>
     <h2>Description</h2>

      <section className={styles.setionContainer}>
        <article>
            <p></p>
        </article>
     </section>
    
    </>
  )
}