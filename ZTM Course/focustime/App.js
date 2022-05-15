import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors'
import { Focus } from './src/features/focus'
import { Timer } from './src/features/timer'
import { FocusHistory } from './src/features/focusHistory'
import { ResetButton } from './src/components/resetButton'


export default function App() {

const [ currentSubject, setCurrentSubject ] = useState(null)
const [ history, setHistory ] = useState([])


console.log('my Subject: ', currentSubject)
  
  const handlingReset = () => {
    setHistory([])
    setCurrentSubject(null)
    console.log('reseting Focus History')
  }

console.log('this is history: ' , history)
  return (
    <SafeAreaView style={styles.container}>
    {
      !currentSubject ? (
        <>
          <Focus addSubject={(subject) => setCurrentSubject(subject)} />
          <FocusHistory history={history} />
          {
            history.length > 0 && (
              <ResetButton
              handlingReset={handlingReset}
              />
            )
          }
          {
            !history.length  && (
                null              
            )
          }
      </>
      ): (
        <Timer 
        focusSubject={currentSubject}
        onTimerEnd={(subject) => {
          setHistory([
            ...history,
            subject
          ])
        }}
        clearSubject={() => setCurrentSubject(null)}
        /> 
      )
    }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
  }
});
