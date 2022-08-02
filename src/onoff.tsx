import React, {useState} from "react";


function Onoff (){
let [on , setOn] = useState(false)
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
        <div style={onStyle} onClick={()=>{setOn(true)}}>on</div>
        <div style={offStyle} onClick={()=>{setOn(false)}}>off</div>
        <div style={indicatorStyle}> </div>
    </div>
    );
}
export default Onoff;