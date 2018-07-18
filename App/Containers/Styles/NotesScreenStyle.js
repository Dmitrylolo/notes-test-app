import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    margin: Metrics.baseMargin
  },
  modalContainer: {
    alignSelf: 'center',
    margin: Metrics.baseMargin
  },

  modalText: {
    fontSize: 18
  },
  rowContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  rowText: {
    fontSize: 20,
    lineHeight: 33,
    color: 'black'
  }
});
