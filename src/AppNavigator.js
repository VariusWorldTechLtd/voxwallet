import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Welcome from './screens/Welcome';

const AppNavigator = createStackNavigator({

  Welcome: {screen: Welcome},
  Home: { screen: Home },
  Signup: { screen: Signup },
  Login: { screen: Login },
});

const App = createAppContainer(AppNavigator);
export default App;