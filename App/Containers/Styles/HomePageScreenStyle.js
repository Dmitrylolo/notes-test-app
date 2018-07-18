import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    flex: 1
  },
  centered: {
    alignItems: 'center'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: Metrics.marginVertical,
    alignSelf: 'stretch'
  },
  bottomButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: Metrics.marginVertical,
    alignSelf: 'stretch'
  },
  textInput: {
    width: 200
  }
});
