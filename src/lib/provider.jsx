import React from 'react';
import { KeyBoardShortCutContext } from './context';

export class KeyBoardShortCutProvider extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            combos: []
        }
    }

    updateCombos = ({combo}) => {
        this.setState((state) => ([...state.combos,...combo]))
    }

    removeCombo = ({comboObj}) => {
        const {combos} = this.state;
        const newCombos = combos.filter((el) => el.comboObj !== comboObj);
        this.setState({
            combos: newCombos
        });
    }

    render() {
        const {children} = this.props;
        const {combos} = this.state;
        const {updateCombos,removeCombo} = this;
        return(
            <KeyBoardShortCutContext.Provider value={{combos, updateCombos,removeCombo}}>
                {children}
            </KeyBoardShortCutContext.Provider>
        )
    }
}