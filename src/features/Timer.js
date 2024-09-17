import React, { useState } from 'react';
import { View, StyleSheet, Vibration, Text } from 'react-native';
import { Countdown } from '../components/CountDown';
import RoundedButton from '../components/RoundedButton';
import { ProgressBar } from 'react-native-paper';
import { spacing, fontSizes } from '../utils/sizes';
import { colors } from '../utils/colors';
import { Timing } from './Timing';
const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject }) => {
  const [isStart, setIsStart] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Countdown
          minutes={minutes}
          isPaused={!isStart}
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(PATTERN);
          }}
        />
      </View>
      <View style={styles.title}>
        <Text style={{fontSize: 20, fontWeight: 600}}>Focusing on:</Text>
        <Text style={{fontSize: 20, fontWeight: 300}}>{focusSubject}</Text>
      </View>
      <View>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={styles.progressBar}
        />
      </View>
      <View style={styles.buttonGroup}>
        {!isStart ? (
          <RoundedButton
            style={styles.button}
            title="start"
            size={100}
            onPress={() => setIsStart(true)}
          />
        ) : (
          <RoundedButton
            style={styles.button}
            title="end"
            size={100}
            onPress={() => {
              setIsStart(false);
              console.log(isStart);
            }}
          />
        )}
      </View>
      <View style={styles.timing}>
        <Timing setMinutes={setMinutes} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 0.2,
    paddingTop: 10,
    justifyContent: 'top',
    alignItems: 'center',
  },
  title: {
    flex: 0.2,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    height: spacing.md,
  },
  timing: {
    flex: 0.4,
  },
  buttonGroup: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
  },
});
