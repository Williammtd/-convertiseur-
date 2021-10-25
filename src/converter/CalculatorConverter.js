import React from 'react';
import InputConverter from './InputConverter';

const divStyle = {
  textAlign: 'center',
  marginTop: '100px',
};

//taux de change = valeur de 1 dollar en euro
const changeRate = 0.85885;

//fonction de change euro vers dollar
function euroToDollar(euro) {
  return euro / changeRate;
}
//fonction de change dollar vers euro
function dollarToEuro(dollar) {
  return dollar * changeRate;
}

function conversion(value, convert) {
  //transformer la valeur en float car on recoit un string de base et nous on veut pour le traitement avoir un float
  const input = parseFloat(value);
  // vérifie que le contenu de la variable est bien un nombre
  if (Number.isNaN(input)) {
    return '';
  }
  //récupérer la valeur après la conversion arrondi à 2 chiffres après la virgule
  const output = Math.round(convert(input) * 100) / 100;
  //on retourne la valeur finale en string avec la méthode toString()
  return output.toString();
}

class CalculatorConverter extends React.Component {
  constructor(props) {
    super(props);
    //le state ici permettra de garder la valeur taper ainsi que l'input dans lequel elle a été rentrée
    this.state = {
      value: '',
      name: 'e',
    };
  }
  //fonction de changement de valeur lorsqu'on ecrit dans l'input euros
  handleEuroChange(value) {
    this.setState({ name: 'e', value });
  }
  //fonction de changement de valeur lorsqu'on ecrit dans l'input dollar
  handleDollarChange(value) {
    this.setState({ name: 'd', value });
  }

  render() {
    //récupérer les états
    const name = this.state.name;
    const value = this.state.value;

    //stocker les valeurs dans des variables qui seront passé en props au composant
    const euros = name === 'd' ? conversion(value, dollarToEuro) : value; // si le state.name est égale à d on convertis sinon on affiche tel quel
    const dollar = name === 'e' ? conversion(value, euroToDollar) : value; // si le state.name est égale à e on convertis sinon on affiche tel quel

    return (
      <div style={divStyle}>
        <InputConverter
          type="e"
          value={euros}
          onValueChange={(e) => this.handleEuroChange(e)}
        />
        <InputConverter
          type="d"
          value={dollar}
          onValueChange={(e) => this.handleDollarChange(e)}
        />
      </div>
    );
  }
}

export default CalculatorConverter;
