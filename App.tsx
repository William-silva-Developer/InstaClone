import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/routes/Routes';






export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='default' />

      <Routes />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    
  },
});
