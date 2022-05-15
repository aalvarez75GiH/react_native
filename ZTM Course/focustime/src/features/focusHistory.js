import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import { colors } from '../utils/colors'
import { fontSizes, spacing } from '../utils/sizes'
// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

export const FocusHistory = ({ history }) => {
console.log(history)
  if (!history || !history.length) return <Text style={styles.noJobsMessage}>  0 focus jobs saved</Text>
  const renderItem = ({ item }) => {
    return(
      <Text style={styles.item}>- {item}</Text>
    )
  } 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={ history } renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: spacing.md,
    flex: 0.3,
    // backgroundColor: 'green'
  },
  item:{
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm
  },
  title:{
    fontSize: fontSizes.lg,
    color: colors.white,
    fontWeight: 'bold'
  },
  noJobsMessage:{
    fontSize: fontSizes.md,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})