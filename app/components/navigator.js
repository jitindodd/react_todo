//navigator
import { StackNavigator } from 'react-navigation';
import Main from './main';
import NotePage from './note_page';

const Navigator = StackNavigator({
  Main: { screen: Main, navigationOptions: { title: 'Main' } },
  NotePage: { screen: NotePage, navigationOptions: { title: 'NotePage' } }
});

export default Navigator;
