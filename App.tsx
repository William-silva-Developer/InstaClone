import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes/Routes';






export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='default' />

      <Routes />
      
      </NavigationContainer>
  );
}

