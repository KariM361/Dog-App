//indsæt racer
import { useEffect, useState } from "react"
import styles from './Temperament.module.scss'
import paw from './../../assets/icons/paw.svg'



export function Temperament() {
const [temperament, settemperament] = useState()
 

useEffect(() => {
 async function getData(){
let res = await fetch('https://api.thedogapi.com/v1/breeds/Temperament', {headers:{'x-api-key':'live_SsExewILeD36kbmNARjzR0hHzYE6P8hpBI5QkMMNosIHPVPYi6vWUX2AVXY3QYY6'}})
let data = await res.json()
settemperament(data)

}    
getData()

}, [])

 console.log(temperament)
  return (
    <>
    <header className={styles.headerStyle}>
        <h1>PawGuide</h1>
     <img src={paw} alt="paw" />
     </header>
     <h2>Temperament</h2>
    
     <section className={styles.setionContainer}>
        <article>
            <p></p>
        </article>
     </section>
    
    </>
  )
}