import {
  DataViewContainer,
  DataViewImg,
  DataViewTitle,
  DataViewList,
  DataViewItem,
} from './PokemonDataView.styled';

export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <DataViewContainer>
      <DataViewImg
        src={sprites.other['official-artwork'].front_default}
        width="180"
        height="60"
        alt={name}
      />
      <DataViewTitle>{name}</DataViewTitle>
      <DataViewList>
        {stats.map(entry => (
          <DataViewItem key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </DataViewItem>
        ))}
      </DataViewList>
    </DataViewContainer>
  );
}
