// goggle maps
import { useEffect, useState } from "react"
import styles from './DogParks.module.scss'
import paw from './../../assets/icons/paw.svg'
import { Input } from "../../components/Input/Input"

export function DogParks() {
const [dogParks, setdogParks] = useState()
 

useEffect(() => {
 async function getData(){
let res = await fetch('https://api.thedogapi.com/v1/Dogparks', {headers:{'x-api-key':'live_SsExewILeD36kbmNARjzR0hHzYE6P8hpBI5QkMMNosIHPVPYi6vWUX2AVXY3QYY6'}})
let data = await res.json()
setdogParks(data)

}    
getData()

}, [])

 console.log(dogParks)
  return (
    <>
    <header className={styles.headerStyle}>
        <h1>PawGuide</h1>
     <img src={paw} alt="paw" />
     </header>
     <h2>DogParks</h2>

     <Input/>


    
    
    </>
  )
}