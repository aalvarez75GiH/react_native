import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper'
import { colors } from '../utils/colors'
import { fontSizes, spacing } from '../utils/sizes'
import { RoundedButton } from '../components/roundedButton'

export const Focus = ({ addSubject }) => {

  const [ subject, setSubject ] = useState(null)

  const handlingSubject = () => {

  }

  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
        onChangeText={ text => {
        setSubject(text)
        console.log(subject)

        }} 
        label='What do you wanna do?'
        />
        <View style={styles.button}>
          <RoundedButton
          onPress={() => addSubject(subject) }
          title='+'
          size={50}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.2,
  },
  inputContainer:{
    padding: spacing.lg,
    justifyContent: 'center',
    flexDirection: 'row'
    // backgroundColor: 'yellow',
    // marginTop: 200
  },
  textInput:{
    flex: 1,
    marginRight: spacing.sm,
    // width: 300,
    // height: 20, 
    backgroundColor: '#ffffff', 
  },
  button:{
    justifyContent: 'center',
  }
})
