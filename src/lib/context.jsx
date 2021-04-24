import React from 'react';

export const KeyBoardShortCutContext = React.createContext({
    combos: [],
    updateCombos: () => {},
    removeCombo: () => {}
})