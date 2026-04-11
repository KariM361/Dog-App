import { useEffect, useState } from "react"
import styles from './Food.module.scss'
import paw from './../../assets/paw.svg'


export function Food() {
const [food, setfood] = useState()
 

useEffect(() => {
 async function getData(){
let res = await fetch('https://api.thedogapi.com/v1/food', {headers:{'x-api-key':'live_SsExewILeD36kbmNARjzR0hHzYE6P8hpBI5QkMMNosIHPVPYi6vWUX2AVXY3QYY6'}})
let data = await res.json()
setfood(data)

}    
getData()

}, [])

 console.log(food)
  return (
    <>
    <header className={styles.headerStyle}>
        <h1>PawGuide</h1>
     <img src={paw} alt="paw" />
     </header>
     <h2>Food</h2>

      <section className={styles.setionContainer}>
        <article>
            <p>... apikald</p>
        </article>
     </section>
    
    </>
  )
}