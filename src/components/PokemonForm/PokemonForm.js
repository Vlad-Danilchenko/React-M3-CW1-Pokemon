import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { FormInput, FormContainer, FormButton } from './PokemonForm.styled';

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      toast.error('Введіть імя покемона');

      return;
    }

    this.props.formSubmit(this.state.pokemonName);
    // this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit} style={styles.form}>
        <FormInput
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <FormButton type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </FormButton>
      </FormContainer>
    );
  }
}
