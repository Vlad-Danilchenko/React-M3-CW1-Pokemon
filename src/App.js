import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
// import { Toast } from 'react-toastify/dist/components';
import PokemonForm from './components/PokemonForm/PokemonForm';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import { Container } from './App.styled';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  hendleFormSubmit = pokemonName => {
    this.setState({ pokemonName: pokemonName });
  };
  render() {
    return (
      <Container>
        <PokemonForm formSubmit={this.hendleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
