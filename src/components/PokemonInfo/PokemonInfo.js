import { Component } from 'react';
import PokemonDataView from '../PokemonDataView/PokemonDataView';
import PokemonErrorView from '../PokemonErrorView/PokemonErrorView';
import PokemonPendingView from '../PokemonPending/PokemonPendingView';
import { IdleTitle } from './PokemonInfo.styled';

// import pokemonAPI from '../services/pokemon-api';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,

    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(respons => {
          if (respons.ok) {
            return respons.json();
          }
          return Promise.reject(
            new Error(`Покемона з імям ${nextName} ще не ловили`),
          );
        })
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { status, pokemon, error } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <IdleTitle>Введіть ім &#39;я покемона</IdleTitle>;
    }

    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
