import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Login from './screens/Login';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Signup: { screen: Signup },
  Login: { screen: Login },
});

const App = createAppContainer(AppNavigator);
export default App;