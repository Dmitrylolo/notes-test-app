import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  View,
  ListView,
  TouchableOpacity,
  Modal
} from 'react-native';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/NotesScreenStyle';
//Components
import FullButton from '../Components/FullButton';

class NotesScreen extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: 'All Notes'
    };
  };

  constructor(props) {
    super(props);

    const rowHasChanged = (r1, r2) => r1 != r2;
    const ds = new ListView.DataSource({ rowHasChanged });

    this.state = {
      dataSource: ds.cloneWithRows(this.props.notes),
      note: '',
      modal: false
    };
  }

  componentDidMount() {}

  componentWillReceiveProps(newProps) {
    const ds = new ListView.DataSource({ rowHasChanged });
    if (newProps.notes) {
      this.setState({
        dataSource: ds.cloneWithRows(newProps.notes)
      });
    }
  }

  showModal = note => {
    this.setState({ modal: true, note });
  };

  renderModal = () => {
    const { modal, note } = this.state;
    return (
      <Modal
        visible={modal}
        animationType="slide"
        onRequestClose={() => this.setState({ modal: false })}
      >
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalView}>
            <Text style={styles.modalText}>{note}</Text>
            <FullButton
              text="Close modal"
              onPress={() => this.setState({ modal: false })}
            />
          </ScrollView>
        </View>
      </Modal>
    );
  };

  renderRow = note => {
    return (
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ modal: true, note });
          }}
        >
          <Text style={styles.rowText} numberOfLines={1}>
            {note}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ListView
          renderRow={this.renderRow}
          dataSource={this.state.dataSource}
          enableEmptySections
        />
        {this.renderModal()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state->', state.notes.notes);
  return { notes: state.notes.notes };
};

export default connect(mapStateToProps)(NotesScreen);
