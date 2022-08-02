import React from 'react';
import './App.css';
import Onoff from "./onoff";
import {User} from "./callback/callback";
import {UncontrolRaiteng} from './callback/star'
import {OnOffCon} from "./onOffControl";



function App(props:any) {
    return(
<div>
    <Onoff  />
    <Onoff />
    <Onoff />
    <Onoff />
    <User/>
    <UncontrolRaiteng/>
    <UncontrolRaiteng/>
    <UncontrolRaiteng/>
    <UncontrolRaiteng/>
    <OnOffCon on={true}/>
</div>
    )
}

export default App;
