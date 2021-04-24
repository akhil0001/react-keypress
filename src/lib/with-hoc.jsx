import React from 'react';
import { KeyBoardShortCutContext } from './context';

export const withKeyBoardShortCuts = (Component) => ({...props}) => (
    <KeyBoardShortCutContext.Consumer>
        {combos => (<Component shortcuts={combos} {...props} />)}
    </KeyBoardShortCutContext.Consumer>
)