import errorImage from './error.jpg';
import { ErrorContainer, ErrorText } from './PokemonErrorView.styled';

export default function PokemonErrorView({ message }) {
  return (
    <ErrorContainer role="alert">
      <img src={errorImage} width="340" alt="sadcat" />
      <ErrorText>{message}</ErrorText>
    </ErrorContainer>
  );
}
