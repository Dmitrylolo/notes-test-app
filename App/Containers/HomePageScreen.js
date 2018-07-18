import React, { Component } from 'react';
import { TextInput, Text, AsyncStorage, View } from 'react-native';
import { connect } from 'react-redux';
import { Field, reset, reduxForm } from 'redux-form';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import NotesActions from '../Redux/NotesRedux';

// Styles
import styles from './Styles/HomePageScreenStyle';
import FullButton from '../Components/FullButton';

class HomePageScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Create Notes'
    };
  };

  onSubmit = note => {
    const { onCreate, clearInput } = this.props;
    onCreate(note);
    clearInput();
  };

  renderInput = ({
    meta: { touched, error },
    input: { onChange, ...restInput }
  }) => {
    console.log('error', error);
    return (
      <View>
        {touched && (error && <Text style={{ color: 'red' }}>{error}</Text>)}
        <TextInput
          onChangeText={onChange}
          style={styles.textInput}
          placeholder="Type note text here..."
          {...restInput}
        />
      </View>
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={[styles.mainContainer, styles.centered]}>
        <View style={styles.inputContainer}>
          <Field name="note" component={this.renderInput} />
          <FullButton
            text="Create note"
            onPress={handleSubmit(this.onSubmit)}
          />
        </View>
        <View style={styles.bottomButtonContainer}>
          <FullButton
            text="View all notes"
            onPress={() => this.props.navigation.navigate('NotesScreen')}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreate: ({ note }) => {
      console.log('note value', note);
      dispatch(NotesActions.createNote(note));
    },
    clearInput: () => {
      dispatch(reset('note'));
    }
  };
};

HomePageScreen = connect(
  null,
  mapDispatchToProps
)(HomePageScreen);

const validate = text => {
  const errors = {};
  if (!text.note) {
    errors.note = 'Require';
  } else if (text.note.trim === '') {
    errors.note = 'Require';
  } else if (text.note.length < 10) {
    errors.note = 'Note must contain more then 10 symbols';
  }
  return errors;
};

export default reduxForm({ form: 'note', validate })(HomePageScreen);
