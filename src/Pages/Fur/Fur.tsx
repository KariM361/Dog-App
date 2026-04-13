import { useEffect, useState } from "react"
import styles from './Fur.module.scss'
import paw from './../../assets/icons/paw.svg'


export function FurCare() {
const [furCare, setfurCare] = useState()
 

useEffect(() => {
 async function getData(){
let res = await fetch('https://api.thedogapi.com/v1/furCare', {headers:{'x-api-key':'live_SsExewILeD36kbmNARjzR0hHzYE6P8hpBI5QkMMNosIHPVPYi6vWUX2AVXY3QYY6'}})
let data = await res.json()
setfurCare(data)

}    
getData()

}, [])

 console.log(furCare)
  return (
    <>
    <header className={styles.headerStyle}>
        <h1>PawGuide</h1>
     <img src={paw} alt="paw" />
     </header>
     <h2>FurCare</h2>

     <section className={styles.setionContainer}>
        <article>
            <p>... apikald</p>
        </article>
     </section>
    

    </>
  )
}