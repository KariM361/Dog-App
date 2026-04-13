import style from './Input.module.scss'
import glass from './../../assets/icons/glass.svg'

interface inputProps {
  label: string
  type: string
  name: string
  value?: string

}

export function Input({ label, type, name }: inputProps) {
  return (
    <label className={style.inputStyle}>
      {label}
      <input type={type} name={name} placeholder={`Indtast ${name}`}></input> 
      <img src={glass} alt="glass" />
    </label>
  )
}