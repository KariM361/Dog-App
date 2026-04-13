import { useEffect, useState } from "react"
import styles from './Home.module.scss'
import paw from './../../assets/icons/paw.svg'
import {Input} from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"
import { Submit } from "../../components/Submit/Submit"




export function Home() {
const [name, setname] = useState()
 

useEffect(() => {
 async function getData(){
let res = await fetch('https://api.thedogapi.com/v1/breeds', {headers:{'x-api-key':'live_SsExewILeD36kbmNARjzR0hHzYE6P8hpBI5QkMMNosIHPVPYi6vWUX2AVXY3QYY6'}})
let data = await res.json()
setname(data)

}    
getData()

}, [])

 console.log(name)
  return (
    <>
    <header className={styles.headerStyle}>
      <h1>PawGuide</h1>
     <img src={paw} alt="paw" />
     </header>

<div className={styles.Container} >
    <Input label=""  type="Search" name="Breeds"></Input>
    <Submit  className={styles.Submit} value="Search"></Submit>
</div>
     
      <Button/>
    </>
  )
}