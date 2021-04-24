import React from 'react';
import {Listener} from 'keypress.js';
import { KeyBoardShortCutContext } from './context';

const listener = new Listener();
export class KeyBoardShortCut extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            resObj: null
        }
    }

    updateComboObj = () =>{
        const { callback, combo, description} = this.props;
        const {updateCombos} = this.context;
        const resObj = listener.simple_combo(combo, callback);
        updateCombos({
            combo: {
                value: combo,
                description,
                comboObj: resObj
            }
        });
        this.setState({
            resObj
        });
    }
     componentDidMount() {
        // register
        this.updateComboObj();
     }

     shouldComponentUpdate(nextProps,nextState){
        if(this.props.combo !== nextProps.combo){
            return true;
        }
        return false;
     }

     componentDidUpdate(){
         this.updateComboObj();
     }

     componentWillUnmount(){
         //un register
         const {removeCombo} = this.context;
         const {resObj} = this.state;
         listener.unregister_combo(resObj);
         removeCombo({comboObj:resObj});
     }

     render() {
         return null;
     }
}

KeyBoardShortCut.contextType = KeyBoardShortCutContext;