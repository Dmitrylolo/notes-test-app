import { StackNavigator } from 'react-navigation';
import HomePageScreen from '../Containers/HomePageScreen';
import NotesScreen from '../Containers/NotesScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    HomePageScreen: { screen: HomePageScreen },
    NotesScreen: { screen: NotesScreen }
  },
  {
    // Default config for all screens
    headerMode: 'screen',
    initialRouteName: 'HomePageScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
