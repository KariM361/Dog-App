//indsæt racer
import { useEffect, useState } from "react"
import styles from './Breeds.module.scss'
import paw from './../../assets/icons/paw.svg'
import {Input} from '../../components/Input/Input'


export function Breeds() {
const [breeds, setbreeds] = useState()
 

useEffect(() => {
 async function getData(){
let res = await fetch('https://api.thedogapi.com/v1/breeds', {headers:{'x-api-key':'live_SsExewILeD36kbmNARjzR0hHzYE6P8hpBI5QkMMNosIHPVPYi6vWUX2AVXY3QYY6'}})
let data = await res.json()
setbreeds(data)

}    
getData()

}, [])

 console.log(breeds)
  return (
    <>
    <header className={styles.headerStyle}>
        <h1>PawGuide</h1>
     <img src={paw} alt="paw" />
     </header>
     <h2>Racer</h2>
    
    <Input/>
    
     <section className={styles.setionContainer}>
        <article>
            <p>...</p>
        </article>
     </section>
    
    </>
  )
}