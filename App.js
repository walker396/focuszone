import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
import {useState} from 'react'

// or any files within the Snack
import Focus from './src/features/Focus'
import {Timer} from './src/features/Timer'
export default function App() {
  const [currentSubject, setCurrentSubject] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? <Focus setCurrentSubject={setCurrentSubject}/> : <Timer focusSubject={currentSubject}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS==='Android' ? StatusBar.currentHeight: 0,
    backgroundColor: 'purple',
  },

});
