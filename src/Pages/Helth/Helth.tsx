import { useEffect, useState } from "react"
import styles from './Helth.module.scss'
import paw from './../../assets/paw.svg'


export function Helth() {
const [helth, sethelth] = useState()
 

useEffect(() => {
 async function getData(){
let res = await fetch('https://api.thedogapi.com/v1/health-tips?limit=1&offset=0&breed_id=115&include_sources=true&lang=en', {headers:{'x-api-key':'live_SsExewILeD36kbmNARjzR0hHzYE6P8hpBI5QkMMNosIHPVPYi6vWUX2AVXY3QYY6'}})
let data = await res.json()
sethelth(data)

}    
getData()

}, [])

 console.log(helth)
  return (
    <>
    <header className={styles.headerStyle}>
        <h1>PawGuide</h1>
     <img src={paw} alt="paw" />
     </header>
     <h2>Helth</h2>

        <section className={styles.setionContainer}>
        <article>
            <p>... apikald</p>
        </article>
     </section>
    

    </>
  )
}