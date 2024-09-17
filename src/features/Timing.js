import React from 'react';
import { View, StyleSheet } from 'react-native';
import  RoundedButton  from '../components/RoundedButton';
export const Timing = ({ setMinutes }) => {
  return (
    <View style={styles.container}>
      <RoundedButton
        style={styles.button}
        title="10"
        size={80}
        onPress={() => setMinutes(10)} />
        <RoundedButton
        style={styles.button}
        title="15"
        size={80}
        onPress={() => setMinutes(15)} />
        <RoundedButton
        style={styles.button}
        title="20"
        size={80}
        onPress={() => setMinutes(20)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    justifyContent: 'center',
  },
});
