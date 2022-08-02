import React, { useState } from 'react';
import {UncontrolRaiteng} from '../callback/star'
import {ComponentStory, ComponentMeta} from '@storybook/react';

export default {
    title: 'Raiting Star',
    component: UncontrolRaiteng,
} as ComponentMeta<typeof UncontrolRaiteng>;

export const raiting = () => <UncontrolRaiteng/>
