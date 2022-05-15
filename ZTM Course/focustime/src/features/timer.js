import React, { useState } from 'react';
import { Text, View, StyleSheet, Vibration, Platform } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper'
import { useKeepAwake } from 'expo-keep-awake'

import { colors } from '../utils/colors'
import { fontSizes, spacing } from '../utils/sizes'
import { Countdown } from '../components/countDown'
import { RoundedButton } from '../components/roundedButton'
import { Timing } from './Timing'


// const DEFAULT_TIME = 0.17;

const ONE_SECOND_IN_MS = 1000;
const DEFAULT_TIME = 0.17;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS
  ];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd  }) => {
  useKeepAwake()
  const [ isStarted, setIsStarted ] = useState(false)
  const [ progress, setProgress ] = useState(1)
  const [ minutes, setMinutes ] = useState(DEFAULT_TIME)

const startingCountDown = () => {
 setIsStarted(!isStarted)
}
  // const vibrate = () => {
  //   if (Platform.OS === 'ios') {
  //     const interval = setInterval(() => Vibration.vibrate(), PATTERN);
  //     setTimeout(() => clearInterval(interval), 10000);
  //   } else {
  //     Vibration.vibrate(PATTERN)
  //   }
  // }

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN)
    setMinutes(DEFAULT_TIME)
    setProgress(1);
    onTimerEnd(focusSubject)
    reset()
    setIsStarted(false);
  };


  return(
    <View style={styles.container} >
      <View style={styles.countdown}>
        <Countdown
        minutes={minutes}
        onProgress={setProgress}
        isPaused = {!isStarted}
        onEnd={onEnd}
        />
        <View style={{paddingTop: spacing.xxl}}>
            <Text style={styles.title}>Focusin on:</Text>
            <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{paddingTop: spacing.sm}}>
        <ProgressBar
        progress={progress}
        style={{ height: spacing.sm }}
        color = {colors.progressBarColor}
        />
      
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={(time) => setMinutes(time)}/>
      </View>
      <View style={styles.buttonWrapper}>
      {
        !isStarted && (
        <RoundedButton
        //  onPress={() => setIsStarted(!isStarted) }
         onPress={startingCountDown}
         title='Start'
         // size={80}
         />
      )}
       
      {  
         isStarted && (
         <RoundedButton
         onPress={() => setIsStarted(!isStarted) }
         title='Stop'
         // size={80}
         />
      )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton 
        size={50} 
        title="-" 
        onPress={clearSubject}
        
        />
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: { 
      flex: 1,
      // backgroundColor:'green'
  },
  countdown:{
    flex: 0.5,
    alignItems: 'center',
    justifyContent:'center',
    // backgroundColor:'yellow'
  },
  timingWrapper:{
    flex: 0.1,
    paddingTop: spacing.xxl,
    flexDirection: 'row'
  },
  buttonWrapper:{
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  title:{
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center'

  },
  task:{
    color: colors.white,
    textAlign: 'center'
  },
  clearSubjectWrapper:{
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
