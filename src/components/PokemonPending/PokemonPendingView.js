import { ImSpinner } from 'react-icons/im';
import PokemonDataView from '../PokemonDataView/PokemonDataView';
import pendingImage from './pending.png';
import { PendingTitle, PendinContainer } from './PokemonPendingView.styled';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <PendinContainer role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        <PendingTitle>Загружаем...</PendingTitle>
      </div>
      <PokemonDataView pokemon={pokemon} />
    </PendinContainer>
  );
}
