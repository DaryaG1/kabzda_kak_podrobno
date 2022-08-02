import React, { useState } from 'react';
import {ComponentMeta} from '@storybook/react';
import {OnOffCon} from '../onOffControl'


export default {
    title: 'On off',
    component: OnOffCon,
} as ComponentMeta<typeof OnOffCon>;


export const OnMode = () =><OnOffCon on={true}/>;
// export const OffMode =()=><OnoffCon on={false}/>
