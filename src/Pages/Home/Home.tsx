import { useEffect, useState } from "react"
import styles from './Home.module.scss'
import pote from './../../assets/pote.svg'
import { Button } from "../../components/Button/Button"



export function Home() {
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
     <img src={pote} alt="pote" />
     </header>

     <input type="search" placeholder="Search" />
      <Button/>
    </>
  )
}