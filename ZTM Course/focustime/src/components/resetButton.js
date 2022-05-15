import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors'

export const ResetButton = ({ handlingReset }) => {
  return(
    <TouchableOpacity 
    onPress={handlingReset}
    style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.text}>Reset</Text>
      </View>  
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent:'center',
    alignItems: 'center',
    // backgroundColor: 'blue'
  },
  button:{
    width: 100,
    height: 50,
    // backgroundColor: 'red',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10
  },
  text:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.white
  }  
})