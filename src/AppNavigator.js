import { createStackNavigator,createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import Home from './screens/Home';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Tab1 from './screens/Tab1';
import Tab2 from './screens/Tab2';
import Tab3 from './screens/Tab3';
  
  const AppTabNavigator = createBottomTabNavigator({
    Tab1: {screen: Tab1},
    Tab2: {screen: Tab2},
    Tab3: {screen: Tab3},
  });

  const AppStackNavigator = createStackNavigator({
  Welcome: Welcome,
  Home: AppTabNavigator,
  Signup: { screen: Signup },
  Login: { screen: Login }
});


const App = createAppContainer(AppStackNavigator);
export default App;