import React, {useState} from 'react'
import starAct from '../star.png'
import starNo from '../starNo.jpg'
import s from './star.module.css'
export type RaitengType ={
    selected:boolean
    setValue:()=>void
}
export function UncontrolRaiteng() {
const [value,setValue] = useState(0)

    return (
        <div>
            <Star selected = {value>0} setValue={()=>setValue(1)}/>
            <Star selected = {value>1} setValue={()=>setValue(2)}/>
            <Star selected = {value>2} setValue={()=>setValue(3)}/>
            <Star selected = {value>3} setValue={()=>setValue(4)}/>
            <Star selected = {value>4} setValue={()=>setValue(5)}/>
        </div>
    )

}

function Star(props:RaitengType) {

    return (
        <span
            onClick={()=>{props.setValue()}}>
            <img src={props.selected?starAct:starNo} className={s.star}/>
        </span>
    )
}

export default Star