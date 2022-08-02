import React, {useState} from "react";

type propstype={
    on:boolean
}
export const OnOffCon = (props:propstype)=>{
    let [on , setOn] = useState<boolean>(false)
    const onStyle ={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on? 'green':'white',
        display: 'inline-block',
        marginLeft: '10px'
    };
    const offStyle ={
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on?'white':'red',
        display: 'inline-block',
        marginLeft: '10px'
    };
    const indicatorStyle ={
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on?'green':'red',
    };
    return (
        <div>
            <div style={onStyle} onChange={()=>setOn(props.on)}>on</div>
            <div style={offStyle} onChange={()=>setOn(props.on)}>off</div>
            <div style={indicatorStyle}> </div>
        </div>
    );
}
