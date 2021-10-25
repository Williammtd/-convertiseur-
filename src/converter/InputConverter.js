import React from 'react';
import { TextField } from '@material-ui/core';

const inputStyle = {
  width: '80%',
};
const inputNames = {
  e: 'Euro',
  d: 'Dollar',
};

class InputConverter extends React.Component {
  handleChange(event) {
    //à la place de setState on doit appelé une méthode qui sera donnée en props par CalculatorConverter
    this.props.onValueChange(event.target.value);
  }

  render() {
    //récupérer le type de devise entré : euros ou dollar
    const name = this.props.type;

    //on utilise le props pour la valeur et non plus le state car la valeur sera passé par l'ancetre commun au input
    const value = this.props.value;

    return (
      <>
        <div>
          {/* input de material ui */}
          <TextField
            id="outlined-basic"
            label={inputNames[name]}
            variant="outlined"
            type="number"
            onChange={(e) => this.handleChange(e)}
            value={value}
            style={inputStyle}
          />
        </div>
        <br />
      </>
    );
  }
}

export default InputConverter;
