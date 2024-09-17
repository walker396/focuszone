import {SafeAreaView, View, StyleSheet} from 'react-native'
import {TextInput} from 'react-native-paper'
import RoundedButton from '../components/RoundedButton'
import {useState} from 'react'
export default function Focus({setCurrentSubject}) {
  const [subject, setSubject]= useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} label="Type your Subject" onChangeText={setSubject}></TextInput>
        <RoundedButton style={styles.button} title="+" size={50} onPress={()=>setCurrentSubject(subject)}></RoundedButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  inputContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
  },

});