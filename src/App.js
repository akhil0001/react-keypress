import React, {useState} from 'react';
import {KeyBoardShortCut} from './lib'
import './App.css';
import { withKeyBoardShortCuts } from './lib/with-hoc';

const DisplayShortCuts = ({shortcuts}) => {
  return <p>{shortcuts.combos.length}</p>
}

const ListOfShortcuts = withKeyBoardShortCuts(DisplayShortCuts)

function App() {
       const [color, setColor] = useState('black')

const toggleColor = () => {
  setColor((color) => ( color === 'black' ? 'red': 'black'))
}
return (
  <>
    <KeyBoardShortCut
      combo='shift a'
      callback={toggleColor}
      description='Toggles the component A font color from black to red'
    />
    <p style={{'color':color}}>Hello World</p>
    <ListOfShortcuts />
  </>
);
}

export default App;
